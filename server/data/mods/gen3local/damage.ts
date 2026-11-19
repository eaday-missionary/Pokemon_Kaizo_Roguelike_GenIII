// Integer ordering from FireRed src/pokemon.c:CalculateBaseDamage.
// The shared simulator applies stat stages before held-item modifiers; FireRed
// applies these modifiers to the raw stat first, rounding after each operation.
const TYPE_ITEMS: { [id: string]: string } = {
	silverpowder: 'Bug', blackglasses: 'Dark', dragonfang: 'Dragon', magnet: 'Electric',
	blackbelt: 'Fighting', charcoal: 'Fire', sharpbeak: 'Flying', spelltag: 'Ghost',
	miracleseed: 'Grass', softsand: 'Ground', nevermeltice: 'Ice', silkscarf: 'Normal',
	poisonbarb: 'Poison', twistedspoon: 'Psychic', hardstone: 'Rock', metalcoat: 'Steel', mysticwater: 'Water',
};
function stages(stat: number, stage: number) {
	return Math.floor(stat * (stage >= 0 ? (2 + stage) / 2 : 2 / (2 - stage)));
}
function modifiedStats(source: Pokemon, target: Pokemon, move: ActiveMove) {
	let attack = source.storedStats.atk, defense = target.storedStats.def;
	let spa = source.storedStats.spa, spd = target.storedStats.spd;
	const item = source.getItem().id, otherItem = target.getItem().id;
	const physical = move.category === 'Physical';
	if (source.hasAbility(['hugepower', 'purepower'])) attack *= 2;
	if (TYPE_ITEMS[item] === move.type) {
		if (physical) attack = Math.floor(attack * 110 / 100);
		else spa = Math.floor(spa * 110 / 100);
	}
	if (item === 'choiceband') attack = Math.floor(attack * 150 / 100);
	if (item === 'souldew' && ['Latias', 'Latios'].includes(source.species.name)) spa = Math.floor(spa * 150 / 100);
	if (otherItem === 'souldew' && ['Latias', 'Latios'].includes(target.species.name)) spd = Math.floor(spd * 150 / 100);
	if (item === 'deepseatooth' && source.species.name === 'Clamperl') spa *= 2;
	if (otherItem === 'deepseascale' && target.species.name === 'Clamperl') spd *= 2;
	if (item === 'lightball' && source.species.name === 'Pikachu') spa *= 2;
	if (otherItem === 'metalpowder' && target.species.name === 'Ditto') defense *= 2;
	if (item === 'thickclub' && ['Cubone', 'Marowak'].includes(source.species.name)) attack *= 2;
	if (target.hasAbility('thickfat') && ['Fire', 'Ice'].includes(move.type)) spa = Math.floor(spa / 2);
	if (source.hasAbility('hustle')) attack = Math.floor(attack * 150 / 100);
	if ((source.hasAbility('plus') && source.allies().some(p => p.hasAbility('minus'))) ||
		(source.hasAbility('minus') && source.allies().some(p => p.hasAbility('plus')))) spa = Math.floor(spa * 150 / 100);
	if (source.hasAbility('guts') && source.status) attack = Math.floor(attack * 150 / 100);
	if (target.hasAbility('marvelscale') && target.status) defense = Math.floor(defense * 150 / 100);
	if (['explosion', 'selfdestruct'].includes(move.id)) defense = Math.max(1, Math.floor(defense / 2));
	return { attack: physical ? attack : spa, defense: physical ? defense : spd };
}

export const getDamage: import('../../../sim/battle-actions').BattleActions['getDamage'] = function (source, target, move, suppressMessages = false) {
	if (typeof move === 'string') move = this.dex.getActiveMove(move);
	if (typeof move === 'number') {
		move = { ...this.dex.getActiveMove('struggle'), basePower: move, type: '???', category: 'Physical',
			willCrit: false, recoil: undefined, damage: undefined, hit: 0 };
	}
	if (!target.runImmunity(move, !suppressMessages)) return false;
	if (move.ohko) return target.hp;
	if (move.damageCallback) return move.damageCallback.call(this.battle, source, target);
	if (move.damage === 'level') return source.level;
	if (move.damage) return move.damage;
	let power = move.basePowerCallback ? move.basePowerCallback.call(this.battle, source, target, move) : move.basePower;
	if (!power) return power === 0 ? undefined : power;
	power = this.battle.clampIntRange(power, 1);
	const ratio = this.battle.clampIntRange(this.battle.runEvent('ModifyCritRatio', source, target, move, move.critRatio || 0), 0, 5);
	const hit = target.getMoveHitData(move);
	hit.crit = move.willCrit ?? (ratio > 0 && this.battle.randomChance(1, [0, 16, 8, 4, 3, 2][ratio]));
	if (hit.crit) hit.crit = this.battle.runEvent('CriticalHit', target, null, move);
	power = this.battle.runEvent('BasePower', source, target, move, power, true);
	if (!power) return 0;
	power = Math.max(1, Math.floor(power));
	const physical = move.category === 'Physical';
	let attackStage = source.boosts[physical ? 'atk' : 'spa'];
	let defenseStage = target.boosts[physical ? 'def' : 'spd'];
	if (move.ignoreOffensive || ((move.ignoreNegativeOffensive || hit.crit) && attackStage < 0)) attackStage = 0;
	if (move.ignoreDefensive || ((move.ignorePositiveDefensive || hit.crit) && defenseStage > 0)) defenseStage = 0;
	const stats = modifiedStats(source, target, move);
	const attack = stages(stats.attack, attackStage), defense = Math.max(1, stages(stats.defense, defenseStage));
	const base = Math.floor(Math.floor((Math.floor(2 * source.level / 5) + 2) * power * attack / defense) / 50);
	return this.modifyDamage(base, source, target, move, suppressMessages);
};

