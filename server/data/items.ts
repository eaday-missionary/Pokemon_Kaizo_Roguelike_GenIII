export const Items: import('../sim/dex-items').ModdedItemDataTable = {
	"aguavberry": {
		name: "Aguav Berry",
		spritenum: 5,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
								},
		onEat(pokemon) {
									this.heal(pokemon.baseMaxhp / 8);
									if (pokemon.getNature().minus === 'spd') {
										pokemon.addVolatile('confusion');
									}
								},
		num: 162,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"apicotberry": {
		name: "Apicot Berry",
		spritenum: 10,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									this.boost({ spd: 1 });
								},
		num: 205,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"aspearberry": {
		name: "Aspear Berry",
		spritenum: 13,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'frz') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'frz') {
										pokemon.cureStatus();
									}
								},
		num: 153,
		gen: 3
	},
	"belueberry": {
		name: "Belue Berry",
		spritenum: 21,
		isBerry: true,
		onEat: false,
		num: 183,
		gen: 3,
		isNonstandard: null
	},
	"berryjuice": {
		name: "Berry Juice",
		spritenum: 22,
		onUpdate: undefined,
		num: 43,
		gen: 2,
		isNonstandard: "Unobtainable",
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										if (this.runEvent('TryHeal', pokemon, null, this.effect, 20) && pokemon.useItem()) {
											this.heal(20);
										}
									}
								}
	},
	"blackbelt": {
		name: "Black Belt",
		spritenum: 32,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 241,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Fighting') {
										return this.chainModify(1.1);
									}
								}
	},
	"blackglasses": {
		name: "Black Glasses",
		spritenum: 35,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 240,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Dark') {
										return this.chainModify(1.1);
									}
								}
	},
	"blukberry": {
		name: "Bluk Berry",
		spritenum: 44,
		isBerry: true,
		onEat: false,
		num: 165,
		gen: 3,
		isNonstandard: null
	},
	"brightpowder": {
		name: "Bright Powder",
		spritenum: 51,
		onModifyAccuracyPriority: 5,
		onModifyAccuracy(accuracy) {
									if (typeof accuracy !== 'number') return;
									this.debug('brightpowder - decreasing accuracy');
									return accuracy * 0.9;
								},
		num: 213,
		gen: 2
	},
	"charcoal": {
		name: "Charcoal",
		spritenum: 61,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 249,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Fire') {
										return this.chainModify(1.1);
									}
								}
	},
	"cheriberry": {
		name: "Cheri Berry",
		spritenum: 63,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'par') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'par') {
										pokemon.cureStatus();
									}
								},
		num: 149,
		gen: 3
	},
	"chestoberry": {
		name: "Chesto Berry",
		spritenum: 65,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'slp') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'slp') {
										pokemon.cureStatus();
									}
								},
		num: 150,
		gen: 3
	},
	"choiceband": {
		name: "Choice Band",
		spritenum: 68,
		onStart: undefined,
		onModifyMove: undefined,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
									if (pokemon.volatiles['dynamax']) return;
									return this.chainModify(1.5);
								},
		isChoice: true,
		num: 220,
		gen: 3,
		onAfterMove(pokemon) {
									pokemon.addVolatile('choicelock');
								}
	},
	"clawfossil": {
		name: "Claw Fossil",
		spritenum: 72,
		num: 100,
		gen: 3,
		isNonstandard: null
	},
	"cornnberry": {
		name: "Cornn Berry",
		spritenum: 81,
		isBerry: true,
		onEat: false,
		num: 175,
		gen: 3,
		isNonstandard: null
	},
	"deepseascale": {
		name: "Deep Sea Scale",
		spritenum: 93,
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
									if (pokemon.species.name === 'Clamperl') {
										return this.chainModify(2);
									}
								},
		itemUser: ["Clamperl"],
		num: 227,
		gen: 3,
		isNonstandard: null
	},
	"deepseatooth": {
		name: "Deep Sea Tooth",
		spritenum: 94,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
									if (pokemon.species.name === 'Clamperl') {
										return this.chainModify(2);
									}
								},
		itemUser: ["Clamperl"],
		num: 226,
		gen: 3,
		isNonstandard: null
	},
	"diveball": {
		name: "Dive Ball",
		spritenum: 101,
		num: 7,
		gen: 3,
		isPokeball: true
	},
	"domefossil": {
		name: "Dome Fossil",
		spritenum: 102,
		num: 102,
		gen: 3,
		isNonstandard: null
	},
	"dragonfang": {
		name: "Dragon Fang",
		spritenum: 106,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 250,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Dragon') {
										return this.chainModify(1.1);
									}
								}
	},
	"dragonscale": {
		name: "Dragon Scale",
		spritenum: 108,
		num: 235,
		gen: 2,
		isNonstandard: null
	},
	"durinberry": {
		name: "Durin Berry",
		spritenum: 114,
		isBerry: true,
		onEat: false,
		num: 182,
		gen: 3,
		isNonstandard: null
	},
	"enigmaberry": {
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		num: 208,
		gen: 3,
		isNonstandard: "Unobtainable"
	},
	"fastball": {
		name: "Fast Ball",
		spritenum: 137,
		num: 492,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"figyberry": {
		name: "Figy Berry",
		spritenum: 140,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
								},
		onEat(pokemon) {
									this.heal(pokemon.baseMaxhp / 8);
									if (pokemon.getNature().minus === 'atk') {
										pokemon.addVolatile('confusion');
									}
								},
		num: 159,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"firestone": {
		name: "Fire Stone",
		spritenum: 142,
		num: 82,
		gen: 1
	},
	"focusband": {
		name: "Focus Band",
		spritenum: 150,
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
									if (this.randomChance(1, 10) && damage >= target.hp && effect?.effectType === 'Move') {
										this.add("-activate", target, "item: Focus Band");
										return target.hp - 1;
									}
								},
		num: 230,
		gen: 2
	},
	"friendball": {
		name: "Friend Ball",
		spritenum: 153,
		num: 497,
		gen: 2,
		isPokeball: true
	},
	"ganlonberry": {
		name: "Ganlon Berry",
		spritenum: 158,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									this.boost({ def: 1 });
								},
		num: 202,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"greatball": {
		name: "Great Ball",
		spritenum: 174,
		num: 3,
		gen: 1,
		isPokeball: true
	},
	"grepaberry": {
		name: "Grepa Berry",
		spritenum: 178,
		isBerry: true,
		onEat: false,
		num: 173,
		gen: 3
	},
	"hardstone": {
		name: "Hard Stone",
		spritenum: 187,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 238,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Rock') {
										return this.chainModify(1.1);
									}
								}
	},
	"heavyball": {
		name: "Heavy Ball",
		spritenum: 194,
		num: 495,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"helixfossil": {
		name: "Helix Fossil",
		spritenum: 195,
		num: 101,
		gen: 3,
		isNonstandard: null
	},
	"hondewberry": {
		name: "Hondew Berry",
		spritenum: 213,
		isBerry: true,
		onEat: false,
		num: 172,
		gen: 3
	},
	"iapapaberry": {
		name: "Iapapa Berry",
		spritenum: 217,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
								},
		onEat(pokemon) {
									this.heal(pokemon.baseMaxhp / 8);
									if (pokemon.getNature().minus === 'def') {
										pokemon.addVolatile('confusion');
									}
								},
		num: 163,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"kelpsyberry": {
		name: "Kelpsy Berry",
		spritenum: 235,
		isBerry: true,
		onEat: false,
		num: 170,
		gen: 3
	},
	"kingsrock": {
		name: "King's Rock",
		spritenum: 236,
		onModifyMovePriority: -1,
		onModifyMove(move) {
									const affectedByKingsRock = [
										'aerialace', 'aeroblast', 'aircutter', 'armthrust', 'barrage', 'beatup', 'bide', 'bind', 'blastburn', 'bonerush', 'bonemerang', 'bounce', 'brickbreak', 'bulletseed', 'clamp', 'cometpunch', 'crabhammer', 'crosschop', 'cut', 'dig', 'dive', 'doublekick', 'doubleslap', 'doubleedge', 'dragonbreath', 'dragonclaw', 'dragonrage', 'drillpeck', 'earthquake', 'eggbomb', 'endeavor', 'eruption', 'explosion', 'extremespeed', 'falseswipe', 'feintattack', 'firespin', 'flail', 'fly', 'frenzyplant', 'frustration', 'furyattack', 'furycutter', 'furyswipes', 'gust', 'hiddenpower', 'highjumpkick', 'hornattack', 'hydrocannon', 'hydropump', 'hyperbeam', 'iceball', 'iciclespear', 'jumpkick', 'karatechop', 'leafblade', 'lowkick', 'machpunch', 'magicalleaf', 'magnitude', 'megakick', 'megapunch', 'megahorn', 'meteormash', 'mudshot', 'muddywater', 'nightshade', 'outrage', 'overheat', 'payday', 'peck', 'petaldance', 'pinmissile', 'poisontail', 'pound', 'psychoboost', 'psywave', 'quickattack', 'rage', 'rapidspin', 'razorleaf', 'razorwind', 'return', 'revenge', 'reversal', 'rockblast', 'rockthrow', 'rollingkick', 'rollout', 'sandtomb', 'scratch', 'seismictoss', 'selfdestruct', 'shadowpunch', 'shockwave', 'signalbeam', 'silverwind', 'skullbash', 'skyattack', 'skyuppercut', 'slam', 'slash', 'snore', 'solarbeam', 'sonicboom', 'spikecannon', 'spitup', 'steelwing', 'strength', 'struggle', 'submission', 'surf', 'swift', 'tackle', 'takedown', 'thrash', 'triplekick', 'twister', 'uproar', 'visegrip', 'vinewhip', 'vitalthrow', 'volttackle', 'watergun', 'waterpulse', 'waterfall', 'weatherball', 'whirlpool', 'wingattack', 'wrap',
									]; // Tickle also has the move flag, but can never flinch because King's Rock requires damage to trigger
									if (affectedByKingsRock.includes(move.id)) {
										if (!move.secondaries) move.secondaries = [];
										move.secondaries.push({
											chance: 10,
											volatileStatus: 'flinch',
										});
									}
								},
		num: 221,
		gen: 2
	},
	"lansatberry": {
		name: "Lansat Berry",
		spritenum: 238,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									pokemon.addVolatile('focusenergy');
								},
		num: 206,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"laxincense": {
		name: "Lax Incense",
		spritenum: 240,
		onModifyAccuracyPriority: 5,
		onModifyAccuracy(accuracy) {
									if (typeof accuracy !== 'number') return;
									this.debug('lax incense - decreasing accuracy');
									return accuracy * 0.95;
								},
		num: 255,
		gen: 3,
		isNonstandard: null
	},
	"leafstone": {
		name: "Leaf Stone",
		spritenum: 241,
		num: 85,
		gen: 1
	},
	"leftovers": {
		name: "Leftovers",
		spritenum: 242,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									this.heal(pokemon.baseMaxhp / 16);
								},
		num: 234,
		gen: 2
	},
	"leppaberry": {
		name: "Leppa Berry",
		spritenum: 244,
		isBerry: true,
		onUpdate(pokemon) {
									if (!pokemon.hp) return;
									if (pokemon.moveSlots.some(move => move.pp === 0)) {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
										pokemon.moveSlots.find(move => move.pp < move.maxpp);
									if (!moveSlot) return;
									const addedPP = pokemon.hasAbility('ripen') ? 20 : 10;
									moveSlot.pp = Math.min(moveSlot.pp + addedPP, moveSlot.maxpp);
									this.add('-activate', pokemon, 'item: Leppa Berry', moveSlot.move, '[consumed]');
								},
		num: 154,
		gen: 3
	},
	"levelball": {
		name: "Level Ball",
		spritenum: 246,
		num: 493,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"liechiberry": {
		name: "Liechi Berry",
		spritenum: 248,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									this.boost({ atk: 1 });
								},
		num: 201,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"lightball": {
		name: "Light Ball",
		spritenum: 251,
		onModifyAtkPriority: 1,
		onModifyAtk: undefined,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
									if (pokemon.species.name === 'Pikachu') {
										return this.chainModify(2);
									}
								},
		itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
		num: 236,
		gen: 2,
		onBasePower: undefined
	},
	"loveball": {
		name: "Love Ball",
		spritenum: 258,
		num: 496,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"luckypunch": {
		name: "Lucky Punch",
		spritenum: 261,
		onModifyCritRatio(critRatio, user) {
									if (user.species.name === 'Chansey') {
										return critRatio + 2;
									}
								},
		itemUser: ["Chansey"],
		num: 256,
		gen: 2,
		isNonstandard: null
	},
	"lumberry": {
		name: "Lum Berry",
		spritenum: 262,
		isBerry: true,
		onAfterSetStatusPriority: -1,
		onAfterSetStatus(status, pokemon) {
									pokemon.eatItem();
								},
		onUpdate(pokemon) {
									if (pokemon.status || pokemon.volatiles['confusion']) {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									pokemon.cureStatus();
									pokemon.removeVolatile('confusion');
								},
		num: 157,
		gen: 3
	},
	"lureball": {
		name: "Lure Ball",
		spritenum: 264,
		num: 494,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"luxuryball": {
		name: "Luxury Ball",
		spritenum: 266,
		num: 11,
		gen: 3,
		isPokeball: true
	},
	"machobrace": {
		name: "Macho Brace",
		spritenum: 269,
		ignoreKlutz: true,
		onModifySpe(spe) {
									return this.chainModify(0.5);
								},
		num: 215,
		gen: 3,
		isNonstandard: null
	},
	"magnet": {
		name: "Magnet",
		spritenum: 273,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 242,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Electric') {
										return this.chainModify(1.1);
									}
								}
	},
	"magoberry": {
		name: "Mago Berry",
		spritenum: 274,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
								},
		onEat(pokemon) {
									this.heal(pokemon.baseMaxhp / 8);
									if (pokemon.getNature().minus === 'spe') {
										pokemon.addVolatile('confusion');
									}
								},
		num: 161,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"magostberry": {
		name: "Magost Berry",
		spritenum: 275,
		isBerry: true,
		onEat: false,
		num: 176,
		gen: 3,
		isNonstandard: null
	},
	"mail": {
		name: "Mail",
		spritenum: 403,
		onTakeItem(item, source) {
									if (!this.activeMove) return false;
									if (this.activeMove.id !== 'knockoff' && this.activeMove.id !== 'thief' && this.activeMove.id !== 'covet') return false;
								},
		num: 137,
		gen: 2,
		isNonstandard: null
	},
	"masterball": {
		name: "Master Ball",
		spritenum: 276,
		num: 1,
		gen: 1,
		isPokeball: true
	},
	"mentalherb": {
		name: "Mental Herb",
		spritenum: 285,
		onUpdate(pokemon) {
									if (pokemon.volatiles['attract'] && pokemon.useItem()) {
										pokemon.removeVolatile('attract');
										this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
									}
								},
		num: 219,
		gen: 3
	},
	"metalcoat": {
		name: "Metal Coat",
		spritenum: 286,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 233,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Steel') {
										return this.chainModify(1.1);
									}
								}
	},
	"metalpowder": {
		name: "Metal Powder",
		spritenum: 287,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
									if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
										return this.chainModify(2);
									}
								},
		itemUser: ["Ditto"],
		num: 257,
		gen: 2,
		isNonstandard: null
	},
	"miracleseed": {
		name: "Miracle Seed",
		spritenum: 292,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 239,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Grass') {
										return this.chainModify(1.1);
									}
								}
	},
	"moonball": {
		name: "Moon Ball",
		spritenum: 294,
		num: 498,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"moonstone": {
		name: "Moon Stone",
		spritenum: 295,
		num: 81,
		gen: 1
	},
	"mysticwater": {
		name: "Mystic Water",
		spritenum: 300,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 243,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Water') {
										return this.chainModify(1.1);
									}
								}
	},
	"nanabberry": {
		name: "Nanab Berry",
		spritenum: 302,
		isBerry: true,
		onEat: false,
		num: 166,
		gen: 3,
		isNonstandard: null
	},
	"nestball": {
		name: "Nest Ball",
		spritenum: 303,
		num: 8,
		gen: 3,
		isPokeball: true
	},
	"netball": {
		name: "Net Ball",
		spritenum: 304,
		num: 6,
		gen: 3,
		isPokeball: true
	},
	"nevermeltice": {
		name: "Never-Melt Ice",
		spritenum: 305,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 246,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Ice') {
										return this.chainModify(1.1);
									}
								}
	},
	"nomelberry": {
		name: "Nomel Berry",
		spritenum: 306,
		isBerry: true,
		onEat: false,
		num: 178,
		gen: 3,
		isNonstandard: null
	},
	"oldamber": {
		name: "Old Amber",
		spritenum: 314,
		num: 103,
		gen: 3,
		isNonstandard: null
	},
	"oranberry": {
		name: "Oran Berry",
		spritenum: 319,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, 10)) return false;
								},
		onEat(pokemon) {
									this.heal(10);
								},
		num: 155,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"pamtreberry": {
		name: "Pamtre Berry",
		spritenum: 323,
		isBerry: true,
		onEat: false,
		num: 180,
		gen: 3,
		isNonstandard: null
	},
	"pechaberry": {
		name: "Pecha Berry",
		spritenum: 333,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'psn' || pokemon.status === 'tox') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'psn' || pokemon.status === 'tox') {
										pokemon.cureStatus();
									}
								},
		num: 151,
		gen: 3
	},
	"persimberry": {
		name: "Persim Berry",
		spritenum: 334,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.volatiles['confusion']) {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									pokemon.removeVolatile('confusion');
								},
		num: 156,
		gen: 3
	},
	"petayaberry": {
		name: "Petaya Berry",
		spritenum: 335,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									this.boost({ spa: 1 });
								},
		num: 204,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"pinapberry": {
		name: "Pinap Berry",
		spritenum: 337,
		isBerry: true,
		onEat: false,
		num: 168,
		gen: 3,
		isNonstandard: null
	},
	"poisonbarb": {
		name: "Poison Barb",
		spritenum: 343,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 245,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Poison') {
										return this.chainModify(1.1);
									}
								}
	},
	"pokeball": {
		name: "Poke Ball",
		spritenum: 345,
		num: 4,
		gen: 1,
		isPokeball: true
	},
	"pomegberry": {
		name: "Pomeg Berry",
		spritenum: 351,
		isBerry: true,
		onEat: false,
		num: 169,
		gen: 3
	},
	"premierball": {
		name: "Premier Ball",
		spritenum: 363,
		num: 12,
		gen: 3,
		isPokeball: true
	},
	"qualotberry": {
		name: "Qualot Berry",
		spritenum: 371,
		isBerry: true,
		onEat: false,
		num: 171,
		gen: 3
	},
	"quickclaw": {
		onFractionalPriorityPriority: -2,
		onFractionalPriority: undefined,
		name: "Quick Claw",
		spritenum: 373,
		num: 217,
		gen: 2,
		onBeforeTurn: undefined,
		onCustap: undefined
	},
	"rabutaberry": {
		name: "Rabuta Berry",
		spritenum: 375,
		isBerry: true,
		onEat: false,
		num: 177,
		gen: 3,
		isNonstandard: null
	},
	"rawstberry": {
		name: "Rawst Berry",
		spritenum: 381,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'brn') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'brn') {
										pokemon.cureStatus();
									}
								},
		num: 152,
		gen: 3
	},
	"razzberry": {
		name: "Razz Berry",
		spritenum: 384,
		isBerry: true,
		onEat: false,
		num: 164,
		gen: 3,
		isNonstandard: null
	},
	"repeatball": {
		name: "Repeat Ball",
		spritenum: 401,
		num: 9,
		gen: 3,
		isPokeball: true
	},
	"rootfossil": {
		name: "Root Fossil",
		spritenum: 418,
		num: 99,
		gen: 3,
		isNonstandard: null
	},
	"safariball": {
		name: "Safari Ball",
		spritenum: 425,
		num: 5,
		gen: 1,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"salacberry": {
		name: "Salac Berry",
		spritenum: 426,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									this.boost({ spe: 1 });
								},
		num: 203,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"scopelens": {
		name: "Scope Lens",
		spritenum: 429,
		onModifyCritRatio(critRatio) {
									return critRatio + 1;
								},
		num: 232,
		gen: 2
	},
	"seaincense": {
		name: "Sea Incense",
		spritenum: 430,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 254,
		gen: 3,
		isNonstandard: null,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Water') {
										return this.chainModify(1.05);
									}
								}
	},
	"sharpbeak": {
		name: "Sharp Beak",
		spritenum: 436,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 244,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Flying') {
										return this.chainModify(1.1);
									}
								}
	},
	"shellbell": {
		name: "Shell Bell",
		spritenum: 438,
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
									if (move.totalDamage && !pokemon.forceSwitchFlag) {
										this.heal(move.totalDamage / 8, pokemon);
									}
								},
		num: 253,
		gen: 3
	},
	"silkscarf": {
		name: "Silk Scarf",
		spritenum: 444,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 251,
		gen: 3,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Normal') {
										return this.chainModify(1.1);
									}
								}
	},
	"silverpowder": {
		name: "Silver Powder",
		spritenum: 447,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 222,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Bug') {
										return this.chainModify(1.1);
									}
								}
	},
	"sitrusberry": {
		name: "Sitrus Berry",
		spritenum: 448,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 4)) return false;
								},
		onEat(pokemon) {
									this.heal(30);
								},
		num: 158,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"softsand": {
		name: "Soft Sand",
		spritenum: 456,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 237,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Ground') {
										return this.chainModify(1.1);
									}
								}
	},
	"souldew": {
		name: "Soul Dew",
		spritenum: 459,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		itemUser: ["Latios", "Latias"],
		num: 225,
		gen: 3,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
									if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
										return this.chainModify(1.5);
									}
								},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
									if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
										return this.chainModify(1.5);
									}
								}
	},
	"spelltag": {
		name: "Spell Tag",
		spritenum: 461,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 247,
		gen: 2,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
									if (move?.type === 'Ghost') {
										return this.chainModify(1.1);
									}
								}
	},
	"spelonberry": {
		name: "Spelon Berry",
		spritenum: 462,
		isBerry: true,
		onEat: false,
		num: 179,
		gen: 3,
		isNonstandard: null
	},
	"sportball": {
		name: "Sport Ball",
		spritenum: 465,
		num: 499,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable"
	},
	"starfberry": {
		name: "Starf Berry",
		spritenum: 472,
		isBerry: true,
		onUpdate: undefined,
		onEat(pokemon) {
									const stats: BoostID[] = [];
									let stat: BoostID;
									for (stat in pokemon.boosts) {
										if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
											stats.push(stat);
										}
									}
									if (stats.length) {
										const randomStat = this.sample(stats);
										const boost: SparseBoostsTable = {};
										boost[randomStat] = 2;
										this.boost(boost);
									}
								},
		num: 207,
		gen: 3,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 4) {
										pokemon.eatItem();
									}
								}
	},
	"stick": {
		name: "Stick",
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
									if (user.species.id === 'farfetchd') {
										return critRatio + 2;
									}
								},
		itemUser: ["Farfetch\u2019d"],
		num: 259,
		gen: 2,
		isNonstandard: null
	},
	"sunstone": {
		name: "Sun Stone",
		spritenum: 480,
		num: 80,
		gen: 2
	},
	"tamatoberry": {
		name: "Tamato Berry",
		spritenum: 486,
		isBerry: true,
		onEat: false,
		num: 174,
		gen: 3
	},
	"thickclub": {
		name: "Thick Club",
		spritenum: 491,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
									if (pokemon.species.name === 'Cubone' || pokemon.species.name === 'Marowak') {
										return this.chainModify(2);
									}
								},
		itemUser: ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem", "Cubone"],
		num: 258,
		gen: 2,
		isNonstandard: null
	},
	"thunderstone": {
		name: "Thunder Stone",
		spritenum: 492,
		num: 83,
		gen: 1
	},
	"timerball": {
		name: "Timer Ball",
		spritenum: 494,
		num: 10,
		gen: 3,
		isPokeball: true
	},
	"twistedspoon": {
		name: "Twisted Spoon",
		spritenum: 520,
		onBasePowerPriority: 15,
		onBasePower: undefined,
		num: 248,
		gen: 2,
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
									if (move?.type === 'Psychic') {
										return this.chainModify(1.1);
									}
								}
	},
	"ultraball": {
		name: "Ultra Ball",
		spritenum: 521,
		num: 2,
		gen: 1,
		isPokeball: true
	},
	"upgrade": {
		name: "Up-Grade",
		spritenum: 523,
		num: 252,
		gen: 2,
		isNonstandard: null
	},
	"waterstone": {
		name: "Water Stone",
		spritenum: 529,
		num: 84,
		gen: 1
	},
	"watmelberry": {
		name: "Watmel Berry",
		spritenum: 530,
		isBerry: true,
		onEat: false,
		num: 181,
		gen: 3,
		isNonstandard: null
	},
	"wepearberry": {
		name: "Wepear Berry",
		spritenum: 533,
		isBerry: true,
		onEat: false,
		num: 167,
		gen: 3,
		isNonstandard: null
	},
	"whiteherb": {
		name: "White Herb",
		spritenum: 535,
		onStart(pokemon) {
									this.effectState.boosts = {} as SparseBoostsTable;
									let ready = false;
									let i: BoostID;
									for (i in pokemon.boosts) {
										if (pokemon.boosts[i] < 0) {
											ready = true;
											this.effectState.boosts[i] = 0;
										}
									}
									if (ready) (this.effectState.target as Pokemon).useItem();
									delete this.effectState.boosts;
								},
		onAnySwitchInPriority: undefined,
		onAnySwitchIn() {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, this.effectState.target);
								},
		onAnyAfterMove() {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, this.effectState.target);
								},
		onResidualOrder: 29,
		onResidual(pokemon) {
									((this.effect as any).onStart as (p: Pokemon) => void).call(this, pokemon);
								},
		onUse(pokemon) {
									pokemon.setBoost(this.effectState.boosts);
									this.add('-clearnegativeboost', pokemon, '[silent]');
								},
		num: 214,
		gen: 3
	},
	"wikiberry": {
		name: "Wiki Berry",
		spritenum: 538,
		isBerry: true,
		onUpdate: undefined,
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
								},
		onEat(pokemon) {
									this.heal(pokemon.baseMaxhp / 8);
									if (pokemon.getNature().minus === 'spa') {
										pokemon.addVolatile('confusion');
									}
								},
		num: 160,
		gen: 3,
		isNonstandard: null,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
									if (pokemon.hp <= pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								}
	},
	"berry": {
		name: "Berry",
		spritenum: 319,
		isBerry: true,
		onResidualOrder: 10,
		onResidual(pokemon) {
									if (pokemon.hp < pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								},
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, 10)) return false;
								},
		onEat(pokemon) {
									this.heal(10);
								},
		num: 155,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"berserkgene": {
		name: "Berserk Gene",
		spritenum: 388,
		onUpdate(pokemon) {
									if (pokemon.useItem()) {
										pokemon.addVolatile('confusion');
									}
								},
		boosts: {
									atk: 2,
								},
		num: 0,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"bitterberry": {
		name: "Bitter Berry",
		spritenum: 334,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.volatiles['confusion']) {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									pokemon.removeVolatile('confusion');
								},
		num: 156,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"burntberry": {
		name: "Burnt Berry",
		spritenum: 13,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'frz') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'frz') {
										pokemon.cureStatus();
									}
								},
		num: 153,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"goldberry": {
		name: "Gold Berry",
		spritenum: 448,
		isBerry: true,
		onResidualOrder: 10,
		onResidual(pokemon) {
									if (pokemon.hp < pokemon.maxhp / 2) {
										pokemon.eatItem();
									}
								},
		onTryEatItem(item, pokemon) {
									if (!this.runEvent('TryHeal', pokemon, null, this.effect, 30)) return false;
								},
		onEat(pokemon) {
									this.heal(30);
								},
		num: 158,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"iceberry": {
		name: "Ice Berry",
		spritenum: 381,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'brn') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'brn') {
										pokemon.cureStatus();
									}
								},
		num: 152,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"mintberry": {
		name: "Mint Berry",
		spritenum: 65,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'slp') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'slp') {
										pokemon.cureStatus();
									}
								},
		num: 150,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"miracleberry": {
		name: "Miracle Berry",
		spritenum: 262,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status || pokemon.volatiles['confusion']) {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									pokemon.cureStatus();
									pokemon.removeVolatile('confusion');
								},
		num: 157,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"mysteryberry": {
		name: "Mystery Berry",
		spritenum: 244,
		isBerry: true,
		onUpdate(pokemon) {
									if (!pokemon.hp) return;
									const moveSlot = pokemon.lastMove && pokemon.getMoveData(pokemon.lastMove.id);
									if (moveSlot?.pp === 0) {
										pokemon.addVolatile('leppaberry');
										pokemon.volatiles['leppaberry'].moveSlot = moveSlot;
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									let moveSlot;
									if (pokemon.volatiles['leppaberry']) {
										moveSlot = pokemon.volatiles['leppaberry'].moveSlot;
										pokemon.removeVolatile('leppaberry');
									} else {
										let pp = 99;
										for (const possibleMoveSlot of pokemon.moveSlots) {
											if (possibleMoveSlot.pp < pp) {
												moveSlot = possibleMoveSlot;
												pp = moveSlot.pp;
											}
										}
									}
									moveSlot.pp += 5;
									if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
									this.add('-activate', pokemon, 'item: Mystery Berry', moveSlot.move);
								},
		num: 154,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"pinkbow": {
		name: "Pink Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
									if (move.type === 'Normal') {
										return basePower * 1.1;
									}
								},
		num: 251,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"polkadotbow": {
		name: "Polkadot Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
									if (move.type === 'Normal') {
										return basePower * 1.1;
									}
								},
		num: 251,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"przcureberry": {
		name: "PRZ Cure Berry",
		spritenum: 63,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'par') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'par') {
										pokemon.cureStatus();
									}
								},
		num: 149,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
	"psncureberry": {
		name: "PSN Cure Berry",
		spritenum: 333,
		isBerry: true,
		onUpdate(pokemon) {
									if (pokemon.status === 'psn' || pokemon.status === 'tox') {
										pokemon.eatItem();
									}
								},
		onEat(pokemon) {
									if (pokemon.status === 'psn' || pokemon.status === 'tox') {
										pokemon.cureStatus();
									}
								},
		num: 151,
		gen: 2,
		tags: ["True Past"],
		isNonstandard: "Past"
	},
};
