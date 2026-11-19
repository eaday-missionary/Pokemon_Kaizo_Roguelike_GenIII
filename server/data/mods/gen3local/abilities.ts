import { Abilities as FireRedAbilities } from '../gen3frlg/abilities';

export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	...FireRedAbilities,
	compoundeyes: {
		inherit: true,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') return Math.floor(accuracy * 130 / 100);
		},
	},
	sandveil: {
		inherit: true,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number' && this.field.isWeather('sandstorm')) return Math.floor(accuracy * 80 / 100);
		},
	},
	hustle: {
		inherit: true,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (typeof accuracy === 'number' && move.category === 'Physical') return Math.floor(accuracy * 80 / 100);
		},
	},
};
