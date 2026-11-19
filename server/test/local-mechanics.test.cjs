'use strict';
const assert = require('node:assert/strict');
const { test } = require('node:test');
const { Battle, Dex, TeamValidator } = require('../dist/sim');
const { createBattle, snapshot, advanceBot } = require('../local-battle.cjs');
const { installBag, chooseBag, bagSnapshot, ITEMS } = require('../local-bag.cjs');
const { renderDialogue, starts, ends, activations, prepare } = require('../local-dialogue.cjs');
const text = require('../local-data/firered-text.json');
const dex = Dex.mod('gen3local');
const mon = (extra = {}) => ({ species: 'Mew', ability: 'Synchronize', level: 100, nature: 'Hardy', moves: ['Splash'], ...extra });
function fixture(p1 = {}, p2 = {}) {
	return new Battle({ formatid: 'gen3roguelike', seed: [1, 2, 3, 4], p1: { team: [mon({ gender: 'M', ...p1 }), mon()] }, p2: { team: [mon({ gender: 'F', ...p2 }), mon()] } });
}
function damage(b, move, critical = false) {
	const activeMove = b.dex.getActiveMove(move); activeMove.willCrit = critical;
	return b.actions.getDamage(b.p1.active[0], b.p2.active[0], activeMove, true);
}

test('all National Dex species, including event legendaries, validate and enter battle', () => {
	const validator = new TeamValidator('gen3roguelike');
	let count = 0;
	for (const species of dex.species.all().filter(s => s.exists && !s.forme)) {
		const set = { species: species.name, ability: species.abilities[0], level: 100, nature: 'Hardy', moves: [] };
		const candidates = new Set();
		for (let s = species; s?.exists; s = s.prevo ? dex.species.get(s.prevo) : null) {
			for (const move of Object.keys(dex.data.Learnsets[s.id]?.learnset || {})) candidates.add(move);
		}
		if (species.id === 'smeargle') candidates.add('tackle');
		for (const move of candidates) {
			const candidate = { ...set, moves: [move] };
			if (!validator.validateTeam([candidate])) { set.moves = [move]; break; }
		}
		assert.equal(set.moves.length, 1, species.name);
		const battle = createBattle([set]);
		assert.equal(battle.p1.active[0].species.num, species.num);
		battle.destroy(); count++;
	}
	assert.equal(count, 386);
});

test('all 354 moves, 76 abilities and 129 held items execute without engine errors', () => {
	let moves = 0, abilities = 0, items = 0;
	for (const move of dex.moves.all().filter(m => m.exists && m.num <= 354 && m.id === dex.moves.all().find(n => n.num === m.num).id)) {
		const b = fixture({ moves: [move.name] }, { moves: ['Tackle'] });
		try {
			for (let i = 0; i < 6 && !b.ended; i++) {
				if (b.p1.activeRequest?.forceSwitch || b.p2.activeRequest?.forceSwitch) break;
				b.makeChoices('move 1', 'move 1');
			}
			assert.ok(text.moves[move.num], move.name);
			assert.ok(renderDialogue([`|move|p1a: Mew|${move.name}|p2a: Mew`]).some(e => e.text.includes(text.moves[move.num])), move.name);
			moves++;
		} finally { b.destroy(); }
	}
	for (const ability of dex.abilities.all().filter(a => a.exists)) {
		const b = fixture({ ability: ability.name, moves: ['Tackle'] }, { ability: ability.name, moves: ['Tackle'] });
		try { for (let i = 0; i < 2 && !b.ended; i++) b.makeChoices('move 1', 'move 1'); abilities++; }
		finally { b.destroy(); }
	}
	for (const item of dex.items.all().filter(i => i.exists)) {
		const b = fixture({ item: item.name, moves: ['Tackle'] }, { moves: ['Tackle'] });
		try { b.p1.active[0].hp = Math.floor(b.p1.active[0].maxhp / 4); b.makeChoices('move 1', 'move 1'); items++; }
		finally { b.destroy(); }
	}
	assert.deepEqual([moves, abilities, items], [370, 76, 129]); // Includes 16 Hidden Power aliases.
	assert.equal(new Set(dex.moves.all().map(m => m.num)).size, 354);
});

