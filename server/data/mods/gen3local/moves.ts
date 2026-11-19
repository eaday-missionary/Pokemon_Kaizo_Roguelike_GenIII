export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// FireRed battle_moves.h: Endure shares Detect/Protect's priority.
	endure: { inherit: true, priority: 3 },
	// FireRed's Nature Power script calls the terrain move without an accuracy roll.
	naturepower: { inherit: true, accuracy: true },
	// This penalty is applied to damage after the base calculation in FireRed.
	solarbeam: { inherit: true, onBasePower: undefined },
	// Weather Ball doubles final base damage, not power (the +2 matters).
	weatherball: {
		inherit: true,
		onModifyMove(move, pokemon) {
			move.basePower = 50;
			move.category = ['Normal', 'Rock'].includes(move.type) ? 'Physical' : 'Special';
		},
	},
	charge: { inherit: true, condition: {
		inherit: true, onBasePower: undefined, duration: 2,
		onRestart() { this.effectState.duration = 2; },
	} },
	helpinghand: { inherit: true, condition: { inherit: true, onBasePower: undefined } },
	facade: { inherit: true, onBasePower: undefined },
	pursuit: { inherit: true, basePowerCallback: undefined },
	revenge: { inherit: true, basePowerCallback: undefined },
	smellingsalts: { inherit: true, basePowerCallback: undefined },
	bounce: { inherit: true, condition: { inherit: true, onSourceBasePower: undefined } },
};
