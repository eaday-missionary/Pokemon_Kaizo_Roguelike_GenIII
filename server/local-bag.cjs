'use strict';

// FireRed src/data/pokemon/item_effects.h and src/pokemon.c.
// Only items usable during trainer battles belong here; held items remain in Dex.
const ITEMS = {};
const add = (name, effect) => { ITEMS[name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '')] = { name, ...effect }; };
for (const [name, hp] of Object.entries({ Potion: 20, 'Super Potion': 50, 'Hyper Potion': 200, 'Max Potion': Infinity,
	'Fresh Water': 50, 'Soda Pop': 60, Lemonade: 80, 'Moomoo Milk': 100, 'Energy Powder': 50, 'Energy Root': 200,
	'Berry Juice': 20, 'Oran Berry': 10, 'Sitrus Berry': 30 })) add(name, { hp });
for (const [name, status] of Object.entries({ Antidote: ['psn', 'tox'], 'Burn Heal': ['brn'], 'Ice Heal': ['frz'],
	Awakening: ['slp'], 'Paralyze Heal': ['par'], 'Cheri Berry': ['par'], 'Chesto Berry': ['slp'],
	'Pecha Berry': ['psn', 'tox'], 'Rawst Berry': ['brn'], 'Aspear Berry': ['frz'],
	'Full Heal': ['all'], 'Heal Powder': ['all'], 'Lava Cookie': ['all'], 'Lum Berry': ['all'],
	'Persim Berry': ['confusion'], 'Blue Flute': ['slp'], 'Yellow Flute': ['confusion'], 'Red Flute': ['attract'] })) {
	add(name, { status, reusable: name.endsWith('Flute') });
}
add('Full Restore', { hp: Infinity, status: ['all'] });
add('Revive', { revive: .5 }); add('Max Revive', { revive: 1 }); add('Revival Herb', { revive: 1 });
for (const name of ['Ether', 'Max Ether', 'Elixir', 'Max Elixir', 'Leppa Berry']) {
	add(name, { pp: name.startsWith('Max') ? Infinity : 10, oneMove: !name.endsWith('Elixir') });
}
for (const [name, stat] of Object.entries({ 'X Attack': 'atk', 'X Defend': 'def', 'X Speed': 'spe', 'X Accuracy': 'accuracy', 'X Special': 'spa' })) add(name, { stat });
add('Dire Hit', { volatile: 'focusenergy' }); add('Guard Spec.', { sideCondition: 'mist' });
add('Poké Flute', { globalWake: true, reusable: true });
const friendship = { energypowder: [-5, -5, -10], energyroot: [-10, -10, -15], healpowder: [-5, -5, -10], revivalherb: [-15, -15, -20] };
const bags = new WeakMap();
function installBag(battle) {
	const bag = { counts: Object.fromEntries(Object.keys(ITEMS).map(id => [id, 10])), pending: null };
	bags.set(battle, bag);
	battle.onEvent('LocalBag', battle.format, () => {
		const { item, target, move } = bag.pending;
		bag.pending = null;
		applyItem(battle, item, target, move);
		if (!item.reusable) bag.counts[item.id]--;
	});
}
function bagSnapshot(battle) {
	const bag = bags.get(battle);
	if (!bag) return [];
	return Object.entries(ITEMS).map(([id, item]) => ({ id, name: item.name, count: bag.counts[id],
		oneMove: !!item.oneMove, activeOnly: !!(item.stat || item.volatile || item.sideCondition), reusable: !!item.reusable }));
}
function canUse(item, target, move) {
	if (item.globalWake) return true;
	if (item.revive) return target.fainted;
	if (target.fainted) return false;
	if (item.stat) return target.isActive && target.boosts[item.stat] < 6;
	if (item.volatile) return target.isActive && !target.volatiles[item.volatile];
	if (item.sideCondition) return target.isActive && !target.side.sideConditions[item.sideCondition];
	if (item.pp) return (item.oneMove ? [target.moveSlots[move]] : target.moveSlots).some(m => m && m.pp < m.maxpp);
	return (item.hp && target.hp < target.maxhp) || item.status?.some(s => s === 'all' ? !!(target.status || target.volatiles.confusion) : target.status === s || !!target.volatiles[s]);
}
function applyItem(battle, item, target, move) {
	const effect = { id: item.id, name: item.name, effectType: 'Item' };
	const user = battle.p1.active[0];
	for (const id of ['furycutter', 'destinybond', 'grudge', 'mustrecharge']) user.removeVolatile(id);
	battle.add('-bag', target, item.name);
	if (item.globalWake) {
		for (const p of battle.getAllPokemon()) if (p.status === 'slp' && !p.hasAbility('soundproof')) {
			p.cureStatus(true); p.removeVolatile('nightmare');
		}
		battle.add('-flute');
	} else if (item.revive) {
		target.fainted = false; target.faintQueued = false; target.status = ''; target.statusState = {};
		target.hp = Math.max(1, Math.floor(target.maxhp * item.revive));
		target.side.pokemonLeft++;
		battle.add('-heal', target, target.getHealth, '[from] item: ' + item.name);
	} else {
		if (item.status) {
			const wasAsleep = target.status === 'slp';
			if (item.status.includes('all') || item.status.includes(target.status)) target.cureStatus();
			for (const id of ['confusion', 'attract']) if (item.status.includes(id) || (id === 'confusion' && item.status.includes('all'))) target.removeVolatile(id);
			if (wasAsleep && !target.status) target.removeVolatile('nightmare');
		}
		if (item.hp && target.hp < target.maxhp) {
			target.sethp(Math.min(target.maxhp, target.hp + item.hp));
			battle.add('-heal', target, target.getHealth, '[from] item: ' + item.name);
		}
		if (item.pp) {
			for (const slot of item.oneMove ? [target.moveSlots[move]] : target.moveSlots) {
				const index = target.moveSlots.indexOf(slot);
				slot.pp = Math.min(slot.maxpp, slot.pp + item.pp);
				if (!target.transformed && target.baseMoveSlots[index]?.id === slot.id) target.baseMoveSlots[index].pp = slot.pp;
			}
			battle.add('-restorepp', target);
		}
		if (item.stat) {
			// Bag boosts bypass Clear Body/Mist, as in PokemonUseItemEffects.
			target.boosts[item.stat]++;
			battle.add('-boost', target, item.stat, 1, '[from] item: ' + item.name);
		}
		if (item.volatile) target.addVolatile(item.volatile, target, effect);
		if (item.sideCondition) target.side.addSideCondition(item.sideCondition, target, effect);
	}
	const changes = friendship[item.id] || (item.stat || item.volatile || item.sideCondition ? [1, 1, 0] : null);
	if (changes) {
		const amount = changes[target.happiness < 100 ? 0 : target.happiness < 200 ? 1 : 2];
		target.happiness = Math.max(0, Math.min(255, target.happiness + amount));
	}
	// Allow held berries to react immediately after medicine changes HP/status.
	battle.eachEvent('Update');
}
function chooseBag(battle, id, targetIndex, moveIndex = 0) {
	const side = battle.p1;
	const bag = bags.get(battle);
	const entry = ITEMS[id];
	if (battle.ended || side.requestState !== 'move' || side.activeRequest?.forceSwitch) throw new Error('Choose a replacement Pokémon first.');
	if (side.activeRequest?.active?.[0]?.moves.some(m => m.pp === undefined)) throw new Error('Finish the current move or recharge before using an item.');
	if (!entry || !bag.counts[id]) throw new Error('That item is unavailable.');
	if (!Number.isInteger(targetIndex) || !side.pokemon[targetIndex]) throw new Error('Choose a Pokémon.');
	if (!Number.isInteger(moveIndex) || moveIndex < 0 || moveIndex > 3) throw new Error('Choose a move.');
	const target = side.pokemon[targetIndex];
	if (!canUse(entry, target, moveIndex)) throw new Error("It won't have any effect.");
	bag.pending = { item: { id, ...entry }, target, move: moveIndex };
	side.clearChoice();
	// A trainer item consumes the player's action and precedes all attacks.
	side.choice.actions.push({ choice: 'event', event: 'LocalBag', pokemon: side.active[0], order: 103, priority: 0 });
	if (battle.allChoicesDone()) battle.commitChoices();
}
module.exports = { installBag, bagSnapshot, chooseBag, ITEMS };