// Independent transcription of FireRed CalculateBaseDamage for neutral singles.
function expectedDamage(level, power, attack, defense, { burn = false, critical = false, stab = false, weather = 1, effectiveness = 1, roll = 100 } = {}) {
	let base = Math.floor(Math.floor((Math.floor(2 * level / 5) + 2) * power * attack / defense) / 50);
	if (burn) base = Math.floor(base / 2);
	base = Math.floor(base * weather);
	base = Math.max(1, base) + 2;
	if (critical) base *= 2;
	if (stab) base = Math.floor(base * 1.5);
	base = Math.floor(base * effectiveness);
	return Math.max(1, Math.floor(base * roll / 100));
}
test('damage follows FireRed integer formula, burn, critical hits, stat stages and all 16 damage rolls', () => {
	const b = fixture();
	try {
		const source = b.p1.active[0], target = b.p2.active[0];
		for (const moveName of ['Tackle', 'Psychic', 'Shadow Ball', 'Dragon Claw']) {
			const move = dex.moves.get(moveName), physical = move.category === 'Physical';
			for (const stage of [-6, -2, 0, 2, 6]) for (const burned of [false, true]) for (const critical of [false, true]) for (let roll = 85; roll <= 100; roll++) {
				source.boosts.atk = stage; source.boosts.spa = stage; source.status = burned ? 'brn' : '';
				b.randomizer = n => Math.max(1, Math.floor(n * roll / 100));
				const stat = physical ? 'atk' : 'spa';
				const atk = source.calculateStat(stat, critical && stage < 0 ? 0 : stage);
				const def = target.storedStats[physical ? 'def' : 'spd'];
				assert.equal(damage(b, moveName, critical), expectedDamage(source.level, move.basePower, atk, def, {
					burn: burned && physical, critical, stab: source.hasType(move.type), roll,
					effectiveness: 2 ** dex.getEffectiveness(move.type, target.types),
				}), `${moveName} stage=${stage} burn=${burned} crit=${critical} roll=${roll}`);
			}
		}
	} finally { b.destroy(); }
});

test('FireRed accuracy combines and clamps stages, then floors each ability/item multiplier', () => {
	const ratios = [33, 36, 43, 50, 60, 75, 100, 133, 166, 200, 233, 266, 300];
	for (const config of [{}, { own: 'Compound Eyes' }, { own: 'Hustle', other: 'Sand Veil', item: 'Bright Powder' }, { other: 'Sand Veil', item: 'Lax Incense' }]) {
		const b = fixture({ ability: config.own || 'Synchronize' }, { ability: config.other || 'Synchronize', item: config.item });
		try {
			if (config.other) b.field.setWeather('sandstorm', b.p1.active[0]);
			const p = b.p1.active[0], foe = b.p2.active[0];
			for (let acc = -6; acc <= 6; acc++) for (let evade = -6; evade <= 6; evade++) {
				p.boosts.accuracy = acc; foe.boosts.evasion = evade; foe.hp = foe.maxhp;
				let observed;
				b.randomChance = (n, d) => { if (d === 100) { observed = n; return true; } return false; };
				b.actions.tryMoveHit(foe, p, b.dex.getActiveMove('Tackle'));
				let expected = Math.floor(95 * ratios[Math.max(-6, Math.min(6, acc - evade)) + 6] / 100);
				if (config.own === 'Compound Eyes') expected = Math.floor(expected * 130 / 100);
				if (config.other) expected = Math.floor(expected * 80 / 100);
				if (config.own === 'Hustle') expected = Math.floor(expected * 80 / 100);
				if (config.item) expected = Math.floor(expected * (config.item === 'Bright Powder' ? 90 : 95) / 100);
				assert.equal(observed, expected, `${JSON.stringify(config)} accuracy=${acc} evasion=${evade}`);
			}
		} finally { b.destroy(); }
	}
});

