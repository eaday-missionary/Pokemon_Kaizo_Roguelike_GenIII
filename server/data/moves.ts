// List of flags and their descriptions can be found in sim/dex-moves.ts

export const Moves: import('../sim/dex-moves').MoveDataTable = {
	"absorb": {
		num: 71,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Absorb",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"acid": {
		num: 51,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										def: -1,
									},
								},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever"
	},
	"acidarmor": {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acid Armor",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 2,
								},
		target: "self",
		type: "Poison",
		contestType: "Tough"
	},
	"aerialace": {
		num: 332,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Aerial Ace",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, slicing: 1 },
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"aeroblast": {
		num: 177,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		name: "Aeroblast",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, wind: 1 },
		critRatio: 2,
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"agility": {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									spe: 2,
								},
		target: "self",
		type: "Psychic",
		contestType: "Cool"
	},
	"aircutter": {
		num: 314,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Air Cutter",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1, wind: 1 },
		critRatio: 2,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool"
	},
	"amnesia": {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									spd: 2,
								},
		target: "self",
		type: "Psychic",
		contestType: "Cute"
	},
	"ancientpower": {
		num: 246,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ancient Power",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									self: {
										boosts: {
											atk: 1,
											def: 1,
											spa: 1,
											spd: 1,
											spe: 1,
										},
									},
								},
		target: "normal",
		type: "Rock",
		contestType: "Tough"
	},
	"armthrust": {
		num: 292,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Arm Thrust",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"aromatherapy": {
		num: 312,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Aromatherapy",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, distance: 1, metronome: 1 },
		onHit(target, source) {
									this.add('-cureteam', source, '[from] move: Aromatherapy');
									const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
									for (const ally of allies) {
										ally.clearStatus();
									}
								},
		target: "allyTeam",
		type: "Grass",
		contestType: "Clever"
	},
	"assist": {
		num: 274,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Assist",
		pp: 20,
		priority: 0,
		flags: { metronome: 1, noassist: 1, nosleeptalk: 1 },
		onHit(target) {
									const moves = [];
									for (const pokemon of target.side.pokemon) {
										if (pokemon === target) continue;
										for (const moveSlot of pokemon.moveSlots) {
											const moveid = moveSlot.id;
											const move = this.dex.moves.get(moveid);
											if (
												move.flags['noassist'] ||
												(this.field.pseudoWeather['gravity'] && move.flags['gravity']) ||
												(target.volatiles['healblock'] && move.flags['heal'])
											) {
												continue;
											}
											moves.push(moveid);
										}
									}
									let randomMove = '';
									if (moves.length) randomMove = this.sample(moves);
									if (!randomMove) {
										return false;
									}
									this.actions.useMove(randomMove, target);
								},
		callsMove: true,
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"astonish": {
		num: 310,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Astonish",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, minimize: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Ghost",
		contestType: "Cute"
	},
	"attract": {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Attract",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'attract',
		condition: {
									noCopy: true, // doesn't get copied by Baton Pass
									onStart(pokemon, source, effect) {
										if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
											this.debug('incompatible gender');
											return false;
										}
										if (!this.runEvent('Attract', pokemon, source)) {
											this.debug('Attract event failed');
											return false;
										}

										if (effect.name === 'Cute Charm') {
											this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', `[of] ${source}`);
										} else if (effect.name === 'Destiny Knot') {
											this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', `[of] ${source}`);
										} else {
											this.add('-start', pokemon, 'Attract');
										}
									},
									onUpdate(pokemon) {
										if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
											this.debug(`Removing Attract volatile on ${pokemon}`);
											pokemon.removeVolatile('attract');
										}
									},
									onBeforeMovePriority: 2,
									onBeforeMove(pokemon, target, move) {
										this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
										if (this.randomChance(1, 2)) {
											this.add('cant', pokemon, 'Attract');
											return false;
										}
									},
									onEnd(pokemon) {
										this.add('-end', pokemon, 'Attract', '[silent]');
									},
								},
		onTryImmunity(target, source) {
									return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"aurorabeam": {
		num: 62,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Aurora Beam",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										atk: -1,
									},
								},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"barrage": {
		num: 140,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: null,
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"barrier": {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Barrier",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 2,
								},
		target: "self",
		type: "Psychic",
		contestType: "Cool"
	},
	"batonpass": {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baton Pass",
		pp: 40,
		priority: 0,
		flags: { metronome: 1 },
		onHit(target) {
									if (!this.canSwitch(target.side) || target.volatiles['commanded']) {
										this.attrLastMove('[still]');
										this.add('-fail', target);
										return this.NOT_FAIL;
									}
								},
		self: {
									onHit(source) {
										source.skipPursuit = true;
									},
								},
		selfSwitch: 'copyvolatile',
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"beatup": {
		num: 251,
		accuracy: 100,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
									if (!move.allies?.length) return null;
									return 10;
								},
		category: "Physical",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, allyanim: 1, metronome: 1 },
		onModifyMove(move, pokemon) {
									pokemon.addVolatile('beatup');
									move.type = '???';
									move.category = 'Special';
									move.allies = pokemon.side.pokemon.filter(ally => !ally.fainted && !ally.status);
									move.multihit = move.allies.length;
								},
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		condition: {
									duration: 1,
									onModifySpAPriority: -101,
									onModifySpA(atk, pokemon, defender, move) {
										if (!this.ruleTable.has('beatupnicknamesmod')) {
											this.add('-activate', pokemon, 'move: Beat Up', '[of] ' + move.allies![0].name);
										}
										this.event.modifier = 1;
										return this.dex.species.get(move.allies!.shift()!.set.species).baseStats.atk;
									},
									onFoeModifySpDPriority: -101,
									onFoeModifySpD(def, pokemon) {
										this.event.modifier = 1;
										return this.dex.species.get(pokemon.set.species).baseStats.def;
									},
								}
	},
	"bellydrum": {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onHit(target) {
									if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
										return false;
									}
									this.directDamage(target.maxhp / 2);
									this.boost({ atk: 12 }, target);
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"bide": {
		num: 117,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: null,
		name: "Bide",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
		volatileStatus: 'bide',
		ignoreImmunity: true,
		beforeMoveCallback(pokemon) {
									if (pokemon.volatiles['bide']) return true;
								},
		condition: {
									duration: 3,
									onLockMove: 'bide',
									onStart(pokemon) {
													this.effectState.totalDamage = 0;
													this.add('-start', pokemon, 'move: Bide');
												},
									onDamagePriority: -101,
									onDamage(damage, target, source, move) {
													if (move?.effectType !== 'Move' || !source) return;
													this.effectState.totalDamage += damage;
													this.effectState.lastDamageSource = source;
												},
									onBeforeMove(pokemon, target, move) {
													if (this.effectState.duration === 1) {
														this.add('-end', pokemon, 'move: Bide');
														if (!this.effectState.totalDamage) {
															this.add('-fail', pokemon);
															return false;
														}
														target = this.effectState.lastDamageSource;
														if (!target) {
															this.add('-fail', pokemon);
															return false;
														}
														if (!target.isActive) {
															const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
															if (!possibleTarget) {
																this.add('-miss', pokemon);
																return false;
															}
															target = possibleTarget;
														}
														const moveData = {
															id: 'bide' as ID,
															name: "Bide",
															accuracy: 100,
															damage: this.effectState.totalDamage * 2,
															category: "Physical",
															priority: 0,
															flags: { contact: 1, protect: 1 },
															effectType: 'Move',
															type: 'Normal',
														} as unknown as ActiveMove;
														this.actions.tryMoveHit(target, pokemon, moveData);
														pokemon.removeVolatile('bide');
														return false;
													}
													this.add('-activate', pokemon, 'move: Bide');
												},
									onMoveAborted(pokemon) {
													pokemon.removeVolatile('bide');
												},
									onEnd(pokemon) {
													this.add('-end', pokemon, 'move: Bide', '[silent]');
												},
									onAfterSetStatus: undefined
								},
		target: "self",
		type: "Normal",
		contestType: "Tough"
	},
	"bind": {
		num: 20,
		accuracy: 75,
		basePower: 15,
		category: "Physical",
		name: "Bind",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"bite": {
		num: 44,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bite",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Dark",
		contestType: "Tough"
	},
	"blastburn": {
		num: 307,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Blast Burn",
		pp: 5,
		priority: 0,
		flags: { recharge: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									volatileStatus: 'mustrecharge',
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"blazekick": {
		num: 299,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Cool"
	},
	"blizzard": {
		num: 59,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Blizzard",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
		onModifyMove: undefined,
		secondary: {
									chance: 10,
									status: 'frz',
								},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful"
	},
	"block": {
		num: 335,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Block",
		pp: 5,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		onHit(target, source, move) {
									return target.addVolatile('trapped', source, move, 'trapper');
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"bodyslam": {
		num: 34,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Body Slam",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"boneclub": {
		num: 125,
		accuracy: 85,
		basePower: 65,
		category: "Physical",
		isNonstandard: null,
		name: "Bone Club",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"bonemerang": {
		num: 155,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		isNonstandard: null,
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: 2,
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"bonerush": {
		num: 198,
		accuracy: 80,
		basePower: 25,
		category: "Physical",
		name: "Bone Rush",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"bounce": {
		num: 340,
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: { contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, metronome: 1, nosleeptalk: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		condition: {
									duration: 2,
									onInvulnerability(target, source, move) {
										if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
											return;
										}
										return false;
									},
									onSourceBasePower(basePower, target, source, move) {
										if (move.id === 'gust' || move.id === 'twister') {
											return this.chainModify(2);
										}
									},
								},
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "any",
		type: "Flying",
		contestType: "Cute"
	},
	"brickbreak": {
		num: 280,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryHit(target, source) {
									// will shatter screens through sub, before you hi
									const foe = source.side.foe;
									foe.removeSideCondition('reflect');
									foe.removeSideCondition('lightscreen');
								},
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"bubble": {
		num: 145,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		isNonstandard: null,
		name: "Bubble",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										spe: -1,
									},
								},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cute"
	},
	"bubblebeam": {
		num: 61,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Bubble Beam",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										spe: -1,
									},
								},
		target: "normal",
		type: "Water",
		contestType: "Beautiful"
	},
	"bulkup": {
		num: 339,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulk Up",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									atk: 1,
									def: 1,
								},
		target: "self",
		type: "Fighting",
		contestType: "Cool"
	},
	"bulletseed": {
		num: 331,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		name: "Bullet Seed",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Grass",
		contestType: "Cool"
	},
	"calmmind": {
		num: 347,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calm Mind",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									spa: 1,
									spd: 1,
								},
		target: "self",
		type: "Psychic",
		contestType: "Clever"
	},
	"camouflage": {
		num: 293,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Camouflage",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onHit(target) {
									if (target.hasType('Normal') || !target.setType('Normal')) return false;
									this.add('-start', target, 'typechange', 'Normal');
								},
		target: "self",
		type: "Normal",
		contestType: "Clever"
	},
	"charge": {
		num: 268,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Charge",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		volatileStatus: 'charge',
		condition: {
									onStart(pokemon, source, effect) {
													if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
														this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
													} else {
														this.add('-start', pokemon, 'Charge');
													}
												},
									onRestart(pokemon, source, effect) {
													if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
														this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
													} else {
														this.add('-start', pokemon, 'Charge');
													}
												},
									onBasePowerPriority: 9,
									onBasePower(basePower, attacker, defender, move) {
													if (move.type === 'Electric') {
														this.debug('charge boost');
														return this.chainModify(2);
													}
												},
									onMoveAborted(pokemon, target, move) {
													if (move.id !== 'charge') {
														pokemon.removeVolatile('charge');
													}
												},
									onAfterMove(pokemon, target, move) {
													if (move.id !== 'charge') {
														pokemon.removeVolatile('charge');
													}
												},
									onEnd(pokemon) {
													this.add('-end', pokemon, 'Charge', '[silent]');
												}
								},
		boosts: undefined,
		target: "self",
		type: "Electric",
		contestType: "Clever"
	},
	"charm": {
		num: 204,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Charm",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		boosts: {
									atk: -2,
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"clamp": {
		num: 128,
		accuracy: 75,
		basePower: 35,
		category: "Physical",
		isNonstandard: null,
		name: "Clamp",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Water",
		contestType: "Tough"
	},
	"cometpunch": {
		num: 4,
		accuracy: 85,
		basePower: 18,
		category: "Physical",
		isNonstandard: null,
		name: "Comet Punch",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"confuseray": {
		num: 109,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Confuse Ray",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'confusion',
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"confusion": {
		num: 93,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Confusion",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'confusion',
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"constrict": {
		num: 132,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		isNonstandard: null,
		name: "Constrict",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										spe: -1,
									},
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"conversion": {
		num: 160,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion",
		pp: 30,
		priority: 0,
		flags: { metronome: 1 },
		onHit(target) {
									const possibleTypes = target.moveSlots.map(moveSlot => {
										const move = this.dex.moves.get(moveSlot.id);
										if (move.id !== 'curse' && !target.hasType(move.type)) {
											return move.type;
										}
										return '';
									}).filter(type => type);
									if (!possibleTypes.length) {
										return false;
									}
									const type = this.sample(possibleTypes);

									if (!target.setType(type)) return false;
									this.add('-start', target, 'typechange', type);
								},
		target: "self",
		type: "Normal",
		contestType: "Beautiful"
	},
	"conversion2": {
		num: 176,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion 2",
		pp: 30,
		priority: 0,
		flags: { bypasssub: 1, metronome: 1 },
		onHit(target, source) {
									if (!target.lastMoveUsed) {
										return false;
									}
									const possibleTypes = [];
									const lastMoveUsed = target.lastMoveUsed;
									const attackType = lastMoveUsed.id === 'struggle' ? 'Normal' : lastMoveUsed.type;
									for (const typeName of this.dex.types.names()) {
										const typeCheck = this.dex.types.get(typeName).damageTaken[attackType];
										if (typeCheck === 2 || typeCheck === 3) {
											possibleTypes.push(typeName);
										}
									}
									if (!possibleTypes.length) {
										return false;
									}
									const randomType = this.sample(possibleTypes);

									if (!source.setType(randomType)) return false;
									this.add('-start', source, 'typechange', randomType);
								},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"cosmicpower": {
		num: 322,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cosmic Power",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 1,
									spd: 1,
								},
		target: "self",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"cottonspore": {
		num: 178,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Cotton Spore",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
		boosts: {
									spe: -2,
								},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		onTryHit: undefined
	},
	"counter": {
		num: 68,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
									if (!pokemon.volatiles['counter']) return 0;
									return pokemon.volatiles['counter'].damage || 1;
								},
		category: "Physical",
		name: "Counter",
		pp: 20,
		priority: -5,
		flags: { contact: 1, protect: 1, failmefirst: 1, noassist: 1, failcopycat: 1 },
		beforeTurnCallback(pokemon) {
									pokemon.addVolatile('counter');
								},
		onTry(source) {
									if (!source.volatiles['counter']) return false;
									if (source.volatiles['counter'].slot === null) return false;
								},
		condition: {
									duration: 1,
									noCopy: true,
									onStart(target, source, move) {
													this.effectState.slot = null;
													this.effectState.damage = 0;
												},
									onRedirectTargetPriority: -1,
									onRedirectTarget(target, source, source2) {
													if (source !== this.effectState.target || !this.effectState.slot) return;
													return this.getAtSlot(this.effectState.slot);
												},
									onDamagingHit: undefined,
									onDamagePriority: -101,
									onDamage(damage, target, source, effect) {
													if (
														effect.effectType === 'Move' && !source.isAlly(target) &&
														(effect.category === 'Physical' || effect.id === 'hiddenpower')
													) {
														this.effectState.slot = source.getSlot();
														this.effectState.damage = 2 * damage;
													}
												}
								},
		target: "scripted",
		type: "Fighting",
		contestType: "Tough"
	},
	"covet": {
		num: 343,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Covet",
		pp: 40,
		priority: 0,
		flags: { protect: 1, mirror: 1, noassist: 1 },
		onAfterHit(target, source, move) {
									if (source.item || source.volatiles['gem']) {
										return;
									}
									const yourItem = target.takeItem(source);
									if (!yourItem) {
										return;
									}
									if (
										!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
										!source.setItem(yourItem)
									) {
										target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
										return;
									}
									this.add('-item', source, yourItem, '[from] move: Covet', `[of] ${target}`);
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"crabhammer": {
		num: 152,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		name: "Crabhammer",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		target: "normal",
		type: "Water",
		contestType: "Tough"
	},
	"crosschop": {
		num: 238,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Cross Chop",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"crunch": {
		num: 242,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crunch",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
		secondary: {
									chance: 20,
									boosts: {
										spd: -1,
									},
								},
		target: "normal",
		type: "Dark",
		contestType: "Tough"
	},
	"crushclaw": {
		num: 306,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Crush Claw",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 50,
									boosts: {
										def: -1,
									},
								},
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"curse": {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: { metronome: 1 },
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
									if (!source.hasType('Ghost')) {
										delete move.volatileStatus;
										delete move.onHit;
										move.self = { boosts: { atk: 1, def: 1, spe: -1 } };
										move.target = 'self';
									} else if (target?.volatiles['substitute']) {
										delete move.volatileStatus;
										delete move.onHit;
									}
								},
		onTryHit(target, source, move) {
									if (!source.hasType('Ghost')) {
										delete move.volatileStatus;
										delete move.onHit;
										move.self = { boosts: { spe: -1, atk: 1, def: 1 } };
									} else if (move.volatileStatus && target.volatiles['curse']) {
										return false;
									}
								},
		onHit(target, source) {
									this.directDamage(source.maxhp / 2, source, source);
								},
		condition: {
									onStart(pokemon, source) {
													this.add('-start', pokemon, 'Curse', `[of] ${source}`);
												},
									onResidualOrder: 10,
									onResidual(pokemon) {
													this.damage(pokemon.baseMaxhp / 4);
												},
									onResidualSubOrder: 8
								},
		target: "normal",
		type: "???",
		contestType: "Tough"
	},
	"cut": {
		num: 15,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		isNonstandard: null,
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"defensecurl": {
		num: 111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defense Curl",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 1,
								},
		volatileStatus: 'defensecurl',
		condition: {
									noCopy: true,
									onRestart: () => null,
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"destinybond": {
		num: 194,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Destiny Bond",
		pp: 5,
		priority: 0,
		flags: { bypasssub: 1, noassist: 1, failcopycat: 1 },
		volatileStatus: 'destinybond',
		onPrepareHit(pokemon) {
									pokemon.removeVolatile('destinybond');
								},
		condition: {
									noCopy: true, // doesn't get copied by Baton Pass
									onStart(pokemon) {
										this.add('-singlemove', pokemon, 'Destiny Bond');
									},
									onFaint(target, source, effect) {
										if (!source?.hp || !effect || target.isAlly(source)) return;
										if (effect.effectType === 'Move' && !effect.flags['futuremove']) {
											if (source.volatiles['dynamax']) {
												this.add('-hint', "Dynamaxed Pokémon are immune to Destiny Bond.");
												return;
											}
											this.add('-activate', target, 'move: Destiny Bond');
											source.faint();
										}
									},
									onBeforeMovePriority: -1,
									onBeforeMove(pokemon, target, move) {
										if (move.id === 'destinybond') return;
										this.debug('removing Destiny Bond before attack');
										pokemon.removeVolatile('destinybond');
									},
									onMoveAborted(pokemon, target, move) {
										pokemon.removeVolatile('destinybond');
									},
								},
		target: "self",
		type: "Ghost",
		contestType: "Clever"
	},
	"detect": {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Detect",
		pp: 5,
		priority: 3,
		flags: { noassist: 1, failcopycat: 1 },
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
									return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
								},
		onHit(pokemon) {
									pokemon.addVolatile('stall');
								},
		target: "self",
		type: "Fighting",
		contestType: "Cool"
	},
	"dig": {
		num: 91,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Dig",
		pp: 10,
		priority: 0,
		flags: { contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1, nosleeptalk: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		condition: {
									duration: 2,
									onImmunity(type, pokemon) {
										if (type === 'sandstorm' || type === 'hail') return false;
									},
									onInvulnerability(target, source, move) {
										if (['earthquake', 'magnitude'].includes(move.id)) {
											return;
										}
										return false;
									},
									onSourceModifyDamage(damage, source, target, move) {
										if (move.id === 'earthquake' || move.id === 'magnitude') {
											return this.chainModify(2);
										}
									},
								},
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"disable": {
		num: 50,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'disable',
		onTryHit(target) {
									if (
										target.lastMove === null || target.lastMove.isZOrMaxPowered ||
										target.lastMove.isMax || target.lastMove.id === 'struggle'
									) {
										return false;
									}
								},
		condition: {
									duration: undefined,
									noCopy: true,
									onStart(pokemon) {
													if (!this.queue.willMove(pokemon)) {
														this.effectState.duration!++;
													}
													if (!pokemon.lastMove) {
														return false;
													}
													for (const moveSlot of pokemon.moveSlots) {
														if (moveSlot.id === pokemon.lastMove.id) {
															if (!moveSlot.pp) {
																return false;
															} else {
																this.add('-start', pokemon, 'Disable', moveSlot.move);
																this.effectState.move = pokemon.lastMove.id;
																return;
															}
														}
													}
													return false;
												},
									"onResidualOrder": undefined,
									onEnd(pokemon) {
													this.add('-end', pokemon, 'Disable');
												},
									onBeforeMovePriority: 7,
									onBeforeMove(attacker, defender, move) {
													if (!(move.isZ && move.isZOrMaxPowered) && move.id === this.effectState.move) {
														this.add('cant', attacker, 'Disable', move);
														return false;
													}
												},
									onDisableMove(pokemon) {
													for (const moveSlot of pokemon.moveSlots) {
														if (moveSlot.id === this.effectState.move) {
															pokemon.disableMove(moveSlot.id);
														}
													}
												},
									durationCallback() {
													return this.random(2, 6);
												},
									"onResidualSubOrder": undefined
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"dive": {
		num: 291,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Dive",
		pp: 10,
		priority: 0,
		flags: { contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1, nosleeptalk: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
										const forme = attacker.hp <= attacker.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
										attacker.formeChange(forme, move);
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		condition: {
									duration: 2,
									onImmunity(type, pokemon) {
										if (type === 'sandstorm' || type === 'hail') return false;
									},
									onInvulnerability(target, source, move) {
										if (['surf', 'whirlpool'].includes(move.id)) {
											return;
										}
										return false;
									},
									onSourceModifyDamage(damage, source, target, move) {
										if (move.id === 'surf' || move.id === 'whirlpool') {
											return this.chainModify(2);
										}
									},
								},
		target: "normal",
		type: "Water",
		contestType: "Beautiful"
	},
	"dizzypunch": {
		num: 146,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: null,
		name: "Dizzy Punch",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 20,
									volatileStatus: 'confusion',
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"doomdesire": {
		num: 353,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		name: "Doom Desire",
		pp: 5,
		priority: 0,
		flags: { metronome: 1, futuremove: 1 },
		onTry(source, target) {
									if (!target.side.addSlotCondition(target, 'futuremove')) return false;
									const moveData = {
										name: "Doom Desire",
										basePower: 120,
										category: "Physical",
										flags: { metronome: 1, futuremove: 1 },
										willCrit: false,
										type: '???',
									} as unknown as ActiveMove;
									const damage = this.actions.getDamage(source, target, moveData, true);
									Object.assign(target.side.slotConditions[target.position]['futuremove'], {
										duration: 3,
										move: 'doomdesire',
										source,
										moveData: {
											id: 'doomdesire',
											name: "Doom Desire",
											accuracy: 85,
											basePower: 0,
											damage,
											category: "Physical",
											flags: { metronome: 1, futuremove: 1 },
											effectType: 'Move',
											type: '???',
										},
									});
									this.add('-start', source, 'Doom Desire');
									return null;
								},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful"
	},
	"doubleedge": {
		num: 38,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Double-Edge",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		recoil: [1, 3],
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"doublekick": {
		num: 24,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Double Kick",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: 2,
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"doubleslap": {
		num: 3,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: null,
		name: "Double Slap",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"doubleteam": {
		num: 104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Double Team",
		pp: 15,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									evasion: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Cool"
	},
	"dragonbreath": {
		num: 225,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon Breath",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Dragon",
		contestType: "Cool"
	},
	"dragonclaw": {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Dragon",
		contestType: "Cool"
	},
	"dragondance": {
		num: 349,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dragon Dance",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, dance: 1, metronome: 1 },
		boosts: {
									atk: 1,
									spe: 1,
								},
		target: "self",
		type: "Dragon",
		contestType: "Cool"
	},
	"dragonrage": {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
		isNonstandard: null,
		name: "Dragon Rage",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Dragon",
		contestType: "Cool"
	},
	"dreameater": {
		num: 138,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dream Eater",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		onTryImmunity(target) {
									return target.status === 'slp' && !target.volatiles['substitute'];
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"drillpeck": {
		num: 65,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drill Peck",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1 },
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"dynamicpunch": {
		num: 223,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		name: "Dynamic Punch",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 100,
									volatileStatus: 'confusion',
								},
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"earthquake": {
		num: 89,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Earthquake",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough"
	},
	"eggbomb": {
		num: 121,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		isNonstandard: null,
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"ember": {
		num: 52,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Ember",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Cute"
	},
	"encore": {
		num: 227,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Encore",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1, failencore: 1 },
		volatileStatus: 'encore',
		condition: {
									duration: undefined,
									noCopy: true,
									onStart(target, source) {
													const moveSlot = target.lastMove ? target.getMoveData(target.lastMove.id) : null;
													if (target.lastMove === null || target.lastMove.flags['failencore'] || !moveSlot || moveSlot.pp <= 0) {
														// it failed
														return false;
													}
													this.effectState.move = target.lastMove.id;
													this.add('-start', target, 'Encore');
													if (this.effectState.move === 'pursuit') {
														target.addVolatile('pursuit', target, this.dex.getActiveMove('pursuit'));
													}
												},
									onOverrideAction(pokemon, target, move) {
													if (move.id !== this.effectState.move) return this.effectState.move;
												},
									onResidualOrder: 10,
									onResidual(target) {
													const moveSlot = target.getMoveData(this.effectState.move);
													if (!moveSlot || moveSlot.pp <= 0) {
														// early termination if you run out of PP
														target.removeVolatile('encore');
													}
												},
									onEnd(target) {
													this.add('-end', target, 'Encore');
												},
									onDisableMove(pokemon) {
													if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
														return;
													}
													for (const moveSlot of pokemon.moveSlots) {
														if (moveSlot.id !== this.effectState.move) {
															pokemon.disableMove(moveSlot.id);
														}
													}
												},
									durationCallback() {
													return this.random(3, 7);
												},
									onResidualSubOrder: 14
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"endeavor": {
		num: 283,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
									return target.getUndynamaxedHP() - pokemon.hp;
								},
		category: "Physical",
		name: "Endeavor",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, noparentalbond: 1 },
		onTryImmunity(target, pokemon) {
									return pokemon.hp < target.hp;
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		onTry(pokemon, target) {
									if (pokemon.hp >= target.hp) {
										this.add('-fail', pokemon);
										return null;
									}
								}
	},
	"endure": {
		num: 203,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Endure",
		pp: 10,
		priority: 4,
		flags: { noassist: 1, failcopycat: 1 },
		stallingMove: true,
		volatileStatus: 'endure',
		onPrepareHit(pokemon) {
									return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
								},
		onHit(pokemon) {
									pokemon.addVolatile('stall');
								},
		condition: {
									duration: 1,
									onStart(target) {
													this.add('-singleturn', target, 'move: Endure');
												},
									onDamagePriority: -10,
									onDamage(damage, target, source, effect) {
													if (effect?.effectType === 'Move' && !effect?.flags['futuremove'] && damage >= target.hp) {
														this.add('-activate', target, 'move: Endure');
														return target.hp - 1;
													}
												}
								},
		target: "self",
		type: "Normal",
		contestType: "Tough"
	},
	"eruption": {
		num: 284,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
									const bp = move.basePower * pokemon.hp / pokemon.maxhp;
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Special",
		name: "Eruption",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful"
	},
	"explosion": {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, noparentalbond: 1 },
		selfdestruct: "always",
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful"
	},
	"extrasensory": {
		num: 326,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Extrasensory",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, minimize: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Psychic",
		contestType: "Cool"
	},
	"extremespeed": {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Extreme Speed",
		pp: 5,
		priority: 1,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"facade": {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onBasePower(basePower, pokemon) {
									if (pokemon.status && pokemon.status !== 'slp') {
										return this.chainModify(2);
									}
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"fakeout": {
		num: 252,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Fake Out",
		pp: 10,
		priority: 1,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTry(source) {
									if (source.activeMoveActions > 1) {
										this.hint("Fake Out only works on your first turn out.");
										return false;
									}
								},
		secondary: {
									chance: 100,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"faketears": {
		num: 313,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fake Tears",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		boosts: {
									spd: -2,
								},
		target: "normal",
		type: "Dark",
		contestType: "Cute"
	},
	"falseswipe": {
		num: 206,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "False Swipe",
		pp: 40,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
									if (damage >= target.hp) return target.hp - 1;
								},
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"featherdance": {
		num: 297,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Feather Dance",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, dance: 1, allyanim: 1, metronome: 1 },
		boosts: {
									atk: -2,
								},
		target: "normal",
		type: "Flying",
		contestType: "Beautiful"
	},
	"feintattack": {
		num: 185,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: null,
		name: "Feint Attack",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"fireblast": {
		num: 126,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		name: "Fire Blast",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"firepunch": {
		num: 7,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fire Punch",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Tough"
	},
	"firespin": {
		num: 83,
		accuracy: 70,
		basePower: 15,
		category: "Special",
		name: "Fire Spin",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"fissure": {
		num: 90,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		ohko: true,
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"flail": {
		num: 175,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
									const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
									let bp;
									if (ratio < 2) {
										bp = 200;
									} else if (ratio < 5) {
										bp = 150;
									} else if (ratio < 10) {
										bp = 100;
									} else if (ratio < 17) {
										bp = 80;
									} else if (ratio < 33) {
										bp = 40;
									} else {
										bp = 20;
									}
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		name: "Flail",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"flamethrower": {
		num: 53,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Flamethrower",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"flamewheel": {
		num: 172,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flame Wheel",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, defrost: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"flash": {
		num: 148,
		accuracy: 70,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									accuracy: -1,
								},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"flatter": {
		num: 260,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flatter",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		volatileStatus: 'confusion',
		boosts: {
									spa: 1,
								},
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"fly": {
		num: 19,
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: { contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, metronome: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		condition: {
									duration: 2,
									onInvulnerability(target, source, move) {
										if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
											return;
										}
										return false;
									},
									onSourceModifyDamage(damage, source, target, move) {
										if (move.id === 'gust' || move.id === 'twister') {
											return this.chainModify(2);
										}
									},
								},
		target: "any",
		type: "Flying",
		contestType: "Clever"
	},
	"focusenergy": {
		num: 116,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Focus Energy",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		volatileStatus: 'focusenergy',
		condition: {
									onStart(target, source, effect) {
										if (target.volatiles['dragoncheer']) return false;
										if (effect?.id === 'zpower') {
											this.add('-start', target, 'move: Focus Energy', '[zeffect]');
										} else if (effect && (['costar', 'imposter', 'psychup', 'transform'].includes(effect.id))) {
											this.add('-start', target, 'move: Focus Energy', '[silent]');
										} else {
											this.add('-start', target, 'move: Focus Energy');
										}
									},
									onModifyCritRatio(critRatio) {
										return critRatio + 2;
									},
								},
		target: "self",
		type: "Normal",
		contestType: "Cool"
	},
	"focuspunch": {
		num: 264,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Focus Punch",
		pp: 20,
		priority: -3,
		flags: {
									contact: 1, protect: 1, punch: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1,
								},
		priorityChargeCallback: undefined,
		beforeMoveCallback: undefined,
		condition: {
									duration: 1,
									onStart(pokemon) {
										this.add('-singleturn', pokemon, 'move: Focus Punch');
									},
									onHit(pokemon, source, move) {
										if (move.category !== 'Status') {
											this.effectState.lostFocus = true;
										}
									},
									onTryAddVolatile(status, pokemon) {
										if (status.id === 'flinch') return null;
									},
								},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		beforeTurnCallback(pokemon) {
									pokemon.addVolatile('focuspunch');
								},
		onTry(pokemon) {
									if (pokemon.volatiles['focuspunch']?.lostFocus) {
										this.attrLastMove('[still]');
										this.add('cant', pokemon, 'Focus Punch', 'Focus Punch');
										return null;
									}
								}
	},
	"followme": {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Follow Me",
		pp: 20,
		priority: 3,
		flags: { noassist: 1, failcopycat: 1 },
		volatileStatus: undefined,
		onTry(source) {
									return this.activePerHalf > 1;
								},
		condition: {
									duration: 1,
									onStart(target, source, effect) {
													this.add('-singleturn', target, 'move: Follow Me');
													this.effectState.slot = target.getSlot();
												},
									onFoeRedirectTargetPriority: 1,
									onFoeRedirectTarget(target, source, source2, move) {
													const userSlot = this.getAtSlot(this.effectState.slot);
													if (this.validTarget(userSlot, source, move.target)) {
														return userSlot;
													}
												}
								},
		target: "self",
		type: "Normal",
		contestType: "Cute",
		slotCondition: 'followme'
	},
	"foresight": {
		num: 193,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Foresight",
		pp: 40,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'foresight',
		onTryHit(target) {
									if (target.volatiles['miracleeye']) return false;
								},
		condition: {
									noCopy: true,
									onStart(pokemon) {
										this.add('-start', pokemon, 'Foresight');
									},
									onNegateImmunity(pokemon, type) {
										if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
									},
									onModifyBoost(boosts) {
										if (boosts.evasion && boosts.evasion > 0) {
											boosts.evasion = 0;
										}
									},
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"frenzyplant": {
		num: 338,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Frenzy Plant",
		pp: 5,
		priority: 0,
		flags: { recharge: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		self: {
									volatileStatus: 'mustrecharge',
								},
		target: "normal",
		type: "Grass",
		contestType: "Cool"
	},
	"frustration": {
		num: 218,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
									return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"furyattack": {
		num: 31,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Fury Attack",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"furycutter": {
		num: 210,
		accuracy: 95,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
									if (!pokemon.volatiles['furycutter'] || move.hit === 1) {
										pokemon.addVolatile('furycutter');
									}
									const bp = this.clampIntRange(move.basePower * pokemon.volatiles['furycutter'].multiplier, 1, 160);
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		name: "Fury Cutter",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		condition: {
									duration: 2,
									onStart() {
													this.effectState.multiplier = 1;
												},
									onRestart() {
													if (this.effectState.multiplier < 16) {
														this.effectState.multiplier <<= 1;
													}
													this.effectState.duration = 2;
												}
								},
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		onHit(target, source) {
									source.addVolatile('furycutter');
								}
	},
	"furyswipes": {
		num: 154,
		accuracy: 80,
		basePower: 18,
		category: "Physical",
		name: "Fury Swipes",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"futuresight": {
		num: 248,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Future Sight",
		pp: 15,
		priority: 0,
		flags: { metronome: 1, futuremove: 1 },
		ignoreImmunity: true,
		onTry(source, target) {
									if (!target.side.addSlotCondition(target, 'futuremove')) return false;
									const moveData = {
										name: "Future Sight",
										basePower: 80,
										category: "Special",
										flags: { metronome: 1, futuremove: 1 },
										willCrit: false,
										type: '???',
									} as unknown as ActiveMove;
									const damage = this.actions.getDamage(source, target, moveData, true);
									Object.assign(target.side.slotConditions[target.position]['futuremove'], {
										duration: 3,
										move: 'futuresight',
										source,
										moveData: {
											id: 'futuresight',
											name: "Future Sight",
											accuracy: 90,
											basePower: 0,
											damage,
											category: "Special",
											flags: { metronome: 1, futuremove: 1 },
											effectType: 'Move',
											type: '???',
										},
									});
									this.add('-start', source, 'Future Sight');
									return null;
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"gigadrain": {
		num: 202,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Giga Drain",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"glare": {
		num: 137,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Glare",
		pp: 30,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'par',
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		ignoreImmunity: false
	},
	"grasswhistle": {
		num: 320,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		status: 'slp',
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"growl": {
		num: 45,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Growl",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		boosts: {
									atk: -1,
								},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cute"
	},
	"growth": {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onModifyMove: undefined,
		boosts: {
									spa: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Beautiful"
	},
	"grudge": {
		num: 288,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Grudge",
		pp: 5,
		priority: 0,
		flags: { bypasssub: 1, metronome: 1 },
		volatileStatus: 'grudge',
		condition: {
									onStart(pokemon) {
										this.add('-singlemove', pokemon, 'Grudge');
									},
									onFaint(target, source, effect) {
										if (!source?.hp || !effect) return;
										if (effect.effectType === 'Move' && !effect.flags['futuremove'] && source.lastMove) {
											let move: Move = source.lastMove;
											if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

											for (const moveSlot of source.moveSlots) {
												if (moveSlot.id === move.id) {
													moveSlot.pp = 0;
													this.add('-activate', source, 'move: Grudge', move.name);
												}
											}
										}
									},
									onBeforeMovePriority: 100,
									onBeforeMove(pokemon) {
										this.debug('removing Grudge before attack');
										pokemon.removeVolatile('grudge');
									},
								},
		target: "self",
		type: "Ghost",
		contestType: "Tough"
	},
	"guillotine": {
		num: 12,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Guillotine",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		ohko: true,
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"gust": {
		num: 16,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Gust",
		pp: 35,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, wind: 1 },
		target: "any",
		type: "Flying",
		contestType: "Clever"
	},
	"hail": {
		num: 258,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Hail",
		pp: 10,
		priority: 0,
		flags: { metronome: 1 },
		weather: 'hail',
		target: "all",
		type: "Ice",
		contestType: "Beautiful"
	},
	"harden": {
		num: 106,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Harden",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Tough"
	},
	"haze": {
		num: 114,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Haze",
		pp: 30,
		priority: 0,
		flags: { bypasssub: 1, metronome: 1 },
		onHitField() {
									this.add('-clearallboost');
									for (const pokemon of this.getAllActive()) {
										pokemon.clearBoosts();
									}
								},
		target: "all",
		type: "Ice",
		contestType: "Beautiful"
	},
	"headbutt": {
		num: 29,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Headbutt",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"healbell": {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Bell",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, sound: 1, metronome: 1 },
		onHit(target, source) {
									this.add('-activate', source, 'move: Heal Bell');
									const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
									for (const ally of allies) {
										if (ally.hasAbility('soundproof') && !this.suppressingAbility(ally)) {
											if (ally.isActive) this.add('-immune', ally, '[from] ability: Soundproof');
											continue;
										}
										ally.cureStatus(true);
									}
								},
		target: "allyTeam",
		type: "Normal",
		contestType: "Beautiful"
	},
	"heatwave": {
		num: 257,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Heat Wave",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
		secondary: {
									chance: 10,
									status: 'brn',
								},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful"
	},
	"helpinghand": {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Helping Hand",
		pp: 20,
		priority: 5,
		flags: { bypasssub: 1, noassist: 1, failcopycat: 1 },
		volatileStatus: 'helpinghand',
		onTryHit(target) {
									if (!target.newlySwitched && !this.queue.willMove(target)) return false;
								},
		condition: {
									duration: 1,
									onStart(target, source) {
										this.effectState.multiplier = 1.5;
										this.add('-singleturn', target, 'Helping Hand', `[of] ${source}`);
									},
									onRestart(target, source) {
										this.effectState.multiplier *= 1.5;
										this.add('-singleturn', target, 'Helping Hand', `[of] ${source}`);
									},
									onBasePowerPriority: 10,
									onBasePower(basePower) {
										this.debug('Boosting from Helping Hand: ' + this.effectState.multiplier);
										return this.chainModify(this.effectState.multiplier);
									},
								},
		target: "adjacentAlly",
		type: "Normal",
		contestType: "Clever"
	},
	"hiddenpower": {
		num: 237,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: null,
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onModifyType(move, pokemon) {
									move.type = pokemon.hpType || 'Dark';
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		basePowerCallback(pokemon) {
									const bp = pokemon.hpPower || 70;
									this.debug(`BP: ${bp}`);
									return bp;
								},
		onModifyMove(move, pokemon) {
									move.type = pokemon.hpType || 'Dark';
									const specialTypes = ['Fire', 'Water', 'Grass', 'Ice', 'Electric', 'Dark', 'Psychic', 'Dragon'];
									move.category = specialTypes.includes(move.type) ? 'Special' : 'Physical';
								}
	},
	"hiddenpowerbug": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Bug",
		contestType: "Clever"
	},
	"hiddenpowerdark": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"hiddenpowerdragon": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Dragon",
		contestType: "Clever"
	},
	"hiddenpowerelectric": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Electric",
		contestType: "Clever"
	},
	"hiddenpowerfighting": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Clever"
	},
	"hiddenpowerfire": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Fire",
		contestType: "Clever"
	},
	"hiddenpowerflying": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Flying",
		contestType: "Clever"
	},
	"hiddenpowerghost": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"hiddenpowergrass": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"hiddenpowerground": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Ground",
		contestType: "Clever"
	},
	"hiddenpowerice": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Ice",
		contestType: "Clever"
	},
	"hiddenpowerpoison": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	"hiddenpowerpsychic": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"hiddenpowerrock": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Rock",
		contestType: "Clever"
	},
	"hiddenpowersteel": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Steel",
		contestType: "Clever"
	},
	"hiddenpowerwater": {
		num: 237,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		placeholderFor: "Hidden Power",
		isNonstandard: null,
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		target: "normal",
		type: "Water",
		contestType: "Clever"
	},
	"highjumpkick": {
		num: 136,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "High Jump Kick",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, metronome: 1 },
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
									if (target.runImmunity('Fighting')) {
										const damage = this.actions.getDamage(source, target, move, true);
										if (typeof damage !== 'number') throw new Error("HJK recoil failed");
										this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
									}
								},
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"hornattack": {
		num: 30,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Horn Attack",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"horndrill": {
		num: 32,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Horn Drill",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		ohko: true,
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"howl": {
		num: 336,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Howl",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									atk: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Cool"
	},
	"hydrocannon": {
		num: 308,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hydro Cannon",
		pp: 5,
		priority: 0,
		flags: { recharge: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									volatileStatus: 'mustrecharge',
								},
		target: "normal",
		type: "Water",
		contestType: "Beautiful"
	},
	"hydropump": {
		num: 56,
		accuracy: 80,
		basePower: 120,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Water",
		contestType: "Beautiful"
	},
	"hyperbeam": {
		num: 63,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: { recharge: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									volatileStatus: 'mustrecharge',
								},
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"hyperfang": {
		num: 158,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: null,
		name: "Hyper Fang",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"hypervoice": {
		num: 304,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Hyper Voice",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, sound: 1, metronome: 1 },
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool"
	},
	"hypnosis": {
		num: 95,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'slp',
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"iceball": {
		num: 301,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
									let bp = move.basePower;
									const iceballData = pokemon.volatiles['iceball'];
									if (iceballData?.hitCount) {
										bp *= 2 ** iceballData.contactHitCount;
									}
									if (iceballData && pokemon.status !== 'slp') {
										iceballData.hitCount++;
										iceballData.contactHitCount++;
										if (iceballData.hitCount < 5) {
											iceballData.duration = 2;
										}
									}
									if (pokemon.volatiles['defensecurl']) {
										bp *= 2;
									}
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Ice Ball",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1, bullet: 1, noparentalbond: 1 },
		onModifyMove(move, pokemon, target) {
									if (pokemon.volatiles['iceball'] || pokemon.status === 'slp' || !target) return;
									pokemon.addVolatile('iceball');
									if (move.sourceEffect) pokemon.lastMoveTargetLoc = pokemon.getLocOf(target);
								},
		onAfterMove(source, target, move) {
									const iceballData = source.volatiles["iceball"];
									if (
										iceballData?.hitCount === 5 &&
										iceballData.contactHitCount < 5
										// this conditions can only be met in gen7 and gen8dlc1
										// see `disguise` and `iceface` abilities in the resp mod folders
									) {
										source.addVolatile("rolloutstorage");
										source.volatiles["rolloutstorage"].contactHitCount =
											iceballData.contactHitCount;
									}
								},
		condition: {
									duration: 1,
									onLockMove: 'iceball',
									onStart() {
										this.effectState.hitCount = 0;
										this.effectState.contactHitCount = 0;
									},
									onResidual(target) {
										if (target.lastMove?.id === 'struggle') {
											// don't lock
											delete target.volatiles['iceball'];
										}
									},
								},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"icebeam": {
		num: 58,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Ice Beam",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'frz',
								},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"icepunch": {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'frz',
								},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"iciclespear": {
		num: 333,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		name: "Icicle Spear",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"icywind": {
		num: 196,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Icy Wind",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
		secondary: {
									chance: 100,
									boosts: {
										spe: -1,
									},
								},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful"
	},
	"imprison": {
		num: 286,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Imprison",
		pp: 10,
		priority: 0,
		flags: { bypasssub: 1, metronome: 1 },
		volatileStatus: 'imprison',
		condition: {
									noCopy: true,
									onStart(target) {
										this.add('-start', target, 'move: Imprison');
									},
									onFoeDisableMove(pokemon) {
										for (const moveSlot of this.effectState.source.moveSlots) {
											if (moveSlot.id === 'struggle') continue;
											pokemon.disableMove(moveSlot.id, true);
										}
										pokemon.maybeDisabled = true;
									},
									onFoeBeforeMovePriority: 4,
									onFoeBeforeMove(attacker, defender, move) {
										if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZOrMaxPowered) {
											this.add('cant', attacker, 'move: Imprison', move);
											return false;
										}
									},
								},
		target: "self",
		type: "Psychic",
		contestType: "Clever",
		onTryHit(pokemon) {
									for (const target of pokemon.foes()) {
										for (const move of pokemon.moves) {
											if (target.moves.includes(move)) return;
										}
									}
									return false;
								}
	},
	"ingrain": {
		num: 275,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ingrain",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, nonsky: 1, metronome: 1 },
		volatileStatus: 'ingrain',
		condition: {
									onStart(pokemon) {
													this.add('-start', pokemon, 'move: Ingrain');
												},
									onResidualOrder: 10,
									onResidual(pokemon) {
													this.heal(pokemon.baseMaxhp / 16);
												},
									onTrapPokemon(pokemon) {
													pokemon.tryTrap();
												},
									onDragOut(pokemon) {
													this.add('-activate', pokemon, 'move: Ingrain');
													return null;
												},
									onResidualSubOrder: 1
								},
		target: "self",
		type: "Grass",
		contestType: "Clever"
	},
	"irondefense": {
		num: 334,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Iron Defense",
		pp: 15,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 2,
								},
		target: "self",
		type: "Steel",
		contestType: "Tough"
	},
	"irontail": {
		num: 231,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Iron Tail",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									boosts: {
										def: -1,
									},
								},
		target: "normal",
		type: "Steel",
		contestType: "Cool"
	},
	"jumpkick": {
		num: 26,
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		isNonstandard: null,
		name: "Jump Kick",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, metronome: 1 },
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
									if (target.runImmunity('Fighting')) {
										const damage = this.actions.getDamage(source, target, move, true);
										if (typeof damage !== 'number') throw new Error("Jump Kick didn't recoil");
										this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
									}
								},
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"karatechop": {
		num: 2,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: null,
		name: "Karate Chop",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"kinesis": {
		num: 134,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Kinesis",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									accuracy: -1,
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"knockoff": {
		num: 282,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onBasePower: undefined,
		onAfterHit(target, source, move) {
									if (!target.item) return;
									const item = target.getItem();
									if (this.runEvent('TakeItem', target, source, move, item)) {
										target.item = '';
										target.itemKnockedOff = true;
										this.add('-enditem', target, item.name, '[from] move: Knock Off', `[of] ${source}`);
										if (this.gen === 4) {
											this.hint("In Gen 4, Knock Off makes the Pokémon unable to obtain a new item.", true);
										}
									}
								},
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"leafblade": {
		num: 348,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Leaf Blade",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		critRatio: 2,
		target: "normal",
		type: "Grass",
		contestType: "Cool"
	},
	"leechlife": {
		num: 141,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Leech Life",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		target: "normal",
		type: "Bug",
		contestType: "Clever"
	},
	"leechseed": {
		num: 73,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Leech Seed",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'leechseed',
		condition: {
									onStart(target) {
													this.add('-start', target, 'move: Leech Seed');
												},
									onResidualOrder: 10,
									onResidual(pokemon) {
													const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
													if (!target || target.fainted || target.hp <= 0) {
														this.debug('Nothing to leech into');
														return;
													}
													const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
													if (damage) {
														this.heal(damage, target, pokemon);
													}
												},
									onResidualSubOrder: 5
								},
		onTryImmunity(target) {
									return !target.hasType('Grass');
								},
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"leer": {
		num: 43,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leer",
		pp: 30,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									def: -1,
								},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool"
	},
	"lick": {
		num: 122,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Lick",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Ghost",
		contestType: "Cute"
	},
	"lightscreen": {
		num: 113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Light Screen",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		sideCondition: 'lightscreen',
		condition: {
									duration: 5,
									durationCallback(target, source, effect) {
													if (source?.hasItem('lightclay')) {
														return 8;
													}
													return 5;
												},
									onAnyModifyDamage: undefined,
									onSideStart(side) {
													this.add('-sidestart', side, 'move: Light Screen');
												},
									onSideResidualOrder: 2,
									onSideResidualSubOrder: undefined,
									onSideEnd(side) {
													this.add('-sideend', side, 'move: Light Screen');
												},
									onAnyModifyDamagePhase1(damage, source, target, move) {
													if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
														if (!target.getMoveHitData(move).crit && !move.infiltrates) {
															this.debug('Light Screen weaken');
															if (target.alliesAndSelf().length > 1) return this.chainModify(2, 3);
															return this.chainModify(0.5);
														}
													}
												}
								},
		target: "allySide",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"lockon": {
		num: 199,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Lock-On",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryHit(target, source) {
									if (source.volatiles['lockon']) return false;
								},
		onHit(target, source) {
									source.addVolatile('lockon', target);
									this.add('-activate', source, 'move: Lock-On', `[of] ${target}`);
								},
		condition: {
									noCopy: false,
									duration: 2,
									onSourceInvulnerabilityPriority: 1,
									onSourceInvulnerability(target, source, move) {
													if (move && source === this.effectState.target && target === this.effectState.source) return 0;
												},
									onSourceAccuracy(accuracy, target, source, move) {
													if (move && source === this.effectState.target && target === this.effectState.source) return true;
												}
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"lovelykiss": {
		num: 142,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'slp',
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"lowkick": {
		num: 67,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
									const targetWeight = target.getWeight();
									let bp;
									if (targetWeight >= 2000) {
										bp = 120;
									} else if (targetWeight >= 1000) {
										bp = 100;
									} else if (targetWeight >= 500) {
										bp = 80;
									} else if (targetWeight >= 250) {
										bp = 60;
									} else if (targetWeight >= 100) {
										bp = 40;
									} else {
										bp = 20;
									}
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		name: "Low Kick",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryHit: undefined,
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"lusterpurge": {
		num: 295,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Luster Purge",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 50,
									boosts: {
										spd: -1,
									},
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"machpunch": {
		num: 183,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Mach Punch",
		pp: 30,
		priority: 1,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"magicalleaf": {
		num: 345,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Magical Leaf",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Grass",
		contestType: "Beautiful"
	},
	"magiccoat": {
		num: 277,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Magic Coat",
		pp: 15,
		priority: 4,
		flags: { metronome: 1 },
		volatileStatus: 'magiccoat',
		condition: {
									duration: 1,
									onStart(target, source, effect) {
													this.add('-singleturn', target, 'move: Magic Coat');
													if (effect?.effectType === 'Move') {
														this.effectState.pranksterBoosted = effect.pranksterBoosted;
													}
												},
									onTryHitPriority: 2,
									onTryHit(target, source, move) {
													if (target === source || move.hasBounced || !move.flags['reflectable']) {
														return;
													}
													target.removeVolatile('magiccoat');
													const newMove = this.dex.getActiveMove(move.id);
													newMove.hasBounced = true;
													this.actions.useMove(newMove, target, { target: source });
													return null;
												},
									onAllyTryHitSide: undefined
								},
		target: "self",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"magnitude": {
		num: 222,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: null,
		name: "Magnitude",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		onModifyMove(move, pokemon) {
									const i = this.random(100);
									if (i < 5) {
										move.magnitude = 4;
										move.basePower = 10;
									} else if (i < 15) {
										move.magnitude = 5;
										move.basePower = 30;
									} else if (i < 35) {
										move.magnitude = 6;
										move.basePower = 50;
									} else if (i < 65) {
										move.magnitude = 7;
										move.basePower = 70;
									} else if (i < 85) {
										move.magnitude = 8;
										move.basePower = 90;
									} else if (i < 95) {
										move.magnitude = 9;
										move.basePower = 110;
									} else {
										move.magnitude = 10;
										move.basePower = 150;
									}
								},
		onUseMoveMessage(pokemon, target, move) {
									this.add('-activate', pokemon, 'move: Magnitude', move.magnitude);
								},
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough"
	},
	"meanlook": {
		num: 212,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mean Look",
		pp: 5,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		onHit(target, source, move) {
									return target.addVolatile('trapped', source, move, 'trapper');
								},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"meditate": {
		num: 96,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Meditate",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									atk: 1,
								},
		target: "self",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"megadrain": {
		num: 72,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Mega Drain",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"megahorn": {
		num: 224,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Megahorn",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Bug",
		contestType: "Cool"
	},
	"megakick": {
		num: 25,
		accuracy: 75,
		basePower: 120,
		category: "Physical",
		name: "Mega Kick",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"megapunch": {
		num: 5,
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		name: "Mega Punch",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"memento": {
		num: 262,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Memento",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		boosts: {
									atk: -2,
									spa: -2,
								},
		selfdestruct: "ifHit",
		target: "normal",
		type: "Dark",
		contestType: "Tough"
	},
	"metalclaw": {
		num: 232,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									self: {
										boosts: {
											atk: 1,
										},
									},
								},
		target: "normal",
		type: "Steel",
		contestType: "Cool"
	},
	"metalsound": {
		num: 319,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Metal Sound",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		boosts: {
									spd: -2,
								},
		target: "normal",
		type: "Steel",
		contestType: "Clever"
	},
	"meteormash": {
		num: 309,
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 20,
									self: {
										boosts: {
											atk: 1,
										},
									},
								},
		target: "normal",
		type: "Steel",
		contestType: "Cool"
	},
	"metronome": {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Metronome",
		pp: 10,
		priority: 0,
		flags: { noassist: 1, failcopycat: 1, nosleeptalk: 1, failmimic: 1 },
		onHit(pokemon) {
									const moves = this.dex.moves.all().filter(move => (
										(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
										move.flags['metronome'] &&
										(![2, 4].includes(this.gen) || !pokemon.moves.includes(move.id)) &&
										!(this.field.pseudoWeather['gravity'] && move.flags['gravity']) &&
										!(pokemon.volatiles['healblock'] && move.flags['heal'])
									));
									let randomMove = '';
									if (moves.length) {
										moves.sort((a, b) => a.num - b.num);
										randomMove = this.sample(moves).id;
									}
									if (!randomMove) return false;
									this.actions.useMove(randomMove, pokemon);
								},
		callsMove: true,
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"milkdrink": {
		num: 208,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Milk Drink",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		heal: [1, 2],
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"mimic": {
		num: 102,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mimic",
		pp: 10,
		priority: 0,
		flags: { protect: 1, bypasssub: 1, allyanim: 1, failencore: 1, noassist: 1, failmimic: 1 },
		onHit(target, source) {
									if (source.transformed || !target.lastMove || target.volatiles['substitute']) {
										return false;
									}
									if (target.lastMove.flags['failmimic'] || source.moves.includes(target.lastMove.id)) {
										return false;
									}
									const mimicIndex = source.moves.indexOf('mimic');
									if (mimicIndex < 0) return false;
									const move = this.dex.moves.get(target.lastMove.id);
									source.moveSlots[mimicIndex] = {
										move: move.name,
										id: move.id,
										pp: Math.min(5, move.pp),
										maxpp: this.calculatePP(move, source.ppUps[mimicIndex] || 0),
										disabled: false,
										used: false,
										virtual: true,
									};
									this.add('-activate', source, 'move: Mimic', move.name);
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"mindreader": {
		num: 170,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Mind Reader",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryHit(target, source) {
									if (source.volatiles['lockon']) return false;
								},
		onHit(target, source) {
									source.addVolatile('lockon', target);
									this.add('-activate', source, 'move: Mind Reader', `[of] ${target}`);
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"minimize": {
		num: 107,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Minimize",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		volatileStatus: 'minimize',
		condition: {
									noCopy: true,
									onRestart: () => null,
									onSourceModifyDamage(damage, source, target, move) {
													if (move.flags['minimize']) {
														return this.chainModify(2);
													}
												},
									onAccuracy: undefined
								},
		boosts: {
									evasion: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"mirrorcoat": {
		num: 243,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
									if (!pokemon.volatiles['mirrorcoat']) return 0;
									return pokemon.volatiles['mirrorcoat'].damage || 1;
								},
		category: "Special",
		name: "Mirror Coat",
		pp: 20,
		priority: -5,
		flags: { protect: 1, failmefirst: 1, noassist: 1, failcopycat: 1 },
		beforeTurnCallback(pokemon) {
									pokemon.addVolatile('mirrorcoat');
								},
		onTry(source) {
									if (!source.volatiles['mirrorcoat']) return false;
									if (source.volatiles['mirrorcoat'].slot === null) return false;
								},
		condition: {
									duration: 1,
									noCopy: true,
									onStart(target, source, move) {
													this.effectState.slot = null;
													this.effectState.damage = 0;
												},
									onRedirectTargetPriority: -1,
									onRedirectTarget(target, source, source2) {
													if (source !== this.effectState.target || !this.effectState.slot) return;
													return this.getAtSlot(this.effectState.slot);
												},
									onDamagingHit: undefined,
									onDamagePriority: -101,
									onDamage(damage, target, source, effect) {
													if (
														effect.effectType === 'Move' && !source.isAlly(target) &&
														effect.category === 'Special' && effect.id !== 'hiddenpower'
													) {
														this.effectState.slot = source.getSlot();
														this.effectState.damage = 2 * damage;
													}
												}
								},
		target: "scripted",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"mirrormove": {
		num: 119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Mirror Move",
		pp: 20,
		priority: 0,
		flags: { metronome: 1, failencore: 1, nosleeptalk: 1, noassist: 1 },
		onTryHit: undefined,
		callsMove: true,
		target: "self",
		type: "Flying",
		contestType: "Clever",
		onHit(pokemon) {
									const noMirror = [
										'assist', 'curse', 'doomdesire', 'focuspunch', 'futuresight', 'magiccoat', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'psychup', 'roleplay', 'sketch', 'sleeptalk', 'spikes', 'spitup', 'taunt', 'teeterdance', 'transform',
									];
									const lastAttackedBy = pokemon.getLastAttackedBy();
									if (!lastAttackedBy?.source.lastMove || !lastAttackedBy.move) {
										return false;
									}
									if (noMirror.includes(lastAttackedBy.move) || !lastAttackedBy.source.hasMove(lastAttackedBy.move)) {
										return false;
									}
									this.actions.useMove(lastAttackedBy.move, pokemon);
								}
	},
	"mist": {
		num: 54,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mist",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		sideCondition: 'mist',
		condition: {
									duration: 5,
									onTryBoost(boost, target, source, effect) {
													if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
													if (source && target !== source) {
														let showMsg = false;
														let i: BoostID;
														for (i in boost) {
															if (boost[i]! < 0) {
																delete boost[i];
																showMsg = true;
															}
														}
														if (showMsg && !(effect as ActiveMove).secondaries) {
															this.add('-activate', target, 'move: Mist');
														}
													}
												},
									onSideStart(side) {
													this.add('-sidestart', side, 'Mist');
												},
									onSideResidualOrder: 3,
									onSideResidualSubOrder: undefined,
									onSideEnd(side) {
													this.add('-sideend', side, 'Mist');
												}
								},
		target: "allySide",
		type: "Ice",
		contestType: "Beautiful"
	},
	"mistball": {
		num: 296,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Mist Ball",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
									chance: 50,
									boosts: {
										spa: -1,
									},
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"moonlight": {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		onHit(pokemon) {
									if (this.field.isWeather(['sunnyday', 'desolateland'])) {
										this.heal(pokemon.maxhp * 2 / 3);
									} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
										this.heal(pokemon.baseMaxhp / 4);
									} else {
										this.heal(pokemon.baseMaxhp / 2);
									}
								},
		target: "self",
		type: "Normal",
		contestType: "Beautiful"
	},
	"morningsun": {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		onHit(pokemon) {
									if (this.field.isWeather(['sunnyday', 'desolateland'])) {
										this.heal(pokemon.maxhp * 2 / 3);
									} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
										this.heal(pokemon.baseMaxhp / 4);
									} else {
										this.heal(pokemon.baseMaxhp / 2);
									}
								},
		target: "self",
		type: "Normal",
		contestType: "Beautiful"
	},
	"muddywater": {
		num: 330,
		accuracy: 85,
		basePower: 95,
		category: "Special",
		name: "Muddy Water",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		secondary: {
									chance: 30,
									boosts: {
										accuracy: -1,
									},
								},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough"
	},
	"mudshot": {
		num: 341,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Mud Shot",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 100,
									boosts: {
										spe: -1,
									},
								},
		target: "normal",
		type: "Ground",
		contestType: "Tough"
	},
	"mudslap": {
		num: 189,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Mud-Slap",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 100,
									boosts: {
										accuracy: -1,
									},
								},
		target: "normal",
		type: "Ground",
		contestType: "Cute"
	},
	"mudsport": {
		num: 300,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: { nonsky: 1, metronome: 1 },
		pseudoWeather: undefined,
		condition: {
									noCopy: false,
									onStart(pokemon) {
													this.add('-start', pokemon, 'Mud Sport');
												},
									onAnyBasePowerPriority: 3,
									onAnyBasePower(basePower, user, target, move) {
													if (move.type === 'Electric') {
														this.debug('Mud Sport weaken');
														return this.chainModify(0.5);
													}
												}
								},
		target: "all",
		type: "Ground",
		contestType: "Cute",
		volatileStatus: 'mudsport'
	},
	"naturepower": {
		num: 267,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Nature Power",
		pp: 20,
		priority: 0,
		flags: { metronome: 1 },
		onTryHit: undefined,
		callsMove: true,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
		onHit(target) {
									this.actions.useMove('swift', target);
								}
	},
	"needlearm": {
		num: 302,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: null,
		name: "Needle Arm",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, minimize: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	"nightmare": {
		num: 171,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Nightmare",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'nightmare',
		condition: {
									noCopy: true,
									onStart(pokemon) {
													if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) {
														return false;
													}
													this.add('-start', pokemon, 'Nightmare');
												},
									onResidualOrder: 10,
									onResidual(pokemon) {
													this.damage(pokemon.baseMaxhp / 4);
												},
									onResidualSubOrder: 7
								},
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"nightshade": {
		num: 101,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		name: "Night Shade",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"octazooka": {
		num: 190,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: null,
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
									chance: 50,
									boosts: {
										accuracy: -1,
									},
								},
		target: "normal",
		type: "Water",
		contestType: "Tough"
	},
	"odorsleuth": {
		num: 316,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Odor Sleuth",
		pp: 40,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'foresight',
		onTryHit(target) {
									if (target.volatiles['miracleeye']) return false;
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"outrage": {
		num: 200,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Outrage",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1 },
		self: {
									volatileStatus: 'lockedmove',
								},
		target: "randomNormal",
		type: "Dragon",
		contestType: "Cool"
	},
	"overheat": {
		num: 315,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		name: "Overheat",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									boosts: {
										spa: -2,
									},
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"painsplit": {
		num: 220,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pain Split",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, allyanim: 1, metronome: 1 },
		onHit(target, pokemon) {
									const targetHP = target.getUndynamaxedHP();
									const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
									const targetChange = targetHP - averagehp;
									target.sethp(target.hp - targetChange);
									this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
									pokemon.sethp(averagehp);
									this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"payday": {
		num: 6,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pay Day",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		onHit() {
									this.add('-fieldactivate', 'move: Pay Day');
								}
	},
	"peck": {
		num: 64,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Peck",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1 },
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"perishsong": {
		num: 195,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Perish Song",
		pp: 5,
		priority: 0,
		flags: { sound: 1, distance: 1, metronome: 1 },
		onHitField(target, source, move) {
									let result = false;
									let message = false;
									for (const pokemon of this.getAllActive()) {
										if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
											this.add('-miss', source, pokemon);
											result = true;
										} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
											result = true;
										} else if (!pokemon.volatiles['perishsong']) {
											pokemon.addVolatile('perishsong');
											this.add('-start', pokemon, 'perish3', '[silent]');
											result = true;
											message = true;
										}
									}
									if (!result) return false;
									if (message) this.add('-fieldactivate', 'move: Perish Song');
								},
		condition: {
									duration: 4,
									onEnd(target) {
													this.add('-start', target, 'perish0');
													target.faint();
												},
									onResidualOrder: 12,
									onResidual(pokemon) {
													const duration = pokemon.volatiles['perishsong'].duration!;
													this.add('-start', pokemon, `perish${duration}`);
												}
								},
		target: "all",
		type: "Normal",
		contestType: "Beautiful"
	},
	"petaldance": {
		num: 80,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Petal Dance",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, dance: 1, metronome: 1, failinstruct: 1 },
		self: {
									volatileStatus: 'lockedmove',
								},
		target: "randomNormal",
		type: "Grass",
		contestType: "Beautiful"
	},
	"pinmissile": {
		num: 42,
		accuracy: 85,
		basePower: 14,
		category: "Physical",
		name: "Pin Missile",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Bug",
		contestType: "Cool"
	},
	"poisonfang": {
		num: 305,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Fang",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
		secondary: {
									chance: 30,
									status: 'tox',
								},
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	"poisongas": {
		num: 139,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Poison Gas",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'psn',
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	"poisonpowder": {
		num: 77,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Poison Powder",
		pp: 35,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
		status: 'psn',
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		onTryHit: undefined
	},
	"poisonsting": {
		num: 40,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Poison Sting",
		pp: 35,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'psn',
								},
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	"poisontail": {
		num: 342,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Tail",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		secondary: {
									chance: 10,
									status: 'psn',
								},
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	"pound": {
		num: 1,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pound",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"powdersnow": {
		num: 181,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'frz',
								},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful"
	},
	"present": {
		num: 217,
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		name: "Present",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onModifyMove(move, pokemon, target) {
									const rand = this.random(10);
									if (rand < 2) {
										move.heal = [1, 4];
										move.infiltrates = true;
									} else if (rand < 6) {
										move.basePower = 40;
									} else if (rand < 9) {
										move.basePower = 80;
									} else {
										move.basePower = 120;
									}
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"protect": {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Protect",
		pp: 10,
		priority: 3,
		flags: { noassist: 1, failcopycat: 1 },
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
									return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
								},
		onHit(pokemon) {
									pokemon.addVolatile('stall');
								},
		condition: {
									duration: 1,
									onStart(target) {
													this.add('-singleturn', target, 'Protect');
												},
									onTryHitPriority: 3,
									onTryHit(target, source, move) {
													if (this.checkMoveBypassesProtect(move, source, target)) return;
													this.add('-activate', target, 'Protect');
													const lockedmove = source.getVolatile('lockedmove');
													if (lockedmove) {
														// Outrage counter is NOT rese
														if (source.volatiles['lockedmove'].trueDuration >= 2) {
															source.volatiles['lockedmove'].duration = 2;
														}
													}
													return null;
												}
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"psybeam": {
		num: 60,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Psybeam",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'confusion',
								},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful"
	},
	"psychic": {
		num: 94,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Psychic",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									boosts: {
										spd: -1,
									},
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"psychoboost": {
		num: 354,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		name: "Psycho Boost",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		self: {
									boosts: {
										spa: -2,
									},
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		isNonstandard: null
	},
	"psychup": {
		num: 244,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psych Up",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, bypasssub: 1, metronome: 1 },
		onHit(target, source) {
									let i: BoostID;
									for (i in target.boosts) {
										source.boosts[i] = target.boosts[i];
									}
									this.add('-copyboost', source, target, '[from] move: Psych Up');
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"psywave": {
		num: 149,
		accuracy: 80,
		basePower: 0,
		damageCallback(pokemon) {
									return (this.random(50, 151) * pokemon.level) / 100;
								},
		category: "Special",
		isNonstandard: null,
		name: "Psywave",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"pursuit": {
		num: 228,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
									// You can't get here unless the pursuit succeeds
									if (target.beingCalledBack || target.switchFlag) {
										this.debug('Pursuit damage boost');
										return move.basePower * 2;
									}
									return move.basePower;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Pursuit",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		beforeTurnCallback(pokemon, target) {
									pokemon.addVolatile('pursuit', pokemon, this.dex.getActiveMove('pursuit'));
									pokemon.volatiles['pursuit'].targetLoc = pokemon.getLocOf(target);
								},
		onModifyMove(move, source, target) {
									if (target?.beingCalledBack || target?.switchFlag) {
										move.accuracy = true;
										move.tracksTarget = true;
									}
								},
		condition: {
									duration: 1,
									onFoeBeforeSwitchOut(pokemon) {
													const source: Pokemon = this.effectState.source;
													this.debug('Pursuit start');
													if (
														this.effectState.targetLoc !== source.getLocOf(pokemon) ||
														['frz', 'slp'].includes(source.status) || (source.hasAbility('truant') && source.volatiles['truant']) ||
														!source.isAdjacent(pokemon) || !source.hp ||
														(source.volatiles['encore'] && source.volatiles['encore'].move !== 'pursuit') ||
														!this.queue.cancelMove(source)
													) {
														return;
													}
													if (!pokemon.pursuitActivated) {
														this.add('-activate', pokemon, 'move: Pursuit');
														pokemon.pursuitActivated = true;
													}
													// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
													// If it is, then Mega Evolve before moving.
													if (source.canMegaEvo || source.canUltraBurst) {
														for (const [actionIndex, action] of this.queue.entries()) {
															if (action.pokemon === source && action.choice === 'megaEvo') {
																this.actions.runMegaEvo(source);
																this.queue.list.splice(actionIndex, 1);
																break;
															}
														}
													}
													const move = this.dex.getActiveMove('pursuit');
													source.deductPP(move.id);
													source.moveUsed(move, pokemon.position);
													if (this.actions.useMove(move, source, { target: pokemon, sourceEffect: this.effectState.sourceEffect }) &&
														source.getItem().isChoice) {
														source.addVolatile('choicelock');
													}
												}
								},
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"quickattack": {
		num: 98,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"rage": {
		num: 99,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: null,
		name: "Rage",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									volatileStatus: 'rage',
								},
		condition: {
									onStart(pokemon) {
										this.add('-singlemove', pokemon, 'Rage');
									},
									onHit(target, source, move) {
										if (target !== source && move.category !== 'Status') {
											this.boost({ atk: 1 });
										}
									},
									onBeforeMovePriority: 100,
									onBeforeMove(pokemon) {
										this.debug('removing Rage before attack');
										pokemon.removeVolatile('rage');
									},
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"raindance": {
		num: 240,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rain Dance",
		pp: 5,
		priority: 0,
		flags: { metronome: 1 },
		weather: 'RainDance',
		target: "all",
		type: "Water",
		contestType: "Beautiful"
	},
	"rapidspin": {
		num: 229,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onAfterHit(target, pokemon, move) {
									if (!move.hasSheerForce) {
										if (pokemon.removeVolatile('leechseed')) {
											this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
										}
										const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
										for (const condition of sideConditions) {
											if (pokemon.side.removeSideCondition(condition)) {
												this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
											}
										}
										if (pokemon.volatiles['partiallytrapped']) {
											pokemon.removeVolatile('partiallytrapped');
										}
									}
								},
		onAfterSubDamage(damage, target, pokemon, move) {
									if (!move.hasSheerForce) {
										if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
											this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
										}
										const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
										for (const condition of sideConditions) {
											if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
												this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
											}
										}
										if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
											pokemon.removeVolatile('partiallytrapped');
										}
									}
								},
		secondary: undefined,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		self: {
									onHit(pokemon) {
										if (pokemon.removeVolatile('leechseed')) {
											this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
										}
										const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
										for (const condition of sideConditions) {
											if (pokemon.side.removeSideCondition(condition)) {
												this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
											}
										}
										if (pokemon.volatiles['partiallytrapped']) {
											pokemon.removeVolatile('partiallytrapped');
										}
									},
								}
	},
	"razorleaf": {
		num: 75,
		accuracy: 95,
		basePower: 55,
		category: "Physical",
		name: "Razor Leaf",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		critRatio: 2,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Cool"
	},
	"razorwind": {
		num: 13,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: null,
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: { charge: 1, protect: 1, mirror: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		critRatio: 2,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool"
	},
	"recover": {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recover",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		heal: [1, 2],
		target: "self",
		type: "Normal",
		contestType: "Clever"
	},
	"recycle": {
		num: 278,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recycle",
		pp: 10,
		priority: 0,
		flags: { metronome: 1 },
		onHit(pokemon, source, move) {
									if (pokemon.item || !pokemon.lastItem) return false;
									const item = pokemon.lastItem;
									pokemon.lastItem = '';
									this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Recycle');
									pokemon.setItem(item, source, move);
								},
		target: "self",
		type: "Normal",
		contestType: "Clever"
	},
	"reflect": {
		num: 115,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		sideCondition: 'reflect',
		condition: {
									duration: 5,
									durationCallback(target, source, effect) {
													if (source?.hasItem('lightclay')) {
														return 8;
													}
													return 5;
												},
									onAnyModifyDamage: undefined,
									onSideStart(side) {
													this.add('-sidestart', side, 'Reflect');
												},
									onSideResidualOrder: 1,
									onSideResidualSubOrder: undefined,
									onSideEnd(side) {
													this.add('-sideend', side, 'Reflect');
												},
									onAnyModifyDamagePhase1(damage, source, target, move) {
													if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
														if (!target.getMoveHitData(move).crit && !move.infiltrates) {
															this.debug('Reflect weaken');
															if (target.alliesAndSelf().length > 1) return this.chainModify(2, 3);
															return this.chainModify(0.5);
														}
													}
												}
								},
		target: "allySide",
		type: "Psychic",
		contestType: "Clever"
	},
	"refresh": {
		num: 287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Refresh",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onHit(pokemon) {
									if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
									pokemon.cureStatus();
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"rest": {
		num: 156,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rest",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		onTry(source) {
									if (source.status === 'slp' || source.hasAbility('comatose')) return false;

									if (source.hp === source.maxhp) {
										this.add('-fail', source, 'heal');
										return null;
									}
									// insomnia and vital spirit checks are separate so that the message is accurate in multi-ability mods
									if (source.hasAbility('insomnia')) {
										this.add('-fail', source, '[from] ability: Insomnia', `[of] ${source}`);
										return null;
									}
									if (source.hasAbility('vitalspirit')) {
										this.add('-fail', source, '[from] ability: Vital Spirit', `[of] ${source}`);
										return null;
									}
								},
		onHit(target, source, move) {
									const result = target.setStatus('slp', source, move);
									if (!result) return result;
									target.statusState.time = 3;
									target.statusState.startTime = 3;
									this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
								},
		target: "self",
		type: "Psychic",
		contestType: "Cute"
	},
	"return": {
		num: 216,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
									return Math.floor((pokemon.happiness * 10) / 25) || 1;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Return",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"revenge": {
		num: 279,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
									const damagedByTarget = pokemon.attackedBy.some(
										p => p.source === target && p.damage > 0 && p.thisTurn
									);
									if (damagedByTarget) {
										this.debug(`BP doubled for getting hit by ${target}`);
										return move.basePower * 2;
									}
									return move.basePower;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Revenge",
		pp: 10,
		priority: -4,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"reversal": {
		num: 179,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
									const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
									let bp;
									if (ratio < 2) {
										bp = 200;
									} else if (ratio < 5) {
										bp = 150;
									} else if (ratio < 10) {
										bp = 100;
									} else if (ratio < 17) {
										bp = 80;
									} else if (ratio < 33) {
										bp = 40;
									} else {
										bp = 20;
									}
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		name: "Reversal",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"roar": {
		num: 46,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Roar",
		pp: 20,
		priority: -6,
		flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1 },
		forceSwitch: true,
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"rockblast": {
		num: 350,
		accuracy: 80,
		basePower: 25,
		category: "Physical",
		name: "Rock Blast",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Rock",
		contestType: "Tough"
	},
	"rockslide": {
		num: 157,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Tough"
	},
	"rocksmash": {
		num: 249,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Rock Smash",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 50,
									boosts: {
										def: -1,
									},
								},
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"rockthrow": {
		num: 88,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Rock Throw",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Rock",
		contestType: "Tough"
	},
	"rocktomb": {
		num: 317,
		accuracy: 80,
		basePower: 50,
		category: "Physical",
		name: "Rock Tomb",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 100,
									boosts: {
										spe: -1,
									},
								},
		target: "normal",
		type: "Rock",
		contestType: "Clever"
	},
	"roleplay": {
		num: 272,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Role Play",
		pp: 10,
		priority: 0,
		flags: { bypasssub: 1, allyanim: 1, metronome: 1 },
		onTryHit(target, source) {
									if (target.ability === source.ability) return false;
									if (target.getAbility().flags['failroleplay'] || source.getAbility().flags['cantsuppress']) return false;
								},
		onHit(target, source) {
									const oldAbility = source.setAbility(target.ability, target);
									if (!oldAbility) return oldAbility as false | null;
								},
		target: "normal",
		type: "Psychic",
		contestType: "Cute"
	},
	"rollingkick": {
		num: 27,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		isNonstandard: null,
		name: "Rolling Kick",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"rollout": {
		num: 205,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
									let bp = move.basePower;
									const rolloutData = pokemon.volatiles['rollout'];
									if (rolloutData?.hitCount) {
										bp *= 2 ** rolloutData.contactHitCount;
									}
									if (rolloutData && pokemon.status !== 'slp') {
										rolloutData.hitCount++;
										rolloutData.contactHitCount++;
										if (rolloutData.hitCount < 5) {
											rolloutData.duration = 2;
										}
									}
									if (pokemon.volatiles['defensecurl']) {
										bp *= 2;
									}
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Physical",
		name: "Rollout",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1, noparentalbond: 1 },
		onModifyMove(move, pokemon, target) {
									if (pokemon.volatiles['rollout'] || pokemon.status === 'slp' || !target) return;
									pokemon.addVolatile('rollout');
									if (move.sourceEffect) pokemon.lastMoveTargetLoc = pokemon.getLocOf(target);
								},
		onAfterMove(source, target, move) {
									const rolloutData = source.volatiles["rollout"];
									if (
										rolloutData?.hitCount === 5 &&
										rolloutData.contactHitCount < 5
										// this conditions can only be met in gen7 and gen8dlc1
										// see `disguise` and `iceface` abilities in the resp mod folders
									) {
										source.addVolatile("rolloutstorage");
										source.volatiles["rolloutstorage"].contactHitCount =
											rolloutData.contactHitCount;
									}
								},
		condition: {
									duration: 1,
									onLockMove: 'rollout',
									onStart() {
										this.effectState.hitCount = 0;
										this.effectState.contactHitCount = 0;
									},
									onResidual(target) {
										if (target.lastMove?.id === 'struggle') {
											// don't lock
											delete target.volatiles['rollout'];
										}
									},
								},
		target: "normal",
		type: "Rock",
		contestType: "Cute"
	},
	"sacredfire": {
		num: 221,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Sacred Fire",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, defrost: 1, metronome: 1 },
		secondary: {
									chance: 50,
									status: 'brn',
								},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"safeguard": {
		num: 219,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Safeguard",
		pp: 25,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		sideCondition: 'safeguard',
		condition: {
									duration: 5,
									durationCallback(target, source, effect) {
													if (source?.hasAbility('persistent')) {
														this.add('-activate', source, 'ability: Persistent', '[move] Safeguard');
														return 7;
													}
													return 5;
												},
									onSetStatus(status, target, source, effect) {
													if (!effect || !source) return;
													if (effect.id === 'yawn') return;
													if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
													if (target !== source) {
														this.debug('interrupting setStatus');
														if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
															this.add('-activate', target, 'move: Safeguard');
														}
														return null;
													}
												},
									onTryAddVolatile(status, target, source, effect) {
													if (!effect || !source) return;
													if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
													if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
														if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
														return null;
													}
												},
									onSideStart(side, source) {
													if (source?.hasAbility('persistent')) {
														this.add('-sidestart', side, 'Safeguard', '[persistent]');
													} else {
														this.add('-sidestart', side, 'Safeguard');
													}
												},
									onSideResidualOrder: 4,
									onSideResidualSubOrder: undefined,
									onSideEnd(side) {
													this.add('-sideend', side, 'Safeguard');
												}
								},
		target: "allySide",
		type: "Normal",
		contestType: "Beautiful"
	},
	"sandattack": {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sand Attack",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									accuracy: -1,
								},
		target: "normal",
		type: "Ground",
		contestType: "Cute"
	},
	"sandstorm": {
		num: 201,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sandstorm",
		pp: 10,
		priority: 0,
		flags: { metronome: 1, wind: 1 },
		weather: 'Sandstorm',
		target: "all",
		type: "Rock",
		contestType: "Tough"
	},
	"sandtomb": {
		num: 328,
		accuracy: 70,
		basePower: 15,
		category: "Physical",
		name: "Sand Tomb",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Ground",
		contestType: "Clever"
	},
	"scaryface": {
		num: 184,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Scary Face",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		boosts: {
									spe: -2,
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"scratch": {
		num: 10,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Scratch",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"screech": {
		num: 103,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Screech",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		boosts: {
									def: -2,
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"secretpower": {
		num: 290,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: null,
		name: "Secret Power",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onModifyMove(move, pokemon) {
									if (this.field.isTerrain('')) return;
									move.secondaries = [];
									if (this.field.isTerrain('electricterrain')) {
										move.secondaries.push({
											chance: 30,
											status: 'par',
										});
									} else if (this.field.isTerrain('grassyterrain')) {
										move.secondaries.push({
											chance: 30,
											status: 'slp',
										});
									} else if (this.field.isTerrain('mistyterrain')) {
										move.secondaries.push({
											chance: 30,
											boosts: {
												spa: -1,
											},
										});
									} else if (this.field.isTerrain('psychicterrain')) {
										move.secondaries.push({
											chance: 30,
											boosts: {
												spe: -1,
											},
										});
									}
								},
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"seismictoss": {
		num: 69,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		name: "Seismic Toss",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"selfdestruct": {
		num: 120,
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		name: "Self-Destruct",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, noparentalbond: 1 },
		selfdestruct: "always",
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful"
	},
	"shadowball": {
		num: 247,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Shadow Ball",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
									chance: 20,
									boosts: {
										spd: -1,
									},
								},
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"shadowpunch": {
		num: 325,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Shadow Punch",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	"sharpen": {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Sharpen",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									atk: 1,
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"sheercold": {
		num: 329,
		accuracy: 30,
		basePower: 0,
		category: "Special",
		name: "Sheer Cold",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		ohko: true,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful"
	},
	"shockwave": {
		num: 351,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Shock Wave",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"signalbeam": {
		num: 324,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: null,
		name: "Signal Beam",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									volatileStatus: 'confusion',
								},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful"
	},
	"silverwind": {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: null,
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									self: {
										boosts: {
											atk: 1,
											def: 1,
											spa: 1,
											spd: 1,
											spe: 1,
										},
									},
								},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful"
	},
	"sing": {
		num: 47,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		status: 'slp',
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"sketch": {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sketch",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: { bypasssub: 1, failencore: 1, noassist: 1, failmimic: 1, nosketch: 1 },
		onHit(target, source) {
									if (source.transformed || !target.lastMove || target.volatiles['substitute']) {
										return false;
									}
									if (target.lastMove.flags['nosketch'] || source.moves.includes(target.lastMove.id)) {
										return false;
									}
									const sketchIndex = source.moves.indexOf('sketch');
									if (sketchIndex < 0) return false;
									const move = this.dex.moves.get(target.lastMove.id);
									const sketchedMove = {
										move: move.name,
										id: move.id,
										pp: move.pp,
										maxpp: this.calculatePP(move, source.ppUps[sketchIndex] || 0),
										disabled: false,
										used: false,
									};
									source.moveSlots[sketchIndex] = sketchedMove;
									source.baseMoveSlots[sketchIndex] = sketchedMove;
									this.add('-activate', source, 'move: Mimic', move.name);
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		isNonstandard: null
	},
	"skillswap": {
		num: 285,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Skill Swap",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1 },
		onHit(target, source, move) {
									return this.skillSwap(source, target);
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"skullbash": {
		num: 130,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: null,
		name: "Skull Bash",
		pp: 15,
		priority: 0,
		flags: { contact: 1, charge: 1, protect: 1, mirror: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									this.boost({ def: 1 }, attacker, attacker, move);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"skyattack": {
		num: 143,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		flags: { charge: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
		critRatio: 2,
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"skyuppercut": {
		num: 327,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		isNonstandard: null,
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"slackoff": {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Slack Off",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		heal: [1, 2],
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"slam": {
		num: 21,
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		name: "Slam",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"slash": {
		num: 163,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Slash",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		critRatio: 2,
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"sleeppowder": {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
		status: 'slp',
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		onTryHit: undefined
	},
	"sleeptalk": {
		num: 214,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sleep Talk",
		pp: 10,
		priority: 0,
		flags: { nosleeptalk: 1, noassist: 1, failcopycat: 1 },
		sleepUsable: true,
		onTry(source) {
									return source.status === 'slp' || source.hasAbility('comatose');
								},
		onHit(pokemon) {
									const moves = [];
									for (const moveSlot of pokemon.moveSlots) {
										const moveid = moveSlot.id;
										const pp = moveSlot.pp;
										const move = this.dex.moves.get(moveid);
										if (moveid && !move.flags['nosleeptalk'] && !move.flags['charge']) {
											moves.push({ move: moveid, pp });
										}
									}
									if (!moves.length) {
										return false;
									}
									const randomMove = this.sample(moves);
									if (!randomMove.pp) {
										this.add('cant', pokemon, 'nopp', randomMove.move);
										return;
									}
									this.actions.useMove(randomMove.move, pokemon);
								},
		callsMove: true,
		target: "self",
		type: "Normal",
		contestType: "Cute",
		onTryHit(pokemon) {
									return !pokemon.volatiles['choicelock'] && !pokemon.volatiles['encore'];
								}
	},
	"sludge": {
		num: 124,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Sludge",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'psn',
								},
		target: "normal",
		type: "Poison",
		contestType: "Tough"
	},
	"sludgebomb": {
		num: 188,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sludge Bomb",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
									chance: 30,
									status: 'psn',
								},
		target: "normal",
		type: "Poison",
		contestType: "Tough"
	},
	"smellingsalts": {
		num: 265,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
									if (target.status === 'par') {
										this.debug('BP doubled on paralyzed target');
										return move.basePower * 2;
									}
									return move.basePower;
								},
		category: "Physical",
		isNonstandard: null,
		name: "Smelling Salts",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onHit(target) {
									if (target.status === 'par') target.cureStatus();
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"smog": {
		num: 123,
		accuracy: 70,
		basePower: 20,
		category: "Special",
		name: "Smog",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 40,
									status: 'psn',
								},
		target: "normal",
		type: "Poison",
		contestType: "Tough"
	},
	"smokescreen": {
		num: 108,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Smokescreen",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									accuracy: -1,
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"snatch": {
		num: 289,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Snatch",
		pp: 10,
		priority: 4,
		flags: { bypasssub: 1, noassist: 1, failcopycat: 1 },
		volatileStatus: 'snatch',
		condition: {
									duration: 1,
									onStart(pokemon) {
													this.add('-singleturn', pokemon, 'Snatch');
												},
									onAnyPrepareHitPriority: -1,
									onAnyPrepareHit(source, target, move) {
													const snatchUser = this.effectState.source;
													if (snatchUser.isSkyDropped()) return;
													if (!move || move.isZ || move.isMax || !move.flags['snatch']) {
														return;
													}
													snatchUser.removeVolatile('snatch');
													this.add('-activate', snatchUser, 'move: Snatch', `[of] ${source}`);

													// check Pressure
													const ppDrop = this.runEvent('DeductPP', source, snatchUser, this.effectState.sourceEffect);
													const extraPP = ppDrop !== true ? ppDrop : 0;
													if (extraPP > 0) {
														snatchUser.deductPP(this.effectState.sourceEffect.id, extraPP);
													}

													this.actions.useMove(move.id, snatchUser);
													return null;
												}
								},
		target: "self",
		type: "Dark",
		contestType: "Clever"
	},
	"snore": {
		num: 173,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Snore",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, sound: 1, metronome: 1 },
		sleepUsable: true,
		onTry(source) {
									return source.status === 'slp' || source.hasAbility('comatose');
								},
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"softboiled": {
		num: 135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Soft-Boiled",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		heal: [1, 2],
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"solarbeam": {
		num: 76,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Solar Beam",
		pp: 10,
		priority: 0,
		flags: { charge: 1, protect: 1, mirror: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
		onTryMove(attacker, defender, move) {
									if (attacker.removeVolatile(move.id)) {
										return;
									}
									this.add('-prepare', attacker, move.name);
									if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather(undefined, true))) {
										this.attrLastMove('[still]');
										this.addMove('-anim', attacker, move.name, defender);
										return;
									}
									if (!this.runEvent('ChargeMove', attacker, defender, move)) {
										return;
									}
									attacker.addVolatile('twoturnmove', defender);
									return null;
								},
		onBasePower(basePower, pokemon, target) {
									const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snowscape'];
									if (weakWeathers.includes(pokemon.effectiveWeather())) {
										this.debug('weakened by weather');
										return this.chainModify(0.5);
									}
								},
		target: "normal",
		type: "Grass",
		contestType: "Cool"
	},
	"sonicboom": {
		num: 49,
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
		isNonstandard: null,
		name: "Sonic Boom",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"spark": {
		num: 209,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Spark",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"spiderweb": {
		num: 169,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Spider Web",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		onHit(target, source, move) {
									return target.addVolatile('trapped', source, move, 'trapper');
								},
		target: "normal",
		type: "Bug",
		contestType: "Clever"
	},
	"spikecannon": {
		num: 131,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: null,
		name: "Spike Cannon",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [2, 5],
		target: "normal",
		type: "Normal",
		contestType: "Cool"
	},
	"spikes": {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: { metronome: 1, mustpressure: 1 },
		sideCondition: 'spikes',
		condition: {
									onSideStart(side) {
													this.add('-sidestart', side, 'Spikes');
													this.effectState.layers = 1;
												},
									onSideRestart(side) {
													if (this.effectState.layers >= 3) return false;
													this.add('-sidestart', side, 'Spikes');
													this.effectState.layers++;
												},
									onSwitchIn: undefined,
									onEntryHazardPriority: 2,
									onEntryHazard(pokemon) {
													if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
													const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
													this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
												}
								},
		target: "foeSide",
		type: "Ground",
		contestType: "Clever"
	},
	"spite": {
		num: 180,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spite",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		onHit(target) {
									const roll = this.random(2, 6);
									if (target.lastMove && target.deductPP(target.lastMove.id, roll)) {
										this.add("-activate", target, 'move: Spite', target.lastMove.id, roll);
										return;
									}
									return false;
								},
		target: "normal",
		type: "Ghost",
		contestType: "Tough"
	},
	"spitup": {
		num: 255,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
									if (!pokemon.volatiles['stockpile']?.layers) return false;
									return pokemon.volatiles['stockpile'].layers * 100;
								},
		category: "Special",
		name: "Spit Up",
		pp: 10,
		priority: 0,
		flags: { protect: 1, metronome: 1 },
		onTry(source) {
									return !!source.volatiles['stockpile'];
								},
		onAfterMove(pokemon) {
									pokemon.removeVolatile('stockpile');
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"splash": {
		num: 150,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Splash",
		pp: 40,
		priority: 0,
		flags: { gravity: 1, metronome: 1 },
		onTry(source, target, move) {
									// Additional Gravity check for Z-move varian
									if (this.field.getPseudoWeather('Gravity')) {
										this.add('cant', source, 'move: Gravity', move);
										return null;
									}
								},
		onTryHit(target, source) {
									this.add('-nothing');
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"spore": {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
		status: 'slp',
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		onTryHit: undefined
	},
	"steelwing": {
		num: 211,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Steel Wing",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									self: {
										boosts: {
											def: 1,
										},
									},
								},
		target: "normal",
		type: "Steel",
		contestType: "Cool"
	},
	"stockpile": {
		num: 254,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stockpile",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onTry(source) {
									if (source.volatiles['stockpile'] && source.volatiles['stockpile'].layers >= 3) return false;
								},
		volatileStatus: 'stockpile',
		condition: {
									noCopy: true,
									onStart(target) {
										this.effectState.layers = 1;
										this.add('-start', target, 'stockpile' + this.effectState.layers);
									},
									onRestart(target) {
										if (this.effectState.layers >= 3) return false;
										this.effectState.layers++;
										this.add('-start', target, 'stockpile' + this.effectState.layers);
									},
									onEnd(target) {
										this.effectState.layers = 0;
										this.add('-end', target, 'Stockpile');
									},
								},
		target: "self",
		type: "Normal",
		contestType: "Tough"
	},
	"stomp": {
		num: 23,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Stomp",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1, minimize: 1 },
		secondary: {
									chance: 30,
									volatileStatus: 'flinch',
								},
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"strength": {
		num: 70,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Strength",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"stringshot": {
		num: 81,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		name: "String Shot",
		pp: 40,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									spe: -1,
								},
		target: "allAdjacentFoes",
		type: "Bug",
		contestType: "Clever"
	},
	"struggle": {
		num: 165,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: { contact: 1, protect: 1, noassist: 1, failencore: 1, failmimic: 1, nosketch: 1 },
		onModifyMove(move) {
									move.type = '???';
								},
		struggleRecoil: false,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
		recoil: [1, 4]
	},
	"stunspore": {
		num: 78,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Stun Spore",
		pp: 30,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
		status: 'par',
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		onTryHit: undefined
	},
	"submission": {
		num: 66,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		isNonstandard: null,
		name: "Submission",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		recoil: [1, 4],
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"substitute": {
		num: 164,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Substitute",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, nonsky: 1, metronome: 1 },
		volatileStatus: 'substitute',
		onTryHit(source) {
									if (source.volatiles['substitute']) {
										this.add('-fail', source, 'move: Substitute');
										return this.NOT_FAIL;
									}
									if (source.hp <= source.maxhp / 4 || source.maxhp === 1) { // Shedinja clause
										this.add('-fail', source, 'move: Substitute', '[weak]');
										return this.NOT_FAIL;
									}
								},
		onHit(target) {
									this.directDamage(target.maxhp / 4);
								},
		condition: {
									onStart(target, source, effect) {
													if (effect?.id === 'shedtail') {
														this.add('-start', target, 'Substitute', '[from] move: Shed Tail');
													} else {
														this.add('-start', target, 'Substitute');
													}
													this.effectState.hp = Math.floor(target.maxhp / 4);
													if (target.volatiles['partiallytrapped']) {
														this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
														delete target.volatiles['partiallytrapped'];
													}
												},
									onTryPrimaryHitPriority: -1,
									onTryPrimaryHit(target, source, move) {
													if (target === source || move.flags['bypasssub']) {
														return;
													}
													let damage = this.actions.getDamage(source, target, move);
													if (!damage && damage !== 0) {
														this.add('-fail', source);
														this.attrLastMove('[still]');
														return null;
													}
													if (damage > target.volatiles['substitute'].hp) {
														damage = target.volatiles['substitute'].hp as number;
													}
													target.volatiles['substitute'].hp -= damage;
													source.lastDamage = damage;
													if (target.volatiles['substitute'].hp <= 0) {
														target.removeVolatile('substitute');
														target.addVolatile('substitutebroken');
														if (target.volatiles['substitutebroken']) target.volatiles['substitutebroken'].move = move.id;
													} else {
														this.add('-activate', target, 'Substitute', '[damage]');
													}
													if (move.ohko) this.add('-ohko');
													if (damage) {
														this.actions.applyRecoilDamage(damage, move, source);
													}
													if (move.drain) {
														this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
													}
													this.runEvent('AfterSubDamage', target, source, move, damage);
													return this.HIT_SUBSTITUTE;
												},
									onEnd(target) {
													this.add('-end', target, 'Substitute');
												}
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"sunnyday": {
		num: 241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunny Day",
		pp: 5,
		priority: 0,
		flags: { metronome: 1 },
		weather: 'sunnyday',
		target: "all",
		type: "Fire",
		contestType: "Beautiful"
	},
	"superfang": {
		num: 162,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
									return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
								},
		category: "Physical",
		name: "Super Fang",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"superpower": {
		num: 276,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
									boosts: {
										atk: -1,
										def: -1,
									},
								},
		target: "normal",
		type: "Fighting",
		contestType: "Tough"
	},
	"supersonic": {
		num: 48,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Supersonic",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		volatileStatus: 'confusion',
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"surf": {
		num: 57,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Surf",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful"
	},
	"swagger": {
		num: 207,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Swagger",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		volatileStatus: 'confusion',
		boosts: {
									atk: 2,
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"swallow": {
		num: 256,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swallow",
		pp: 10,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		onTry(source) {
									return !!source.volatiles['stockpile'];
								},
		onHit(pokemon) {
									const layers = pokemon.volatiles['stockpile']?.layers || 1;
									const healAmount = [0.25, 0.5, 1];
									const success = !!this.heal(this.modify(pokemon.maxhp, healAmount[layers - 1]));
									if (!success) this.add('-fail', pokemon, 'heal');
									pokemon.removeVolatile('stockpile');
									return success || null;
								},
		target: "self",
		type: "Normal",
		contestType: "Tough"
	},
	"sweetkiss": {
		num: 186,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sweet Kiss",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'confusion',
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"sweetscent": {
		num: 230,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sweet Scent",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									evasion: -1,
								},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cute"
	},
	"swift": {
		num: 129,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Swift",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool"
	},
	"swordsdance": {
		num: 14,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swords Dance",
		pp: 30,
		priority: 0,
		flags: { snatch: 1, dance: 1, metronome: 1 },
		boosts: {
									atk: 2,
								},
		target: "self",
		type: "Normal",
		contestType: "Beautiful"
	},
	"synthesis": {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		onHit(pokemon) {
									if (this.field.isWeather(['sunnyday', 'desolateland'])) {
										this.heal(pokemon.maxhp * 2 / 3);
									} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
										this.heal(pokemon.baseMaxhp / 4);
									} else {
										this.heal(pokemon.baseMaxhp / 2);
									}
								},
		target: "self",
		type: "Grass",
		contestType: "Clever"
	},
	"tackle": {
		num: 33,
		accuracy: 95,
		basePower: 35,
		category: "Physical",
		name: "Tackle",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"tailglow": {
		num: 294,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tail Glow",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									spa: 2,
								},
		target: "self",
		type: "Bug",
		contestType: "Beautiful",
		isNonstandard: null
	},
	"tailwhip": {
		num: 39,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tail Whip",
		pp: 30,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		boosts: {
									def: -1,
								},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cute"
	},
	"takedown": {
		num: 36,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		name: "Take Down",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		recoil: [1, 4],
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"taunt": {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Taunt",
		pp: 20,
		priority: 0,
		flags: { protect: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'taunt',
		condition: {
									duration: 2,
									onStart(target) {
													this.add('-start', target, 'move: Taunt');
												},
									onResidualOrder: 10,
									onEnd(target) {
													this.add('-end', target, 'move: Taunt', '[silent]');
												},
									onDisableMove(pokemon) {
													for (const moveSlot of pokemon.moveSlots) {
														if (this.dex.moves.get(moveSlot.id).category === 'Status') {
															pokemon.disableMove(moveSlot.id);
														}
													}
												},
									onBeforeMovePriority: undefined,
									onBeforeMove(attacker, defender, move) {
													if (move.category === 'Status') {
														this.add('cant', attacker, 'move: Taunt', move);
														return false;
													}
												},
									durationCallback: undefined,
									onResidualSubOrder: 15
								},
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	"teeterdance": {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Teeter Dance",
		pp: 20,
		priority: 0,
		flags: { protect: 1, metronome: 1 },
		volatileStatus: 'confusion',
		target: "allAdjacent",
		type: "Normal",
		contestType: "Cute"
	},
	"teleport": {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teleport",
		pp: 20,
		priority: 0,
		flags: { metronome: 1 },
		onTry: false,
		selfSwitch: false,
		target: "self",
		type: "Psychic",
		contestType: "Cool"
	},
	"thief": {
		num: 168,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Thief",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, failmefirst: 1, noassist: 1, failcopycat: 1 },
		onAfterHit(target, source, move) {
									if (source.item || source.volatiles['gem']) {
										return;
									}
									const yourItem = target.takeItem(source);
									if (!yourItem) {
										return;
									}
									if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
										!source.setItem(yourItem)) {
										target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
										return;
									}
									this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', `[of] ${source}`);
									this.add('-item', source, yourItem, '[from] move: Thief', `[of] ${target}`);
								},
		target: "normal",
		type: "Dark",
		contestType: "Tough"
	},
	"thrash": {
		num: 37,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Thrash",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1 },
		self: {
									volatileStatus: 'lockedmove',
								},
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough"
	},
	"thunder": {
		num: 87,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Thunder",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onModifyMove(move, pokemon, target) {
									switch (target?.effectiveWeather()) {
									case 'raindance':
									case 'primordialsea':
										move.accuracy = true;
										break;
									case 'sunnyday':
									case 'desolateland':
										move.accuracy = 50;
										break;
									}
								},
		secondary: {
									chance: 30,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"thunderbolt": {
		num: 85,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Thunderbolt",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"thunderpunch": {
		num: 9,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Thunder Punch",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"thundershock": {
		num: 84,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Thunder Shock",
		pp: 30,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 10,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"thunderwave": {
		num: 86,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Thunder Wave",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'par',
		ignoreImmunity: false,
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"tickle": {
		num: 321,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tickle",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		boosts: {
									atk: -1,
									def: -1,
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"torment": {
		num: 259,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Torment",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		volatileStatus: 'torment',
		condition: {
									noCopy: true,
									onStart(pokemon, source, effect) {
										if (pokemon.volatiles['dynamax']) {
											delete pokemon.volatiles['torment'];
											return false;
										}
										if (effect?.id === 'gmaxmeltdown') this.effectState.duration = 3;
										this.add('-start', pokemon, 'Torment');
									},
									onEnd(pokemon) {
										this.add('-end', pokemon, 'Torment');
									},
									onDisableMove(pokemon) {
										if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
									},
								},
		target: "normal",
		type: "Dark",
		contestType: "Tough"
	},
	"toxic": {
		num: 92,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'tox',
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		onPrepareHit: undefined,
		condition: {
									noCopy: true,
									duration: 1,
									onSourceInvulnerabilityPriority: 1,
									onSourceInvulnerability(target, source, move) {
										if (move && source === this.effectState.target) return 0;
									},
									onSourceAccuracy(accuracy, target, source, move) {
										if (move && source === this.effectState.target) return true;
									},
								}
	},
	"transform": {
		num: 144,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Transform",
		pp: 10,
		priority: 0,
		flags: { bypasssub: 1, metronome: 1, failencore: 1 },
		onHit(target, pokemon) {
									return pokemon.transformInto(target);
								},
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"triattack": {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
									chance: 20,
									onHit(target, source) {
										const status = this.sample(['brn', 'par', 'frz']);
										target.trySetStatus(status, source);
									},
								},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"trick": {
		num: 271,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, allyanim: 1, noassist: 1, failcopycat: 1 },
		onTryImmunity(target) {
									return !target.hasAbility('stickyhold');
								},
		onHit(target, source, move) {
									const yourItem = target.takeItem(source);
									const myItem = source.takeItem();
									if (yourItem === false || myItem === false || (!yourItem && !myItem)) {
										if (yourItem) target.item = yourItem.id;
										if (myItem) source.item = myItem.id;
										return false;
									}
									if (
										(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
										(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
									) {
										if (yourItem) target.item = yourItem.id;
										if (myItem) source.item = myItem.id;
										return false;
									}
									this.add('-activate', source, 'move: Trick', `[of] ${target}`);
									if (myItem) {
										target.setItem(myItem);
										this.add('-item', target, myItem, '[from] move: Trick');
									} else {
										this.add('-enditem', target, yourItem, '[silent]', '[from] move: Trick');
									}
									if (yourItem) {
										source.setItem(yourItem);
										this.add('-item', source, yourItem, '[from] move: Trick');
									} else {
										this.add('-enditem', source, myItem, '[silent]', '[from] move: Trick');
									}
								},
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	"triplekick": {
		num: 167,
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
									return 10 * move.hit;
								},
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: 3,
		multiaccuracy: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: null,
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: 2,
		secondary: {
									chance: 20,
									status: 'psn',
								},
		target: "normal",
		type: "Bug",
		contestType: "Cool"
	},
	"twister": {
		num: 239,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twister",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
		secondary: {
									chance: 20,
									volatileStatus: 'flinch',
								},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool"
	},
	"uproar": {
		num: 253,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Uproar",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, sound: 1, metronome: 1, nosleeptalk: 1 },
		self: {
									volatileStatus: 'uproar',
								},
		onTryHit(target) {
									const activeTeam = target.side.activeTeam();
									const foeActiveTeam = target.side.foe.activeTeam();
									for (const [i, allyActive] of activeTeam.entries()) {
										if (allyActive?.status === 'slp') allyActive.cureStatus();
										const foeActive = foeActiveTeam[i];
										if (foeActive?.status === 'slp') foeActive.cureStatus();
									}
								},
		condition: {
									duration: undefined,
									onStart(target) {
													this.add('-start', target, 'Uproar');
												},
									onResidual(target) {
													if (target.volatiles['throatchop']) {
														target.removeVolatile('uproar');
														return;
													}
													if (target.lastMove?.id === 'struggle') {
														// don't lock
														delete target.volatiles['uproar'];
													}
													this.add('-start', target, 'Uproar', '[upkeep]');
												},
									onResidualOrder: 10,
									onResidualSubOrder: 11,
									onEnd(target) {
													this.add('-end', target, 'Uproar');
												},
									onLockMove: 'uproar',
									onAnySetStatus(status, pokemon) {
													if (status.id === 'slp') {
														if (pokemon === this.effectState.target) {
															this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
														} else {
															this.add('-fail', pokemon, 'slp', '[from] Uproar');
														}
														return null;
													}
												},
									durationCallback() {
													return this.random(2, 6);
												}
								},
		target: "randomNormal",
		type: "Normal",
		contestType: "Cute"
	},
	"vinewhip": {
		num: 22,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Vine Whip",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Grass",
		contestType: "Cool"
	},
	"visegrip": {
		num: 11,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Vise Grip",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"vitalthrow": {
		num: 233,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		isNonstandard: null,
		name: "Vital Throw",
		pp: 10,
		priority: -1,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Fighting",
		contestType: "Cool"
	},
	"volttackle": {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		recoil: [1, 3],
		secondary: undefined,
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
	"waterfall": {
		num: 127,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Waterfall",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: undefined,
		target: "normal",
		type: "Water",
		contestType: "Tough"
	},
	"watergun": {
		num: 55,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Water Gun",
		pp: 25,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Water",
		contestType: "Cute"
	},
	"waterpulse": {
		num: 352,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Water Pulse",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, pulse: 1 },
		secondary: {
									chance: 20,
									volatileStatus: 'confusion',
								},
		target: "any",
		type: "Water",
		contestType: "Beautiful"
	},
	"watersport": {
		num: 346,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: null,
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: { nonsky: 1, metronome: 1 },
		pseudoWeather: undefined,
		condition: {
									noCopy: false,
									onStart(pokemon) {
													this.add('-start', pokemon, 'move: Water Sport');
												},
									onAnyBasePowerPriority: 3,
									onAnyBasePower(basePower, user, target, move) {
													if (move.type === 'Fire') {
														this.debug('Water Sport weaken');
														return this.chainModify(0.5);
													}
												}
								},
		target: "all",
		type: "Water",
		contestType: "Cute",
		volatileStatus: 'watersport'
	},
	"waterspout": {
		num: 323,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
									const bp = move.basePower * pokemon.hp / pokemon.maxhp;
									this.debug(`BP: ${bp}`);
									return bp;
								},
		category: "Special",
		name: "Water Spout",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful"
	},
	"weatherball": {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		onModifyType(move, pokemon) {
									switch (pokemon.effectiveWeather()) {
									case 'sunnyday':
									case 'desolateland':
										move.type = 'Fire';
										break;
									case 'raindance':
									case 'primordialsea':
										move.type = 'Water';
										break;
									case 'sandstorm':
										move.type = 'Rock';
										break;
									case 'hail':
									case 'snowscape':
										move.type = 'Ice';
										break;
									}
								},
		onModifyMove(move) {
									switch (this.field.effectiveWeather()) {
									case 'sunnyday':
										move.type = 'Fire';
										move.category = 'Special';
										break;
									case 'raindance':
										move.type = 'Water';
										move.category = 'Special';
										break;
									case 'sandstorm':
										move.type = 'Rock';
										break;
									case 'hail':
										move.type = 'Ice';
										move.category = 'Special';
										break;
									}
									if (this.field.effectiveWeather()) move.basePower *= 2;
								},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful"
	},
	"whirlpool": {
		num: 250,
		accuracy: 70,
		basePower: 15,
		category: "Special",
		name: "Whirlpool",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Water",
		contestType: "Beautiful"
	},
	"whirlwind": {
		num: 18,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Whirlwind",
		pp: 20,
		priority: -6,
		flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
		forceSwitch: true,
		target: "normal",
		type: "Normal",
		contestType: "Clever"
	},
	"willowisp": {
		num: 261,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Will-O-Wisp",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'brn',
		target: "normal",
		type: "Fire",
		contestType: "Beautiful"
	},
	"wingattack": {
		num: 17,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Wing Attack",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1 },
		target: "any",
		type: "Flying",
		contestType: "Cool"
	},
	"wish": {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wish",
		pp: 10,
		priority: 0,
		flags: { heal: 1, metronome: 1 },
		slotCondition: 'Wish',
		condition: {
									duration: 2,
									onResidualOrder: 7,
									onEnd(target) {
										if (!target.fainted) {
											const source = this.effectState.source;
											const damage = this.heal(target.baseMaxhp / 2, target, target);
											if (damage) this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + source.name);
										}
									},
								},
		target: "self",
		type: "Normal",
		contestType: "Cute"
	},
	"withdraw": {
		num: 110,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Withdraw",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
									def: 1,
								},
		target: "self",
		type: "Water",
		contestType: "Cute"
	},
	"wrap": {
		num: 35,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Wrap",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"yawn": {
		num: 281,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Yawn",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		volatileStatus: 'yawn',
		onTryHit(target) {
									if (target.status || !target.runStatusImmunity('slp')) {
										return false;
									}
								},
		condition: {
									noCopy: true,
									duration: 2,
									onStart(target, source) {
													this.add('-start', target, 'move: Yawn', `[of] ${source}`);
												},
									onResidualOrder: 10,
									onEnd(target) {
													this.add('-end', target, 'move: Yawn', '[silent]');
													target.trySetStatus('slp', this.effectState.source);
												},
									onResidualSubOrder: 19
								},
		target: "normal",
		type: "Normal",
		contestType: "Cute"
	},
	"zapcannon": {
		num: 192,
		accuracy: 50,
		basePower: 100,
		category: "Special",
		name: "Zap Cannon",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
									chance: 100,
									status: 'par',
								},
		target: "normal",
		type: "Electric",
		contestType: "Cool"
	},
};
