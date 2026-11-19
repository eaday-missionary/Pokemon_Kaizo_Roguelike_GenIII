export const Rulesets: import('../sim/dex-formats').FormatDataTable = {
	obtainable: {
		effectType: 'ValidatorRule',
		name: 'Obtainable',
		desc: 'Makes sure the team is legal in Generation III',
		ruleset: ['Obtainable Moves', 'Obtainable Abilities', 'Obtainable Formes', 'EV Limit = Auto', 'Obtainable Misc'],
	},
	obtainablemoves: { effectType: 'ValidatorRule', name: 'Obtainable Moves' },
	obtainableabilities: { effectType: 'ValidatorRule', name: 'Obtainable Abilities' },
	obtainableformes: { effectType: 'ValidatorRule', name: 'Obtainable Formes' },
	obtainablemisc: { effectType: 'ValidatorRule', name: 'Obtainable Misc' },
	evlimit: {
		effectType: 'ValidatorRule',
		name: 'EV Limit',
		desc: 'Maximum total EVs on each Pokemon',
		hasValue: 'integer',
	},
};