test('FireRed held stat modifiers round before stat stages, including species items', () => {
	for (const row of [
		['Mew', 'Synchronize', 'Choice Band', 'Tackle', 1.5],
		['Mew', 'Synchronize', 'Silk Scarf', 'Tackle', 1.1],
		['Mew', 'Synchronize', 'Twisted Spoon', 'Psychic', 1.1],
		['Pikachu', 'Static', 'Light Ball', 'Thunderbolt', 2],
		['Marowak', 'Rock Head', 'Thick Club', 'Earthquake', 2],
		['Clamperl', 'Shell Armor', 'Deep Sea Tooth', 'Surf', 2],
		['Latias', 'Levitate', 'Soul Dew', 'Psychic', 1.5],
	]) {
		const [species, ability, item, moveName, multiplier] = row;
		const b = fixture({ species, ability, item, level: 73 });
		try {
			b.randomizer = n => n;
			const p = b.p1.active[0], foe = b.p2.active[0], move = dex.moves.get(moveName), physical = move.category === 'Physical';
			for (let stage = -6; stage <= 6; stage++) {
				p.boosts[physical ? 'atk' : 'spa'] = stage;
				let atk = Math.floor(p.storedStats[physical ? 'atk' : 'spa'] * multiplier);
				atk = Math.floor(atk * (stage >= 0 ? (2 + stage) / 2 : 2 / (2 - stage)));
				assert.equal(damage(b, moveName), expectedDamage(p.level, move.basePower, atk, foe.storedStats[physical ? 'def' : 'spd'], {
					stab: p.hasType(move.type), effectiveness: 2 ** dex.getEffectiveness(move.type, foe.types),
				}), `${item} stage=${stage}`);
			}
		} finally { b.destroy(); }
	}
});

test('weather, Solar Beam, Flash Fire, Charge and Helping Hand apply at FireRed damage phases', () => {
	for (const name of ['raindance', 'sunnyday', 'sandstorm', 'hail', '']) {
		const b = fixture();
		try {
			b.randomizer = n => n;
			const p = b.p1.active[0], foe = b.p2.active[0];
			if (name) b.field.setWeather(name, p);
			for (const moveName of ['Surf', 'Flamethrower', 'Solar Beam']) {
				const move = dex.moves.get(moveName);
				const multiplier = moveName === 'Solar Beam' && ['raindance', 'sandstorm', 'hail'].includes(name) ? .5 :
					move.type === 'Water' && name === 'raindance' || move.type === 'Fire' && name === 'sunnyday' ? 1.5 :
					move.type === 'Fire' && name === 'raindance' || move.type === 'Water' && name === 'sunnyday' ? .5 : 1;
				assert.equal(damage(b, moveName), expectedDamage(p.level, move.basePower, p.storedStats.spa, foe.storedStats.spd, { weather: multiplier }), `${name} ${moveName}`);
			}
		} finally { b.destroy(); }
	}
	const b = fixture();
	try {
		b.randomizer = n => n;
		const normal = damage(b, 'Thunderbolt');
		b.p1.active[0].addVolatile('charge');
		assert.equal(damage(b, 'Thunderbolt'), normal * 2);
		b.p1.active[0].addVolatile('helpinghand', b.p1.pokemon[1]);
		assert.equal(damage(b, 'Thunderbolt'), Math.floor(normal * 2 * 1.5));
	} finally { b.destroy(); }
});

