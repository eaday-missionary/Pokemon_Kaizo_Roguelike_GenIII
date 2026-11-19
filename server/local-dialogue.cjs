'use strict';

// Protocol presentation only. Mechanics and random rolls remain in the simulator.
const { strings, moves, abilities, items } = require('./local-data/firered-text.json');
const { Dex } = require('./dist/sim');
const dex = Dex.mod('gen3');
const id = value => String(value || '').replace(/^(move|ability|item): /, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const upper = value => String(value || '').toUpperCase();
const moveName = value => moves[dex.moves.get(value).num] || upper(value);
const abilityName = value => abilities[id(value)] || upper(value);
const itemName = value => items[id(value)] || upper(value);
const statNames = { atk: 'ATTACK', def: 'DEFENSE', spa: 'SP. ATK', spd: 'SP. DEF', spe: 'SPEED', accuracy: 'accuracy', evasion: 'evasiveness' };
const starts = {
	confusion: 'PkmnWasConfused', leechseed: 'PkmnSeeded', substitute: 'PkmnMadeSubstitute',
	nightmare: 'PkmnFellIntoNightmare', curse: 'PkmnLaidCurse', disable: 'PkmnMoveWasDisabled',
	encore: 'PkmnGotEncore', torment: 'PkmnSubjectedToTorment', taunt: 'PkmnFellForTaunt',
	ingrain: 'PkmnPlantedRoots', yawn: 'PkmnWasMadeDrowsy', focusenergy: 'GetPumped',
	imprison: 'PkmnSealedOpponentMove', grudge: 'PkmnWantsGrudge', bide: 'PkmnStoringEnergy',
	attract: 'PkmnFellInLove', destinybond: 'PkmnTryingToTakeFoe', charge: 'PkmnChargingPower',
	uproar: 'PkmnCausedUproar', foresight: 'PkmnIdentified', odorsleuth: 'PkmnIdentified',
	flashfire: 'PkmnRaisedFirePowerWith', followme: 'PkmnCenterAttention',
	stockpile1: 'PkmnStockpiled', stockpile2: 'PkmnStockpiled', stockpile3: 'PkmnStockpiled',
	perish3: 'PkmnPerishCountFell', perish2: 'PkmnPerishCountFell', perish1: 'PkmnPerishCountFell', perish0: 'PkmnPerishCountFell',
	reflect: 'PkmnRaisedDef', lightscreen: 'PkmnRaisedSpDef', safeguard: 'PkmnCoveredByVeil',
	mist: 'MistShroud', spikes: 'SpikesScattered', mudsport: 'ElectricityWeakened', watersport: 'FireWeakened',
	futuresight: 'PkmnForesawAttack', doomdesire: 'PkmnChoseXAsDestiny', rage: 'PkmnRageBuilding',
	snatch: 'PkmnWaitsForTarget', magiccoat: 'PkmnShroudedItself', helpinghand: 'PkmnReadyToHelp',
};
const ends = {
	confusion: 'PkmnHealedConfusion', substitute: 'PkmnSubstituteFaded', disable: 'PkmnMoveDisabledNoMore',
	encore: 'PkmnEncoreEnded', uproar: 'PkmnCalmedDown',
	partiallytrapped: 'PkmnFreedFrom', safeguard: 'PkmnSafeguardExpired',
	reflect: 'TeamStoppedWorking', lightscreen: 'TeamStoppedWorking', mist: 'PkmnsXWoreOff',
	leechseed: 'PkmnShedLeechSeed', bide: 'PkmnUnleashedEnergy',
};
const activations = {
	confusion: 'PkmnIsConfused', protect: 'PkmnProtectedItself', detect: 'PkmnProtectedItself',
	endure: 'PkmnEnduredHit', substitute: 'SubstituteDamaged', attract: 'PkmnInLove',
	bide: 'PkmnStoringEnergy', ingrain: 'PkmnAnchoredItself', destinybond: 'PkmnTookFoe',
	grudge: 'PkmnLostPPGrudge', snatch: 'PkmnSnatchedMove', magiccoat: 'PkmnMoveBounced',
	bind: 'PkmnSqueezedByBind', wrap: 'PkmnWrappedBy', clamp: 'PkmnClamped',
	firespin: 'PkmnTrappedInVortex', whirlpool: 'PkmnTrappedInVortex', sandtomb: 'PkmnTrappedBySandTomb',
	trapped: 'TargetCantEscapeNow', block: 'TargetCantEscapeNow', meanlook: 'TargetCantEscapeNow', spiderweb: 'TargetCantEscapeNow',
	spite: 'PkmnReducedPP', magnitude: 'MagnitudeStrength',
	healbell: 'BellChimed', aromatherapy: 'SoothingAroma', lockon: 'PkmnTookAim', mindreader: 'PkmnTookAim',
	mimic: 'PkmnLearnedMove2', sketch: 'PkmnSketchedMove', trick: 'PkmnSwitchedItems',
	roleplay: 'PkmnCopiedFoe', skillswap: 'PkmnSwappedAbilities', mist: 'PkmnProtectedByMist', safeguard: 'PkmnUsedSafeguard',
};
const prepare = { fly: 'PkmnFlewHigh', dig: 'PkmnDugHole', dive: 'PkmnHidUnderwater',
	solarbeam: 'PkmnTookSunlight', skullbash: 'PkmnLoweredHead', skyattack: 'PkmnIsGlowing', razorwind: 'PkmnWhippedWhirlwind', bounce: 'PkmnSprangUp' };
const weather = { RainDance: ['StartedToRain', 'RainContinues', 'RainStopped'], SunnyDay: ['SunlightGotBright', 'SunlightStrong', 'SunlightFaded'],
	Sandstorm: ['SandstormBrewed', 'SandstormRages', 'SandstormSubsided'], Hail: ['StartedHail', 'HailContinues', 'HailStopped'] };
function renderDialogue(log) {
	const output = [];
	let attacker = '', defender = '', currentMove = '', lastWeather = '';
	const knownAbilities = {}, activeNames = {};
	const hp = {}, consumedItems = {}, trappingMoves = {};
	function name(actor, prefix = true) {
		const plain = upper(String(actor || '').replace(/^p[12][a-z]?: /, ''));
		return `${prefix && String(actor).startsWith('p2') ? 'Foe ' : ''}${plain}`;
	}
	for (const [lineIndex, line] of log.entries()) {
		const [, command, actor = '', value = '', amount = '', ...tags] = line.split('|');
		const all = [value, amount, ...tags];
		const from = all.find(s => s.startsWith('[from] '))?.slice(7) || '';
		const owner = all.find(s => s.startsWith('[of] '))?.slice(5) || actor;
		if (all.includes('[silent]')) continue;
		if (from.startsWith('ability: ')) knownAbilities[owner.slice(0, 2)] = from.slice(9);
		let ability = from.startsWith('ability: ') ? from.slice(9) : knownAbilities[actor.slice(0, 2)] || '';
		let buff1 = amount || value, buff2 = '', item = from.startsWith('item: ') ? from.slice(6) : '';
		let atk = actor, def = actor, source = owner;
		let key = '', direct = '', restoredHP = '';
		switch (command) {
		case 'move':
			attacker = actor; defender = amount; currentMove = moveName(value);
			key = id(from) === 'naturepower' ? 'NaturePowerTurnedInto' : 'AttackerUsedX'; buff2 = currentMove + '!'; break;
		case 'switch': case 'drag': {
			const previous = activeNames[actor.slice(0, 2)];
			if (previous && previous !== actor && command === 'switch') output.push({ line: lineIndex, text: actor.startsWith('p1') ? `${name(previous, false)}, come back!` : `Trainer AI withdrew\n${name(previous, false)}!` });
			activeNames[actor.slice(0, 2)] = actor;
			hp[actor] = Number(amount.split('/')[0]);
			buff1 = name(actor, false);
			key = command === 'drag' ? 'PkmnWasDraggedOut' : actor.startsWith('p1') ? 'GoPkmn2' : 'LinkTrainerSentOutPkmn2'; break;
		}
		case 'faint': key = 'AttackerFainted'; break;
		case '-hitcount': key = 'HitXTimes'; buff1 = value; break;
		case '-crit': key = 'CriticalHit'; break;
		case '-supereffective': key = 'SuperEffective'; break;
		case '-resisted': key = 'NotVeryEffective'; break;
		case '-ohko': key = 'OneHitKO'; break;
		case '-miss': key = 'AttackMissed'; atk = attacker; break;
		case '-notarget': key = 'ButItFailed'; break;
		case '-fail':
			key = ({ slp: 'PkmnAlreadyAsleep', psn: 'PkmnAlreadyPoisoned', tox: 'PkmnAlreadyPoisoned', brn: 'PkmnAlreadyHasBurn', par: 'PkmnIsAlreadyParalyzed', confusion: 'PkmnAlreadyConfused', heal: 'PkmnHPFull' })[value] || 'ButItFailed';
			if (from.startsWith('ability: ')) key = value === 'unboost' ? 'PkmnPreventsStatLossWith' : 'PkmnProtectedBy';
			if (value === 'move: Substitute') key = all.includes('[weak]') ? 'TooWeakForSubstitute' : 'PkmnHasSubstitute';
			if (value === 'unboost' && !from) { key = 'StatsWontDecrease'; buff1 = statNames[amount] || upper(amount); }
			if (value === 'boost' && !from) { key = 'StatsWontIncrease'; buff1 = statNames[amount] || upper(amount); }
			if (from === 'Uproar') key = 'PkmnCantSleepInUproar';
			break;
		case '-immune':
			key = from.startsWith('ability: ') ? ({ levitate: 'PkmnMakesGroundMiss', flashfire: 'PkmnRaisedFirePowerWith', soundproof: 'PkmnsXBlocksY', immunity: 'PkmnPreventsPoisoningWith', limber: 'PkmnPreventsParalysisWith', owntempo: 'PkmnPreventsConfusionWith', waterveil: 'PkmnsXPreventsBurns', insomnia: 'PkmnStayedAwakeUsing', vitalspirit: 'PkmnStayedAwakeUsing', wonderguard: 'PkmnAvoidedAttack' })[id(from)] || 'PkmnProtectedBy' : 'ItDoesntAffect'; break;
		case '-status':
			key = ({ brn: 'PkmnWasBurned', psn: 'PkmnWasPoisoned', tox: 'PkmnBadlyPoisoned', par: 'PkmnWasParalyzed', slp: 'PkmnFellAsleep', frz: 'PkmnWasFrozen' })[value];
			if (from.startsWith('ability: ')) key = ({ brn: 'PkmnBurnedBy', psn: 'PkmnPoisonedBy', par: 'PkmnWasParalyzedBy', slp: 'PkmnMadeSleep', frz: 'PkmnFrozenBy' })[value] || key;
			break;
		case '-curestatus':
			key = ({ slp: 'PkmnWokeUp', frz: 'PkmnWasDefrosted', par: 'PkmnHealedParalysis' })[value] || 'PkmnStatusNormal';
			if (from.startsWith('ability: ')) { key = 'PkmnsXCuredYProblem'; buff1 = ({ brn: 'burn', par: 'paralysis', psn: 'poison', tox: 'poison', slp: 'sleep', frz: 'ice' })[value]; }
			if (item || consumedItems[actor]) {
				item ||= consumedItems[actor];
				key = ({ brn: 'PkmnsItemHealedBurn', psn: 'PkmnsItemCuredPoison', tox: 'PkmnsItemCuredPoison', par: 'PkmnsItemCuredParalysis', slp: 'PkmnsItemWokeIt', frz: 'PkmnsItemDefrostedIt' })[value];
				delete consumedItems[actor];
			}
			break;
		case 'cant':
			key = ({ slp: 'PkmnFastAsleep', frz: 'PkmnIsFrozen', par: 'PkmnIsParalyzed', flinch: 'PkmnFlinched',
				recharge: 'PkmnMustRecharge', attract: 'PkmnImmobilizedByLove', truant: 'PkmnLoafing',
				'ability: Truant': 'PkmnLoafing', focuspunch: 'PkmnLostFocus', 'move: Taunt': 'PkmnCantUseMoveTaunt',
				'Disable': 'PkmnMoveIsDisabled', 'move: Imprison': 'PkmnCantUseMoveSealed', 'nopp': 'ButNoPPLeft', 'Focus Punch': 'PkmnLostFocus', Attract: 'PkmnImmobilizedByLove', 'ability: Damp': 'PkmnPreventsUsage' })[value] || 'ButItFailed'; break;
		case '-damage':
			hp[actor] = Number(value.split('/')[0].split(' ')[0]);
			key = ({ brn: 'PkmnHurtByBurn', psn: 'PkmnHurtByPoison', tox: 'PkmnHurtByPoison',
				confusion: 'ItHurtConfusion', recoil: 'PkmnHitWithRecoil', Recoil: 'PkmnHitWithRecoil', 'move: Leech Seed': 'PkmnSappedByLeechSeed',
				'move: Curse': 'PkmnAfflictedByCurse', 'move: Nightmare': 'PkmnLockedInNightmare',
				Sandstorm: 'PkmnBuffetedBySandstorm', Hail: 'PkmnPeltedByHail', 'Spikes': 'PkmnHurtBySpikes',
				'ability: Liquid Ooze': 'ItSuckedLiquidOoze', 'ability: Rough Skin': 'PkmnHurtsWith' })[from] || '';
			if (from === 'partiallytrapped') { key = 'PkmnHurtBy'; buff1 = moveName(trappingMoves[actor] || 'Bind'); }
			break;
		case '-heal':
			restoredHP = Math.max(0, Number(value.split('/')[0]) - (hp[actor] ?? Number(value.split('/')[0])));
			hp[actor] = Number(value.split('/')[0]);
			key = 'PkmnRegainedHealth';
			if (from === 'drain') { key = currentMove === 'DREAM EATER' ? 'PkmnDreamEaten' : 'PkmnEnergyDrained'; def = owner; }
			if (from === 'Leech Seed' || from === 'move: Leech Seed') key = '';
			if (from === 'ingrain') key = 'PkmnAbsorbedNutrients';
			if (from === 'move: Wish') { key = 'PkmnWishCameTrue'; buff1 = name(actor, false); }
			if (from.startsWith('ability: ')) key = 'PkmnRestoredHPUsing';
			if (item) key = 'PkmnsItemRestoredHPALittle';
			if (item) delete consumedItems[actor];
			break;
		case '-boost': case '-unboost':
			buff1 = statNames[value] || upper(value);
			buff2 = `${Number(amount) >= 2 ? command === '-boost' ? 'sharply ' : 'harshly ' : ''}${command === '-boost' ? 'rose!' : 'fell!'}`;
			key = command === '-boost' ? 'AttackersStatRose' : 'DefendersStatFell';
			if (item) key = 'UsingItemTheStatOfPkmnRose';
			if (id(from) === 'intimidate') { key = 'PkmnCutsAttackWith'; source = owner; }
			break;
		case '-setboost': key = 'PkmnCutHPMaxedAttack'; break;
		case '-clearallboost': key = 'StatChangesGone'; break;
		case '-copyboost': key = 'PkmnCopiedStatChanges'; def = value; break;
		case '-clearnegativeboost':
			item ||= consumedItems[actor] || 'White Herb';
			direct = `${name(actor)}'s ${itemName(item)} restored its lowered stats!`;
			delete consumedItems[actor]; break;
		case '-start': case '-singleturn': case '-singlemove': case '-sidestart': case '-fieldstart': {
			const effect = id(command === '-fieldstart' ? actor : value);
			key = starts[effect] || activations[effect] || '';
			if (effect === 'curse' || effect === 'yawn') atk = owner;
			if (effect === 'helpinghand') { atk = owner; def = actor; }
			if (effect === 'uproar' && all.includes('[upkeep]')) key = 'PkmnMakingUproar';
			if (effect === 'confusion' && all.includes('[fatigue]')) key = 'PkmnFatigueConfusion';
			if (effect === 'disable') buff1 = moveName(amount);
			if (effect === 'attract' && from.startsWith('ability: ')) key = 'PkmnsXInfatuatedY';
			if (effect.startsWith('perish') || effect.startsWith('stockpile')) buff1 = effect.slice(-1);
			if (effect === 'focuspunch') key = 'PkmnTighteningFocus';
			if (effect === 'protect') key = 'PkmnProtectedItself2';
			if (effect === 'endure') key = 'PkmnBracedItself';
			if (effect === 'wish') key = 'PkmnMadeWish';
			if (effect === 'typechange') { key = 'PkmnChangedType'; buff1 = upper(amount.replaceAll('/', '/')); }
			break;
		}
		case '-end': case '-sideend': case '-fieldend':
			key = ends[id(value)] || ''; buff1 = upper(value.replace('move: ', ''));
			if (command === '-sideend' && id(value) === 'spikes' && id(from) === 'rapidspin') { key = 'PkmnBlewAwaySpikes'; atk = owner; }
			if (id(value) === 'futuresight' || id(value) === 'doomdesire') { key = 'PkmnTookAttack'; buff1 = moveName(value); }
			if (id(value) === 'partiallytrapped') { buff1 = moveName(trappingMoves[actor] || 'Bind'); delete trappingMoves[actor]; }
			if (id(value) === 'confusion' && consumedItems[actor]) { key = 'PkmnsItemSnappedOut'; item = consumedItems[actor]; delete consumedItems[actor]; }
			break;
		case '-activate':
			key = activations[id(value)] || '';
			if (['bind', 'wrap', 'clamp', 'firespin', 'whirlpool', 'sandtomb'].includes(id(value))) trappingMoves[actor] = value;
			if (id(value) === 'attract') source = owner;
			if (['lockon', 'mindreader'].includes(id(value))) def = owner;
			if (id(value) === 'mimic') { key = currentMove === 'SKETCH' ? 'PkmnSketchedMove' : 'PkmnLearnedMove2'; buff1 = moveName(amount); }
			if (id(value) === 'spite') { def = owner; buff1 = moveName(amount); buff2 = tags[0]; }
			if (id(value) === 'skillswap') def = owner;
			if (id(value) === 'leppaberry') { key = 'PkmnsItemRestoredPP'; item = 'Leppa Berry'; buff1 = moveName(amount); delete consumedItems[actor]; }
			if (id(value) === 'focusband') { direct = `${name(actor)} hung on using its ${itemName('Focus Band')}!`; }
			if (id(value) === 'quickclaw') { direct = `${name(actor)}'s ${itemName('Quick Claw')} let it move first!`; }
			if (id(value) === 'brickbreak') key = 'TheWallShattered';
			if (id(value) === 'protect') key = ''; // Protection already announced by -singleturn.
			if (value.startsWith('ability: ')) { ability = value.slice(9); key = ({ sturdy: 'PkmnProtectedBy', soundproof: 'PkmnsXBlocksY', suctioncups: 'PkmnAnchorsItselfWith', clearbody: 'PkmnPreventsStatLossWith', hypercutter: 'PkmnsXPreventsYLoss', whitesmoke: 'PkmnPreventsStatLossWith', damp: 'PkmnPreventsUsage', insomnia: 'PkmnStayedAwakeUsing', vitalspirit: 'PkmnStayedAwakeUsing', oblivious: 'PkmnPreventsRomanceWith', limber: 'PkmnPreventsParalysisWith', immunity: 'PkmnPreventsPoisoningWith', owntempo: 'PkmnPreventsConfusionWith', waterveil: 'PkmnsXPreventsBurns', flashfire: 'PkmnRaisedFirePowerWith' })[id(value)] || ''; }
			break;
		case '-prepare': key = prepare[id(value)] || ''; break;
		case '-mustrecharge': break;
		case '-weather': {
			if (actor === 'none') { key = weather[lastWeather]?.[2]; lastWeather = ''; }
			else { key = weather[actor]?.[all.includes('[upkeep]') ? 1 : 0]; lastWeather = actor; }
			if (from.startsWith('ability: ') && actor !== 'none' && !all.includes('[upkeep]')) key = ({ RainDance: 'PkmnMadeItRain', SunnyDay: 'PkmnsXIntensifiedSun', Sandstorm: 'PkmnsXWhippedUpSandstorm' })[actor] || key;
			break;
		}
		case '-ability':
			knownAbilities[actor.slice(0, 2)] = value; ability = value;
			if (id(from) === 'trace') { key = 'PkmnTraced'; buff1 = name(owner); buff2 = upper(value); }
			if (id(from) === 'roleplay') { key = 'PkmnCopiedFoe'; def = owner; }
			break;
		case '-formechange': case 'detailschange': key = 'PkmnTransformed'; break;
		case '-transform': key = 'PkmnTransformedInto'; buff1 = name(value, false); break;
		case '-enditem':
			consumedItems[actor] = value;
			if (id(from) === 'knockoff') { key = 'PkmnKnockedOff'; item = value; atk = owner; }
			break;
		case '-item':
			item = value; key = 'PkmnObtainedX'; buff1 = itemName(value);
			if (['thief', 'covet'].includes(id(from))) { key = 'PkmnStoleItem'; def = owner; }
			break;
		case '-bag': key = value === 'Poké Flute' ? 'PlayedThe' : 'PlayerUsedItem'; item = value; break;
		case '-flute': key = 'PkmnHearingFluteAwoke'; break;
		case '-restorepp': key = 'PPWasRestored'; break;
		case '-nothing': key = 'ButNothingHappened'; break;
		case '-sethp': key = 'SharedPain'; hp[actor] = Number(value.split('/')[0]); break;
		case '-cureteam': key = currentMove === 'HEAL BELL' ? 'BellChimed' : 'SoothingAroma'; break;
		case '-swapsideconditions': break;
		case '-message': direct = actor; break;
		case '-fieldactivate':
			key = ({ perishsong: 'FaintInThree', payDay: 'CoinsScattered', payday: 'CoinsScattered', haze: 'StatChangesGone' })[id(actor)] || ''; break;
		case 'win': direct = actor === 'Player' ? 'Player defeated\nTrainer AI!' : 'Player is out of\nusable POKéMON!'; break;
		case 'tie': direct = 'Player battled to a draw against\nTrainer AI!'; break;
		}
		const replacements = {
			B_BUFF1: buff1, B_BUFF2: buff2, B_BUFF3: '', B_CURRENT_MOVE: currentMove, B_LAST_ITEM: itemName(item),
			STR_VAR_1: name(actor, false), STR_VAR_2: String(restoredHP),
			B_PLAYER_NAME: 'Player', B_TRAINER1_CLASS: 'Trainer', B_TRAINER1_NAME: 'AI', B_LINK_OPPONENT1_NAME: 'Trainer AI',
			B_PLAYER_MON1_NAME: name(actor, false), B_OPPONENT_MON1_NAME: name(actor, false),
		};
		for (const [prefix, mon] of Object.entries({ ATK: atk, DEF: def, EFF: actor, SCR_ACTIVE: source, ACTIVE: actor })) {
			replacements[`B_${prefix}_NAME_WITH_PREFIX`] = name(mon);
			replacements[`B_${prefix}_ABILITY`] = abilityName(ability);
		}
		for (const n of [1, 2, 3]) replacements[`B_ATK_PREFIX${n}`] = actor.startsWith('p2') ? "The foe" : 'Your team';
		const template = key ? strings[key] : '';
		let text = direct || template?.replace(/\{(\w+)\}/g, (_, placeholder) => replacements[placeholder] ?? '').trim();
		// Preserve meaningful effects even when FireRed has no dedicated template.
  if (!text && !['-mustrecharge', '-hint', '-anim', '-waiting', '-center', '-combine', '-swapsideconditions'].includes(command)) {
   const effect = value.replace(/^(move|ability|item): /, '');
   if (command === '-ability') text = `${name(actor)}'s ${abilityName(value)} activated!`;
   else if (command === '-activate') text = `${name(actor)}'s ${value.startsWith('ability: ') ? abilityName(effect) : value.startsWith('item: ') ? itemName(effect) : moveName(effect)} activated!`;
   else if (['-start', '-singleturn', '-singlemove'].includes(command)) text = `${name(actor)}: ${effect}${amount && !amount.startsWith('[') ? ' ' + amount : ''}!`;
   else if (command === '-end') text = `${name(actor)}'s ${effect} ended!`;
   else if (command === '-enditem' && !all.includes('[eat]')) text = `${name(actor)} used its ${itemName(value)}!`;
  }
  if (text) output.push({ line: lineIndex, text });
	}
	return output;
}
module.exports = { renderDialogue, starts, ends, activations, prepare };
