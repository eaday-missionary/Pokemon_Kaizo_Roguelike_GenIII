'use strict';

// Extracted from FireRed src/data/pokemon/species_info.h (all 386 Gen III species).
const speciesData = require('./local-data/firered-growth.json');
const keys = ['hp', 'atk', 'def', 'spe', 'spa', 'spd'];
function info(p) {
	const id = p.baseSpecies.id;
	const result = speciesData[id] || speciesData[p.baseSpecies.baseSpecies.toLowerCase().replace(/[^a-z0-9]/g, '')];
	if (!result) throw new Error(`Missing Gen III growth data: ${id}`);
	return result;
}
function experience(growth, n) {
	if (n <= 1) return 1;
	const c = n ** 3, f = Math.floor;
	switch (growth) {
	case 'FAST': return f(4 * c / 5);
	case 'SLOW': return f(5 * c / 4);
	case 'MEDIUM_SLOW': return f(6 * c / 5) - 15 * n * n + 100 * n - 140;
	case 'ERRATIC': return n <= 50 ? f((100 - n) * c / 50) : n <= 68 ? f((150 - n) * c / 100) : n <= 98 ? f(f((1911 - 10 * n) / 3) * c / 500) : f((160 - n) * c / 100);
	case 'FLUCTUATING': return n <= 15 ? f((f((n + 1) / 3) + 24) * c / 50) : n <= 36 ? f((n + 14) * c / 50) : f((f(n / 2) + 32) * c / 50);
	case 'MEDIUM_FAST': return c;
	default: throw new Error(`Unknown growth curve: ${growth}`);
	}
}
function totals(p) { return { ...p.baseStoredStats, hp: p.baseMaxhp }; }
function xpProgress(p) {
	const growth = info(p).growth;
	const start = experience(growth, p.level);
	return { current: p.experience - start, needed: p.level < 100 ? experience(growth, p.level + 1) - start : 0 };
}
function installGrowth(battle) {
	const participants = new Map(), rewarded = new Set();
	for (const p of battle.p1.pokemon) p.experience = experience(info(p).growth, p.level);
	function record() {
		for (const foe of battle.p2.active) {
			if (!foe || foe.fainted) continue;
			if (!participants.has(foe)) participants.set(foe, new Set());
			for (const p of battle.p1.active) if (p && p.hp > 0) participants.get(foe).add(p);
		}
	}
	function reward(foe) {
		if (foe.side !== battle.p2 || rewarded.has(foe)) return;
		rewarded.add(foe);
		const sent = [...(participants.get(foe) || [])].filter(p => p.hp > 0);
		const shares = battle.p1.pokemon.filter(p => p.hp > 0 && p.item === 'expshare');
		const base = Math.floor(info(foe).exp * foe.level / 7);
		const part = Math.max(1, Math.floor((shares.length ? Math.floor(base / 2) : base) / (sent.length || 1)));
		const share = shares.length ? Math.max(1, Math.floor(Math.floor(base / 2) / shares.length)) : 0;
		for (const p of new Set([...sent, ...shares])) {
			// FireRed Cmd_getexp skips the entire reward, including EVs, at level 100.
			if (p.level >= 100) continue;
			let gain = (sent.includes(p) ? part : 0) + (shares.includes(p) ? share : 0);
			if (p.item === 'luckyegg') gain = Math.floor(gain * 1.5);
			gain = Math.floor(gain * 1.5); // Trainer battle; locally created Pokemon are not traded.
			battle.add('-message', `${p.name} gained ${gain} XP!`);
			let total = keys.reduce((sum, k) => sum + p.set.evs[k], 0);
			for (const k of keys) {
				const ev = Math.min(info(foe).evs[k] * (p.set.pokerus ? 2 : 1) * (p.item === 'machobrace' ? 2 : 1), 255 - p.set.evs[k], 510 - total);
				p.set.evs[k] += ev; total += ev;
			}
			p.experience = Math.min(experience(info(p).growth, 100), p.experience + gain);
			while (p.level < 100 && p.experience >= experience(info(p).growth, p.level + 1)) {
				const before = totals(p);
				p.set.level = ++p.level;
				const values = battle.spreadModify(p.baseSpecies.baseStats, p.set);
				if (p.baseSpecies.maxHP) values.hp = p.baseSpecies.maxHP;
				p.baseMaxhp = values.hp; p.hp += values.hp - p.maxhp; p.maxhp = values.hp;
				p.baseStoredStats = { ...values };
				if (!p.transformed) {
					const current = battle.spreadModify(p.species.baseStats, p.set);
					for (const k of keys) if (k !== 'hp') p.storedStats[k] = current[k];
				}
				p.speed = p.storedStats.spe;
				p.details = p.getUpdatedDetails();
				battle.add('-message', `${p.name} grew to level ${p.level}!`);
				battle.add('-message', keys.map(k => `${k.toUpperCase()} +${values[k] - before[k]} (${values[k]})`).join(', '));
			}
		}
	}
	// Observe protocol events before victory/request generation, including the final KO.
	const add = battle.add;
	battle.add = function (...args) {
		const result = add.apply(this, args);
		if (args[0] === 'switch' || args[0] === 'drag') record();
		if (args[0] === 'faint') reward(args[1]);
		return result;
	};
	record();
}
module.exports = { installGrowth, experience, totals, xpProgress, speciesData };