test('Gen III status damage, paralysis speed, sleep, freeze, confusion and Guts', () => {
	for (const status of ['brn', 'psn', 'tox']) {
		const b = fixture();
		try {
			const p = b.p1.active[0]; p.setStatus(status);
			const hp = p.hp, unit = Math.max(1, Math.floor(p.maxhp / (status === 'tox' ? 16 : 8)));
			b.makeChoices('move 1', 'move 1'); assert.equal(hp - p.hp, unit);
			b.makeChoices('move 1', 'move 1'); assert.equal(hp - p.hp, unit * (status === 'tox' ? 3 : 2));
		} finally { b.destroy(); }
	}
	const b = fixture();
	try {
		const p = b.p1.active[0], speed = p.getStat('spe'); p.setStatus('par');
		assert.equal(p.getStat('spe'), Math.floor(speed / 4)); p.cureStatus();
		p.setStatus('slp'); assert.ok(p.statusState.time >= 2 && p.statusState.time <= 5);
		p.statusState.time = 2; b.makeChoices('move 1', 'move 1'); assert.equal(p.status, 'slp');
		b.makeChoices('move 1', 'move 1'); assert.equal(p.status, '');
		p.setStatus('frz'); b.randomChance = () => false;
		b.makeChoices('move 1', 'move 1'); assert.equal(p.status, 'frz'); assert.ok(b.log.some(l => l.includes('|cant|p1a: Mew|frz')));
		p.cureStatus(); p.addVolatile('confusion'); const hp = p.hp;
		b.makeChoices('move 1', 'move 1'); assert.ok(p.hp < hp); assert.ok(p.volatiles.confusion);
	} finally { b.destroy(); }
	const guts = fixture({ ability: 'Guts' });
	try { guts.randomizer = n => n; const normal = damage(guts, 'Tackle'); guts.p1.active[0].setStatus('brn'); assert.ok(damage(guts, 'Tackle') > normal); }
	finally { guts.destroy(); }
});

test('Leech Seed, Perish Song, weather duration, weather damage and permanent ability weather', () => {
	const seed = fixture();
	try {
		const p = seed.p1.active[0], foe = seed.p2.active[0]; p.hp -= 100;
		foe.addVolatile('leechseed', p, dex.moves.get('leechseed')); const hp = foe.hp, ownHP = p.hp;
		seed.makeChoices('move 1', 'move 1');
		assert.equal(hp - foe.hp, Math.floor(foe.maxhp / 8)); assert.equal(p.hp - ownHP, Math.floor(foe.maxhp / 8));
	} finally { seed.destroy(); }
	const perish = fixture({ moves: ['Perish Song', 'Splash'] });
	try {
		perish.makeChoices('move 1', 'move 1');
		assert.ok(perish.p1.active[0].volatiles.perishsong);
		for (let i = 0; i < 3; i++) perish.makeChoices('move 2', 'move 1');
		assert.equal(perish.p1.pokemon[0].fainted, true); assert.equal(perish.p2.pokemon[0].fainted, true);
	} finally { perish.destroy(); }
	for (const name of ['RainDance', 'SunnyDay', 'Sandstorm', 'Hail']) {
		const b = fixture();
		try {
			const p = b.p1.active[0], hp = p.hp;
			b.field.setWeather(name, p, dex.moves.get(name));
			for (let i = 0; i < 5; i++) b.makeChoices('move 1', 'move 1');
			assert.equal(b.field.weather, '');
			// FireRed expires weather before residual damage on the fifth turn.
			if (['Sandstorm', 'Hail'].includes(name)) assert.equal(hp - p.hp, Math.floor(p.maxhp / 16) * 4);
			else assert.equal(hp, p.hp);
		} finally { b.destroy(); }
	}
	const rain = fixture({ ability: 'Drizzle' });
	try { for (let i = 0; i < 7; i++) rain.makeChoices('move 1', 'move 1'); assert.equal(rain.field.weather, 'raindance'); }
	finally { rain.destroy(); }
});

