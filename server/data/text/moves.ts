export const MovesText: { [id: IDEntry]: MoveText } = {
	"absorb": {
		name: "Absorb",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		gen4: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded down.",
						},
		gen3: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down.",
						},
		gen2: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If the target has a substitute, this move misses.",
						},
		gen1: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If this move breaks the target's substitute, the user does not recover any HP.",
						}
	},
	"acid": {
		name: "Acid",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Sp. Def by 1.",
		gen3: {
							desc: "Has a 10% chance to lower the target's Defense by 1 stage.",
							shortDesc: "10% chance to lower the foe(s) Defense by 1.",
						},
		gen1: {
							desc: "Has a 33% chance to lower the target's Defense by 1 stage.",
							shortDesc: "33% chance to lower the target's Defense by 1.",
						},
		gen2: {
							shortDesc: "10% chance to lower the target's Defense by 1.",
						}
	},
	"acidarmor": {
		name: "Acid Armor",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	"aerialace": {
		name: "Aerial Ace",
		shortDesc: "This move does not check accuracy."
	},
	"aeroblast": {
		name: "Aeroblast",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"agility": {
		name: "Agility",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2."
	},
	"aircutter": {
		name: "Air Cutter",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. Hits adjacent foes."
	},
	"amnesia": {
		name: "Amnesia",
		desc: "Raises the user's Special Defense by 2 stages.",
		shortDesc: "Raises the user's Sp. Def by 2.",
		gen1: {
							desc: "Raises the user's Special by 2 stages.",
							shortDesc: "Raises the user's Special by 2.",
						}
	},
	"ancientpower": {
		name: "Ancient Power",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva)."
	},
	"armthrust": {
		name: "Arm Thrust",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						}
	},
	"aromatherapy": {
		name: "Aromatherapy",
		desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user.",
		shortDesc: "Cures the user's party of all status conditions.",
		gen5: {
							desc: "Every Pokemon in the user's party is cured of its non-volatile status condition.",
						},
		activate: "  A soothing aroma wafted through the area!"
	},
	"assist": {
		name: "Assist",
		desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Blazing Torque, Bounce, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Noxious Torque, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Tera Starstorm, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
		shortDesc: "Uses a random move known by a team member.",
		gen8: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
						},
		gen7: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
						},
		gen6: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
						},
		gen5: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Bestow, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Tail, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Rage Powder, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, Transform, or Trick.",
						},
		gen4: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Protect, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, or Trick.",
						},
		gen3: {
							desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Counter, Covet, Destiny Bond, Detect, Endure, Focus Punch, Follow Me, Helping Hand, Metronome, Mimic, Mirror Coat, Mirror Move, Protect, Sketch, Sleep Talk, Snatch, Struggle, Thief, or Trick.",
						}
	},
	"astonish": {
		name: "Astonish",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch.",
		gen3: {
							desc: "Has a 30% chance to make the target flinch. Damage doubles if the target has used Minimize while active.",
						}
	},
	"attract": {
		name: "Attract",
		desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "A target of the opposite gender gets infatuated.",
		gen5: {
							desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability are immune.",
						},
		gen2: {
							desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active.",
						},
		start: "  {POKEMON} fell in love!",
		startFromItem: "  {POKEMON} fell in love because of the {ITEM}!",
		end: "  {POKEMON} got over its infatuation!",
		endFromItem: "  {POKEMON} cured its infatuation using its {ITEM}!",
		activate: "  {POKEMON} is in love with {TARGET}!",
		cant: "{POKEMON} is immobilized by love!"
	},
	"aurorabeam": {
		name: "Aurora Beam",
		desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
		shortDesc: "10% chance to lower the target's Attack by 1.",
		gen1: {
							desc: "Has a 33% chance to lower the target's Attack by 1 stage.",
							shortDesc: "33% chance to lower the target's Attack by 1.",
						}
	},
	"barrage": {
		name: "Barrage",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"barrier": {
		name: "Barrier",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	"batonpass": {
		name: "Baton Pass",
		desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Aqua Ring, Curse, Dragon Cheer, Embargo, Focus Energy, Gastro Acid, Heal Block, Ingrain, Leech Seed, Lock-On (Mind Reader), Magnet Rise, Perish Song, Power Trick, Telekinesis, and a substitute with its remaining HP. The effect of Gastro Acid is not transferred if the recipient has an Ability that cannot be affected.",
		shortDesc: "User switches, passing stat changes and more.",
		gen8: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Aqua Ring, Curse, Embargo, Focus Energy, Gastro Acid, Heal Block, Ingrain, Leech Seed, Lock-On (Mind Reader), Magnet Rise, Perish Song, Power Trick, Telekinesis, and a substitute with its remaining HP. The effect of Gastro Acid is not transferred if the recipient has an Ability that cannot be affected.",
						},
		gen7: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Aqua Ring, Curse, Embargo, Focus Energy, Gastro Acid, Heal Block, Ingrain, Leech Seed, Lock-On (Mind Reader), Magnet Rise, Perish Song, Power Trick, Telekinesis, the trapped effect of Mean Look (Block, Spider Web), and a substitute with its remaining HP. The effect of Gastro Acid is not transferred if the recipient has an Ability that cannot be affected. The effect of Telekinesis is not transferred if the recipient is Mega Gengar.",
						},
		gen5: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Aqua Ring, Curse, Embargo, Focus Energy, Gastro Acid, Heal Block, Ingrain, Leech Seed, Lock-On (Mind Reader), Magnet Rise, Perish Song, Power Trick, Telekinesis, the trapped effect of Mean Look (Block, Spider Web), and a substitute with its remaining HP.",
						},
		gen4: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Aqua Ring, Curse, Embargo, Focus Energy, Gastro Acid, Heal Block, Ingrain, Leech Seed, Lock-On (Mind Reader), Magnet Rise, Mud Sport, Perish Song, Power Trick, Water Sport, the trapper or trapped effects of Mean Look (Block, Spider Web), and a substitute with its remaining HP.",
						},
		gen3: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Curse, Focus Energy, Ingrain, Leech Seed, Lock-On (Mind Reader), Mud Sport, Perish Song, Water Sport, the trapper or trapped effects of Mean Look (Block, Spider Web), and a substitute with its remaining HP.",
						},
		gen2: {
							desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes transferred to it, as well as the effects of confusion, Curse, Defense Curl, Focus Energy, Foresight, Leech Seed, Lock-On (Mind Reader), Minimize, Mist, Perish Song, the trapper or trapped effects of Mean Look (Spider Web), and a substitute with its remaining HP.",
						}
	},
	"beatup": {
		name: "Beat Up",
		desc: "Hits one time for the user and one time for each unfainted Pokemon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
		shortDesc: "All healthy allies aid in damaging the target.",
		gen4: {
							desc: "Deals typeless damage. Hits one time for the user and one time for each unfainted Pokemon without a non-volatile status condition in the user's party. For each hit, the damage formula uses the participating Pokemon's base Attack as the Attack stat, the target's base Defense as the Defense stat, and ignores stat stages and other effects that modify Attack or Defense; each hit is considered to come from the user.",
						},
		gen3: {
							desc: "Deals typeless damage. Hits one time for each unfainted Pokemon without a non-volatile status condition in the user's party, or fails if no Pokemon meet the criteria. For each hit, the damage formula uses the participating Pokemon's base Attack as the Attack stat, the target's base Defense as the Defense stat, and ignores stat stages and other effects that modify Attack or Defense; each hit is considered to come from the user.",
						},
		gen2: {
							desc: "Deals typeless damage. Hits one time for each unfainted Pokemon without a non-volatile status condition in the user's party. For each hit, the damage formula uses the participating Pokemon's level, its base Attack as the Attack stat, the target's base Defense as the Defense stat, and ignores stat stages and other effects that modify Attack or Defense. Fails if no party members can participate.",
						},
		activate: "  {NAME}'s attack!"
	},
	"bellydrum": {
		name: "Belly Drum",
		desc: "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
		shortDesc: "User loses 50% max HP. Maximizes Attack.",
		gen2: {
							desc: "The user loses 1/2 of its maximum HP, rounded down, unless the user would faint or its Attack stat stage is 6. If the user did not have enough HP, its Attack is raised by 2 stages. Otherwise, while the user's Attack stat stage is less than 6 it is raised by 2, and if its Attack stat before this step was 999 then the stat stage is lowered by 1 and the loop ends.",
						},
		boost: "  {POKEMON} cut its own HP and maximized its Attack!"
	},
	"bide": {
		name: "Bide",
		desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and does not ignore type immunity.",
		shortDesc: "Waits 2 turns; deals double the damage taken.",
		gen4: {
							desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and ignores type immunity.",
						},
		gen3: {
							desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not ignore type immunity.",
						},
		gen2: {
							desc: "The user spends two or three turns locked into this move and then, on the second or third turn after using this move, the user attacks the opponent, inflicting double the damage in HP it lost during those turns. If the user is prevented from moving during this move's use, the effect ends. This move does not ignore type immunity.",
							shortDesc: "Waits 2-3 turns; deals double the damage taken.",
						},
		gen1: {
							desc: "The user spends two or three turns locked into this move and then, on the second or third turn after using this move, the user attacks the opponent, inflicting double the damage in HP it lost during those turns. This move ignores type immunity and cannot be avoided even if the target is using Dig or Fly. The user can choose to switch out during the effect. If the user switches out or is prevented from moving during this move's use, the effect ends. During the effect, if the opposing Pokemon switches out or uses Confuse Ray, Conversion, Focus Energy, Glare, Haze, Leech Seed, Light Screen, Mimic, Mist, Poison Gas, Poison Powder, Recover, Reflect, Rest, Soft-Boiled, Splash, Stun Spore, Substitute, Supersonic, Teleport, Thunder Wave, Toxic, or Transform, the previous damage dealt to the user will be added to the total.",
						},
		start: "  {POKEMON} is storing energy!",
		end: "  {POKEMON} unleashed its energy!",
		activate: "  {POKEMON} is storing energy!"
	},
	"bind": {
		name: "Bind",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen1: {
							desc: "The user spends two to five turns using this move. Has a 3/8 chance to last two or three turns, and a 1/8 chance to last four or five turns. The damage calculated for the first turn is used for every other turn. The user cannot select a move and the target cannot execute a move during the effect, but both may switch out. If the user switches out, the target remains unable to execute a move during that turn. If the target switches out, the user uses this move again automatically, and if it had 0 PP at the time, it becomes 63. If the user or the target switch out, or the user is prevented from moving, the effect ends. This move can prevent the target from moving even if it has type immunity, but will not deal damage.",
							shortDesc: "Prevents the target from moving for 2-5 turns.",
						},
		start: "  {POKEMON} was squeezed by {SOURCE}!",
		move: "#wrap"
	},
	"bite": {
		name: "Bite",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch.",
		gen1: {
							desc: "Has a 10% chance to make the target flinch.",
							shortDesc: "10% chance to make the target flinch.",
						}
	},
	"blastburn": {
		name: "Blast Burn",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	"blazekick": {
		name: "Blaze Kick",
		desc: "Has a 10% chance to burn the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to burn."
	},
	"blizzard": {
		name: "Blizzard",
		desc: "Has a 10% chance to freeze the target. If the weather is Snow, this move does not check accuracy.",
		shortDesc: "10% chance to freeze foe(s). Can't miss in Snow.",
		gen8: {
							desc: "Has a 10% chance to freeze the target. If the weather is Hail, this move does not check accuracy.",
							shortDesc: "10% chance to freeze foe(s). Can't miss in Hail.",
						},
		gen3: {
							desc: "Has a 10% chance to freeze the target.",
							shortDesc: "10% chance to freeze foe(s).",
						},
		gen2: {
							shortDesc: "10% chance to freeze the target.",
						}
	},
	"block": {
		name: "Block",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		gen7: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen5: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen4: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						},
		gen3: {
							desc: "Prevents the target from switching out. The target can still switch out if it uses Baton Pass. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						}
	},
	"bodyslam": {
		name: "Body Slam",
		desc: "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to paralyze the target.",
		gen5: {
							desc: "Has a 30% chance to paralyze the target.",
						}
	},
	"boneclub": {
		name: "Bone Club",
		desc: "Has a 10% chance to make the target flinch.",
		shortDesc: "10% chance to make the target flinch."
	},
	"bonemerang": {
		name: "Bonemerang",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		gen4: {
							desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
						},
		gen1: {
							desc: "Hits twice. If the first hit breaks the target's substitute, the move ends.",
						}
	},
	"bonerush": {
		name: "Bone Rush",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						}
	},
	"bounce": {
		name: "Bounce",
		desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Bounces turn 1. Hits turn 2. 30% paralyze.",
		gen5: {
							desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen4: {
							desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Sky Uppercut, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen3: {
							desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Sky Uppercut, Thunder, and Twister, and Gust and Twister have doubled power when used against it.",
						},
		prepare: "{POKEMON} sprang up!"
	},
	"brickbreak": {
		name: "Brick Break",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune.",
		gen6: {
							desc: "If this attack does not miss, the effects of Reflect and Light Screen end for the target's side of the field before damage is calculated.",
						},
		gen4: {
							desc: "If this attack does not miss and whether or not the target is immune, the effects of Reflect and Light Screen end for the target's side of the field before damage is calculated.",
							shortDesc: "Destroys screens, even if the target is immune.",
						},
		gen3: {
							desc: "If this attack does not miss and whether or not the target is immune, the effects of Reflect and Light Screen end for the opponent's side of the field before damage is calculated.",
						},
		activate: "  {POKEMON} shattered {TEAM}'s protections!"
	},
	"bubble": {
		name: "Bubble",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Speed by 1.",
		gen1: {
							desc: "Has a 33% chance to lower the target's Speed by 1 stage.",
							shortDesc: "33% chance to lower the target's Speed by 1.",
						},
		gen2: {
							shortDesc: "10% chance to lower the target's Speed by 1.",
						}
	},
	"bubblebeam": {
		name: "Bubble Beam",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1.",
		gen1: {
							desc: "Has a 33% chance to lower the target's Speed by 1 stage.",
							shortDesc: "33% chance to lower the target's Speed by 1.",
						}
	},
	"bulkup": {
		name: "Bulk Up",
		desc: "Raises the user's Attack and Defense by 1 stage.",
		shortDesc: "Raises the user's Attack and Defense by 1."
	},
	"bulletseed": {
		name: "Bullet Seed",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						}
	},
	"calmmind": {
		name: "Calm Mind",
		desc: "Raises the user's Special Attack and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1."
	},
	"camouflage": {
		name: "Camouflage",
		desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
		shortDesc: "Changes user's type by terrain (default Normal).",
		gen6: {
							desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, and Grass type during Grassy Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
						},
		gen5: {
							desc: "The user's type changes based on the battle terrain. Ground type on the regular Wi-Fi terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
							shortDesc: "Changes user's type based on terrain. (Ground)",
						},
		gen4: {
							desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain. Fails if the user has the Multitype Ability or if the type is one of the user's current types.",
							shortDesc: "Changes user's type based on terrain. (Normal)",
						},
		gen3: {
							desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain. Fails if the type is one of the user's current types.",
						}
	},
	"charge": {
		name: "Charge",
		desc: "Raises the user's Special Defense by 1 stage. The user's next Electric-type attack will have its power doubled; the effect ends when the user is no longer active, or after the user attempts to use any Electric-type move besides Charge, even if it is not successful.",
		shortDesc: "+1 SpD, user's next Electric move 2× power.",
		gen8: {
							desc: "Raises the user's Special Defense by 1 stage. If the user uses an Electric-type attack on the next turn, its power will be doubled.",
							shortDesc: "+1 SpD, user's Electric move next turn 2× power.",
						},
		gen3: {
							desc: "If the user uses an Electric-type attack on the next turn, its power will be doubled.",
							shortDesc: "The user's Electric attack next turn has 2× power.",
						},
		start: "  {POKEMON} began charging power!"
	},
	"charm": {
		name: "Charm",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2."
	},
	"clamp": {
		name: "Clamp",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen1: {
							desc: "The user spends two to five turns using this move. Has a 3/8 chance to last two or three turns, and a 1/8 chance to last four or five turns. The damage calculated for the first turn is used for every other turn. The user cannot select a move and the target cannot execute a move during the effect, but both may switch out. If the user switches out, the target remains unable to execute a move during that turn. If the target switches out, the user uses this move again automatically, and if it had 0 PP at the time, it becomes 63. If the user or the target switch out, or the user is prevented from moving, the effect ends. This move can prevent the target from moving even if it has type immunity, but will not deal damage.",
							shortDesc: "Prevents the target from moving for 2-5 turns.",
						},
		start: "  {SOURCE} clamped down on {POKEMON}!",
		move: "#wrap"
	},
	"cometpunch": {
		name: "Comet Punch",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"confuseray": {
		name: "Confuse Ray",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses the target."
	},
	"confusion": {
		name: "Confusion",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	"constrict": {
		name: "Constrict",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1.",
		gen1: {
							desc: "Has a 33% chance to lower the target's Speed by 1 stage.",
							shortDesc: "33% chance to lower the target's Speed by 1.",
						}
	},
	"conversion": {
		name: "Conversion",
		desc: "The user's type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user's current types.",
		shortDesc: "Changes user's type to match its first move.",
		gen5: {
							desc: "The user's type changes to match the original type of one of its known moves besides this move, at random, but not either of its current types. Fails if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
							shortDesc: "Changes user's type to match a known move.",
						},
		gen4: {
							desc: "The user's type changes to match the original type of one of its known moves besides this move and Curse, at random, but not either of its current types. Fails if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
						},
		gen3: {
							desc: "The user's type changes to match the original type of one of its known moves besides Curse, at random, but not either of its current types. Fails if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
						},
		gen1: {
							desc: "Causes the user's types to become the same as the current types of the target.",
							shortDesc: "User becomes the same type as the target.",
						},
		typeChange: "  Converted type to {SOURCE}'s!"
	},
	"conversion2": {
		name: "Conversion 2",
		desc: "The user's type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
		shortDesc: "Changes user's type to resist target's last move.",
		gen4: {
							desc: "The user's type changes to match a type that resists or is immune to the type of the last move used against the user, if it was successful against the user, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the last move used against the user was not successful, if the user has the Multitype Ability, or if this move would only be able to select one of the user's current types.",
							shortDesc: "User's type changes to resist last move against it.",
						},
		gen3: {
							desc: "The user's type changes to match a type that resists or is immune to the type of the last move used against the user, if it was successful against the user, but not either of its current types. The determined type of the move is used rather than the original type, but considers Struggle as Normal. Fails if the last move used against the user was not successful, or if this move would only be able to select one of the user's current types.",
						},
		gen2: {
							desc: "The user's type changes to match a type that resists or is immune to the type of the last move used by the opposing Pokemon, even if it is one of the user's current types. The original type of the move is used rather than the determined type. Fails if the opposing Pokemon has not used a move.",
							shortDesc: "Changes user's type to resist the foe's last move.",
						}
	},
	"cosmicpower": {
		name: "Cosmic Power",
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Defense and Sp. Def by 1."
	},
	"cottonspore": {
		name: "Cotton Spore",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2."
	},
	"counter": {
		name: "Counter",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
		shortDesc: "If hit by physical attack, returns double damage.",
		gen6: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals damage with a power of 1 instead. If that opposing Pokemon's position is no longer in use, the damage is done to a random opposing Pokemon in range. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
						},
		gen4: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn, or if the user did not lose HP from the attack.",
						},
		gen3: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. This move considers Hidden Power as Normal type, and only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn, or if the user did not lose HP from the attack.",
						},
		gen2: {
							desc: "Deals damage to the opposing Pokemon equal to twice the HP lost by the user from a physical attack this turn. This move considers Hidden Power as Normal type, and only the last hit of a multi-hit attack is counted. Fails if the user moves first, if the user was not hit by a physical attack this turn, or if the user did not lose HP from the attack. If the opposing Pokemon used Fissure or Horn Drill and missed, this move deals 65535 damage.",
						},
		gen1: {
							desc: "Deals damage to the opposing Pokemon equal to twice the damage dealt by the last move used in the battle. This move ignores type immunity. Fails if the user moves first, or if the opposing side's last move was Counter, had 0 power, or was not Normal or Fighting type. Fails if the last move used by either side did 0 damage and was not Confuse Ray, Conversion, Focus Energy, Glare, Haze, Leech Seed, Light Screen, Mimic, Mist, Poison Gas, Poison Powder, Recover, Reflect, Rest, Soft-Boiled, Splash, Stun Spore, Substitute, Supersonic, Teleport, Thunder Wave, Toxic, or Transform.",
							shortDesc: "If hit by Normal/Fighting move, deals 2× damage.",
						}
	},
	"covet": {
		name: "Covet",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Blue Orb, Red Orb, Adamant Crystal, Lustrous Globe, Griseous Core, Plate, Drive, Memory, Rusted Sword, Rusted Shield, Booster Energy, or Mask held by a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Paradox Pokemon, or Ogerpon, respectively, or if the user is one of those species and the target is holding the respective item. In this case, Paradox Pokemon include every species with the Protosynthesis and Quark Drive Abilities, except Gouging Fire, Raging Bolt, Iron Boulder, and Iron Crown. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's.",
		champions: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mega Stone and either the user or the target is the species that can Mega Evolve with it. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen8: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield held by a Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian, or Zamazenta, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen7: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Z-Crystal, a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory held by a Kyogre, Groudon, Giratina, Arceus, Genesect, or Silvally, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen6: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, or Drive held by a Kyogre, Groudon, Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen5: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mail, or if it is a Griseous Orb, Plate, or Drive held by a Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen4: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. The target's item is not stolen if it is a Mail or Griseous Orb, or if the target has the Multitype or Sticky Hold Abilities. Items lost to this move cannot be regained with Recycle.",
						},
		gen3: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. The target's item is not stolen if it is a Mail or Enigma Berry, or if the target has the Sticky Hold Ability. Items lost to this move cannot be regained with Recycle.",
						}
	},
	"crabhammer": {
		name: "Crabhammer",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"crosschop": {
		name: "Cross Chop",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"crunch": {
		name: "Crunch",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		gen3: {
							desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
							shortDesc: "20% chance to lower the target's Sp. Def by 1.",
						}
	},
	"crushclaw": {
		name: "Crush Claw",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	"curse": {
		name: "Curse",
		desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected.",
		shortDesc: "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def.",
		gen4: {
							desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected or has a substitute.",
						},
		gen2: {
							desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage, unless the user's Attack and Defense stats are both at stage 6. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if the target is already affected or has a substitute.",
						},
		start: "  {SOURCE} cut its own HP and put a curse on {POKEMON}!",
		damage: "  {POKEMON} is afflicted by the curse!"
	},
	"cut": {
		name: "Cut",
		shortDesc: "No additional effect."
	},
	"defensecurl": {
		name: "Defense Curl",
		desc: "Raises the user's Defense by 1 stage. As long as the user remains active, the power of the user's Ice Ball and Rollout will be doubled (this effect is not stackable).",
		shortDesc: "Raises the user's Defense by 1.",
		gen2: {
							desc: "Raises the user's Defense by 1 stage. While the user remains active, the power of the user's Rollout will be doubled (this effect is not stackable). Baton Pass can be used to transfer this effect to an ally.",
						},
		gen1: {
							desc: "Raises the user's Defense by 1 stage.",
						}
	},
	"destinybond": {
		name: "Destiny Bond",
		desc: "Until the user's next move, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
		shortDesc: "If an opponent knocks out the user, it also faints.",
		gen6: {
							desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight.",
						},
		gen2: {
							desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well.",
						},
		start: "  {POKEMON} is hoping to take its attacker down with it!",
		activate: "{POKEMON} took its attacker down with it!"
	},
	"detect": {
		name: "Detect",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn.",
		gen8: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen7: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen6: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen5: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, Protect, Quick Guard, or Wide Guard. Fails if the user moves last this turn.",
						},
		gen4: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used, up to a maximum of 8. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen3: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has an X/65536 chance of being successful, where X starts at 65535 and halves, rounded down, each time this move is successfully used. After the fourth successful use in a row, X drops to 118 and continues with seemingly random values from 0-65535 on subsequent successful uses. X resets to 65535 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen2: {
							desc: "The user is protected from attacks made by the opponent during this turn. This move has an X/255 chance of being successful, where X starts at 255 and halves, rounded down, each time this move is successfully used. X resets to 255 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user has a substitute or moves last this turn.",
						}
	},
	"dig": {
		name: "Dig",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Digs underground turn 1, strikes turn 2.",
		gen4: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude, which have doubled power when used against it, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen3: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude, which have doubled power when used against it, and is also unaffected by weather.",
						},
		gen2: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake, Fissure, and Magnitude, the user is unaffected by weather, and Earthquake and Magnitude have doubled power when used against the user.",
						},
		gen1: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Bide, Swift, and Transform. If the user is fully paralyzed on the second turn, it continues avoiding attacks until it switches out or successfully executes the second turn of this move or Fly.",
						},
		prepare: "{POKEMON} burrowed its way under the ground!"
	},
	"disable": {
		name: "Disable",
		desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
		shortDesc: "For 4 turns, disables the target's last move used.",
		gen7: {
							desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Z-Move. Z-Powered moves can still be selected and executed during this effect.",
						},
		gen6: {
							desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, or if the target no longer knows the move.",
						},
		gen4: {
							desc: "For 4 to 7 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move has 0 PP.",
							shortDesc: "For 4-7 turns, disables the target's last move.",
						},
		gen3: {
							desc: "For 2 to 5 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move has 0 PP.",
							shortDesc: "For 2-5 turns, disables the target's last move.",
						},
		gen2: {
							desc: "For 1 to 7 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move has 0 PP.",
							shortDesc: "For 1-7 turns, disables the target's last move.",
						},
		gen1: {
							desc: "For 0 to 7 turns, one of the target's known moves that has at least 1 PP remaining becomes disabled, at random. Fails if one of the target's moves is already disabled, or if none of the target's moves have PP remaining. If any Pokemon uses Haze, this effect ends. Whether or not this move was successful, it counts as a hit for the purposes of the opponent's use of Rage.",
							shortDesc: "For 0-7 turns, disables one of the target's moves.",
						},
		start: "  {POKEMON}'s {MOVE} was disabled!",
		end: "  {POKEMON}'s move is no longer disabled!",
		cant: "{POKEMON}'s {MOVE} is disabled!"
	},
	"dive": {
		name: "Dive",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Dives underwater turn 1, strikes turn 2.",
		gen4: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool, which have doubled power when used against it, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen3: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool, which have doubled power when used against it, and is also unaffected by weather.",
						},
		prepare: "{POKEMON} hid underwater!"
	},
	"dizzypunch": {
		name: "Dizzy Punch",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		gen1: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						}
	},
	"doomdesire": {
		name: "Doom Desire",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Future Sight is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used.",
		gen4: {
							desc: "Deals typeless damage that cannot be a critical hit two turns after this move is used. Damage is calculated against the target on use, and at the end of the final turn that damage is dealt to the Pokemon at the position the original target had at the time. Fails if this move or Future Sight is already in effect for the target's position.",
						},
		start: "  {POKEMON} chose Doom Desire as its destiny!",
		activate: "  {TARGET} took the Doom Desire attack!"
	},
	"doubleedge": {
		name: "Double-Edge",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		gen4: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
							shortDesc: "Has 1/3 recoil.",
						},
		gen2: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP. If this move hits a substitute, the recoil damage is always 1 HP.",
							shortDesc: "Has 1/4 recoil.",
						},
		gen1: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP. If this move breaks the target's substitute, the user does not take any recoil damage.",
						}
	},
	"doublekick": {
		name: "Double Kick",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		gen4: {
							desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
						},
		gen1: {
							desc: "Hits twice. Damage is calculated once for the first hit and used for both hits. If the first hit breaks the target's substitute, the move ends.",
						}
	},
	"doubleslap": {
		name: "Double Slap",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"doubleteam": {
		name: "Double Team",
		desc: "Raises the user's evasiveness by 1 stage.",
		shortDesc: "Raises the user's evasiveness by 1."
	},
	"dragonbreath": {
		name: "Dragon Breath",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	"dragonclaw": {
		name: "Dragon Claw",
		shortDesc: "No additional effect."
	},
	"dragondance": {
		name: "Dragon Dance",
		desc: "Raises the user's Attack and Speed by 1 stage.",
		shortDesc: "Raises the user's Attack and Speed by 1."
	},
	"dragonrage": {
		name: "Dragon Rage",
		shortDesc: "Deals 40 HP of damage to the target."
	},
	"dreameater": {
		name: "Dream Eater",
		desc: "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User gains 1/2 HP inflicted. Sleeping target only.",
		gen4: {
							desc: "The target is unaffected by this move unless it is asleep and does not have a substitute. The user recovers 1/2 the HP lost by the target, rounded down, but not less than 1 HP. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded down.",
						},
		gen3: {
							desc: "The target is unaffected by this move unless it is asleep and does not have a substitute. The user recovers 1/2 the HP lost by the target, rounded down, but not less than 1 HP.",
						},
		gen1: {
							desc: "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded down, but not less than 1 HP. If this move breaks the target's substitute, the user does not recover any HP.",
						}
	},
	"drillpeck": {
		name: "Drill Peck",
		shortDesc: "No additional effect."
	},
	"dynamicpunch": {
		name: "Dynamic Punch",
		desc: "Has a 100% chance to confuse the target.",
		shortDesc: "100% chance to confuse the target."
	},
	"earthquake": {
		name: "Earthquake",
		desc: "Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dig.",
		gen4: {
							desc: "Power doubles if the target is using Dig.",
							shortDesc: "Hits adjacent Pokemon. Power doubles on Dig.",
						},
		gen1: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						},
		gen2: {
							shortDesc: "Power doubles on Dig.",
						}
	},
	"eggbomb": {
		name: "Egg Bomb",
		shortDesc: "No additional effect."
	},
	"ember": {
		name: "Ember",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	"encore": {
		name: "Encore",
		desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Blazing Torque, Combat Torque, Copycat, Dynamax Cannon, Encore, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Transform, or Wicked Torque.",
		shortDesc: "Target repeats its last move for its next 3 turns.",
		gen8: {
							desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the target is Dynamaxed, or if the move is Assist, Copycat, Dynamax Cannon, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform.",
						},
		gen7: {
							desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, Transform, or any Z-Move. Z-Powered moves can still be selected and executed during this effect.",
						},
		gen6: {
							desc: "For 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Encore, Mimic, Mirror Move, Sketch, Struggle, or Transform.",
						},
		gen4: {
							desc: "For 4 to 8 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Encore, Mimic, Mirror Move, Sketch, Struggle, or Transform.",
							shortDesc: "The target repeats its last move for 4-8 turns.",
						},
		gen3: {
							desc: "For 3 to 6 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Encore, Mimic, Mirror Move, Sketch, Struggle, or Transform.",
							shortDesc: "The target repeats its last move for 3-6 turns.",
						},
		gen2: {
							desc: "For 3 to 6 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Encore, Metronome, Mimic, Mirror Move, Sketch, Sleep Talk, Struggle, or Transform.",
						},
		start: "  {POKEMON} must do an encore!",
		end: "  {POKEMON}'s encore ended!"
	},
	"endeavor": {
		name: "Endeavor",
		desc: "Deals damage to the target equal to (target's current HP - user's current HP). The target is unaffected if its current HP is less than or equal to the user's current HP.",
		shortDesc: "Lowers the target's HP to the user's HP."
	},
	"endure": {
		name: "Endure",
		desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "User survives attacks this turn with at least 1 HP.",
		gen8: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen7: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen6: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen5: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, Protect, Quick Guard, or Wide Guard. Fails if the user moves last this turn.",
						},
		gen4: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used, up to a maximum of 8. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen3: {
							desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has an X/65536 chance of being successful, where X starts at 65535 and halves, rounded down, each time this move is successfully used. After the fourth successful use in a row, X drops to 118 and continues with seemingly random values from 0-65535 on subsequent successful uses. X resets to 65535 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen2: {
							desc: "The user will survive attacks made by the opponent during this turn with at least 1 HP. This move has an X/255 chance of being successful, where X starts at 255 and halves, rounded down, each time this move is successfully used. X resets to 255 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user has a substitute or moves last this turn.",
						},
		start: "  {POKEMON} braced itself!",
		activate: "  {POKEMON} endured the hit!"
	},
	"eruption": {
		name: "Eruption",
		desc: "Power is equal to (user's current HP × 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s)."
	},
	"explosion": {
		name: "Explosion",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		gen4: {
							desc: "The user faints after using this move, unless this move has no target. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
							shortDesc: "Target's Def halved during damage. User faints.",
						},
		gen3: {
							desc: "The user faints after using this move. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
						},
		gen2: {
							desc: "The user faints after using this move. The target's Defense is halved during damage calculation.",
						},
		gen1: {
							desc: "The user faints after using this move, unless this move broke the target's substitute. The target's Defense is halved during damage calculation.",
						}
	},
	"extrasensory": {
		name: "Extrasensory",
		desc: "Has a 10% chance to make the target flinch.",
		shortDesc: "10% chance to make the target flinch.",
		gen3: {
							desc: "Has a 10% chance to make the target flinch. Damage doubles if the target has used Minimize while active.",
						}
	},
	"extremespeed": {
		name: "Extreme Speed",
		desc: "No additional effect.",
		shortDesc: "Nearly always goes first.",
		gen4: {
							shortDesc: "Usually goes first.",
						}
	},
	"facade": {
		name: "Facade",
		desc: "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user's burn is ignored.",
		shortDesc: "Power doubles if user is burn/poison/paralyzed.",
		gen5: {
							desc: "Power doubles if the user is burned, paralyzed, or poisoned.",
						}
	},
	"fakeout": {
		name: "Fake Out",
		desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only. 100% flinch chance.",
		champions: {
							desc: "Has a 100% chance to make the target flinch. This move cannot be selected unless it is the user's first turn on the field.",
						}
	},
	"faketears": {
		name: "Fake Tears",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2."
	},
	"falseswipe": {
		name: "False Swipe",
		desc: "Leaves the target with at least 1 HP.",
		shortDesc: "Always leaves the target with at least 1 HP."
	},
	"featherdance": {
		name: "Feather Dance",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2."
	},
	"feintattack": {
		name: "Feint Attack",
		shortDesc: "This move does not check accuracy."
	},
	"fireblast": {
		name: "Fire Blast",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target.",
		gen1: {
							desc: "Has a 30% chance to burn the target.",
							shortDesc: "30% chance to burn the target.",
						}
	},
	"firepunch": {
		name: "Fire Punch",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	"firespin": {
		name: "Fire Spin",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen1: {
							desc: "The user spends two to five turns using this move. Has a 3/8 chance to last two or three turns, and a 1/8 chance to last four or five turns. The damage calculated for the first turn is used for every other turn. The user cannot select a move and the target cannot execute a move during the effect, but both may switch out. If the user switches out, the target remains unable to execute a move during that turn. If the target switches out, the user uses this move again automatically, and if it had 0 PP at the time, it becomes 63. If the user or the target switch out, or the user is prevented from moving, the effect ends. This move can prevent the target from moving even if it has type immunity, but will not deal damage.",
							shortDesc: "Prevents the target from moving for 2-5 turns.",
						},
		start: "  {POKEMON} became trapped in the fiery vortex!",
		move: "#wrap"
	},
	"fissure": {
		name: "Fissure",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		gen2: {
							desc: "Deals 65535 damage to the target. This attack's accuracy out of 256 is equal to the lesser of (2 × (user's level - target's level) + 76) and 255, before applying accuracy and evasiveness modifiers. Fails if the target is at a higher level. Can hit a target using Dig.",
						},
		gen1: {
							desc: "Deals 65535 damage to the target. Fails if the target's Speed is greater than the user's.",
							shortDesc: "Deals 65535 damage. Fails if target is faster.",
						}
	},
	"flail": {
		name: "Flail",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left.",
		gen4: {
							desc: "The power of this move is 20 if X is 43 to 48, 40 if X is 22 to 42, 80 if X is 13 to 21, 100 if X is 6 to 12, 150 if X is 2 to 5, and 200 if X is 0 or 1, where X is equal to (user's current HP × 64 / user's maximum HP), rounded down.",
						},
		gen3: {
							desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down.",
						},
		gen2: {
							desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down. This move does not apply damage variance and cannot be a critical hit.",
						}
	},
	"flamethrower": {
		name: "Flamethrower",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	"flamewheel": {
		name: "Flame Wheel",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target. Thaws user."
	},
	"flash": {
		name: "Flash",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	"flatter": {
		name: "Flatter",
		desc: "Raises the target's Special Attack by 1 stage and confuses it.",
		shortDesc: "Raises the target's Sp. Atk by 1 and confuses it."
	},
	"fly": {
		name: "Fly",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Flies up on first turn, then strikes the next turn.",
		gen5: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen4: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Sky Uppercut, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
						},
		gen3: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Sky Uppercut, Thunder, and Twister, and Gust and Twister have doubled power when used against it.",
						},
		gen2: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Thunder, Twister, and Whirlwind, and Gust and Twister have doubled power when used against it.",
						},
		gen1: {
							desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Bide, Swift, and Transform. If the user is fully paralyzed on the second turn, it continues avoiding attacks until it switches out or successfully executes the second turn of this move or Dig.",
						},
		prepare: "{POKEMON} flew up high!"
	},
	"focusenergy": {
		name: "Focus Energy",
		desc: "Raises the user's chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
		shortDesc: "Raises the user's critical hit ratio by 2.",
		gen2: {
							desc: "Raises the user's chance for a critical hit by 1 stage. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
							shortDesc: "Raises the user's critical hit ratio by 1.",
						},
		gen1: {
							desc: "While the user remains active, its chance for a critical hit is quartered. Fails if the user already has the effect. If any Pokemon uses Haze, this effect ends.",
							shortDesc: "Quarters the user's chance for a critical hit.",
						},
		start: "  {POKEMON} is getting pumped!",
		startFromItem: "  {POKEMON} used the {ITEM} to get pumped!",
		startFromZEffect: "  {POKEMON} boosted its critical-hit ratio using its Z-Power!"
	},
	"focuspunch": {
		name: "Focus Punch",
		desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
		shortDesc: "Fails if the user takes damage before it hits.",
		gen4: {
							desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move, but it still loses PP.",
						},
		start: "  {POKEMON} is tightening its focus!",
		cant: "{POKEMON} lost its focus and couldn't move!"
	},
	"followme": {
		name: "Follow Me",
		desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "The foes' moves target the user on the turn used.",
		gen6: {
							desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user if they are in range. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double or Triple Battle. This effect is ignored while the user is under the effect of Sky Drop.",
						},
		gen4: {
							desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat, or drawn in by the Lightning Rod or Storm Drain Abilities. This effect remains active even if the user leaves the field. Fails if it is not a Double Battle.",
						},
		gen3: {
							desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat, or drawn in by the Lightning Rod Ability. This effect remains active even if the user leaves the field. Fails if it is not a Double Battle.",
						},
		start: "  {POKEMON} became the center of attention!",
		startFromZEffect: "  {POKEMON} became the center of attention!"
	},
	"foresight": {
		name: "Foresight",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
		gen4: {
							desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type.",
						},
		gen3: {
							desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type.",
						},
		gen2: {
							desc: "As long as the target remains active, if its evasiveness stat stage is greater than the attacker's accuracy stat stage, both are ignored during accuracy checks, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. If the target leaves the field using Baton Pass, the replacement will remain under this effect. Fails if the target is already affected.",
						},
		start: "  {POKEMON} was identified!"
	},
	"frenzyplant": {
		name: "Frenzy Plant",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	"frustration": {
		name: "Frustration",
		desc: "Power is equal to the greater of ((255 - user's Happiness) × 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at minimum Happiness."
	},
	"furyattack": {
		name: "Fury Attack",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"furycutter": {
		name: "Fury Cutter",
		desc: "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used.",
		shortDesc: "Power doubles with each hit, up to 160."
	},
	"furyswipes": {
		name: "Fury Swipes",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"futuresight": {
		name: "Future Sight",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used.",
		gen4: {
							desc: "Deals typeless damage that cannot be a critical hit two turns after this move is used. Damage is calculated against the target on use, and at the end of the final turn that damage is dealt to the Pokemon at the position the original target had at the time. Fails if this move or Doom Desire is already in effect for the target's position.",
						},
		gen2: {
							desc: "Deals typeless damage that cannot be a critical hit two turns after this move is used. Damage is calculated against the target on use, and at the end of the final turn that damage is dealt to the Pokemon at the position the original target had at the time. Fails if this move is already in effect for the target's position.",
						},
		start: "  {POKEMON} foresaw an attack!",
		activate: "  {TARGET} took the Future Sight attack!"
	},
	"gigadrain": {
		name: "Giga Drain",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		gen4: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded down.",
						},
		gen3: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down.",
						}
	},
	"glare": {
		name: "Glare",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target.",
		gen3: {
							desc: "Paralyzes the target. This move does not ignore type immunity.",
						},
		gen1: {
							desc: "Paralyzes the target.",
						}
	},
	"grasswhistle": {
		name: "Grass Whistle",
		shortDesc: "Causes the target to fall asleep."
	},
	"growl": {
		name: "Growl",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the foe(s) Attack by 1.",
		gen2: {
							shortDesc: "Lowers the target's Attack by 1.",
						}
	},
	"growth": {
		name: "Growth",
		desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sun or Intense Sun, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sun or Intense Sun.",
		shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
		gen7: {
							desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sun or Intense Sun, this move raises the user's Attack and Special Attack by 2 stages.",
						},
		gen5: {
							desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sun, this move raises the user's Attack and Special Attack by 2 stages.",
						},
		gen4: {
							desc: "Raises the user's Special Attack by 1 stage.",
							shortDesc: "Raises the user's Sp. Atk by 1.",
						},
		gen1: {
							desc: "Raises the user's Special by 1 stage.",
							shortDesc: "Raises the user's Special by 1.",
						}
	},
	"grudge": {
		name: "Grudge",
		desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that move loses all its remaining PP.",
		shortDesc: "If the user faints, the attack used loses all its PP.",
		activate: "  {POKEMON}'s {MOVE} lost all of its PP due to the grudge!",
		start: "{POKEMON} wants its target to bear a grudge!"
	},
	"guillotine": {
		name: "Guillotine",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		gen2: {
							desc: "Deals 65535 damage to the target. This attack's accuracy out of 256 is equal to the lesser of (2 × (user's level - target's level) + 76) and 255, before applying accuracy and evasiveness modifiers. Fails if the target is at a higher level.",
						},
		gen1: {
							desc: "Deals 65535 damage to the target. Fails if the target's Speed is greater than the user's.",
							shortDesc: "Deals 65535 damage. Fails if target is faster.",
						}
	},
	"gust": {
		name: "Gust",
		desc: "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Power doubles during Bounce, Fly, and Sky Drop.",
		gen4: {
							desc: "Power doubles if the target is using Bounce or Fly.",
							shortDesc: "Power doubles during Bounce and Fly.",
						},
		gen2: {
							desc: "Power doubles if the target is using Fly.",
							shortDesc: "Power doubles during Fly.",
						},
		gen1: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						}
	},
	"hail": {
		name: "Hail",
		desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
		shortDesc: "For 5 turns, hail crashes down.",
		gen4: {
							desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
						},
		gen3: {
							desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type. Fails if the current weather is Hail.",
						}
	},
	"harden": {
		name: "Harden",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1."
	},
	"haze": {
		name: "Haze",
		desc: "Resets the stat stages of all active Pokemon to 0.",
		shortDesc: "Eliminates all stat changes.",
		gen1: {
							desc: "Resets the stat stages of both Pokemon to 0 and removes stat reductions due to burn and paralysis. Resets Toxic counters to 0 and removes the effect of confusion, Disable, Focus Energy, Leech Seed, Light Screen, Mist, and Reflect from both Pokemon. Removes the opponent's non-volatile status condition.",
							shortDesc: "Resets all stat changes. Removes foe's status.",
						},
		activate: "  All stat changes were eliminated!"
	},
	"headbutt": {
		name: "Headbutt",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch."
	},
	"healbell": {
		name: "Heal Bell",
		desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Soundproof Ability are not cured, unless they are the user.",
		shortDesc: "Cures the user's party of all status conditions.",
		gen7: {
							desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Soundproof Ability are not cured.",
						},
		gen5: {
							desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Soundproof Ability are also cured.",
						},
		gen4: {
							desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Pokemon with the Soundproof Ability are not cured.",
						},
		gen2: {
							desc: "Every Pokemon in the user's party is cured of its non-volatile status condition.",
						},
		activate: "  A bell chimed!"
	},
	"heatwave": {
		name: "Heat Wave",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the foe(s)."
	},
	"helpinghand": {
		name: "Helping Hand",
		desc: "The power of the target's attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move.",
		shortDesc: "One adjacent ally's move power is 1.5× this turn.",
		start: "  {SOURCE} is ready to help {POKEMON}!"
	},
	"hiddenpower": {
		name: "Hidden Power",
		desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
		shortDesc: "Varies in type based on the user's IVs.",
		gen5: {
							desc: "This move's type and power depend on the user's individual values (IVs). Power varies between 30 and 70, and type can be any but Normal.",
							shortDesc: "Varies in power and type based on the user's IVs.",
						}
	},
	"hiddenpowerbug": {
		name: "Hidden Power Bug"
	},
	"hiddenpowerdark": {
		name: "Hidden Power Dark"
	},
	"hiddenpowerdragon": {
		name: "Hidden Power Dragon"
	},
	"hiddenpowerelectric": {
		name: "Hidden Power Electric"
	},
	"hiddenpowerfighting": {
		name: "Hidden Power Fighting"
	},
	"hiddenpowerfire": {
		name: "Hidden Power Fire"
	},
	"hiddenpowerflying": {
		name: "Hidden Power Flying"
	},
	"hiddenpowerghost": {
		name: "Hidden Power Ghost"
	},
	"hiddenpowergrass": {
		name: "Hidden Power Grass"
	},
	"hiddenpowerground": {
		name: "Hidden Power Ground"
	},
	"hiddenpowerice": {
		name: "Hidden Power Ice"
	},
	"hiddenpowerpoison": {
		name: "Hidden Power Poison"
	},
	"hiddenpowerpsychic": {
		name: "Hidden Power Psychic"
	},
	"hiddenpowerrock": {
		name: "Hidden Power Rock"
	},
	"hiddenpowersteel": {
		name: "Hidden Power Steel"
	},
	"hiddenpowerwater": {
		name: "Hidden Power Water"
	},
	"highjumpkick": {
		name: "High Jump Kick",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses.",
		gen4: {
							desc: "If this attack is not successful, the user loses HP equal to half the target's maximum HP if the target was immune, rounded down, otherwise half of the damage the target would have taken, rounded down, but no less than 1 HP and no more than half of the target's maximum HP, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
							shortDesc: "If miss, user takes 1/2 damage it would've dealt.",
						},
		gen3: {
							desc: "If this attack is not successful and the target was not immune, the user loses HP equal to half of the damage the target would have taken, rounded down, but no less than 1 HP and no more than half of the target's maximum HP, as crash damage.",
							shortDesc: "If miss, user takes 1/2 damage it would've dealt.",
						},
		gen2: {
							desc: "If this attack is not successful and the target was not immune, the user loses HP equal to 1/8 the damage the target would have taken, rounded down, but not less than 1 HP, as crash damage.",
							shortDesc: "If miss, user takes 1/8 damage it would've dealt.",
						},
		gen1: {
							desc: "If this attack misses the target, the user takes 1 HP of crash damage. If the user has a substitute, the crash damage is dealt to the target's substitute if it has one, otherwise no crash damage is dealt.",
							shortDesc: "User takes 1 HP of damage if it misses.",
						},
		damage: "#crash"
	},
	"hornattack": {
		name: "Horn Attack",
		shortDesc: "No additional effect."
	},
	"horndrill": {
		name: "Horn Drill",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		gen2: {
							desc: "Deals 65535 damage to the target. This attack's accuracy out of 256 is equal to the lesser of (2 × (user's level - target's level) + 76) and 255, before applying accuracy and evasiveness modifiers. Fails if the target is at a higher level.",
						},
		gen1: {
							desc: "Deals 65535 damage to the target. Fails if the target's Speed is greater than the user's.",
							shortDesc: "Deals 65535 damage. Fails if target is faster.",
						}
	},
	"howl": {
		name: "Howl",
		desc: "Raises the Attack of the user and all allies 1 stage.",
		shortDesc: "Raises the user's and ally's Attack by 1.",
		gen7: {
							desc: "Raises the user's Attack by 1 stage.",
							shortDesc: "Raises the user's Attack by 1.",
						}
	},
	"hydrocannon": {
		name: "Hydro Cannon",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	"hydropump": {
		name: "Hydro Pump",
		shortDesc: "No additional effect."
	},
	"hyperbeam": {
		name: "Hyper Beam",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		gen1: {
							desc: "If this move is successful, the user must recharge on the following turn and cannot select a move, unless the target or its substitute was knocked out by this move.",
							shortDesc: "Can't move next turn if target or sub is not KOed.",
						}
	},
	"hyperfang": {
		name: "Hyper Fang",
		desc: "Has a 10% chance to make the target flinch.",
		shortDesc: "10% chance to make the target flinch."
	},
	"hypervoice": {
		name: "Hyper Voice",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	"hypnosis": {
		name: "Hypnosis",
		shortDesc: "Causes the target to fall asleep."
	},
	"iceball": {
		name: "Ice Ball",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
		gen7: {
							desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
						},
		gen6: {
							desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
						}
	},
	"icebeam": {
		name: "Ice Beam",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target."
	},
	"icepunch": {
		name: "Ice Punch",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target."
	},
	"iciclespear": {
		name: "Icicle Spear",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						}
	},
	"icywind": {
		name: "Icy Wind",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1.",
		gen2: {
							shortDesc: "100% chance to lower the target's Speed by 1.",
						}
	},
	"imprison": {
		name: "Imprison",
		desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
		shortDesc: "No foe can use any move known by the user.",
		gen7: {
							desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active. Z-Powered moves can still be selected and executed during this effect.",
						},
		gen6: {
							desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
						},
		gen4: {
							desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active. Fails if no opposing Pokemon know any of the user's moves.",
						},
		start: "  {POKEMON} sealed any moves its target shares with it!",
		cant: "{POKEMON} can't use its sealed {MOVE}!"
	},
	"ingrain": {
		name: "Ingrain",
		desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
		shortDesc: "Traps/grounds user; heals 1/16 max HP per turn.",
		gen7: {
							desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
						},
		gen5: {
							desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes and Toxic Spikes, even if the user is a Flying type or has the Levitate Ability.",
						},
		gen4: {
							desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass or U-turn. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes and Toxic Spikes, even if the user is a Flying type or has the Levitate Ability.",
						},
		gen3: {
							desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, and the replacement will remain trapped and still receive the healing effect.",
							shortDesc: "User recovers 1/16 max HP per turn. Traps user.",
						},
		start: "  {POKEMON} planted its roots!",
		block: "  {POKEMON} is anchored in place with its roots!",
		heal: "  {POKEMON} absorbed nutrients with its roots!"
	},
	"irondefense": {
		name: "Iron Defense",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	"irontail": {
		name: "Iron Tail",
		desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "30% chance to lower the target's Defense by 1."
	},
	"jumpkick": {
		name: "Jump Kick",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses.",
		gen4: {
							desc: "If this attack is not successful, the user loses HP equal to half the target's maximum HP if the target was immune, rounded down, otherwise half of the damage the target would have taken, rounded down, but no less than 1 HP and no more than half of the target's maximum HP, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
							shortDesc: "If miss, user takes 1/2 damage it would've dealt.",
						},
		gen3: {
							desc: "If this attack is not successful and the target was not immune, the user loses HP equal to half of the damage the target would have taken, rounded down, but no less than 1 HP and no more than half of the target's maximum HP, as crash damage.",
							shortDesc: "If miss, user takes 1/2 damage it would've dealt.",
						},
		gen2: {
							desc: "If this attack is not successful and the target was not immune, the user loses HP equal to 1/8 the damage the target would have taken, rounded down, but not less than 1 HP, as crash damage.",
							shortDesc: "If miss, user takes 1/8 damage it would've dealt.",
						},
		gen1: {
							desc: "If this attack misses the target, the user takes 1 HP of crash damage. If the user has a substitute, the crash damage is dealt to the target's substitute if it has one, otherwise no crash damage is dealt.",
							shortDesc: "User takes 1 HP of damage if it misses.",
						},
		damage: "#crash"
	},
	"karatechop": {
		name: "Karate Chop",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"kinesis": {
		name: "Kinesis",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	"knockoff": {
		name: "Knock Off",
		desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item if the user has not fainted. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Blue Orb, Red Orb, Adamant Crystal, Lustrous Globe, Griseous Core, Plate, Drive, Memory, Rusted Sword, Rusted Shield, Booster Energy, or Mask held by a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Paradox Pokemon, or Ogerpon, respectively, or if the user is one of those species and the target is holding the respective item. In this case, Paradox Pokemon include every species with the Protosynthesis and Quark Drive Abilities, except Gouging Fire, Raging Bolt, Iron Boulder, and Iron Crown. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "1.5× damage if foe holds an item. Removes item.",
		champions: {
							desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Mega Stone held by the species that can Mega Evolve with it. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen8: {
							desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item if the user has not fainted. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield held by a Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian, or Zamazenta, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen7: {
							desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item if the user has not fainted. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Z-Crystal, a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory held by a Kyogre, Groudon, Giratina, Arceus, Genesect, or Silvally, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen6: {
							desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item if the user has not fainted. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, or Drive held by a Kyogre, Groudon, Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen5: {
							desc: "If the user has not fainted, the target loses its held item. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not remove the target's item if it is a Griseous Orb, Plate, or Drive held by a Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
							shortDesc: "Removes the target's held item.",
						},
		gen4: {
							desc: "The target's held item is lost for the rest of the battle, unless the item is a Griseous Orb or the target has the Multitype or Sticky Hold Abilities. During the effect, the target cannot obtain a new item by any means.",
							shortDesc: "Target's item is lost and it cannot obtain another.",
						},
		gen3: {
							desc: "The target's held item is lost for the rest of the battle, unless it has the Sticky Hold Ability. During the effect, the target cannot gain a new item by any means.",
						},
		removeItem: "  {SOURCE} knocked off {POKEMON}'s {ITEM}!"
	},
	"leafblade": {
		name: "Leaf Blade",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"leechlife": {
		name: "Leech Life",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		gen4: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded down.",
						},
		gen3: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down.",
						}
	},
	"leechseed": {
		name: "Leech Seed",
		desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3× normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Mortal Spin or Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
		shortDesc: "1/8 of target's HP is restored to user every turn.",
		gen8: {
							desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3× normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
						},
		gen3: {
							desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Rapid Spin, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
						},
		gen1: {
							desc: "At the end of each of the target's turns, The Pokemon at the user's position steals 1/16 of the target's maximum HP, rounded down and multiplied by the target's current Toxic counter if it has one, even if the target currently has less than that amount of HP remaining. If the target switches out or any Pokemon uses Haze, this effect ends. Grass-type Pokemon are immune to this move.",
							shortDesc: "1/16 of target's HP is restored to user every turn.",
						},
		start: "  {POKEMON} was seeded!",
		end: "  {POKEMON} was freed from Leech Seed!",
		damage: "  {POKEMON}'s health is sapped by Leech Seed!"
	},
	"leer": {
		name: "Leer",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Defense by 1.",
		gen2: {
							shortDesc: "Lowers the target's Defense by 1.",
						}
	},
	"lick": {
		name: "Lick",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	"lightscreen": {
		name: "Light Screen",
		desc: "For 5 turns, the user and its party members take 0.5× damage from special attacks, or 0.66× damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, special damage to allies is halved.",
		gen6: {
							desc: "For 5 turns, the user and its party members take 0.5× damage from special attacks, or 0.66× damage if in a Double or Triple Battle. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
						},
		gen4: {
							desc: "For 5 turns, the user and its party members take 1/2 damage from special attacks, or 2/3 damage if there are multiple active Pokemon on the user's side. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
						},
		gen3: {
							desc: "For 5 turns, the user and its party members take 1/2 damage from special attacks, or 2/3 damage if there are multiple active Pokemon on the user's side. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break. Fails if the effect is already active on the user's side.",
						},
		gen2: {
							desc: "For 5 turns, the user and its party members have their Special Defense doubled. Critical hits ignore this effect. Fails if the effect is already active on the user's side.",
							shortDesc: "For 5 turns, the user's party has doubled Sp. Def.",
						},
		gen1: {
							desc: "While the user remains active, its Special is doubled when taking damage. Critical hits ignore this effect. If any Pokemon uses Haze, this effect ends.",
							shortDesc: "While active, user's Special is 2× when damaged.",
							start: "  {POKEMON}'s protected against special attacks!",
						},
		start: "  Light Screen made {TEAM} stronger against special moves!",
		end: "  {TEAM}'s Light Screen wore off!"
	},
	"lockon": {
		name: "Lock-On",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target.",
		gen4: {
							desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. When this effect is started against the target, this and Mind Reader's effects end for every other Pokemon against that target. If the target leaves the field using Baton Pass, the replacement remains under this effect. If the user leaves the field using Baton Pass, this effect is restarted against the same target for the replacement. The effect ends if either the user or the target leaves the field.",
						},
		gen2: {
							desc: "The next accuracy check against the target succeeds. The target will still avoid Earthquake, Fissure, and Magnitude if it is using Fly. If the target leaves the field using Baton Pass, the replacement remains under this effect. This effect ends when the target leaves the field or an accuracy check is done against it.",
							shortDesc: "The next move will not miss the target.",
						},
		start: "  {SOURCE} took aim at {POKEMON}!"
	},
	"lovelykiss": {
		name: "Lovely Kiss",
		shortDesc: "Causes the target to fall asleep."
	},
	"lowkick": {
		name: "Low Kick",
		desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
		shortDesc: "More power the heavier the target.",
		gen2: {
							desc: "Has a 30% chance to make the target flinch.",
							shortDesc: "30% chance to make the target flinch.",
						}
	},
	"lusterpurge": {
		name: "Luster Purge",
		desc: "Has a 50% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Def by 1."
	},
	"machpunch": {
		name: "Mach Punch",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	"magicalleaf": {
		name: "Magical Leaf",
		shortDesc: "This move does not check accuracy."
	},
	"magiccoat": {
		name: "Magic Coat",
		desc: "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
		shortDesc: "Bounces back certain non-damaging moves.",
		gen5: {
							desc: "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
						},
		gen4: {
							desc: "The user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. If the move targets both opposing Pokemon, the Pokemon under this effect will reflect the move only targeting the original user. The effect ends once a move is reflected or at the end of the turn. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
						},
		gen3: {
							desc: "The user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. If the move targets both opposing Pokemon and the Pokemon under this effect is on the left side, it will reflect the move targeting both opposing Pokemon and its ally will not be affected by the original move; otherwise, if the Pokemon under this effect is on the right side, its ally will be affected by the original move and this Pokemon will reflect the move only targeting the original user. The effect ends once a move is reflected or at the end of the turn. Moves reflected in this way can be reflected again by another Pokemon under this effect. If the user has the Soundproof Ability, it nullifies sound-based moves before this effect happens. The Lightning Rod Ability redirects Electric moves before this move takes effect.",
						},
		start: "  {POKEMON} shrouded itself with Magic Coat!",
		move: "{POKEMON} bounced the {MOVE} back!"
	},
	"magnitude": {
		name: "Magnitude",
		desc: "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Power varies; 2× on Dig.",
		gen4: {
							desc: "The power of this move varies. 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Power doubles if the target is using Dig.",
						},
		activate: "  Magnitude {NUMBER}!"
	},
	"meanlook": {
		name: "Mean Look",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		gen7: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen5: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen4: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						},
		gen3: {
							desc: "Prevents the target from switching out. The target can still switch out if it uses Baton Pass. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						}
	},
	"meditate": {
		name: "Meditate",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1."
	},
	"megadrain": {
		name: "Mega Drain",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		gen4: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded down.",
						},
		gen3: {
							desc: "The user recovers 1/2 the HP lost by the target, rounded down.",
						}
	},
	"megahorn": {
		name: "Megahorn",
		shortDesc: "No additional effect."
	},
	"megakick": {
		name: "Mega Kick",
		shortDesc: "No additional effect."
	},
	"megapunch": {
		name: "Mega Punch",
		shortDesc: "No additional effect."
	},
	"memento": {
		name: "Memento",
		desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target's stats cannot be changed.",
		shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints.",
		gen4: {
							desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints, even if this move misses. This move can hit targets in the middle of a two-turn move. Fails entirely if there is no target, but does not fail if the target's stats cannot be changed.",
						},
		gen3: {
							desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints. This move does not check accuracy, and can hit targets in the middle of a two-turn move. Fails entirely if the target's Attack and Special Attack stat stages are both -6.",
						},
		heal: "  {POKEMON}'s HP was restored by the Z-Power!"
	},
	"metalclaw": {
		name: "Metal Claw",
		desc: "Has a 10% chance to raise the user's Attack by 1 stage.",
		shortDesc: "10% chance to raise the user's Attack by 1."
	},
	"metalsound": {
		name: "Metal Sound",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2."
	},
	"meteormash": {
		name: "Meteor Mash",
		desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
		shortDesc: "20% chance to raise the user's Attack by 1."
	},
	"metronome": {
		name: "Metronome",
		desc: "A random move is selected for use, other than After You, Apple Acid, Armor Cannon, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Chilling Water, Chilly Reception, Clangorous Soul, Collision Course, Combat Torque, Comeuppance, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Doodle, Double Iron Bash, Double Shock, Dragon Ascent, Dragon Energy, Drum Beating, Dynamax Cannon, Electro Drift, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fillet Away, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyper Drill, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jet Punch, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Magical Torque, Make It Rain, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Noxious Torque, Obstruct, Order Up, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Population Bomb, Pounce, Power Shift, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Fist, Rage Powder, Raging Bull, Raging Fury, Relic Song, Revival Blessing, Ruination, Salt Cure, Secret Sword, Shed Tail, Shell Trap, Silk Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Snowscape, Spectral Thief, Spicy Extract, Spiky Shield, Spirit Break, Spotlight, Springtide Storm, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Tera Starstorm, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Tidy Up, Trailblaze, Transform, Trick, Twin Beam, V-create, Wicked Blow, Wicked Torque, or Wide Guard.",
		shortDesc: "Picks a random move.",
		gen8bdsp: {
							desc: "A random move is selected for use, other than After You, Belch, Body Press, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Ascent, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Life Dew, Metronome, Mimic, Mirror Coat, Nature Power, Origin Pulse, Precipice Blades, Protect, Quash, Quick Guard, Rage Powder, Sketch, Sleep Talk, Snarl, Snore, Spiky Shield, Struggle, Switcheroo, Thief, Transform, Trick, or Wide Guard.",
						},
		gen8: {
							desc: "A random move is selected for use, other than After You, Apple Acid, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Dragon Energy, Dragon Hammer, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Transform, Trick, V-create, Wicked Blow, or Wide Guard.",
						},
		gen7letsgo: {
							desc: "A random move that was introduced in gen 1 is selected for use, other than Counter, Mimic, Mirror Move, Struggle, or Transform.",
							shortDesc: "Picks a random move from gen 1.",
						},
		gen7: {
							desc: "A random move is selected for use, other than After You, Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Dragon Ascent, Endure, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Nature Power, Origin Pulse, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spotlight, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
						},
		gen6: {
							desc: "A random move is selected for use, other than After You, Assist, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Dragon Ascent, Endure, Feint, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Origin Pulse, Precipice Blades, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spiky Shield, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
						},
		gen5: {
							desc: "A random move is selected for use, other than After You, Assist, Bestow, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Ice Burn, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Sketch, Sleep Talk, Snarl, Snatch, Snore, Struggle, Switcheroo, Techno Blast, Thief, Transform, Trick, V-create, or Wide Guard.",
						},
		gen4: {
							desc: "A random move is selected for use, other than Assist, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Protect, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, Trick, or any move the user already knows.",
						},
		gen3: {
							desc: "A random move is selected for use, other than Counter, Covet, Destiny Bond, Detect, Endure, Focus Punch, Follow Me, Helping Hand, Metronome, Mimic, Mirror Coat, Protect, Sketch, Sleep Talk, Snatch, Struggle, Thief, or Trick.",
						},
		gen2: {
							desc: "A random move is selected for use, other than Counter, Destiny Bond, Detect, Endure, Metronome, Mimic, Mirror Coat, Protect, Sketch, Sleep Talk, Struggle, Thief, or any move the user already knows.",
						},
		gen1: {
							desc: "A random move is selected for use, other than Metronome or Struggle.",
						},
		move: "Waggling a finger let it use {MOVE}!"
	},
	"milkdrink": {
		name: "Milk Drink",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		gen4: {
							desc: "The user restores 1/2 of its maximum HP, rounded down.",
						}
	},
	"mimic": {
		name: "Mimic",
		desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Assist, Behemoth Bash, Behemoth Blade, Belch, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Tera Starstorm, Transform, or Wicked Torque.",
		shortDesc: "The last move the target used replaces this one.",
		gen8: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Behemoth Bash, Behemoth Blade, Chatter, Dynamax Cannon, Mimic, Sketch, Struggle, Transform, or any Max or G-Max Move.",
						},
		gen7: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Mimic, Sketch, Struggle, Transform, or any Z-Move.",
						},
		gen6: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Mimic, Sketch, Struggle, or Transform.",
						},
		gen4: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has 5 PP. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Metronome, Mimic, Sketch, or Struggle.",
						},
		gen3: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has 5 PP. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Metronome, Mimic, Sketch, or Struggle.",
						},
		gen2: {
							desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has 5 PP. Fails if the target has not made a move, if the user already knows the move, or if the move is Struggle.",
						},
		gen1: {
							desc: "While the user remains active, this move is replaced by a random move known by the target, even if the user already knows that move. The copied move keeps the remaining PP for this move, regardless of the copied move's maximum PP. Whenever one PP is used for a copied move, one PP is used for this move.",
							shortDesc: "Random move known by the target replaces this.",
						},
		start: "  {POKEMON} learned {MOVE}!"
	},
	"mindreader": {
		name: "Mind Reader",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target.",
		gen4: {
							desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. When this effect is started against the target, this and Lock-On's effects end for every other Pokemon against that target. If the target leaves the field using Baton Pass, the replacement remains under this effect. If the user leaves the field using Baton Pass, this effect is restarted against the same target for the replacement. The effect ends if either the user or the target leaves the field.",
						},
		gen2: {
							desc: "The next accuracy check against the target succeeds. The target will still avoid Earthquake, Fissure, and Magnitude if it is using Fly. If the target leaves the field using Baton Pass, the replacement remains under this effect. This effect ends when the target leaves the field or an accuracy check is done against it.",
							shortDesc: "The next move will not miss the target.",
						},
		start: "#lockon"
	},
	"minimize": {
		name: "Minimize",
		desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, Stomp, and Supercell Slam will not check accuracy and have their damage doubled if used against the user while it is active.",
		shortDesc: "Raises the user's evasiveness by 2.",
		gen8: {
							desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
						},
		gen6: {
							desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Phantom Force, Shadow Force, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
						},
		gen5: {
							desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Stomp and Steamroller will have their damage doubled if used against the user while it is active.",
						},
		gen4: {
							desc: "Raises the user's evasiveness by 1 stage. Whether or not the user's evasiveness was changed, Stomp will have its power doubled if used against the user while it is active.",
							shortDesc: "Raises the user's evasiveness by 1.",
						},
		gen3: {
							desc: "Raises the user's evasiveness by 1 stage. Whether or not the user's evasiveness was changed, Astonish, Extrasensory, Needle Arm, and Stomp will have their damage doubled if used against the user while it is active.",
						},
		gen2: {
							desc: "Raises the user's evasiveness by 1 stage. Whether or not the user's evasiveness was changed, Stomp will have its power doubled if used against the user while it is active. Baton Pass can be used to transfer this effect to an ally.",
						},
		gen1: {
							desc: "Raises the user's evasiveness by 1 stage.",
						}
	},
	"mirrorcoat": {
		name: "Mirror Coat",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
		shortDesc: "If hit by special attack, returns double damage.",
		gen6: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals damage with a power of 1 instead. If that opposing Pokemon's position is no longer in use, the damage is done to a random opposing Pokemon in range. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
						},
		gen4: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn, or if the user did not lose HP from the attack.",
						},
		gen3: {
							desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. This move considers Hidden Power as Normal type, and only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn, or if the user did not lose HP from the attack.",
						},
		gen2: {
							desc: "Deals damage to the opposing Pokemon equal to twice the HP lost by the user from a special attack this turn. This move considers Hidden Power as Normal type, and only the last hit of a multi-hit attack is counted. Fails if the user moves first, if the user was not hit by a special attack this turn, or if the user did not lose HP from the attack.",
						}
	},
	"mirrormove": {
		name: "Mirror Move",
		desc: "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move.",
		shortDesc: "User uses the target's last used move against it.",
		gen4: {
							desc: "The user uses the last move that successfully targeted the user. The copied move is used with no specific target. Fails if no move has targeted the user, if the move was called by another move, if the move is Encore, or if the move cannot be copied by this move.",
						},
		gen3: {
							desc: "The user uses the last move that successfully targeted the user. The copied move is used with no specific target. Fails if no move has targeted the user, if the move missed, failed, or had no effect on the user, or if the move cannot be copied by this move.",
						},
		gen2: {
							desc: "The user uses the last move used by the target. Fails if the target has not made a move since the user switched in, or if the last move used was Metronome, Mimic, Mirror Move, Sketch, Sleep Talk, Transform, or any move the user knows.",
						},
		gen1: {
							desc: "The user uses the last move used by the target. Fails if the target has not made a move since the user switched in, or if the last move used was Mirror Move.",
						}
	},
	"mist": {
		name: "Mist",
		desc: "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from stat drops.",
		gen2: {
							desc: "While the user remains active, it is protected from having its stat stages lowered by other Pokemon. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
							shortDesc: "While active, user is protected from stat drops.",
							start: "  {POKEMON}'s shrouded in MIST!",
							block: "  {POKEMON}'s protected by MIST.",
						},
		gen1: {
							desc: "While the user remains active, it is protected from having its stat stages lowered by other Pokemon, unless caused by the secondary effect of a move. Fails if the user already has the effect. If any Pokemon uses Haze, this effect ends.",
							start: "  {POKEMON}'s shrouded in mist!",
							block: "  But it failed!",
						},
		start: "  {TEAM} became shrouded in mist!",
		end: "  {TEAM} is no longer protected by mist!",
		block: "  {POKEMON} is protected by the mist!"
	},
	"mistball": {
		name: "Mist Ball",
		desc: "Has a 50% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Atk by 1."
	},
	"moonlight": {
		name: "Moonlight",
		desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Heavy Rain, Rain, Sandstorm, or Snow, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		gen8: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen7: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen5: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded half down.",
						},
		gen4: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded down.",
						},
		gen2: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, all of its HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Rain or Sandstorm, all rounded down.",
						}
	},
	"morningsun": {
		name: "Morning Sun",
		desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Heavy Rain, Rain, Sandstorm, or Snow, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		gen8: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen7: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen5: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded half down.",
						},
		gen4: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded down.",
						},
		gen2: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, all of its HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Rain or Sandstorm, all rounded down.",
						}
	},
	"muddywater": {
		name: "Muddy Water",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) accuracy by 1."
	},
	"mudshot": {
		name: "Mud Shot",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	"mudslap": {
		name: "Mud-Slap",
		desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "100% chance to lower the target's accuracy by 1."
	},
	"mudsport": {
		name: "Mud Sport",
		desc: "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Electric-type attacks have 1/3 power.",
		gen5: {
							desc: "While the user is active, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active for any Pokemon.",
							shortDesc: "Weakens Electric-type attacks to 1/3 their power.",
						},
		gen4: {
							desc: "While the user is active, all Electric-type attacks used by any active Pokemon have their power halved. Fails if this effect is already active for the user. Baton Pass can be used to transfer this effect to an ally.",
							shortDesc: "Weakens Electric-type attacks to 1/2 their power.",
						}
	},
	"naturepower": {
		name: "Nature Power",
		desc: "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain.",
		shortDesc: "Attack depends on terrain (default Tri Attack).",
		gen6: {
							desc: "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, and Energy Ball during Grassy Terrain.",
						},
		gen5: {
							desc: "This move calls another move for use based on the battle terrain. Earthquake on the regular Wi-Fi terrain.",
							shortDesc: "Attack changes based on terrain. (Earthquake)",
						},
		gen4: {
							desc: "This move calls another move for use based on the battle terrain. Tri Attack in Wi-Fi battles.",
							shortDesc: "Attack changes based on terrain. (Tri Attack)",
						},
		gen3: {
							desc: "This move calls another move for use depending on the battle terrain. Swift in Wi-Fi battles.",
							shortDesc: "Attack changes based on terrain. (Swift)",
						},
		move: "Nature Power turned into {MOVE}!"
	},
	"needlearm": {
		name: "Needle Arm",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch.",
		gen3: {
							desc: "Has a 30% chance to make the target flinch. Damage doubles if the target has used Minimize while active.",
						}
	},
	"nightmare": {
		name: "Nightmare",
		desc: "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn.",
		shortDesc: "A sleeping target is hurt by 1/4 max HP per turn.",
		start: "  {POKEMON} began having a nightmare!",
		damage: "  {POKEMON} is locked in a nightmare!"
	},
	"nightshade": {
		name: "Night Shade",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level.",
		gen1: {
							desc: "Deals damage to the target equal to the user's level. This move ignores type immunity.",
							shortDesc: "Damage = user's level. Can hit Normal types.",
						}
	},
	"octazooka": {
		name: "Octazooka",
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1."
	},
	"odorsleuth": {
		name: "Odor Sleuth",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
		gen4: {
							desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type.",
						},
		gen3: {
							desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type.",
						}
	},
	"outrage": {
		name: "Outrage",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		gen6: {
							desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an adjacent opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen4: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen3: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, falls asleep, becomes frozen, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen2: {
							desc: "Whether or not this move is successful, the user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						}
	},
	"overheat": {
		name: "Overheat",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	"painsplit": {
		name: "Pain Split",
		desc: "The user and the target's HP become the average of their current HP, rounded down, but not more than the maximum HP of either one.",
		shortDesc: "Shares HP of user and target equally.",
		activate: "  The battlers shared their pain!"
	},
	"payday": {
		name: "Pay Day",
		desc: "No additional effect.",
		shortDesc: "Scatters coins.",
		activate: "  Coins were scattered everywhere!"
	},
	"peck": {
		name: "Peck",
		shortDesc: "No additional effect."
	},
	"perishsong": {
		name: "Perish Song",
		desc: "Each active Pokemon receives a perish count of 4 if it doesn't already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down.",
		shortDesc: "All active Pokemon will faint in 3 turns.",
		start: "  All Pok\u00E9mon that heard the song will faint in three turns!",
		activate: "  {POKEMON}'s perish count fell to {NUMBER}!"
	},
	"petaldance": {
		name: "Petal Dance",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		gen6: {
							desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an adjacent opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen4: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen3: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, falls asleep, becomes frozen, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen2: {
							desc: "Whether or not this move is successful, the user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen1: {
							desc: "Whether or not this move is successful, the user spends three or four turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. During the effect, this move's accuracy is overwritten every turn with the current calculated accuracy including stat stage changes, but not to less than 1/256 or more than 255/256.",
							shortDesc: "Lasts 3-4 turns. Confuses the user afterwards.",
						}
	},
	"pinmissile": {
		name: "Pin Missile",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"poisonfang": {
		name: "Poison Fang",
		desc: "Has a 50% chance to badly poison the target.",
		shortDesc: "50% chance to badly poison the target.",
		gen5: {
							desc: "Has a 30% chance to badly poison the target.",
							shortDesc: "30% chance to badly poison the target.",
						}
	},
	"poisongas": {
		name: "Poison Gas",
		desc: "Poisons the target.",
		shortDesc: "Poisons the foe(s).",
		gen2: {
							shortDesc: "Poisons the target.",
						}
	},
	"poisonpowder": {
		name: "Poison Powder",
		desc: "Poisons the target.",
		shortDesc: "Poisons the target."
	},
	"poisonsting": {
		name: "Poison Sting",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		gen1: {
							desc: "Has a 20% chance to poison the target.",
							shortDesc: "20% chance to poison the target.",
						}
	},
	"poisontail": {
		name: "Poison Tail",
		desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to poison."
	},
	"pound": {
		name: "Pound",
		shortDesc: "No additional effect."
	},
	"powdersnow": {
		name: "Powder Snow",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the foe(s).",
		gen2: {
							shortDesc: "10% chance to freeze the target.",
						}
	},
	"present": {
		name: "Present",
		desc: "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down.",
		shortDesc: "40, 80, 120 power, or heals target 1/4 max HP.",
		gen2: {
							desc: "If this move is successful, it deals damage or heals the target. 102/256 chance for 40 power, 76/256 chance for 80 power, 26/256 chance for 120 power, or 52/256 chance to heal the target by 1/4 of its maximum HP, rounded down. If this move deals damage, it uses an abnormal version of the damage formula by substituting certain values. The user's Attack stat is replaced with 10 times the effectiveness of this move against the target, the target's Defense stat is replaced with the index number of the user's secondary type, and the user's level is replaced with the index number of the target's secondary type. If a Pokemon does not have a secondary type, its primary type is used. The index numbers for each type are Normal: 0, Fighting: 1, Flying: 2, Poison: 3, Ground: 4, Rock: 5, Bug: 7, Ghost: 8, Steel: 9, Fire: 20, Water: 21, Grass: 22, Electric: 23, Psychic: 24, Ice: 25, Dragon: 26, Dark: 27. If at any point a division by 0 would happen in the damage formula, it divides by 1 instead.",
						}
	},
	"protect": {
		name: "Protect",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn.",
		gen8: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen7: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen6: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
						},
		gen5: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, Protect, Quick Guard, or Wide Guard. Fails if the user moves last this turn.",
						},
		gen4: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used, up to a maximum of 8. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen3: {
							desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has an X/65536 chance of being successful, where X starts at 65535 and halves, rounded down, each time this move is successfully used. After the fourth successful use in a row, X drops to 118 and continues with seemingly random values from 0-65535 on subsequent successful uses. X resets to 65535 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user moves last this turn.",
						},
		gen2: {
							desc: "The user is protected from attacks made by the opponent during this turn. This move has an X/255 chance of being successful, where X starts at 255 and halves, rounded down, each time this move is successfully used. X resets to 255 if this move fails or if the user's last move used is not Detect, Endure, or Protect. Fails if the user has a substitute or moves last this turn.",
						},
		start: "  {POKEMON} protected itself!",
		block: "  {POKEMON} protected itself!"
	},
	"psybeam": {
		name: "Psybeam",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	"psychic": {
		name: "Psychic",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		gen1: {
							desc: "Has a 33% chance to lower the target's Special by 1 stage.",
							shortDesc: "33% chance to lower the target's Special by 1.",
						}
	},
	"psychoboost": {
		name: "Psycho Boost",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	"psychup": {
		name: "Psych Up",
		desc: "The user copies all of the target's current stat stage changes.",
		shortDesc: "Copies the target's current stat stages.",
		gen2: {
							desc: "The user copies all of the target's current stat stage changes. Fails if the target's stat stages are 0.",
						}
	},
	"psywave": {
		name: "Psywave",
		desc: "Deals damage to the target equal to (user's level) × (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP.",
		shortDesc: "Random damage equal to 0.5×-1.5× user's level.",
		gen4: {
							desc: "Deals damage to the target equal to (user's level) × (X × 10 + 50) / 100, where X is a random number from 0 to 10, rounded down, but not less than 1 HP.",
						},
		gen2: {
							desc: "Deals damage to the target equal to a random number from 1 to (user's level × 1.5 - 1), rounded down, but not less than 1 HP.",
							shortDesc: "Random damage from 1 to (user's level × 1.5 - 1).",
						}
	},
	"pursuit": {
		name: "Pursuit",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
		shortDesc: "If a foe is switching out, hits it at 2× power.",
		gen7: {
							desc: "If an adjacent opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Parting Shot, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
						},
		gen5: {
							desc: "If an adjacent opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using U-turn or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
						},
		gen4: {
							desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using U-turn, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon becomes active immediately.",
						},
		gen3: {
							desc: "If the target is an opposing Pokemon and it switches out this turn, this move hits that Pokemon before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon becomes active immediately.",
							shortDesc: "Power doubles if the targeted foe is switching out.",
						},
		gen2: {
							desc: "If the target switches out this turn, this move hits it before it leaves the field with doubled power and the user's turn is over.",
							shortDesc: "Power doubles if the foe is switching out.",
						},
		activate: "  ({TARGET} is being withdrawn...)"
	},
	"quickattack": {
		name: "Quick Attack",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	"rage": {
		name: "Rage",
		desc: "Once this move is successfully used, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
		shortDesc: "Raises the user's Attack by 1 if hit during use.",
		gen3: {
							desc: "Once this move is used and unless the target protected itself, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
						},
		gen2: {
							desc: "Once this move is successfully used, X starts at 1. This move's damage is multiplied by X, and whenever the user is hit by the opposing Pokemon, X increases by 1, with a maximum of 255. X resets to 1 when the user is no longer active or did not choose this move for use.",
							shortDesc: "Next Rage increases in damage if hit during use.",
						},
		gen1: {
							desc: "Once this move is successfully used, the user automatically uses this move every turn and can no longer switch out. During the effect, the user's Attack is raised by 1 stage every time it is hit by the opposing Pokemon, and this move's accuracy is overwritten every turn with the current calculated accuracy including stat stage changes, but not to less than 1/256 or more than 255/256.",
							shortDesc: "Lasts forever. Raises user's Attack by 1 when hit.",
						}
	},
	"raindance": {
		name: "Rain Dance",
		desc: "For 5 turns, the weather becomes Rain. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain.",
		shortDesc: "For 5 turns, heavy rain powers Water moves.",
		gen3: {
							desc: "For 5 turns, the weather becomes Rain. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Fails if the current weather is Rain.",
						},
		gen2: {
							desc: "For 5 turns, the weather becomes Rain, even if the current weather is Rain. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect.",
						}
	},
	"rapidspin": {
		name: "Rapid Spin",
		desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "Free user from hazards/bind/Leech Seed; +1 Spe.",
		gen7: {
							desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field.",
							shortDesc: "Frees user from hazards, binding, Leech Seed.",
						},
		gen4: {
							desc: "If this move is successful, the effects of Leech Seed and binding moves end against the user, and all hazards are removed from the user's side of the field.",
						},
		gen3: {
							desc: "If this move is successful, the effects of Leech Seed and binding moves end for the user, and Spikes are removed from the user's side of the field.",
						}
	},
	"razorleaf": {
		name: "Razor Leaf",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. Hits adjacent foes.",
		gen2: {
							shortDesc: "High critical hit ratio.",
						}
	},
	"razorwind": {
		name: "Razor Wind",
		desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits foe(s) turn 2. High crit ratio.",
		gen4: {
							desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second.",
						},
		gen3: {
							desc: "This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges, then hits foe(s) turn 2.",
						},
		gen2: {
							desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges, then hits target turn 2. High crit ratio.",
						},
		gen1: {
							desc: "This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges turn 1. Hits turn 2.",
						},
		prepare: "  {POKEMON} whipped up a whirlwind!"
	},
	"recover": {
		name: "Recover",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		gen4: {
							desc: "The user restores 1/2 of its maximum HP, rounded down.",
						},
		gen1: {
							desc: "The user restores 1/2 of its maximum HP, rounded down. Fails if (user's maximum HP - user's current HP + 1) is divisible by 256.",
						}
	},
	"recycle": {
		name: "Recycle",
		desc: "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
		shortDesc: "Restores the item the user last used.",
		gen7: {
							desc: "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
						},
		gen4: {
							desc: "The user regains the item last used by a Pokemon in its current position on the field, even if that Pokemon was not the user. Fails if the user is holding an item, if no items have been used at the user's position, or if the item was lost to Covet, Knock Off, or Thief. Items thrown with Fling can be regained.",
						},
		addItem: "  {POKEMON} found one {ITEM}!"
	},
	"reflect": {
		name: "Reflect",
		desc: "For 5 turns, the user and its party members take 0.5× damage from physical attacks, or 0.66× damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, physical damage to allies is halved.",
		gen6: {
							desc: "For 5 turns, the user and its party members take 0.5× damage from physical attacks, or 0.66× damage if in a Double or Triple Battle. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
						},
		gen4: {
							desc: "For 5 turns, the user and its party members take 1/2 damage from physical attacks, or 2/3 damage if there are multiple active Pokemon on the user's side. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
						},
		gen3: {
							desc: "For 5 turns, the user and its party members take 1/2 damage from physical attacks, or 2/3 damage if there are multiple active Pokemon on the user's side. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break. Fails if the effect is already active on the user's side.",
						},
		gen2: {
							desc: "For 5 turns, the user and its party members have their Defense doubled. Critical hits ignore this effect. Fails if the effect is already active on the user's side.",
							shortDesc: "For 5 turns, the user's party has doubled Def.",
						},
		gen1: {
							desc: "While the user remains active, its Defense is doubled when taking damage. Critical hits ignore this protection. This effect can be removed by Haze.",
							shortDesc: "While active, the user's Defense is doubled.",
							start: "  {POKEMON} gained armor!",
						},
		start: "  Reflect made {TEAM} stronger against physical moves!",
		end: "  {TEAM}'s Reflect wore off!"
	},
	"refresh": {
		name: "Refresh",
		desc: "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
		shortDesc: "User cures its burn, poison, or paralysis."
	},
	"rest": {
		name: "Rest",
		desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.",
		shortDesc: "User sleeps 2 turns and restores HP and status.",
		gen2: {
							desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process, even if it was already asleep. Fails if the user has full HP.",
						},
		gen1: {
							desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. This does not remove the user's stat penalty for burn or paralysis. Fails if the user has full HP.",
						}
	},
	"return": {
		name: "Return",
		desc: "Power is equal to the greater of (user's Happiness × 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at maximum Happiness."
	},
	"revenge": {
		name: "Revenge",
		desc: "Power doubles if the user was hit by the target this turn.",
		shortDesc: "Power doubles if user is damaged by the target.",
		gen4: {
							desc: "Power doubles if the user was hit by a Pokemon in the target's current position this turn.",
						},
		gen3: {
							desc: "Damage doubles if the user was hit by a Pokemon in the target's current position this turn, and that Pokemon was the last to hit the user.",
							shortDesc: "Damage doubles if user is hit by the target.",
						}
	},
	"reversal": {
		name: "Reversal",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left.",
		gen4: {
							desc: "The power of this move is 20 if X is 43 to 48, 40 if X is 22 to 42, 80 if X is 13 to 21, 100 if X is 6 to 12, 150 if X is 2 to 5, and 200 if X is 0 or 1, where X is equal to (user's current HP × 64 / user's maximum HP), rounded down.",
						},
		gen3: {
							desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down.",
						},
		gen2: {
							desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP × 48 / user's maximum HP), rounded down. This move does not apply damage variance and cannot be a critical hit.",
						}
	},
	"roar": {
		name: "Roar",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally.",
		gen4: {
							desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, if the target used Ingrain previously or has the Suction Cups Ability, or if the user's level is lower than the target's and X × (user's level + target's level) / 256 + 1 is less than or equal to (target's level / 4), rounded down, where X is a random number from 0 to 255.",
						},
		gen2: {
							desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the user moves before the target.",
						},
		gen1: {
							desc: "No competitive use.",
							shortDesc: "No competitive use.",
						}
	},
	"rockblast": {
		name: "Rock Blast",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen8: {
							desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
						},
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						}
	},
	"rockslide": {
		name: "Rock Slide",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the foe(s) flinch.",
		gen1: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						},
		gen2: {
							shortDesc: "30% chance to make the target flinch.",
						}
	},
	"rocksmash": {
		name: "Rock Smash",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	"rockthrow": {
		name: "Rock Throw",
		shortDesc: "No additional effect."
	},
	"rocktomb": {
		name: "Rock Tomb",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	"roleplay": {
		name: "Role Play",
		desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Zen Mode, Zero to Hero, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Flower Gift, Forecast, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
		shortDesc: "User replaces its Ability with the target's.",
		gen8: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
						},
		gen7: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or already matches the target, or if the target's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
						},
		gen6: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Multitype, Stance Change, or already matches the target, or if the target's Ability is Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, or Zen Mode.",
						},
		gen5: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Multitype or already matches the target, or if the target's Ability is Flower Gift, Forecast, Illusion, Imposter, Multitype, Trace, Wonder Guard, or Zen Mode.",
						},
		gen4: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Multitype or already matches the target, if the target's Ability is Multitype or Wonder Guard, or if the user is holding a Griseous Orb.",
						},
		gen3: {
							desc: "The user's Ability changes to match the target's Ability. Fails if the target's Ability is Wonder Guard.",
						},
		changeAbility: "  {POKEMON} copied {SOURCE}'s {ABILITY} Ability!"
	},
	"rollingkick": {
		name: "Rolling Kick",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch."
	},
	"rollout": {
		name: "Rollout",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
		gen7: {
							desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
						},
		gen6: {
							desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
						}
	},
	"sacredfire": {
		name: "Sacred Fire",
		desc: "Has a 50% chance to burn the target.",
		shortDesc: "50% chance to burn the target. Thaws user."
	},
	"safeguard": {
		name: "Safeguard",
		desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokemon. Pokemon on the user's side cannot become affected by Yawn but can fall asleep from its effect. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from status.",
		gen3: {
							desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokemon. Pokemon on the user's side cannot become affected by Yawn but can fall asleep from its effect. Fails if the effect is already active on the user's side.",
						},
		gen2: {
							desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokemon. During the effect, Outrage, Thrash, and Petal Dance do not confuse the user. Fails if the effect is already active on the user's side.",
						},
		start: "  {TEAM} cloaked itself in a mystical veil!",
		end: "  {TEAM} is no longer protected by Safeguard!",
		block: "  {POKEMON} is protected by Safeguard!"
	},
	"sandattack": {
		name: "Sand Attack",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	"sandstorm": {
		name: "Sandstorm",
		desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
		shortDesc: "For 5 turns, a sandstorm rages. Rock: 1.5× SpD.",
		gen4: {
							desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
						},
		gen3: {
							desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Sand Veil Ability. Fails if the current weather is Sandstorm.",
							shortDesc: "For 5 turns, a sandstorm rages.",
						},
		gen2: {
							desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/8 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type. Fails if the current weather is Sandstorm.",
						}
	},
	"sandtomb": {
		name: "Sand Tomb",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin. This effect is not stackable or reset by using this or another partial-trapping move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		start: "  {POKEMON} became trapped by the quicksand!"
	},
	"scaryface": {
		name: "Scary Face",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2."
	},
	"scratch": {
		name: "Scratch",
		shortDesc: "No additional effect."
	},
	"screech": {
		name: "Screech",
		desc: "Lowers the target's Defense by 2 stages.",
		shortDesc: "Lowers the target's Defense by 2."
	},
	"secretpower": {
		name: "Secret Power",
		desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain.",
		shortDesc: "Effect varies with terrain. (30% paralysis chance)",
		gen6: {
							desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, and causes sleep during Grassy Terrain.",
						},
		gen5: {
							desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Lowers accuracy by 1 stage on the regular Wi-Fi terrain. The secondary effect chance is not affected by the Serene Grace Ability.",
							shortDesc: "Effect varies with terrain. (30% chance acc -1)",
						},
		gen4: {
							desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain.",
							shortDesc: "Effect varies with terrain. (30% paralysis chance)",
						}
	},
	"seismictoss": {
		name: "Seismic Toss",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level.",
		gen1: {
							desc: "Deals damage to the target equal to the user's level. This move ignores type immunity.",
							shortDesc: "Damage = user's level. Can hit Ghost types.",
						}
	},
	"selfdestruct": {
		name: "Self-Destruct",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		gen4: {
							desc: "The user faints after using this move, unless this move has no target. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
							shortDesc: "Target's Def halved during damage. User faints.",
						},
		gen3: {
							desc: "The user faints after using this move. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
						},
		gen2: {
							desc: "The user faints after using this move. The target's Defense is halved during damage calculation.",
						},
		gen1: {
							desc: "The user faints after using this move, unless the target's substitute was broken by the damage. The target's Defense is halved during damage calculation.",
						}
	},
	"shadowball": {
		name: "Shadow Ball",
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1."
	},
	"shadowpunch": {
		name: "Shadow Punch",
		shortDesc: "This move does not check accuracy."
	},
	"sharpen": {
		name: "Sharpen",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1."
	},
	"sheercold": {
		name: "Sheer Cold",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs non-Ice targets. Fails if user's lower level.",
		gen6: {
							desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
							shortDesc: "OHKOs the target. Fails if user is a lower level.",
						}
	},
	"shockwave": {
		name: "Shock Wave",
		shortDesc: "This move does not check accuracy."
	},
	"signalbeam": {
		name: "Signal Beam",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	"silverwind": {
		name: "Silver Wind",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva)."
	},
	"sing": {
		name: "Sing",
		shortDesc: "Causes the target to fall asleep."
	},
	"sketch": {
		name: "Sketch",
		desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Blazing Torque, Combat Torque, Dark Void, Hyperspace Fury, Magical Torque, Noxious Torque, Revival Blessing, Sketch, Struggle, Tera Starstorm, Wicked Torque, or any move the user knows.",
		shortDesc: "Permanently copies the last move target used.",
		gen8: {
							desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows.",
						},
		gen3: {
							desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Sketch, Struggle, or any move the user knows.",
						},
		gen2: {
							desc: "Fails when used in Link Battles.",
							shortDesc: "Fails when used in Link Battles.",
						},
		activate: "  {POKEMON} sketched {MOVE}!"
	},
	"skillswap": {
		name: "Skill Swap",
		desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Wonder Guard, Zen Mode, or Zero to Hero.",
		shortDesc: "The user and the target trade Abilities.",
		gen8: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
						},
		gen7: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Battle Bond, Comatose, Disguise, Illusion, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
						},
		gen6: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Illusion, Multitype, Stance Change, or Wonder Guard.",
						},
		gen5: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Illusion, Multitype, or Wonder Guard, or if both have the same Ability.",
						},
		gen4: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Multitype or Wonder Guard, if both have the same Ability, or if either is holding a Griseous Orb.",
						},
		gen3: {
							desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Wonder Guard.",
						},
		activate: "  {POKEMON} swapped Abilities with its target!"
	},
	"skullbash": {
		name: "Skull Bash",
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2.",
		gen3: {
							desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn.",
						},
		gen1: {
							desc: "This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges turn 1. Hits turn 2.",
						},
		prepare: "{POKEMON} tucked in its head!"
	},
	"skyattack": {
		name: "Sky Attack",
		desc: "Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits turn 2. 30% flinch. High crit.",
		gen3: {
							desc: "Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second.",
						},
		gen2: {
							desc: "This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges turn 1. Hits turn 2.",
						},
		prepare: "{POKEMON} became cloaked in a harsh light!"
	},
	"skyuppercut": {
		name: "Sky Uppercut",
		desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Can hit Pokemon using Bounce, Fly, or Sky Drop.",
		gen4: {
							desc: "This move can hit a target using Bounce or Fly.",
							shortDesc: "Can hit Pokemon using Bounce or Fly.",
						}
	},
	"slackoff": {
		name: "Slack Off",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		gen4: {
							desc: "The user restores 1/2 of its maximum HP, rounded down.",
						}
	},
	"slam": {
		name: "Slam",
		shortDesc: "No additional effect."
	},
	"slash": {
		name: "Slash",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	"sleeppowder": {
		name: "Sleep Powder",
		shortDesc: "Causes the target to fall asleep."
	},
	"sleeptalk": {
		name: "Sleep Talk",
		desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, Wicked Torque, or any two-turn move.",
		shortDesc: "User must be asleep. Uses another known move.",
		gen8: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Max Move.",
						},
		gen7: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Z-Move.",
						},
		gen6: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Belch, Bide, Celebrate, Chatter, Copycat, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, Uproar, or any two-turn move.",
						},
		gen5: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Bide, Chatter, Copycat, Focus Punch, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, Uproar, or any two-turn move.",
						},
		gen4: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Bide, Chatter, Copycat, Focus Punch, Me First, Metronome, Mirror Move, Sleep Talk, Uproar, or any two-turn move.",
						},
		gen3: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, but if it currently has 0 PP it will fail to be used. This move cannot select Assist, Bide, Focus Punch, Metronome, Mirror Move, Sleep Talk, Uproar, or any two-turn move.",
						},
		gen2: {
							desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Bide, Sleep Talk, or any two-turn move.",
						}
	},
	"sludge": {
		name: "Sludge",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		gen1: {
							desc: "Has a 40% chance to poison the target.",
							shortDesc: "40% chance to poison the target.",
						}
	},
	"sludgebomb": {
		name: "Sludge Bomb",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	"smellingsalts": {
		name: "Smelling Salts",
		desc: "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis.",
		shortDesc: "Power doubles if target is paralyzed, and cures it.",
		gen4: {
							desc: "Power doubles if the target is paralyzed. If this move is successful, the target is cured of paralysis.",
						},
		gen3: {
							desc: "Damage doubles if the target is paralyzed. If this move is successful, the target is cured of paralysis.",
							shortDesc: "Damage doubles if target is paralyzed; cures it.",
						}
	},
	"smog": {
		name: "Smog",
		desc: "Has a 40% chance to poison the target.",
		shortDesc: "40% chance to poison the target."
	},
	"smokescreen": {
		name: "Smokescreen",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	"snatch": {
		name: "Snatch",
		desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "User steals certain support moves to use itself.",
		gen4: {
							desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use this move this turn, the applicable moves are stolen by each of those Pokemon in turn order, and only the last user in turn order will gain the effects.",
						},
		start: "  {POKEMON} is waiting for a target to make a move!",
		activate: "  {POKEMON} snatched {TARGET}'s move!"
	},
	"snore": {
		name: "Snore",
		desc: "Has a 30% chance to make the target flinch. Fails if the user is not asleep.",
		shortDesc: "User must be asleep. 30% chance to flinch target."
	},
	"softboiled": {
		name: "Soft-Boiled",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		gen4: {
							desc: "The user restores 1/2 of its maximum HP, rounded down.",
						},
		gen1: {
							desc: "The user restores 1/2 of its maximum HP, rounded down. Fails if (user's maximum HP - user's current HP + 1) is divisible by 256.",
						}
	},
	"solarbeam": {
		name: "Solar Beam",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Heavy Rain, Rain, Sandstorm, or Snow and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Intense Sun or Sun, the move still requires a turn to charge.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight.",
		gen8: {
							desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Heavy Rain, Rain, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Intense Sun or Sun, the move still requires a turn to charge.",
						},
		gen7: {
							desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Heavy Rain, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn.",
						},
		gen5: {
							desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Sun, the move completes in one turn.",
						},
		gen4: {
							desc: "This attack charges on the first turn and executes on the second. Damage is halved if the weather is Hail, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Sun, the move completes in one turn.",
						},
		gen3: {
							desc: "This attack charges on the first turn and executes on the second. Damage is halved if the weather is Hail, Rain, or Sandstorm. If the weather is Sun, the move completes in one turn.",
						},
		gen2: {
							desc: "This attack charges on the first turn and executes on the second. Damage is halved if the weather is Rain. If the weather is Sun, the move completes in one turn.",
						},
		gen1: {
							desc: "This attack charges on the first turn and executes on the second.",
							shortDesc: "Charges turn 1. Hits turn 2.",
						},
		prepare: "  {POKEMON} absorbed light!"
	},
	"sonicboom": {
		name: "Sonic Boom",
		desc: "Deals 20 HP of damage to the target.",
		shortDesc: "Always does 20 HP of damage.",
		gen1: {
							desc: "Deals 20 HP of damage to the target. This move ignores type immunity.",
						}
	},
	"spark": {
		name: "Spark",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	"spiderweb": {
		name: "Spider Web",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		gen7: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen5: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
						},
		gen4: {
							desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						},
		gen3: {
							desc: "Prevents the target from switching out. The target can still switch out if it uses Baton Pass. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field, unless it uses Baton Pass, in which case the target will remain trapped.",
						}
	},
	"spikecannon": {
		name: "Spike Cannon",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		gen4: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen1: {
							desc: "Hits two to five times. Has a 3/8 chance to hit two or three times, and a 1/8 chance to hit four or five times. Damage is calculated once for the first hit and used for every hit. If one of the hits breaks the target's substitute, the move ends.",
						}
	},
	"spikes": {
		name: "Spikes",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any Pokemon uses Tidy Up, or if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts grounded foes on switch-in. Max 3 layers.",
		gen8: {
							desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
						},
		gen5: {
							desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin successfully, or is hit by Defog.",
						},
		gen3: {
							desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin successfully.",
						},
		gen2: {
							desc: "Sets up a hazard on the opposing side of the field, causing each opposing Pokemon that switches in to lose 1/8 of their maximum HP, rounded down, unless it is a Flying-type Pokemon. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin successfully.",
							shortDesc: "Hurts grounded foes on switch-in. Max 1 layer.",
						},
		start: "  Spikes were scattered on the ground all around {TEAM}!",
		end: "  The spikes disappeared from the ground around {TEAM}!",
		damage: "  {POKEMON} was hurt by the spikes!"
	},
	"spite": {
		name: "Spite",
		desc: "Causes the target's last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
		shortDesc: "Lowers the PP of the target's last move by 4.",
		gen3: {
							desc: "Causes the target's last move used to lose 2 to 5 PP, at random. Fails if the target has not made a move, if the move has 0 or 1 PP, or if it no longer knows the move.",
							shortDesc: "Lowers the PP of the target's last move by 2-5.",
						},
		gen2: {
							desc: "Causes the target's last move used to lose 2 to 5 PP, at random. Fails if the target has not made a move, or if the move has 0 PP.",
						},
		activate: "  It reduced the PP of {TARGET}'s {MOVE} by {NUMBER}!"
	},
	"spitup": {
		name: "Spit Up",
		desc: "Power is equal to 100 times the user's Stockpile count. Fails if the user's Stockpile count is 0. Whether or not this move is successful, the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "More power with more uses of Stockpile.",
		gen4: {
							desc: "Power is equal to 100 times the user's Stockpile count. This move does not apply damage variance. Fails if the user's Stockpile count is 0. Unless there is no target, whether or not this move is successful the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
						},
		gen3: {
							desc: "Damage is multiplied by the user's Stockpile count. This move does not apply damage variance and cannot be a critical hit. Fails if the user's Stockpile count is 0. Unless this move misses, the user's Stockpile count resets to 0.",
						}
	},
	"splash": {
		name: "Splash",
		shortDesc: "No competitive use.",
		activate: "  But nothing happened!"
	},
	"spore": {
		name: "Spore",
		shortDesc: "Causes the target to fall asleep."
	},
	"steelwing": {
		name: "Steel Wing",
		desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
		shortDesc: "10% chance to raise the user's Defense by 1."
	},
	"stockpile": {
		name: "Stockpile",
		desc: "Raises the user's Defense and Special Defense by 1 stage. The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
		shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
		gen3: {
							desc: "The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
							shortDesc: "Raises user's Stockpile count by 1. Max 3 uses.",
						},
		start: "  {POKEMON} stockpiled {NUMBER}!",
		end: "  {POKEMON}'s stockpiled effect wore off!"
	},
	"stomp": {
		name: "Stomp",
		desc: "Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to make the target flinch.",
		gen5: {
							desc: "Has a 30% chance to make the target flinch. Damage doubles if the target has used Minimize while active.",
						},
		gen4: {
							desc: "Has a 30% chance to make the target flinch. Power doubles if the target has used Minimize while active.",
						},
		gen3: {
							desc: "Has a 30% chance to make the target flinch. Damage doubles if the target has used Minimize while active.",
						},
		gen2: {
							desc: "Has a 30% chance to make the target flinch. Power doubles if the target is under the effect of Minimize.",
						},
		gen1: {
							desc: "Has a 30% chance to make the target flinch.",
						}
	},
	"strength": {
		name: "Strength",
		shortDesc: "No additional effect."
	},
	"stringshot": {
		name: "String Shot",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the foe(s) Speed by 2.",
		gen5: {
							desc: "Lowers the target's Speed by 1 stage.",
							shortDesc: "Lowers the foe(s) Speed by 1.",
						},
		gen2: {
							shortDesc: "Lowers the target's Speed by 1.",
						}
	},
	"struggle": {
		name: "Struggle",
		desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
		shortDesc: "User loses 1/4 of its max HP.",
		gen6: {
							desc: "Deals typeless damage to a random adjacent opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
						},
		gen4: {
							desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded down, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
						},
		gen3: {
							desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user takes damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
							shortDesc: "User loses 1/4 the HP lost by the target.",
						},
		gen2: {
							desc: "Deals typeless damage. If this move was successful, the user takes damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP. This move is automatically used if none of the user's known moves can be selected.",
						},
		gen1: {
							desc: "Deals Normal-type damage. If this move was successful, the user takes damage equal to 1/2 the HP lost by the target, rounded down, but not less than 1 HP. This move is automatically used if none of the user's known moves can be selected.",
							shortDesc: "User loses 1/2 the HP lost by the target.",
						}
	},
	"stunspore": {
		name: "Stun Spore",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target.",
		gen3: {
							desc: "Paralyzes the target. This move does not ignore type immunity.",
						},
		gen1: {
							desc: "Paralyzes the target.",
						}
	},
	"submission": {
		name: "Submission",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		gen4: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP.",
						},
		gen2: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP. If this move hits a substitute, the recoil damage is always 1 HP.",
						},
		gen1: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP. If this move breaks the target's substitute, the user does not take any recoil damage.",
						}
	},
	"substitute": {
		name: "Substitute",
		desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, if the user switches out or faints, or if any Pokemon uses Tidy Up. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
		shortDesc: "User takes 1/4 its max HP to put in a substitute.",
		gen8: {
							desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
						},
		gen5: {
							desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
						},
		gen1: {
							desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute has 1 HP plus the HP used to create it, and is removed once enough damage is inflicted on it or 255 damage is inflicted at once, or if the user switches out or faints. Until the substitute is broken, it receives damage from all attacks made by the opposing Pokemon and shields the user from status effects and stat stage changes caused by the opponent, unless the effect is Disable, Leech Seed, sleep, primary paralysis, or secondary confusion and the user's substitute did not break. The user still takes normal damage from status effects while behind its substitute, unless the effect is confusion damage, which is applied to the opposing Pokemon's substitute instead. If the substitute breaks during a multi-hit attack, the attack ends. Fails if the user does not have enough HP remaining to create a substitute, or if it already has a substitute. The user will create a substitute and then faint if its current HP is exactly 1/4 of its maximum HP.",
							shortDesc: "User takes 1/4 its max HP to put in a Substitute.",
						},
		start: "  {POKEMON} put in a substitute!",
		alreadyStarted: "  {POKEMON} already has a substitute!",
		end: "  {POKEMON}'s substitute faded!",
		fail: "  But it does not have enough HP left to make a substitute!",
		activate: "  The substitute took damage for {POKEMON}!"
	},
	"sunnyday": {
		name: "Sunny Day",
		desc: "For 5 turns, the weather becomes Sun. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sun.",
		shortDesc: "For 5 turns, intense sunlight powers Fire moves.",
		gen3: {
							desc: "For 5 turns, the weather becomes Sun. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Fails if the current weather is Sun.",
						},
		gen2: {
							desc: "For 5 turns, the weather becomes Sun, even if the current weather is Sun. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect.",
						}
	},
	"superfang": {
		name: "Super Fang",
		desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/2 target's current HP.",
		gen1: {
							desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP. This move ignores type immunity.",
							shortDesc: "Damage = 1/2 target's current HP. Hits Ghosts.",
						}
	},
	"superpower": {
		name: "Superpower",
		desc: "Lowers the user's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the user's Attack and Defense by 1."
	},
	"supersonic": {
		name: "Supersonic",
		shortDesc: "Causes the target to become confused."
	},
	"surf": {
		name: "Surf",
		desc: "Damage doubles if the target is using Dive.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dive.",
		gen4: {
							desc: "Power doubles if the target is using Dive.",
							shortDesc: "Hits adjacent Pokemon. Power doubles on Dive.",
						},
		gen2: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						},
		gen3: {
							shortDesc: "Hits foes. Power doubles against Dive.",
						}
	},
	"swagger": {
		name: "Swagger",
		desc: "Raises the target's Attack by 2 stages and confuses it.",
		shortDesc: "Raises the target's Attack by 2 and confuses it.",
		gen2: {
							desc: "Raises the target's Attack by 2 stages and confuses it. This move will miss if the target's Attack cannot be raised.",
						}
	},
	"swallow": {
		name: "Swallow",
		desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "Heals the user based on uses of Stockpile.",
		gen4: {
							desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
						},
		gen3: {
							desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Stockpile count resets to 0.",
						}
	},
	"sweetkiss": {
		name: "Sweet Kiss",
		shortDesc: "Causes the target to become confused."
	},
	"sweetscent": {
		name: "Sweet Scent",
		desc: "Lowers the target's evasiveness by 2 stages.",
		shortDesc: "Lowers the foe(s) evasiveness by 2.",
		gen5: {
							desc: "Lowers the target's evasiveness by 1 stage.",
							shortDesc: "Lowers the foe(s) evasiveness by 1.",
						},
		gen2: {
							shortDesc: "Lowers the target's evasiveness by 1.",
						}
	},
	"swift": {
		name: "Swift",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Hits foes.",
		gen1: {
							desc: "This move does not check accuracy and hits even if the target is using Dig or Fly.",
							shortDesc: "Never misses, even against Dig and Fly.",
						},
		gen2: {
							shortDesc: "This move does not check accuracy.",
						}
	},
	"swordsdance": {
		name: "Swords Dance",
		desc: "Raises the user's Attack by 2 stages.",
		shortDesc: "Raises the user's Attack by 2."
	},
	"synthesis": {
		name: "Synthesis",
		desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Heavy Rain, Rain, Sandstorm, or Snow, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		gen8: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen7: {
							desc: "The user restores 1/2 of its maximum HP if Strong Winds or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Intense Sun or Sun, and 1/4 of its maximum HP if the weather is Hail, Heavy Rain, Rain, or Sandstorm, all rounded half down.",
						},
		gen5: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded half down.",
						},
		gen4: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Hail, Rain, or Sandstorm, all rounded down.",
						},
		gen2: {
							desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, all of its HP if the weather is Sun, and 1/4 of its maximum HP if the weather is Rain or Sandstorm, all rounded down.",
						}
	},
	"tackle": {
		name: "Tackle",
		shortDesc: "No additional effect."
	},
	"tailglow": {
		name: "Tail Glow",
		desc: "Raises the user's Special Attack by 3 stages.",
		shortDesc: "Raises the user's Sp. Atk by 3.",
		gen4: {
							desc: "Raises the user's Special Attack by 2 stages.",
							shortDesc: "Raises the user's Sp. Atk by 2.",
						}
	},
	"tailwhip": {
		name: "Tail Whip",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Defense by 1.",
		gen2: {
							shortDesc: "Lowers the target's Defense by 1.",
						}
	},
	"takedown": {
		name: "Take Down",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		gen4: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP.",
						},
		gen2: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP. If this move hits a substitute, the recoil damage is always 1 HP.",
						},
		gen1: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded down, but not less than 1 HP. If this move breaks the target's substitute, the user does not take any recoil damage.",
						}
	},
	"taunt": {
		name: "Taunt",
		desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "Target can't use status moves its next 3 turns.",
		gen7: {
							desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune. Z-Powered moves can still be selected and executed during this effect.",
						},
		gen6: {
							desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
						},
		gen5: {
							desc: "Prevents the target from using non-damaging moves for its next three turns.",
						},
		gen4: {
							desc: "For 3 to 5 turns, prevents the target from using non-damaging moves.",
							shortDesc: "For 3-5 turns, the target can't use status moves.",
						},
		gen3: {
							desc: "For 2 turns, prevents the target from using non-damaging moves.",
							shortDesc: "For 2 turns, the target can't use status moves.",
						},
		start: "  {POKEMON} fell for the taunt!",
		end: "  {POKEMON} shook off the taunt!",
		cant: "{POKEMON} can't use {MOVE} after the taunt!"
	},
	"teeterdance": {
		name: "Teeter Dance",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses adjacent Pokemon."
	},
	"teleport": {
		name: "Teleport",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "User switches out.",
		gen7letsgo: {
							desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
							shortDesc: "User switches out.",
						},
		gen7: {
							desc: "Fails when used.",
							shortDesc: "Fails when used.",
						}
	},
	"thief": {
		name: "Thief",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Blue Orb, Red Orb, Adamant Crystal, Lustrous Globe, Griseous Core, Plate, Drive, Memory, Rusted Sword, Rusted Shield, Booster Energy, or Mask held by a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Paradox Pokemon, or Ogerpon, respectively, or if the user is one of those species and the target is holding the respective item. In this case, Paradox Pokemon include every species with the Protosynthesis and Quark Drive Abilities, except Gouging Fire, Raging Bolt, Iron Boulder, and Iron Crown. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's.",
		champions: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mega Stone and either the user or the target is the species that can Mega Evolve with it. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen8: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield held by a Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian, or Zamazenta, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen7: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Z-Crystal, a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory held by a Kyogre, Groudon, Giratina, Arceus, Genesect, or Silvally, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen6: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mega Stone held by the species that can Mega Evolve with it, or a Blue Orb, Red Orb, Griseous Orb, Plate, or Drive held by a Kyogre, Groudon, Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen5: {
							desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. The target's item is not stolen if it is a Mail, or if it is a Griseous Orb, Plate, or Drive held by a Giratina, Arceus, or Genesect, respectively, or if the user is one of those species and the target is holding the respective item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
						},
		gen4: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. The target's item is not stolen if it is a Mail or Griseous Orb, or if the target has the Multitype or Sticky Hold Abilities. Items lost to this move cannot be regained with Recycle.",
						},
		gen3: {
							desc: "If this attack was successful and the user is not holding an item, it steals the target's held item. The target's item is not stolen if it is a Mail or Enigma Berry, or if the target has the Sticky Hold Ability. Items lost to this move cannot be regained with Recycle.",
						},
		gen2: {
							desc: "Has a 100% chance to steal the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail.",
						}
	},
	"thrash": {
		name: "Thrash",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		gen6: {
							desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an adjacent opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen4: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen3: {
							desc: "The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, falls asleep, becomes frozen, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen2: {
							desc: "Whether or not this move is successful, the user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
						},
		gen1: {
							desc: "Whether or not this move is successful, the user spends three or four turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. During the effect, this move's accuracy is overwritten every turn with the current calculated accuracy including stat stage changes, but not to less than 1/256 or more than 255/256.",
							shortDesc: "Lasts 3-4 turns. Confuses the user afterwards.",
						}
	},
	"thunder": {
		name: "Thunder",
		desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Heavy Rain or Rain, this move does not check accuracy. If the weather is Intense Sun or Sun, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
		shortDesc: "30% chance to paralyze. Can't miss in rain.",
		gen7: {
							desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Heavy Rain or Rain, this move does not check accuracy. If the weather is Intense Sun or Sun, this move's accuracy is 50%.",
						},
		gen5: {
							desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Rain, this move does not check accuracy. If the weather is Sun, this move's accuracy is 50%.",
						},
		gen4: {
							desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce or Fly. If the weather is Rain, this move does not check accuracy. If the weather is Sun, this move's accuracy is 50%.",
						},
		gen2: {
							desc: "Has a 30% chance to paralyze the target. This move can hit a target using Fly. If the weather is Rain, this move does not check accuracy. If the weather is Sun, this move's accuracy is 50%.",
						},
		gen1: {
							desc: "Has a 10% chance to paralyze the target.",
							shortDesc: "10% chance to paralyze the target.",
						}
	},
	"thunderbolt": {
		name: "Thunderbolt",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	"thunderpunch": {
		name: "Thunder Punch",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	"thundershock": {
		name: "Thunder Shock",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	"thunderwave": {
		name: "Thunder Wave",
		desc: "Paralyzes the target. This move does not ignore type immunity.",
		shortDesc: "Paralyzes the target."
	},
	"tickle": {
		name: "Tickle",
		desc: "Lowers the target's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the target's Attack and Defense by 1."
	},
	"torment": {
		name: "Torment",
		desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
		shortDesc: "Target can't select the same move twice in a row.",
		start: "  {POKEMON} was subjected to torment!",
		end: "  {POKEMON} is no longer tormented!"
	},
	"toxic": {
		name: "Toxic",
		desc: "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
		shortDesc: "Badly poisons the target. Poison types can't miss.",
		gen5: {
							desc: "Badly poisons the target.",
							shortDesc: "Badly poisons the target.",
						}
	},
	"transform": {
		name: "Transform",
		desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
		shortDesc: "Copies target's stats, moves, types, and Ability.",
		gen4: {
							desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, IVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move fails if the target has transformed.",
						},
		gen2: {
							desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, DVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move fails if the target has transformed.",
							shortDesc: "Copies target's stats, moves, types, and species.",
						},
		gen1: {
							desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, DVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move can hit a target using Dig or Fly.",
						},
		transform: "{POKEMON} transformed into {SPECIES}!"
	},
	"triattack": {
		name: "Tri Attack",
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "20% chance to paralyze or burn or freeze target.",
		gen2: {
							desc: "This move selects burn, freeze, or paralysis at random, and has a 20% chance to inflict the target with that status. If the target is frozen and burn was selected, it thaws out.",
						},
		gen1: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						}
	},
	"trick": {
		name: "Trick",
		desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, or if the user is trying to give or take a Blue Orb, Red Orb, Adamant Crystal, Lustrous Globe, Griseous Core, Plate, Drive, Memory, Rusted Sword, Rusted Shield, Booster Energy, or Mask to or from a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Paradox Pokemon, or Ogerpon, respectively. In this case, Paradox Pokemon include every species with the Protosynthesis and Quark Drive Abilities, except Gouging Fire, Raging Bolt, Iron Boulder, and Iron Crown. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's.",
		champions: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, or if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it. The target is immune to this move if it has the Sticky Hold Ability.",
						},
		gen8: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, or if the user is trying to give or take a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield to or from a Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian, or Zamazenta, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
						},
		gen7: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, if either is holding a Z-Crystal, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory to or from a Kyogre, Groudon, Giratina, Arceus, Genesect, or Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
						},
		gen6: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, Red Orb, Griseous Orb, Plate, or Drive to or from a Kyogre, Groudon, Giratina, Arceus, or Genesect, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
						},
		gen5: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, if either is holding a Mail, or if the user is trying to give or take a Griseous Orb, Plate, or Drive to or from a Giratina, Arceus, or Genesect, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
						},
		gen4: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, if either is holding a Mail or Griseous Orb, if either has the Multitype Ability, if either is under the effect of Knock Off, or if the target has the Sticky Hold Ability.",
						},
		gen3: {
							desc: "The user swaps its held item with the target's held item. Fails if both the user and the target have no held item, if either is holding a Mail, if either is under the effect of Knock Off, or if the target has the Sticky Hold Ability.",
						},
		activate: "  {POKEMON} switched items with its target!"
	},
	"triplekick": {
		name: "Triple Kick",
		desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
		gen4: {
							desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
						},
		gen2: {
							desc: "Hits one to three times, at random. Power increases to 20 for the second hit and 30 for the third.",
							shortDesc: "Hits 1-3 times. Power rises with each hit.",
						}
	},
	"twineedle": {
		name: "Twineedle",
		desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
		gen4: {
							desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
						},
		gen3: {
							desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
						},
		gen2: {
							desc: "Hits twice, with the second hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit but the target cannot be poisoned by it.",
							shortDesc: "Hits 2 times. Last hit has 20% chance to poison.",
						},
		gen1: {
							desc: "Hits twice, with the second hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, the move ends.",
						}
	},
	"twister": {
		name: "Twister",
		desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "20% chance to make the foe(s) flinch.",
		gen4: {
							desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce or Fly.",
						},
		gen2: {
							desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Fly.",
							shortDesc: "20% chance to make the target flinch.",
						}
	},
	"uproar": {
		name: "Uproar",
		desc: "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
		shortDesc: "Lasts 3 turns. Active Pokemon cannot fall asleep.",
		gen6: {
							desc: "The user spends three turns locked into this move. This move targets an adjacent opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
						},
		gen4: {
							desc: "The user spends three to six turns locked into this move. This move targets an opponent at random on each turn. During effect, no active Pokemon can fall asleep by any means, and Pokemon that are already asleep wake up as their turn starts or at the end of each turn, including the last one. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
							shortDesc: "Lasts 3-6 turns. Active Pokemon cannot sleep.",
						},
		gen3: {
							desc: "The user spends two to five turns locked into this move. This move targets an opposing Pokemon at random on each turn. During effect, no active Pokemon can fall asleep by any means, and Pokemon that are already asleep wake up as their turn starts or at the end of each turn, including the last one. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
							shortDesc: "Lasts 2-5 turns. Active Pokemon cannot sleep.",
						},
		start: "  {POKEMON} caused an uproar!",
		end: "  {POKEMON} calmed down.",
		upkeep: "  {POKEMON} is making an uproar!",
		block: "  But the uproar kept {POKEMON} awake!",
		blockSelf: "  But {POKEMON} can't sleep in an uproar!"
	},
	"vinewhip": {
		name: "Vine Whip",
		shortDesc: "No additional effect."
	},
	"visegrip": {
		name: "Vise Grip",
		shortDesc: "No additional effect."
	},
	"vitalthrow": {
		name: "Vital Throw",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Goes last."
	},
	"volttackle": {
		name: "Volt Tackle",
		desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to paralyze target.",
		gen4: {
							desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
							shortDesc: "Has 1/3 recoil. 10% chance to paralyze target.",
						},
		gen3: {
							desc: "If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
							shortDesc: "Has 1/3 recoil.",
						}
	},
	"waterfall": {
		name: "Waterfall",
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		gen3: {
							desc: "No additional effect.",
							shortDesc: "No additional effect.",
						}
	},
	"watergun": {
		name: "Water Gun",
		shortDesc: "No additional effect."
	},
	"waterpulse": {
		name: "Water Pulse",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target."
	},
	"watersport": {
		name: "Water Sport",
		desc: "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Fire-type attacks have 1/3 power.",
		gen5: {
							desc: "While the user is active, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active for any Pokemon.",
							shortDesc: "Weakens Fire-type attacks to 1/3 their power.",
						},
		gen4: {
							desc: "While the user is active, all Fire-type attacks used by any active Pokemon have their power halved. Fails if this effect is already active for the user. Baton Pass can be used to transfer this effect to an ally.",
							shortDesc: "Weakens Fire-type attacks to 1/2 their power.",
						}
	},
	"waterspout": {
		name: "Water Spout",
		desc: "Power is equal to (user's current HP × 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s)."
	},
	"weatherball": {
		name: "Weather Ball",
		desc: "Power doubles if a weather condition other than Strong Winds is active, and this move's type changes to match. Ice type during Snow, Water type during Heavy Rain or Rain, Rock type during Sandstorm, and Fire type during Intense Sun or Sun. If the user is holding Utility Umbrella and uses Weather Ball during Heavy Rain, Rain, Intense Sun, or Sun, this move remains Normal type and does not double in power.",
		shortDesc: "Power doubles and type varies in each weather.",
		gen8: {
							desc: "Power doubles if a weather condition other than Strong Winds is active, and this move's type changes to match. Ice type during Hail, Water type during Heavy Rain or Rain, Rock type during Sandstorm, and Fire type during Intense Sun or Sun. If the user is holding Utility Umbrella and uses Weather Ball during Heavy Rain, Rain, Intense Sun, or Sun, this move remains Normal type and does not double in power.",
						},
		gen5: {
							desc: "Power doubles if a weather condition is active, and this move's type changes to match. Ice type during Hail, Water type during Rain, Rock type during Sandstorm, and Fire type during Sun.",
						},
		gen3: {
							desc: "Damage doubles if a weather condition is active, and this move's type changes to match. Ice type during Hail, Water type during Rain, Rock type during Sandstorm, and Fire type during Sun.",
							shortDesc: "Damage doubles and type varies during weather.",
						},
		move: "Breakneck Blitz turned into {MOVE} due to the weather!"
	},
	"whirlpool": {
		name: "Whirlpool",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		start: "  {POKEMON} became trapped in the vortex!"
	},
	"whirlwind": {
		name: "Whirlwind",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally.",
		gen4: {
							desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, if the target used Ingrain previously or has the Suction Cups Ability, or if the user's level is lower than the target's and X × (user's level + target's level) / 256 + 1 is less than or equal to (target's level / 4), rounded down, where X is a random number from 0 to 255.",
						},
		gen2: {
							desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the user moves before the target.",
						},
		gen1: {
							desc: "No competitive use.",
							shortDesc: "No competitive use.",
						}
	},
	"willowisp": {
		name: "Will-O-Wisp",
		desc: "Burns the target.",
		shortDesc: "Burns the target."
	},
	"wingattack": {
		name: "Wing Attack",
		shortDesc: "No additional effect."
	},
	"wish": {
		name: "Wish",
		desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
		shortDesc: "Next turn, 50% of the user's max HP is restored.",
		gen4: {
							desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of its maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
							shortDesc: "Next turn, heals 50% of the recipient's max HP.",
						},
		heal: "  {NICKNAME}'s wish came true!"
	},
	"withdraw": {
		name: "Withdraw",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1."
	},
	"wrap": {
		name: "Wrap",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen7: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen5: {
							desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen4: {
							desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
							shortDesc: "Traps and damages the target for 2-5 turns.",
						},
		gen3: {
							desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
						},
		gen1: {
							desc: "The user spends two to five turns using this move. Has a 3/8 chance to last two or three turns, and a 1/8 chance to last four or five turns. The damage calculated for the first turn is used for every other turn. The user cannot select a move and the target cannot execute a move during the effect, but both may switch out. If the user switches out, the target remains unable to execute a move during that turn. If the target switches out, the user uses this move again automatically, and if it had 0 PP at the time, it becomes 63. If the user or the target switch out, or the user is prevented from moving, the effect ends. This move can prevent the target from moving even if it has type immunity, but will not deal damage.",
							shortDesc: "Prevents the target from moving for 2-5 turns.",
						},
		start: "  {POKEMON} was wrapped by {SOURCE}!",
		move: "{POKEMON}'s attack continues!"
	},
	"yawn": {
		name: "Yawn",
		desc: "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
		shortDesc: "Puts the target to sleep after 1 turn.",
		start: "  {POKEMON} grew drowsy!"
	},
	"zapcannon": {
		name: "Zap Cannon",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target."
	},
};
