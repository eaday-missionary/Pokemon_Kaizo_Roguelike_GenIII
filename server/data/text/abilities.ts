export const AbilitiesText: { [id: IDEntry]: AbilityText } = {
	"airlock": {
		name: "Air Lock",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",
		start: "  The effects of the weather disappeared."
	},
	"arenatrap": {
		name: "Arena Trap",
		desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.",
		shortDesc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne.",
		gen6: {
							desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.",
						},
		gen5: {
							desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are airborne or holding a Shed Shell.",
						},
		gen4: {
							desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne or holding a Shed Shell.",
						},
		gen3: {
							desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne.",
						}
	},
	"battlearmor": {
		name: "Battle Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit."
	},
	"blaze": {
		name: "Blaze",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5× with Fire attacks.",
		gen4: {
							desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Fire-type attacks have their power multiplied by 1.5.",
							shortDesc: "At 1/3 or less of its max HP, this Pokemon's Fire-type attacks have 1.5× power.",
						}
	},
	"chlorophyll": {
		name: "Chlorophyll",
		desc: "If Sun is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sun is active, this Pokemon's Speed is doubled.",
		gen7: {
							desc: "If Sun is active, this Pokemon's Speed is doubled.",
						}
	},
	"clearbody": {
		name: "Clear Body",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages."
	},
	"cloudnine": {
		name: "Cloud Nine",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",
		start: "#airlock"
	},
	"colorchange": {
		name: "Color Change",
		desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
		gen4: {
							desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after each hit from a multi-hit move. This effect does not happen if this Pokemon did not lose HP from the attack.",
						}
	},
	"compoundeyes": {
		name: "Compound Eyes",
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3."
	},
	"cutecharm": {
		name: "Cute Charm",
		desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
		gen4: {
							desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "There is a 1/3 chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "1/3 chance of infatuating Pokemon of the opposite gender if they make contact.",
						}
	},
	"damp": {
		name: "Damp",
		desc: "While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.",
		gen7: {
							desc: "While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
							shortDesc: "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.",
						},
		gen6: {
							desc: "While this Pokemon is active, Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
							shortDesc: "Prevents Explosion/Self-Destruct/Aftermath while this Pokemon is active.",
						},
		gen3: {
							desc: "While this Pokemon is active, Explosion and Self-Destruct are prevented from having an effect.",
							shortDesc: "Prevents Explosion and Self-Destruct while this Pokemon is active.",
						},
		block: "  {SOURCE} cannot use {MOVE}!"
	},
	"drizzle": {
		name: "Drizzle",
		shortDesc: "On switch-in, this Pokemon summons Rain."
	},
	"drought": {
		name: "Drought",
		shortDesc: "On switch-in, this Pokemon summons Sun."
	},
	"earlybird": {
		name: "Early Bird",
		shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1."
	},
	"effectspore": {
		name: "Effect Spore",
		desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.",
		shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		gen4: {
							desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "10% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "10% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
						}
	},
	"flamebody": {
		name: "Flame Body",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",
		gen4: {
							desc: "30% chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "1/3 chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be burned.",
						}
	},
	"flashfire": {
		name: "Flash Fire",
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its offensive stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5× damage if hit by one Fire move; Fire immunity.",
		gen4: {
							desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability.",
						},
		gen3: {
							desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability. If this Pokemon has a non-volatile status condition, is a Fire type, or has a substitute, Will-O-Wisp will not activate this Ability.",
						},
		start: "  The power of {POKEMON}'s Fire-type moves rose!"
	},
	"forecast": {
		name: "Forecast",
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. This effect is prevented if this Pokemon is holding a Utility Umbrella and the weather is Rain or Sun.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		gen7: {
							desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
						}
	},
	"guts": {
		name: "Guts",
		desc: "If this Pokemon has a non-volatile status condition, its Attack is multiplied by 1.5. This Pokemon's physical attacks ignore the burn effect of halving damage.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5×; ignores burn halving physical damage."
	},
	"hugepower": {
		name: "Huge Power",
		shortDesc: "This Pokemon's Attack is doubled."
	},
	"hustle": {
		name: "Hustle",
		desc: "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Attack is 1.5× and accuracy of its physical attacks is 0.8×."
	},
	"hypercutter": {
		name: "Hyper Cutter",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage."
	},
	"illuminate": {
		name: "Illuminate",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		gen8: {
							desc: "No competitive use.",
							shortDesc: "No competitive use.",
						}
	},
	"immunity": {
		name: "Immunity",
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it."
	},
	"innerfocus": {
		name: "Inner Focus",
		desc: "This Pokemon cannot be made to flinch. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be made to flinch. Immune to Intimidate.",
		gen7: {
							desc: "This Pokemon cannot be made to flinch.",
							shortDesc: "This Pokemon cannot be made to flinch.",
						}
	},
	"insomnia": {
		name: "Insomnia",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
	},
	"intimidate": {
		name: "Intimidate",
		desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon with the Inner Focus, Oblivious, Own Tempo, or Scrappy Abilities and Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage.",
		gen7: {
							desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
						},
		gen6: {
							desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
							shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
						},
		gen4: {
							desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune. If U-turn breaks an opposing substitute and this Pokemon switches in as the replacement, the Pokemon that had the substitute is still immune to this Ability.",
							shortDesc: "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage.",
						},
		gen3: {
							desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
						}
	},
	"keeneye": {
		name: "Keen Eye",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		gen5: {
							desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
							shortDesc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
						}
	},
	"levitate": {
		name: "Levitate",
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pokemon as if it did not have this Ability.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		gen5: {
							desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, and Iron Ball nullify the immunity.",
						},
		gen4: {
							desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, and Iron Ball nullify the immunity.",
							shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Iron Ball nullify it.",
						},
		gen3: {
							desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes and the Arena Trap Ability.",
							shortDesc: "This Pokemon is immune to Ground.",
						}
	},
	"lightningrod": {
		name: "Lightning Rod",
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move. If multiple Pokemon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
		gen4: {
							desc: "If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself.",
							shortDesc: "This Pokemon draws single-target Electric moves to itself.",
						},
		gen3: {
							desc: "If this Pokemon is not the target of a single-target Electric-type move used by an opposing Pokemon, this Pokemon redirects that move to itself. This effect considers Hidden Power a Normal-type move.",
							shortDesc: "This Pokemon draws single-target Electric moves used by opponents to itself.",
						},
		activate: "  {POKEMON} took the attack!"
	},
	"limber": {
		name: "Limber",
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it."
	},
	"liquidooze": {
		name: "Liquid Ooze",
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",
		gen4: {
							desc: "This Pokemon damages those draining HP from it for as much as they would heal. This effect does not consider Dream Eater.",
						},
		damage: "  {POKEMON} sucked up the liquid ooze!"
	},
	"magmaarmor": {
		name: "Magma Armor",
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it."
	},
	"magnetpull": {
		name: "Magnet Pull",
		desc: "Prevents opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
		shortDesc: "Prevents opposing Steel-type Pokemon from choosing to switch out.",
		gen6: {
							desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
							shortDesc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out.",
						},
		gen5: {
							desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell.",
							shortDesc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out.",
						},
		gen4: {
							desc: "Prevents opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell.",
							shortDesc: "Prevents opposing Steel-type Pokemon from choosing to switch out.",
						},
		gen3: {
							desc: "Prevents Steel-type Pokemon from choosing to switch out, other than this Pokemon.",
							shortDesc: "Prevents Steel-type Pokemon from choosing to switch out, other than this Pokemon.",
						}
	},
	"marvelscale": {
		name: "Marvel Scale",
		shortDesc: "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5."
	},
	"minus": {
		name: "Minus",
		desc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5×.",
		gen4: {
							desc: "If an active ally has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
							shortDesc: "If an active ally has the Plus Ability, this Pokemon's Sp. Atk is 1.5×.",
						},
		gen3: {
							desc: "If an active Pokemon has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
							shortDesc: "If an active Pokemon has the Plus Ability, this Pokemon's Sp. Atk is 1.5×.",
						}
	},
	"naturalcure": {
		name: "Natural Cure",
		shortDesc: "This Pokemon has its non-volatile status condition cured when it switches out.",
		activate: "  ({POKEMON} is cured by its Natural Cure!)"
	},
	"oblivious": {
		name: "Oblivious",
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
		gen7: {
							desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it.",
							shortDesc: "This Pokemon cannot be infatuated or taunted.",
						},
		gen5: {
							desc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
							shortDesc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
						}
	},
	"overgrow": {
		name: "Overgrow",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5× with Grass attacks.",
		gen4: {
							desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Grass-type attacks have their power multiplied by 1.5.",
							shortDesc: "At 1/3 or less of its max HP, this Pokemon's Grass-type attacks have 1.5× power.",
						}
	},
	"owntempo": {
		name: "Own Tempo",
		desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be confused. Immune to Intimidate.",
		gen7: {
							desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
							shortDesc: "This Pokemon cannot be confused.",
						}
	},
	"pickup": {
		name: "Pickup",
		desc: "At the end of each turn, if this Pokemon is not holding an item and at least one adjacent Pokemon used an item during this turn, one of those Pokemon is selected at random and this Pokemon obtains that Pokemon's last used item. An item is not considered the last used if it was a popped Air Balloon, if the item was picked up by another Pokemon with this Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be picked up.",
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
		gen7: {
							desc: "At the end of each turn, if this Pokemon is not holding an item and at least one adjacent Pokemon used an item during this turn, one of those Pokemon is selected at random and this Pokemon obtains that Pokemon's last used item. An item is not considered the last used if it was a popped Air Balloon, if the item was picked up by another Pokemon with this Ability, or if the item was lost to Bug Bite, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be picked up.",
						},
		gen4: {
							desc: "No competitive use.",
							shortDesc: "No competitive use.",
						},
		addItem: "#recycle"
	},
	"plus": {
		name: "Plus",
		desc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5×.",
		gen4: {
							desc: "If an active ally has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
							shortDesc: "If an active ally has the Minus Ability, this Pokemon's Sp. Atk is 1.5×.",
						},
		gen3: {
							desc: "If an active Pokemon has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
							shortDesc: "If an active Pokemon has the Minus Ability, this Pokemon's Sp. Atk is 1.5×.",
						}
	},
	"poisonpoint": {
		name: "Poison Point",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
		gen4: {
							desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned.",
						}
	},
	"pressure": {
		name: "Pressure",
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison, Snatch, and Tera Blast also lose one additional PP when used by an opposing Pokemon, but Sticky Web does not.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		gen8: {
							desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison and Snatch also lose one additional PP when used by an opposing Pokemon, but Sticky Web does not.",
						},
		gen5: {
							desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison and Snatch also lose one additional PP when used by an opposing Pokemon.",
						},
		gen4: {
							desc: "If this Pokemon is the target of another Pokemon's move, that move loses one additional PP.",
							shortDesc: "If this Pokemon is the target of a move, that move loses one additional PP.",
						},
		start: "  {POKEMON} is exerting its pressure!"
	},
	"purepower": {
		name: "Pure Power",
		shortDesc: "This Pokemon's Attack is doubled."
	},
	"raindish": {
		name: "Rain Dish",
		desc: "If Rain is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Rain is active, this Pokemon heals 1/16 of its max HP each turn.",
		gen7: {
							desc: "If Rain is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
						}
	},
	"rockhead": {
		name: "Rock Head",
		desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
		gen3: {
							desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect crash damage.",
							shortDesc: "This Pokemon does not take recoil damage besides Struggle and crash damage.",
						}
	},
	"roughskin": {
		name: "Rough Skin",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
		gen4: {
							desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "Pokemon making contact with this Pokemon lose 1/16 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "Pokemon making contact with this Pokemon lose 1/16 of their max HP.",
						},
		damage: "  {POKEMON} was hurt!"
	},
	"runaway": {
		name: "Run Away",
		shortDesc: "No competitive use."
	},
	"sandstream": {
		name: "Sand Stream",
		shortDesc: "On switch-in, this Pokemon summons Sandstorm."
	},
	"sandveil": {
		name: "Sand Veil",
		desc: "If Sandstorm is active, the accuracy of moves used against this Pokemon is multiplied by 0.8. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25×; immunity to Sandstorm."
	},
	"serenegrace": {
		name: "Serene Grace",
		desc: "This Pokemon's moves have their secondary effect chance doubled. This effect stacks with the Rainbow effect, except for secondary effects that cause the target to flinch.",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		gen4: {
							desc: "This Pokemon's moves have their secondary effect chance doubled.",
						}
	},
	"shadowtag": {
		name: "Shadow Tag",
		desc: "Prevents opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.",
		shortDesc: "Prevents foes from choosing to switch unless they also have this Ability.",
		gen6: {
							desc: "Prevents adjacent opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.",
							shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",
						},
		gen5: {
							desc: "Prevents adjacent opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell or also have this Ability.",
						},
		gen4: {
							desc: "Prevents opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell or also have this Ability.",
							shortDesc: "Prevents foes from choosing to switch unless they also have this Ability.",
						},
		gen3: {
							desc: "Prevents opposing Pokemon from choosing to switch out.",
							shortDesc: "Prevents opposing Pokemon from choosing to switch out.",
						}
	},
	"shedskin": {
		name: "Shed Skin",
		desc: "This Pokemon has a 33% chance to have its non-volatile status condition cured at the end of each turn.",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn."
	},
	"shellarmor": {
		name: "Shell Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit."
	},
	"shielddust": {
		name: "Shield Dust",
		desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, cause this Pokemon's stat stages to be lowered, as well as Anchor Shot, Eerie Spell, Fling, Psychic Noise, Salt Cure, Spirit Shackle, Syrup Bomb, and Throat Chop. The effect of Sparkling Aria is prevented if this Pokemon is the only target. Secondary effects added by King's Rock, Razor Fang, and the Poison Touch, Stench, and Toxic Chain Abilities are also prevented against this Pokemon.",
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
		gen8: {
							desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, cause this Pokemon's stat stages to be lowered, as well as Anchor Shot, Eerie Spell, Fling, Spirit Shackle, and Throat Chop. The effect of Sparkling Aria is prevented if this Pokemon is the only target. Secondary effects added by King's Rock, Razor Fang, and the Poison Touch and Stench Abilities are also prevented against this Pokemon.",
						},
		gen7: {
							desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, cause this Pokemon's stat stages to be lowered, as well as Anchor Shot, Fling, Spirit Shackle, and Throat Chop. The effect of Sparkling Aria is prevented if this Pokemon is the only target. Secondary effects added by King's Rock, Razor Fang, and the Poison Touch and Stench Abilities are also prevented against this Pokemon.",
						},
		gen6: {
							desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, cause this Pokemon's stat stages to be lowered, and Fling. Secondary effects added by King's Rock, Razor Fang, and the Poison Touch and Stench Abilities are also prevented against this Pokemon.",
						},
		gen4: {
							desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, cause this Pokemon's stat stages to be lowered, and Fling. Secondary effects added by King's Rock and Razor Fang are also prevented against this Pokemon.",
						},
		gen3: {
							desc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack. Attacks with secondary effects that are prevented include those with a chance (even 100%) to paralyze, sleep, freeze, burn, poison, confuse, cause this Pokemon to flinch, or cause this Pokemon's stat stages to be lowered. The secondary effect added by King's Rock is also prevented against this Pokemon.",
						}
	},
	"soundproof": {
		name: "Soundproof",
		shortDesc: "This Pokemon is immune to sound-based moves, unless it used the move.",
		gen7: {
							shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
						},
		gen5: {
							shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
						},
		gen4: {
							shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
						}
	},
	"speedboost": {
		name: "Speed Boost",
		desc: "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
		shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field."
	},
	"static": {
		name: "Static",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
		gen4: {
							desc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
						},
		gen3: {
							desc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
							shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed.",
						}
	},
	"stench": {
		name: "Stench",
		desc: "This Pokemon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
		shortDesc: "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch.",
		gen4: {
							desc: "No competitive use.",
							shortDesc: "No competitive use.",
						}
	},
	"stickyhold": {
		name: "Sticky Hold",
		desc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack, unless the attack knocks out this Pokemon. A Sticky Barb will be transferred to other Pokemon regardless of this Ability.",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack.",
		gen4: {
							desc: "This Pokemon cannot lose its held item due to another Pokemon's attack, even if the attack knocks out this Pokemon. A Sticky Barb will be transferred to other Pokemon regardless of this Ability.",
						},
		block: "  {POKEMON}'s item cannot be removed!"
	},
	"sturdy": {
		name: "Sturdy",
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		gen4: {
							desc: "OHKO moves fail when used against this Pokemon.",
							shortDesc: "OHKO moves fail when used against this Pokemon.",
						},
		activate: "  {POKEMON} endured the hit!"
	},
	"suctioncups": {
		name: "Suction Cups",
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
		block: "  {POKEMON} is anchored in place with its suction cups!"
	},
	"swarm": {
		name: "Swarm",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5× with Bug attacks.",
		gen4: {
							desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Bug-type attacks have their power multiplied by 1.5.",
							shortDesc: "At 1/3 or less of its max HP, this Pokemon's Bug-type attacks have 1.5× power.",
						}
	},
	"swiftswim": {
		name: "Swift Swim",
		desc: "If Rain is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Rain is active, this Pokemon's Speed is doubled.",
		gen7: {
							desc: "If Rain is active, this Pokemon's Speed is doubled.",
						}
	},
	"synchronize": {
		name: "Synchronize",
		desc: "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same non-volatile status condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
		gen4: {
							desc: "If another Pokemon burns, paralyzes, or poisons this Pokemon, that Pokemon receives the same non-volatile status condition. If another Pokemon badly poisons this Pokemon, that Pokemon becomes poisoned.",
						}
	},
	"thickfat": {
		name: "Thick Fat",
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire-/Ice-type moves against this Pokemon deal damage with a halved offensive stat.",
		gen4: {
							desc: "The power of Fire- and Ice-type attacks against this Pokemon is halved.",
							shortDesc: "The power of Fire- and Ice-type attacks against this Pokemon is halved.",
						},
		gen3: {
							desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's Special Attack is halved when calculating the damage to this Pokemon.",
							shortDesc: "Fire-/Ice-type moves against this Pokemon deal damage with a halved Sp. Atk stat.",
						}
	},
	"torrent": {
		name: "Torrent",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5× with Water attacks.",
		gen4: {
							desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Water-type attacks have their power multiplied by 1.5.",
							shortDesc: "At 1/3 or less of its max HP, this Pokemon's Water-type attacks have 1.5× power.",
						}
	},
	"trace": {
		name: "Trace",
		desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Flower Gift, Forecast, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Teraform Zero, Tera Shell, Tera Shift, Trace, Zen Mode, and Zero to Hero. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		gen8: {
							desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
						},
		gen7: {
							desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
						},
		gen6: {
							desc: "On switch-in, this Pokemon copies a random adjacent opposing Pokemon's Ability. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
						},
		gen5: {
							desc: "On switch-in, this Pokemon copies a random adjacent opposing Pokemon's Ability. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
						},
		gen4: {
							desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are Forecast, Multitype, and Trace. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
						},
		gen3: {
							desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability.",
						},
		changeAbility: "  {POKEMON} traced {SOURCE}'s {ABILITY}!"
	},
	"truant": {
		name: "Truant",
		shortDesc: "This Pokemon skips every other turn instead of using a move.",
		gen3: {
							desc: "This Pokemon skips every other turn instead of using a move. If this Pokemon replaces a Pokemon that fainted during end-of-turn effects, its first turn will be skipped.",
						},
		cant: "{POKEMON} is loafing around!"
	},
	"vitalspirit": {
		name: "Vital Spirit",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
	},
	"voltabsorb": {
		name: "Volt Absorb",
		desc: "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		gen3: {
							desc: "This Pokemon is immune to damaging Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by one.",
							shortDesc: "This Pokemon heals 1/4 its max HP when hit by a damaging Electric move; immunity.",
						}
	},
	"waterabsorb": {
		name: "Water Absorb",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity."
	},
	"waterveil": {
		name: "Water Veil",
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it."
	},
	"whitesmoke": {
		name: "White Smoke",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages."
	},
	"wonderguard": {
		name: "Wonder Guard",
		shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",
		gen4: {
							shortDesc: "This Pokemon is only damaged by Fire Fang, supereffective moves, indirect damage.",
						},
		gen3: {
							shortDesc: "This Pokemon is only damaged by supereffective moves and indirect damage.",
						}
	},
};