test('bag items heal, cure, revive, restore PP and boost one stage while using one turn', () => {
	for (const [id, item] of Object.entries(ITEMS)) {
		const b = fixture(); installBag(b);
		try {
			const p = b.p1.active[0];
			let target = p, index = 0;
			if (item.revive) { target = b.p1.pokemon[1]; index = 1; target.fainted = true; target.hp = 0; b.p1.pokemonLeft--; }
			else if (item.status) {
				const status = item.status.includes('all') ? 'brn' : item.status[0];
				if (status === 'confusion' || status === 'attract') target.addVolatile(status, b.p2.active[0]);
				else target.setStatus(status);
			} else if (item.hp) target.hp = 1;
			if (item.pp) target.moveSlots[0].pp = 0;
			const previousHP = target.hp;
			chooseBag(b, id, index); b.choose('p2', 'move 1');
			assert.equal(b.turn, 2, id);
			assert.equal(bagSnapshot(b).find(i => i.id === id).count, item.reusable ? 10 : 9);
			assert.equal(b.log.filter(l => l.startsWith('|move|p1')).length, 0, id);
			if (item.hp && !item.status) assert.equal(target.hp, Math.min(target.maxhp, previousHP + item.hp), id);
			if (item.status) { assert.equal(target.status, '', id); assert.ok(!target.volatiles.confusion && !target.volatiles.attract, id); }
			if (item.revive) { assert.equal(target.fainted, false); assert.equal(target.hp, Math.max(1, Math.floor(target.maxhp * item.revive))); assert.equal(b.p1.pokemonLeft, 2); }
			if (item.pp) assert.equal(target.moveSlots[0].pp, Math.min(target.moveSlots[0].maxpp, item.pp));
			if (item.stat) assert.equal(target.boosts[item.stat], 1);
			if (item.volatile) assert.ok(target.volatiles[item.volatile]);
			if (item.sideCondition) assert.ok(target.side.sideConditions[item.sideCondition]);
		} finally { b.destroy(); }
	}
});

test('held Leftovers, Sitrus, Lum, Choice Band and type based damage split use Gen III effects', () => {
	const leftovers = fixture({ item: 'Leftovers' });
	try { const p = leftovers.p1.active[0]; p.hp = 100; leftovers.makeChoices('move 1', 'move 1'); assert.equal(p.hp, 100 + Math.floor(p.maxhp / 16)); }
	finally { leftovers.destroy(); }
	const sitrus = fixture({ item: 'Sitrus Berry' });
	try { const p = sitrus.p1.active[0]; p.hp = 100; sitrus.makeChoices('move 1', 'move 1'); assert.equal(p.hp, 130); assert.equal(p.item, ''); }
	finally { sitrus.destroy(); }
	const lum = fixture({ item: 'Lum Berry' });
	try { const p = lum.p1.active[0]; p.setStatus('brn'); lum.makeChoices('move 1', 'move 1'); assert.equal(p.status, ''); assert.equal(p.item, ''); }
	finally { lum.destroy(); }
	assert.equal(dex.moves.get('Shadow Ball').category, 'Physical');
	assert.equal(dex.moves.get('Dragon Claw').category, 'Special');
});

test('stat moves apply their Gen III stages and every stat remains bounded from -6 to +6', () => {
	for (const moveName of ['Swords Dance', 'Iron Defense', 'Amnesia', 'Calm Mind', 'Bulk Up', 'Agility', 'Dragon Dance', 'Cosmic Power', 'Tail Glow', 'Double Team', 'Growl', 'Tail Whip', 'Fake Tears', 'Metal Sound', 'Scary Face', 'Sand Attack', 'Sweet Scent', 'Superpower', 'Overheat']) {
		const move = dex.moves.get(moveName), b = fixture({ moves: [moveName] });
		try {
			b.randomChance = (n, d) => d === 100;
			b.makeChoices('move 1', 'move 1');
			const effect = move.selfBoost?.boosts || move.self?.boosts || move.boosts;
			const target = move.selfBoost || move.self || move.target === 'self' ? b.p1.active[0] : b.p2.active[0];
			assert.ok(effect, moveName);
			for (const [stat, stage] of Object.entries(effect)) assert.equal(target.boosts[stat], stage, `${moveName} ${stat}`);
		} finally { b.destroy(); }
	}
	const b = fixture();
	try {
		for (const stat of ['atk', 'def', 'spa', 'spd', 'spe', 'accuracy', 'evasion']) {
			b.boost({ [stat]: 12 }, b.p1.active[0], b.p1.active[0]); assert.equal(b.p1.active[0].boosts[stat], 6);
			b.boost({ [stat]: -24 }, b.p1.active[0], b.p2.active[0]); assert.equal(b.p1.active[0].boosts[stat], -6);
		}
	} finally { b.destroy(); }
	const clear = fixture({}, { ability: 'Clear Body' });
	try { clear.boost({ atk: -1, def: -1 }, clear.p2.active[0], clear.p1.active[0]); assert.equal(clear.p2.active[0].boosts.atk, 0); assert.equal(clear.p2.active[0].boosts.def, 0); }
	finally { clear.destroy(); }
});

