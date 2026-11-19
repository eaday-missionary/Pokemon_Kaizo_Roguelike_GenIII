'use strict';

const assert = require('node:assert/strict');
const { Battle, Dex } = require('../dist/sim');
const { TeamValidator } = require('../dist/sim/team-validator');

describe('standalone Generation III build', () => {
	before(() => Dex.includeMods());

	it('contains only Generation I-III battle data', () => {
		const dex = Dex.mod('gen3');
		assert.equal(dex.parentMod, 'base');
		assert.equal(dex.species.all().filter(entry => entry.exists).length, 392);
		assert.equal(dex.moves.all().filter(entry => entry.exists).length, 370);
		assert.equal(dex.abilities.all().filter(entry => entry.exists).length, 76);
		assert.equal(dex.items.all().filter(entry => entry.exists).length, 129);
		assert.equal(dex.types.all().filter(entry => entry.exists).length, 17);

		assert.equal(dex.species.get('Garchomp').exists, false);
		assert.equal(dex.moves.get('Close Combat').exists, false);
		assert.equal(dex.abilities.get('Adaptability').exists, false);
		assert.equal(dex.types.get('Fairy').exists, false);
	});

	it('validates a team and runs a battle', () => {
		const format = Dex.formats.get('[Gen 3] Roguelike', true);
		const salamence = {
			species: 'Salamence', ability: 'Intimidate', item: 'Leftovers',
			moves: ['Dragon Claw', 'Earthquake', 'Protect', 'Toxic'],
		};
		assert.equal(new TeamValidator(format).validateTeam([salamence]), null);

		const battle = new Battle({
			format,
			seed: [1, 2, 3, 4],
			p1: { team: [salamence] },
			p2: { team: [{
				species: 'Metagross', ability: 'Clear Body', item: 'Lum Berry',
				moves: ['Meteor Mash', 'Psychic', 'Protect', 'Toxic'],
			}] },
		});
		battle.makeChoices('move 2', 'move 1');
		assert.ok(battle.log.some(line => line.startsWith('|move|')));
	});
});
