/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Star

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups

 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoa

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce

 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag

*/

export const Abilities: import('../sim/dex-abilities').AbilityDataTable = {
	"airlock": {
		onSwitchIn: undefined,
		onStart(pokemon) {
									pokemon.abilityState.ending = false;
								},
		onEnd(pokemon) {
									pokemon.abilityState.ending = true;
									this.eachEvent('WeatherChange', this.effect);
								},
		suppressWeather: true,
		flags: {},
		name: "Air Lock",
		rating: 2,
		num: 76,
		onSwitchInPriority: 4,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								}
	},
	"arenatrap": {
		onFoeTrapPokemon(pokemon) {
									if (!pokemon.isAdjacent(this.effectState.target)) return;
									if (pokemon.isGrounded()) {
										pokemon.tryTrap(true);
									}
								},
		onFoeMaybeTrapPokemon(pokemon, source) {
									if (!source) source = this.effectState.target;
									if (!source || !pokemon.isAdjacent(source)) return;
									if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
										pokemon.maybeTrapped = true;
									}
								},
		flags: {},
		name: "Arena Trap",
		rating: 5,
		num: 71
	},
	"battlearmor": {
		onCriticalHit: false,
		flags: { breakable: 1 },
		name: "Battle Armor",
		rating: 1,
		num: 4
	},
	"blaze": {
		onModifyAtkPriority: 5,
		onModifyAtk: undefined,
		onModifySpAPriority: 5,
		onModifySpA: undefined,
		flags: {},
		name: "Blaze",
		rating: 2,
		num: 66,
		onBasePowerPriority: 2,
		onBasePower(basePower, attacker, defender, move) {
									if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
										this.debug('Blaze boost');
										return this.chainModify(1.5);
									}
								}
	},
	"chlorophyll": {
		onModifySpe(spe, pokemon) {
									if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
										return this.chainModify(2);
									}
								},
		flags: {},
		name: "Chlorophyll",
		rating: 3,
		num: 34
	},
	"clearbody": {
		onTryBoost(boost, target, source, effect) {
									if (source && target === source) return;
									let showMsg = false;
									let i: BoostID;
									for (i in boost) {
										if (boost[i]! < 0) {
											delete boost[i];
											showMsg = true;
										}
									}
									if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
										this.add('-fail', target, 'unboost', '[from] ability: Clear Body', `[of] ${target}`);
									}
								},
		flags: { breakable: 1 },
		name: "Clear Body",
		rating: 2,
		num: 29
	},
	"cloudnine": {
		onSwitchIn: undefined,
		onStart(pokemon) {
									pokemon.abilityState.ending = false;
								},
		onEnd(pokemon) {
									pokemon.abilityState.ending = true;
									this.eachEvent('WeatherChange', this.effect);
								},
		suppressWeather: true,
		flags: {},
		name: "Cloud Nine",
		rating: 2,
		num: 13,
		onSwitchInPriority: 4,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								}
	},
	"colorchange": {
		onAfterMoveSecondary: undefined,
		flags: {},
		name: "Color Change",
		rating: 0,
		num: 16,
		onDamagingHit(damage, target, source, move) {
									if (!damage || !target.hp) return;
									const type = move.type;
									if (target.isActive && move.category !== 'Status' && type !== '???' && !target.hasType(type)) {
										if (!target.setType(type)) return false;
										this.add('-start', target, 'typechange', type, '[from] ability: Color Change');
									}
								}
	},
	"compoundeyes": {
		onSourceModifyAccuracyPriority: 9,
		onSourceModifyAccuracy(accuracy) {
									if (typeof accuracy !== 'number') return;
									this.debug('compoundeyes - enhancing accuracy');
									return this.chainModify(1.3);
								},
		flags: {},
		name: "Compound Eyes",
		rating: 3,
		num: 14
	},
	"cutecharm": {
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact']) {
										if (this.randomChance(1, 3)) {
											source.addVolatile('attract', target);
										}
									}
								},
		flags: {},
		name: "Cute Charm",
		rating: 0.5,
		num: 56
	},
	"damp": {
		onAnyTryMove(target, source, effect) {
									if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
										this.attrLastMove('[still]');
										this.add('cant', this.effectState.target, 'ability: Damp', effect, `[of] ${target}`);
										return false;
									}
								},
		onAnyDamage(damage, target, source, effect) {
									if (effect?.name === 'Aftermath') {
										return false;
									}
								},
		flags: { breakable: 1 },
		name: "Damp",
		rating: 1,
		num: 6
	},
	"drizzle": {
		onStart(source) {
									if (source.species.id === 'kyogre' && source.item === 'blueorb') return;
									this.field.setWeather('raindance');
								},
		flags: {},
		name: "Drizzle",
		rating: 4,
		num: 2,
		onSwitchInPriority: 3,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								},
		onSwitchIn: undefined
	},
	"drought": {
		onStart(source) {
									if (source.species.id === 'groudon' && source.item === 'redorb') return;
									this.field.setWeather('sunnyday');
								},
		flags: {},
		name: "Drought",
		rating: 4,
		num: 70,
		onSwitchInPriority: 3,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								},
		onSwitchIn: undefined
	},
	"earlybird": {
		flags: {},
		name: "Early Bird",
		rating: 1.5,
		num: 48
	},
	"effectspore": {
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact'] && this.randomChance(1, 10)) {
										const status = this.sample(['slp', 'par', 'psn']);
										source.trySetStatus(status, target);
									}
								},
		flags: {},
		name: "Effect Spore",
		rating: 2,
		num: 27
	},
	"flamebody": {
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact']) {
										if (this.randomChance(1, 3)) {
											source.trySetStatus('brn', target);
										}
									}
								},
		flags: {},
		name: "Flame Body",
		rating: 2,
		num: 49
	},
	"flashfire": {
		onTryHit(target, source, move) {
									if (target !== source && move.type === 'Fire') {
										if (move.id === 'willowisp' && (target.hasType('Fire') || target.status || target.volatiles['substitute'])) {
											return;
										}
										if (target.status === 'frz') {
											return;
										}
										if (!target.addVolatile('flashfire')) {
											this.add('-immune', target, '[from] ability: Flash Fire');
										}
										return null;
									}
								},
		onEnd(pokemon) {
									pokemon.removeVolatile('flashfire');
								},
		condition: {
									noCopy: true,
									onStart(target) {
													this.add('-start', target, 'ability: Flash Fire');
												},
									onModifyAtkPriority: 5,
									onModifyAtk: undefined,
									onModifySpAPriority: 5,
									onModifySpA: undefined,
									onEnd(target) {
													this.add('-end', target, 'ability: Flash Fire', '[silent]');
												},
									onModifyDamagePhase1(atk, attacker, defender, move) {
													if (move.type === 'Fire') {
														this.debug('Flash Fire boost');
														return this.chainModify(1.5);
													}
												}
								},
		flags: { breakable: 1 },
		name: "Flash Fire",
		rating: 3.5,
		num: 18
	},
	"forecast": {
		onSwitchInPriority: 3,
		onStart(pokemon) {
									this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
								},
		onWeatherChange(pokemon) {
									if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
									let forme = null;
									switch (pokemon.effectiveWeather()) {
									case 'sunnyday':
									case 'desolateland':
										if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
										break;
									case 'raindance':
									case 'primordialsea':
										if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
										break;
									case 'hail':
									case 'snowscape':
										if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
										break;
									default:
										if (pokemon.species.id !== 'castform') forme = 'Castform';
										break;
									}
									if (pokemon.isActive && forme) {
										pokemon.formeChange(forme, this.effect, false, '0', '[msg]');
									}
								},
		flags: {},
		name: "Forecast",
		rating: 2,
		num: 59,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								},
		onSwitchIn: undefined
	},
	"guts": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
									if (pokemon.status) {
										return this.chainModify(1.5);
									}
								},
		flags: {},
		name: "Guts",
		rating: 3,
		num: 62
	},
	"hugepower": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
									return this.chainModify(2);
								},
		flags: {},
		name: "Huge Power",
		rating: 5,
		num: 37
	},
	"hustle": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
									return this.modify(atk, 1.5);
								},
		onSourceModifyAccuracyPriority: 7,
		onSourceModifyAccuracy(accuracy, target, source, move) {
									const physicalTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel'];
									if (physicalTypes.includes(move.type) && typeof accuracy === 'number') {
										return this.chainModify([3277, 4096]);
									}
								},
		flags: {},
		name: "Hustle",
		rating: 3.5,
		num: 55
	},
	"hypercutter": {
		onTryBoost(boost, target, source, effect) {
									if (source && target === source) return;
									if (boost.atk && boost.atk < 0) {
										delete boost.atk;
										if (!(effect as ActiveMove).secondaries) {
											this.add('-fail', target, 'unboost', 'atk', '[from] ability: Hyper Cutter', `[of] ${target}`);
										}
									}
								},
		flags: { breakable: 1 },
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52
	},
	"illuminate": {
		onTryBoost: undefined,
		onModifyMove: undefined,
		flags: {},
		name: "Illuminate",
		rating: 0,
		num: 35
	},
	"immunity": {
		onUpdate(pokemon) {
									if (pokemon.status === 'psn' || pokemon.status === 'tox') {
										this.add('-activate', pokemon, 'ability: Immunity');
										pokemon.cureStatus();
									}
								},
		onSetStatus(status, target, source, effect) {
									if (status.id !== 'psn' && status.id !== 'tox') return;
									if ((effect as Move)?.status) {
										this.add('-immune', target, '[from] ability: Immunity');
									}
									return false;
								},
		flags: { breakable: 1 },
		name: "Immunity",
		rating: 2,
		num: 17
	},
	"innerfocus": {
		onTryAddVolatile(status, pokemon) {
									if (status.id === 'flinch') return null;
								},
		onTryBoost: undefined,
		flags: { breakable: 1 },
		name: "Inner Focus",
		rating: 1,
		num: 39
	},
	"insomnia": {
		onUpdate(pokemon) {
									if (pokemon.status === 'slp') {
										this.add('-activate', pokemon, 'ability: Insomnia');
										pokemon.cureStatus();
									}
								},
		onSetStatus(status, target, source, effect) {
									if (status.id !== 'slp') return;
									if ((effect as Move)?.status) {
										this.add('-immune', target, '[from] ability: Insomnia');
									}
									return false;
								},
		onTryAddVolatile(status, target) {
									if (status.id === 'yawn') {
										this.add('-immune', target, '[from] ability: Insomnia');
										return null;
									}
								},
		flags: { breakable: 1 },
		name: "Insomnia",
		rating: 2.5,
		num: 15
	},
	"intimidate": {
		onStart(pokemon) {
									let activated = false;
									for (const target of pokemon.adjacentFoes()) {
										if (!target.volatiles['substitute']) {
											activated = true;
											break;
										}
									}

									if (!activated) {
										this.hint("In Gen 3, Intimidate does not activate if every target has a Substitute.", false, pokemon.side);
										return;
									}
									this.add('-ability', pokemon, 'Intimidate', 'boost');

									for (const target of pokemon.adjacentFoes()) {
										if (target.volatiles['substitute']) {
											this.add('-immune', target);
										} else {
											this.boost({ atk: -1 }, target, pokemon, null, true);
										}
									}
								},
		flags: {},
		name: "Intimidate",
		rating: 3.5,
		num: 22,
		onSwitchInPriority: 2
	},
	"keeneye": {
		onTryBoost(boost, target, source, effect) {
									if (source && target === source) return;
									if (boost.accuracy && boost.accuracy < 0) {
										delete boost.accuracy;
										if (!(effect as ActiveMove).secondaries) {
											this.add('-fail', target, 'unboost', 'accuracy', '[from] ability: Keen Eye', `[of] ${target}`);
										}
									}
								},
		onModifyMove: undefined,
		flags: { breakable: 1 },
		name: "Keen Eye",
		rating: 0.5,
		num: 51
	},
	"levitate": {
		flags: { breakable: 1 },
		name: "Levitate",
		rating: 3.5,
		num: 26
	},
	"lightningrod": {
		onTryHit: undefined,
		onAnyRedirectTarget: undefined,
		flags: { breakable: 1 },
		name: "Lightning Rod",
		rating: 0,
		num: 31,
		onFoeRedirectTarget(target, source, source2, move) {
									// don't count Hidden Power as Electric-type
									if (this.dex.moves.get(move.id).type !== 'Electric') return;
									if (this.validTarget(this.effectState.target, source, move.target)) {
										return this.effectState.target;
									}
								}
	},
	"limber": {
		onUpdate(pokemon) {
									if (pokemon.status === 'par') {
										this.add('-activate', pokemon, 'ability: Limber');
										pokemon.cureStatus();
									}
								},
		onSetStatus(status, target, source, effect) {
									if (status.id !== 'par') return;
									if ((effect as Move)?.status) {
										this.add('-immune', target, '[from] ability: Limber');
									}
									return false;
								},
		flags: { breakable: 1 },
		name: "Limber",
		rating: 2,
		num: 7
	},
	"liquidooze": {
		onSourceTryHeal(damage, target, source, effect) {
									this.debug(`Heal is occurring: ${target} <- ${source} :: ${effect.id}`);
									const canOoze = ['drain', 'leechseed'];
									if (canOoze.includes(effect.id) && this.activeMove?.id !== 'dreameater') {
										this.damage(damage, null, null, null, true);
										return 0;
									}
								},
		flags: {},
		name: "Liquid Ooze",
		rating: 1.5,
		num: 64
	},
	"magmaarmor": {
		onUpdate(pokemon) {
									if (pokemon.status === 'frz') {
										this.add('-activate', pokemon, 'ability: Magma Armor');
										pokemon.cureStatus();
									}
								},
		onImmunity(type, pokemon) {
									if (type === 'frz') return false;
								},
		flags: { breakable: 1 },
		name: "Magma Armor",
		rating: 1,
		num: 40
	},
	"magnetpull": {
		onFoeTrapPokemon: undefined,
		onFoeMaybeTrapPokemon: undefined,
		flags: {},
		name: "Magnet Pull",
		rating: 4,
		num: 42,
		onAnyTrapPokemon(pokemon) {
									if (pokemon.hasType('Steel') && pokemon.isAdjacent(this.effectState.target)) {
										pokemon.tryTrap(true);
									}
								},
		onAnyMaybeTrapPokemon(pokemon, source) {
									if (!source) source = this.effectState.target;
									if (!source || !pokemon.isAdjacent(source)) return;
									if (!pokemon.knownType || pokemon.hasType('Steel')) {
										pokemon.maybeTrapped = true;
									}
								}
	},
	"marvelscale": {
		onModifyDefPriority: 6,
		onModifyDef(def, pokemon) {
									if (pokemon.status) {
										return this.chainModify(1.5);
									}
								},
		flags: { breakable: 1 },
		name: "Marvel Scale",
		rating: 2.5,
		num: 63
	},
	"minus": {
		onModifySpAPriority: undefined,
		onModifySpA(spa, pokemon) {
									for (const active of this.getAllActive()) {
										if (!active.fainted && active.hasAbility('plus')) {
											return this.chainModify(1.5);
										}
									}
								},
		flags: {},
		name: "Minus",
		rating: 0,
		num: 58
	},
	"naturalcure": {
		onCheckShow: undefined,
		onSwitchOut(pokemon) {
									if (!pokemon.status || pokemon.status === 'fnt') return;

									// Because statused/unstatused pokemon are shown after every switch
									// in gen 3-4, Natural Cure's curing is always known to both players

									this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure', '[silent]');
									pokemon.clearStatus();
								},
		flags: {},
		name: "Natural Cure",
		rating: 2.5,
		num: 30
	},
	"oblivious": {
		onUpdate(pokemon) {
									if (pokemon.volatiles['attract']) {
										pokemon.removeVolatile('attract');
										this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
									}
								},
		onImmunity(type, pokemon) {
									if (type === 'attract') return false;
								},
		onTryHit(pokemon, target, move) {
									if (move.id === 'captivate') {
										this.add('-immune', pokemon, '[from] Oblivious');
										return null;
									}
								},
		onTryBoost: undefined,
		flags: { breakable: 1 },
		name: "Oblivious",
		rating: 0.5,
		num: 12
	},
	"overgrow": {
		onModifyAtkPriority: 5,
		onModifyAtk: undefined,
		onModifySpAPriority: 5,
		onModifySpA: undefined,
		flags: {},
		name: "Overgrow",
		rating: 2,
		num: 65,
		onBasePowerPriority: 2,
		onBasePower(basePower, attacker, defender, move) {
									if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
										this.debug('Overgrow boost');
										return this.chainModify(1.5);
									}
								}
	},
	"owntempo": {
		onUpdate(pokemon) {
									if (pokemon.volatiles['confusion']) {
										this.add('-activate', pokemon, 'ability: Own Tempo');
										pokemon.removeVolatile('confusion');
									}
								},
		onTryAddVolatile(status, pokemon) {
									if (status.id === 'confusion') return null;
								},
		onHit(target, source, move) {
									if (move?.volatileStatus === 'confusion') {
										this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
									}
								},
		onTryBoost: undefined,
		flags: { breakable: 1 },
		name: "Own Tempo",
		rating: 1.5,
		num: 20
	},
	"pickup": {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual: undefined,
		flags: {},
		name: "Pickup",
		rating: 0,
		num: 53
	},
	"plus": {
		onModifySpAPriority: undefined,
		onModifySpA(spa, pokemon) {
									for (const active of this.getAllActive()) {
										if (!active.fainted && active.hasAbility('minus')) {
											return this.chainModify(1.5);
										}
									}
								},
		flags: {},
		name: "Plus",
		rating: 0,
		num: 57
	},
	"poisonpoint": {
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact']) {
										if (this.randomChance(1, 3)) {
											source.trySetStatus('psn', target);
										}
									}
								},
		flags: {},
		name: "Poison Point",
		rating: 1.5,
		num: 38
	},
	"pressure": {
		onStart(pokemon) {
									this.addSplit(pokemon.side.id, ['-ability', pokemon, 'Pressure', '[silent]']);
								},
		onDeductPP(target, source) {
									if (target === source) return;
									return 1;
								},
		flags: {},
		name: "Pressure",
		rating: 1.5,
		num: 46,
		onSwitchInPriority: 3
	},
	"purepower": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
									return this.chainModify(2);
								},
		flags: {},
		name: "Pure Power",
		rating: 5,
		num: 74
	},
	"raindish": {
		onWeather: undefined,
		flags: {},
		name: "Rain Dish",
		rating: 1.5,
		num: 44,
		onResidualOrder: 10,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
									if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
										this.heal(pokemon.baseMaxhp / 16);
									}
								}
	},
	"rockhead": {
		onDamage(damage, target, source, effect) {
									if (effect.id === 'recoil') {
										if (!this.activeMove) throw new Error("Battle.activeMove is null");
										if (this.activeMove.id !== 'struggle') return null;
									}
								},
		flags: {},
		name: "Rock Head",
		rating: 3,
		num: 69
	},
	"roughskin": {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact']) {
										this.damage(source.baseMaxhp / 16, source, target);
									}
								},
		flags: {},
		name: "Rough Skin",
		rating: 2.5,
		num: 24
	},
	"runaway": {
		flags: {},
		name: "Run Away",
		rating: 0,
		num: 50
	},
	"sandstream": {
		onStart(source) {
									this.field.setWeather('sandstorm');
								},
		flags: {},
		name: "Sand Stream",
		rating: 4,
		num: 45,
		onSwitchInPriority: 3,
		onAfterEntryHazard(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								},
		onSwitchIn: undefined
	},
	"sandveil": {
		onImmunity(type, pokemon) {
									if (type === 'sandstorm') return false;
								},
		onModifyAccuracyPriority: 8,
		onModifyAccuracy(accuracy) {
									if (typeof accuracy !== 'number') return;
									if (this.field.isWeather('sandstorm')) {
										this.debug('Sand Veil - decreasing accuracy');
										return this.chainModify(0.8);
									}
								},
		flags: { breakable: 1 },
		name: "Sand Veil",
		rating: 1.5,
		num: 8
	},
	"serenegrace": {
		onModifyMovePriority: -2,
		onModifyMove(move) {
									if (move.secondaries && move.id !== 'chatter') {
										this.debug('doubling secondary chance');
										for (const secondary of move.secondaries) {
											if (secondary.chance) secondary.chance *= 2;
										}
									}
								},
		flags: {},
		name: "Serene Grace",
		rating: 3.5,
		num: 32
	},
	"shadowtag": {
		onFoeTrapPokemon(pokemon) {
									pokemon.trapped = true;
								},
		onFoeMaybeTrapPokemon(pokemon, source) {
									if (!source) source = this.effectState.target;
									if (!source || !pokemon.isAdjacent(source)) return;
									if (!pokemon.hasAbility('shadowtag')) {
										pokemon.maybeTrapped = true;
									}
								},
		flags: {},
		name: "Shadow Tag",
		rating: 5,
		num: 23
	},
	"shedskin": {
		onResidualOrder: 10,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
									if (pokemon.hp && pokemon.status && this.randomChance(33, 100)) {
										this.debug('shed skin');
										this.add('-activate', pokemon, 'ability: Shed Skin');
										pokemon.cureStatus();
									}
								},
		flags: {},
		name: "Shed Skin",
		rating: 3,
		num: 61
	},
	"shellarmor": {
		onCriticalHit: false,
		flags: { breakable: 1 },
		name: "Shell Armor",
		rating: 1,
		num: 75
	},
	"shielddust": {
		onModifySecondaries(secondaries) {
									this.debug('Shield Dust prevent secondary');
									return secondaries.filter(effect => !!effect.self);
								},
		flags: { breakable: 1 },
		name: "Shield Dust",
		rating: 2,
		num: 19
	},
	"soundproof": {
		onTryHit(target, source, move) {
									if (move.flags['sound']) {
										this.add('-immune', target, '[from] ability: Soundproof');
										return null;
									}
								},
		onAllyTryHitSide: undefined,
		flags: { breakable: 1 },
		name: "Soundproof",
		rating: 1.5,
		num: 43
	},
	"speedboost": {
		onResidualOrder: 10,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
									if (pokemon.activeTurns) {
										this.boost({ spe: 1 });
									}
								},
		flags: {},
		name: "Speed Boost",
		rating: 4.5,
		num: 3
	},
	"static": {
		onDamagingHit(damage, target, source, move) {
									if (damage && move.flags['contact']) {
										if (this.randomChance(1, 3)) {
											source.trySetStatus('par', target);
										}
									}
								},
		flags: {},
		name: "Static",
		rating: 2,
		num: 9
	},
	"stench": {
		onModifyMovePriority: -1,
		onModifyMove: undefined,
		flags: {},
		name: "Stench",
		rating: 0,
		num: 1
	},
	"stickyhold": {
		onTakeItem(item, pokemon, source) {
									if ((source && source !== pokemon) || (this.activeMove?.id === 'knockoff')) {
										this.add('-activate', pokemon, 'ability: Sticky Hold');
										return false;
									}
								},
		flags: { breakable: 1 },
		name: "Sticky Hold",
		rating: 2,
		num: 60
	},
	"sturdy": {
		onTryHit(pokemon, target, move) {
									if (move.ohko) {
										this.add('-immune', pokemon, '[from] ability: Sturdy');
										return null;
									}
								},
		onDamagePriority: -30,
		onDamage: undefined,
		flags: { breakable: 1 },
		name: "Sturdy",
		rating: 0,
		num: 5
	},
	"suctioncups": {
		onDragOutPriority: 1,
		onDragOut(pokemon) {
									this.add('-activate', pokemon, 'ability: Suction Cups');
									return null;
								},
		flags: { breakable: 1 },
		name: "Suction Cups",
		rating: 1,
		num: 21
	},
	"swarm": {
		onModifyAtkPriority: 5,
		onModifyAtk: undefined,
		onModifySpAPriority: 5,
		onModifySpA: undefined,
		flags: {},
		name: "Swarm",
		rating: 2,
		num: 68,
		onBasePowerPriority: 2,
		onBasePower(basePower, attacker, defender, move) {
									if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
										this.debug('Swarm boost');
										return this.chainModify(1.5);
									}
								}
	},
	"swiftswim": {
		onModifySpe(spe, pokemon) {
									if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
										return this.chainModify(2);
									}
								},
		flags: {},
		name: "Swift Swim",
		rating: 3,
		num: 33
	},
	"synchronize": {
		onAfterSetStatus(status, target, source, effect) {
									if (!source || source === target) return;
									if (effect?.id === 'toxicspikes') return;
									let id: string = status.id;
									if (id === 'slp' || id === 'frz') return;
									if (id === 'tox') id = 'psn';
									source.trySetStatus(id, target);
								},
		flags: {},
		name: "Synchronize",
		rating: 2,
		num: 28
	},
	"thickfat": {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk: undefined,
		onSourceModifySpAPriority: 5,
		onSourceModifySpA: undefined,
		flags: { breakable: 1 },
		name: "Thick Fat",
		rating: 3.5,
		num: 47,
		onSourceBasePowerPriority: 1,
		onSourceBasePower(basePower, attacker, defender, move) {
									if (move.type === 'Ice' || move.type === 'Fire') {
										return this.chainModify(0.5);
									}
								}
	},
	"torrent": {
		onModifyAtkPriority: 5,
		onModifyAtk: undefined,
		onModifySpAPriority: 5,
		onModifySpA: undefined,
		flags: {},
		name: "Torrent",
		rating: 2,
		num: 67,
		onBasePowerPriority: 2,
		onBasePower(basePower, attacker, defender, move) {
									if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
										this.debug('Torrent boost');
										return this.chainModify(1.5);
									}
								}
	},
	"trace": {
		onStart(pokemon) {
									const target = pokemon.side.randomFoe();
									if (!target || target.fainted) return;
									const ability = target.getAbility();
									pokemon.setAbility(ability, target);
								},
		onUpdate: undefined,
		flags: {},
		name: "Trace",
		rating: 3,
		num: 36,
		onSwitchInPriority: 1
	},
	"truant": {
		onStart: undefined,
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
									if (pokemon.volatiles['truant']) {
										this.add('cant', pokemon, 'ability: Truant');
										return false;
									}
								},
		condition: {},
		flags: {},
		name: "Truant",
		rating: -1,
		num: 54,
		onResidual(pokemon) {
									pokemon.truantTurn = !pokemon.truantTurn;
									if (pokemon.truantTurn) {
										pokemon.addVolatile('truant');
									} else {
										pokemon.removeVolatile('truant');
									}
								},
		onSwitchIn(pokemon) {
									pokemon.truantTurn = this.turn !== 0;
									// it is unnecessary to keep a volatile, but it helps with cross-gen implementation
									if (pokemon.truantTurn) {
										pokemon.addVolatile('truant');
									} else {
										pokemon.removeVolatile('truant');
									}
								},
		onResidualOrder: 27
	},
	"vitalspirit": {
		onUpdate(pokemon) {
									if (pokemon.status === 'slp') {
										this.add('-activate', pokemon, 'ability: Vital Spirit');
										pokemon.cureStatus();
									}
								},
		onSetStatus(status, target, source, effect) {
									if (status.id !== 'slp') return;
									if ((effect as Move)?.status) {
										this.add('-immune', target, '[from] ability: Vital Spirit');
									}
									return false;
								},
		onTryAddVolatile(status, target) {
									if (status.id === 'yawn') {
										this.add('-immune', target, '[from] ability: Vital Spirit');
										return null;
									}
								},
		flags: { breakable: 1 },
		name: "Vital Spirit",
		rating: 2.5,
		num: 72
	},
	"voltabsorb": {
		onTryHit(target, source, move) {
									if (target !== source && move.type === 'Electric' && move.id !== 'thunderwave') {
										if (!this.heal(target.baseMaxhp / 4)) {
											this.add('-immune', target, '[from] ability: Volt Absorb');
										}
										return null;
									}
								},
		flags: { breakable: 1 },
		name: "Volt Absorb",
		rating: 3.5,
		num: 10
	},
	"waterabsorb": {
		onTryHit(target, source, move) {
									if (target !== source && move.type === 'Water') {
										if (!this.heal(target.baseMaxhp / 4)) {
											this.add('-immune', target, '[from] ability: Water Absorb');
										}
										return null;
									}
								},
		flags: { breakable: 1 },
		name: "Water Absorb",
		rating: 3.5,
		num: 11
	},
	"waterveil": {
		onUpdate(pokemon) {
									if (pokemon.status === 'brn') {
										this.add('-activate', pokemon, 'ability: Water Veil');
										pokemon.cureStatus();
									}
								},
		onSetStatus(status, target, source, effect) {
									if (status.id !== 'brn') return;
									if ((effect as Move)?.status) {
										this.add('-immune', target, '[from] ability: Water Veil');
									}
									return false;
								},
		flags: { breakable: 1 },
		name: "Water Veil",
		rating: 2,
		num: 41
	},
	"whitesmoke": {
		onTryBoost(boost, target, source, effect) {
									if (source && target === source) return;
									let showMsg = false;
									let i: BoostID;
									for (i in boost) {
										if (boost[i]! < 0) {
											delete boost[i];
											showMsg = true;
										}
									}
									if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
										this.add('-fail', target, 'unboost', '[from] ability: White Smoke', `[of] ${target}`);
									}
								},
		flags: { breakable: 1 },
		name: "White Smoke",
		rating: 2,
		num: 73
	},
	"wonderguard": {
		onTryHit(target, source, move) {
									if (move.id === 'firefang') {
										this.hint("In Gen 4, Fire Fang is always able to hit through Wonder Guard.", true, target.side);
										return;
									}
									if (target === source || move.category === 'Status' || move.type === '???') return;
									this.debug('Wonder Guard immunity: ' + move.id);
									if (target.runEffectiveness(move) <= 0 || !target.runImmunity(move)) {
										this.add('-immune', target, '[from] ability: Wonder Guard');
										return null;
									}
								},
		flags: { failroleplay: 1, noreceiver: 1, failskillswap: 1, breakable: 1 },
		name: "Wonder Guard",
		rating: 5,
		num: 25
	},
};