export const modifyDamage: import('../../../sim/battle-actions').BattleActions['modifyDamage'] = function (damage, source, target, move, suppressMessages = false) {
	const physical = move.category === 'Physical';
	const weather = source.effectiveWeather();
	if (physical && source.status === 'brn' && !source.hasAbility('guts')) damage = Math.floor(damage / 2);
	const screen = target.side.sideConditions[physical ? 'reflect' : 'lightscreen'];
	const critical = target.getMoveHitData(move).crit;
	if (screen && !critical && !move.ignoreScreens) {
		damage = this.battle.gameType === 'doubles' && target.side.active.filter(p => p && !p.fainted).length === 2 ? 2 * Math.floor(damage / 3) : Math.floor(damage / 2);
	}
	if (move.spreadHit && move.target === 'allAdjacentFoes') damage = Math.floor(damage / 2);
	if (physical) damage = Math.max(1, damage);
	if (!physical) {
		if (weather === 'raindance' && move.type === 'Fire') damage = Math.floor(damage / 2);
		if (weather === 'raindance' && move.type === 'Water') damage = Math.floor(damage * 15 / 10);
		if (['raindance', 'sandstorm', 'hail'].includes(weather) && move.id === 'solarbeam') damage = Math.floor(damage / 2);
		if (weather === 'sunnyday' && move.type === 'Fire') damage = Math.floor(damage * 15 / 10);
		if (weather === 'sunnyday' && move.type === 'Water') damage = Math.floor(damage / 2);
		if (source.volatiles['flashfire'] && move.type === 'Fire') damage = Math.floor(damage * 15 / 10);
	}
	damage += 2;
	if (critical) damage *= 2;
	const doubleDamage =
		(move.id === 'weatherball' && weather) ||
		(move.id === 'facade' && ['brn', 'psn', 'tox', 'par'].includes(source.status)) ||
		(move.id === 'smellingsalts' && target.status === 'par' && !target.volatiles['substitute']) ||
		(move.id === 'pursuit' && (target.beingCalledBack || target.switchFlag)) ||
		(move.id === 'revenge' && source.attackedBy.some(p => p.source === target && p.damage > 0 && p.thisTurn)) ||
		(move.flags['minimize'] && target.volatiles['minimize']) ||
		(['surf', 'whirlpool'].includes(move.id) && target.volatiles['dive']) ||
		(['earthquake', 'magnitude'].includes(move.id) && target.volatiles['dig']) ||
		(['gust', 'twister'].includes(move.id) && (target.volatiles['fly'] || target.volatiles['bounce']));
	if (doubleDamage) damage *= 2;
	if (source.volatiles['charge'] && move.type === 'Electric') damage *= 2;
	if (source.volatiles['helpinghand']) damage = Math.floor(damage * 15 / 10);
	if (move.type !== '???' && source.hasType(move.type)) damage = Math.floor(damage * 15 / 10);
	const typeMod = this.battle.clampIntRange(target.runEffectiveness(move), -6, 6);
	target.getMoveHitData(move).typeMod = typeMod;
	if (typeMod > 0) {
		if (!suppressMessages) this.battle.add('-supereffective', target);
		for (let i = 0; i < typeMod; i++) damage *= 2;
	} else if (typeMod < 0) {
		if (!suppressMessages) this.battle.add('-resisted', target);
		for (let i = 0; i > typeMod; i--) damage = Math.floor(damage / 2);
	}
	if (critical && !suppressMessages) this.battle.add('-crit', target);
	return Math.max(1, Math.floor(this.battle.randomizer(damage)));
};
