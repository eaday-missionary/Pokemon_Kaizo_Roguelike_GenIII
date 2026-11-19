import { Dex } from '../../../sim/dex';
import { getDamage, modifyDamage } from './damage';

// FireRed battle behavior with the complete Generation III species/learnset pool.
// Cmd_accuracycheck uses integer percentages and the combined accuracy/evasion
// stage, rather than multiplying separate stage fractions.
const ACCURACY_PERCENT = [33, 36, 43, 50, 60, 75, 100, 133, 166, 200, 233, 266, 300];
export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen3',
	actions: {
		inherit: true,
		getDamage,
		modifyDamage,
		tryMoveHit(target, pokemon, move) {
			const parent = Dex.mod('gen3').data.Scripts.actions.tryMoveHit;
			if (typeof move.accuracy !== 'number' || move.ohko) return parent.call(this, target, pokemon, move);
			const accuracy = move.accuracy;
			const ignoreAccuracy = move.ignoreAccuracy, ignoreEvasion = move.ignoreEvasion;
			const ownBoosts = this.battle.runEvent('ModifyBoost', pokemon, null, null, { ...pokemon.boosts });
			const foeBoosts = this.battle.runEvent('ModifyBoost', target, null, null, { ...target.boosts });
			const stage = this.battle.clampIntRange((ignoreAccuracy ? 0 : ownBoosts.accuracy) - (ignoreEvasion ? 0 : foeBoosts.evasion), -6, 6);
			move.accuracy = Math.floor(accuracy * ACCURACY_PERCENT[stage + 6] / 100);
			move.ignoreAccuracy = true; move.ignoreEvasion = true;
			try { return parent.call(this, target, pokemon, move); }
			finally { move.accuracy = accuracy; move.ignoreAccuracy = ignoreAccuracy; move.ignoreEvasion = ignoreEvasion; }
		},
	},
};