test('multihits report actual hit counts and FireRed contact abilities use one-in-three odds', () => {
	for (const [moveName, hits] of [['Double Kick', 2], ['Double Slap', 5], ['Triple Kick', 3]]) {
		const b = fixture({ level: 1, moves: [moveName] });
		try {
			b.sample = list => list.includes(5) ? 5 : list[0];
			b.randomChance = (n, d) => d === 100;
			b.makeChoices('move 1', 'move 1');
			const log = snapshot(b).log;
			assert.ok(log.includes(`|-hitcount|p2a: Mew|${hits}`), moveName);
			assert.equal(log.filter(l => l.startsWith('|-damage|p2')).length, hits, moveName);
			assert.ok(snapshot(b).dialogue.some(e => e.text === `Hit ${hits} time(s)!`));
		} finally { b.destroy(); }
	}
	const b = fixture({ moves: ['Tackle'] }, { ability: 'Flame Body' });
	try {
		let chance;
		b.randomChance = (n, d) => { if (d === 3) chance = [n, d]; return d === 100 || d === 3; };
		b.makeChoices('move 1', 'move 1');
		assert.deepEqual(chance, [1, 3]); assert.equal(b.p1.active[0].status, 'brn');
	} finally { b.destroy(); }
});

test('Poké Flute wakes both parties but respects Soundproof, and bag actions clear recharge and Destiny Bond', () => {
	const b = fixture(); installBag(b);
	try {
		for (const p of b.getAllPokemon()) { p.status = 'slp'; p.statusState = { id: 'slp', time: 3 }; }
		b.p1.pokemon[1].setAbility('Soundproof');
		b.p1.active[0].addVolatile('mustrecharge'); b.p1.active[0].addVolatile('destinybond');
		chooseBag(b, 'pokeflute', 0); b.choose('p2', 'move 1');
		assert.equal(b.p1.pokemon[1].status, 'slp');
		assert.equal(b.p1.active[0].status, ''); assert.equal(b.p2.active[0].status, '');
		assert.equal(b.p2.pokemon[1].status, '');
		assert.ok(!b.p1.active[0].volatiles.mustrecharge && !b.p1.active[0].volatiles.destinybond);
		assert.equal(bagSnapshot(b).find(i => i.id === 'pokeflute').count, 10);
	} finally { b.destroy(); }
});

test('FireRed dialogue maps status, multihits, stats, abilities, Leech Seed and weather', () => {
	for (const table of [starts, ends, activations, prepare]) for (const key of Object.values(table)) assert.ok(text.strings[key], key);
	const dialogue = renderDialogue([
		'|move|p1a: Mew|Bullet Seed|p2a: Mew', '|-hitcount|p2a: Mew|3', '|-status|p2a: Mew|brn',
		'|-damage|p2a: Mew|200/341 brn|[from] brn', '|-boost|p1a: Mew|atk|2',
		'|-start|p2a: Mew|Leech Seed', '|-start|p2a: Mew|perish2',
		'|-weather|RainDance|[from] ability: Drizzle|[of] p2a: Kyogre', '|-weather|RainDance|[upkeep]', '|-weather|none',
	]).map(e => e.text).join('\n');
	for (const expected of ['BULLET SEED!', 'Hit 3 time(s)!', 'was burned!', 'hurt\nby its burn!', 'sharply rose!', 'was seeded!', 'fell to 2!', 'DRIZZLE', 'Rain continues to fall.', 'The rain stopped.']) assert.ok(dialogue.includes(expected), expected);
	assert.doesNotMatch(dialogue, /\{B_|undefined/);
});
