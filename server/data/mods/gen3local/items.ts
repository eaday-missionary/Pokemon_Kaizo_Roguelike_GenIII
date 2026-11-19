export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	brightpowder: {
		inherit: true,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') return Math.floor(accuracy * 90 / 100);
		},
	},
	laxincense: {
		inherit: true,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') return Math.floor(accuracy * 95 / 100);
		},
	},
};
