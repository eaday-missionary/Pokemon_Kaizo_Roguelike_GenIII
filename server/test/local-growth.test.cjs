'use strict';
const assert = require('node:assert/strict');
const { test } = require('node:test');
const { createBattle, snapshot, BOT_TEAM } = require('../local-battle.cjs');
const { experience, speciesData } = require('../local-growth.cjs');
const team = (level, extra = {}) => [{ species: 'Mudkip', ability: 'Torrent', moves: ['Surf', 'Tackle'], level, ...extra }];
function defeat(battle) {
	const foe = battle.p2.active[0];
	foe.faint(battle.p1.active[0]);
	battle.resolveFaints();
}
test('all 386 species have original yields and all six growth curves reach Gen III totals', () => {
	assert.equal(Object.keys(speciesData).length, 386);
	assert.deepEqual(['FAST', 'MEDIUM_FAST', 'MEDIUM_SLOW', 'SLOW', 'ERRATIC', 'FLUCTUATING'].map(g => experience(g, 100)), [800000, 1000000, 1059860, 1250000, 600000, 1640000]);
	assert.equal(experience('MEDIUM_SLOW', 5), 135);
	assert.equal(speciesData.swampert.exp, 210);
});
test('level scales real stats and both battlers expose total stats', () => {
	const low = createBattle(team(1)), high = createBattle(team(100));
	try {
		const a = snapshot(low), b = snapshot(high);
		assert.equal(a.player[0].level, 1);
		assert.deepEqual(a.player[0].xpProgress, { current: 0, needed: experience('MEDIUM_SLOW', 2) - 1 });
		assert.deepEqual(b.player[0].xpProgress, { current: 0, needed: 0 });
		assert.equal(a.opponent[0].level, 100);
		for (const k of ['hp', 'atk', 'def', 'spa', 'spd', 'spe']) assert.ok(a.player[0].stats[k] < b.player[0].stats[k]);
		assert.equal(a.opponent[0].stats.hp, a.opponent[0].maxhp);
		assert.equal(a.opponent[0].baseStats, undefined);
		assert.equal(a.player[0].moves[0].category, 'Special');
		assert.equal(a.player[0].moves[1].category, 'Physical');
	} finally { low.destroy(); high.destroy(); }
});
test('final KO grants trainer XP, EVs, multiple levels and stat messages exactly once', () => {
	const b = createBattle(team(5));
	try {
		const p = b.p1.active[0], before = p.maxhp;
		defeat(b);
		assert.equal(b.ended, true);
		assert.equal(p.experience, 135 + 4500);
		assert.deepEqual(snapshot(b).player[0].xpProgress, { current: p.experience - experience('MEDIUM_SLOW', p.level), needed: experience('MEDIUM_SLOW', p.level + 1) - experience('MEDIUM_SLOW', p.level) });
		assert.equal(p.set.evs.atk, 3);
		assert.ok(p.level > 5);
		assert.ok(p.maxhp > before);
		assert.equal(p.hp, p.maxhp);
		assert.equal(p.baseStoredStats.atk, b.spreadModify(p.baseSpecies.baseStats, p.set).atk);
		const log = snapshot(b).dialogue.map(e => e.text).join('\n');
		assert.match(log, /gained 4500 XP/);
		assert.match(log, /grew to level/);
		assert.match(log, /HP \+/);
		b.resolveFaints(); assert.equal(p.experience, 4635);
	} finally { b.destroy(); }
});
test('Macho Brace EVs respect per-stat 255 and total 510 limits', () => {
	const b = createBattle(team(99, { item: 'Macho Brace', evs: { hp: 254, atk: 254 } }));
	try {
		defeat(b);
		assert.equal(b.p1.pokemon[0].set.evs.atk, 255);
		assert.equal(b.p1.pokemon[0].level, 99);
	} finally { b.destroy(); }
});
test('level 100 skips both XP and EV rewards as in FireRed', () => {
	const b = createBattle(team(100, { evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 } }));
	try {
		const p = b.p1.active[0], before = p.experience;
		defeat(b);
		assert.equal(p.experience, before);
		assert.equal(Object.values(p.set.evs).reduce((a, v) => a + v, 0), 0);
		assert.ok(!snapshot(b).dialogue.some(e => /gained.*XP/.test(e.text)));
	} finally { b.destroy(); }
});
test('PP is deducted by the engine and snapshots retain remaining PP', () => {
	const b = createBattle(team(100));
	try {
		const p = b.p1.active[0], pp = p.moveSlots[0].pp;
		// Guarantee survival until Surf executes, independent of critical hits.
		b.p2.active[0].moveSlots = [{ move: 'Splash', id: 'splash', pp: 40, maxpp: 40, target: 'self', disabled: false, used: false }];
		b.choose('p1', 'move 1'); b.choose('p2', 'move 1');
		assert.equal(snapshot(b).player[0].moves[0].pp, pp - 1);
	} finally { b.destroy(); }
});
test('Exp. Share divides XP but awards full EV yield to both recipients', () => {
	const b = createBattle([...team(5), ...team(5)]);
	try {
		b.p1.pokemon[1].item = 'expshare';
		defeat(b);
		for (const p of b.p1.pokemon) {
			assert.equal(p.experience, 135 + 2250);
			assert.equal(p.set.evs.atk, 3);
		}
	} finally { b.destroy(); }
});
test('switched participants share XP and EV gains stop at 510 total', () => {
	const b = createBattle([...team(5, { evs: { hp: 255, def: 254 } }), ...team(5)]);
	try {
		const first = b.p1.active[0], second = b.p1.pokemon[1];
		b.actions.switchIn(second, 0);
		defeat(b);
		assert.equal(first.experience, 135 + 2250);
		assert.equal(second.experience, 135 + 2250);
		assert.equal(first.set.evs.atk, 1);
		assert.equal(Object.values(first.set.evs).reduce((a, v) => a + v, 0), 510);
	} finally { b.destroy(); }
});


