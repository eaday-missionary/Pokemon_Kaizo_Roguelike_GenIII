'use strict';

// Static data audit against an independent pret/pokefirered checkout.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { Dex } = require('../dist/sim');
const reference = path.resolve(process.argv[2]);
const read = file => fs.readFileSync(path.join(reference, file), 'utf8');
const dex = Dex.mod('gen3local');
const ids = Object.fromEntries([...read('include/constants/moves.h').matchAll(/#define MOVE_(\w+)\s+(\d+)/g)].map(m => [m[1], Number(m[2])]));
const moves = new Map();
for (const move of dex.moves.all()) if (!moves.has(move.num)) moves.set(move.num, move);
const differences = [], cases = [];
for (const match of read('src/data/battle_moves.h').matchAll(/\[MOVE_(\w+)\]\s*=\s*\{([^}]+)\}/g)) {
	const num = ids[match[1]];
	if (!num) continue;
	const values = Object.fromEntries([...match[2].matchAll(/\.(\w+)\s*=\s*([^,]+),/g)].map(m => [m[1], m[2].trim()]));
	const move = moves.get(num);
	assert.ok(move, match[1]);
	const expected = { pp: Number(values.pp), accuracy: Number(values.accuracy) || true, priority: Number(values.priority), type: values.type.slice(5).toLowerCase() };
	if (expected.type === 'mystery') expected.type = '???';
	// These FireRed scripts bypass the table's accuracy value (NO_ACC_CALC,
	// self/party moves, called moves, or EFFECT_VITAL_THROW).
	if (move.accuracy === true && expected.accuracy === 100) expected.accuracy = true;
	// A power of 1 is FireRed's sentinel for calculated/fixed damage.
	if (Number(values.power) > 1 && !move.basePowerCallback) expected.basePower = Number(values.power);
	for (const [field, value] of Object.entries(expected)) {
		if (String(move[field]).toLowerCase() !== String(value).toLowerCase()) differences.push({ move: move.name, field, actual: move[field], expected: value });
	}
	cases.push({ num, name: move.name, ...expected });
}
let speciesCount = 0;
const statNames = { baseHP: 'hp', baseAttack: 'atk', baseDefense: 'def', baseSpAttack: 'spa', baseSpDefense: 'spd', baseSpeed: 'spe' };
for (const match of read('src/data/pokemon/species_info.h').matchAll(/\[SPECIES_(\w+)\]\s*=\s*\{\r?\n([\s\S]*?)\n\s*\},/g)) {
	const species = dex.species.get(match[1].replaceAll('_', ''));
	if (!species.exists) continue;
	for (const [source, stat] of Object.entries(statNames)) {
		const expected = Number(new RegExp(`\\.${source}\\s*=\\s*(\\d+)`).exec(match[2])?.[1]);
		if (!expected) continue;
		if (species.baseStats[stat] !== expected) differences.push({ species: species.name, field: stat, actual: species.baseStats[stat], expected });
	}
	speciesCount++;
}
assert.equal(cases.length, 354);
const report = { reference: 'https://github.com/pret/pokefirered', movesChecked: cases.length, speciesChecked: speciesCount, differences };
fs.writeFileSync(path.resolve(__dirname, '../local-data/firered-audit.json'), JSON.stringify(report, null, '\t') + '\n');
console.log(JSON.stringify(report, null, 2));
process.exitCode = differences.length ? 1 : 0;
