# FireRed reference and validation

`firered-text.json` contains message templates and names imported from
https://github.com/pret/pokefirered, pinned by its `commit` field. Game text is
separate from Pokémon Showdown's MIT simulator code.

Regenerate with `node tools/import-firered-text.cjs <reference-checkout>`.
`local-dialogue.cjs` maps simulator events to these templates.

`firered-audit.json` records comparisons of all 354 numbered moves (PP, effective
accuracy, priority, type and non-variable power) and all 386 species' base stats.
Regenerate with `node tools/audit-firered-data.cjs <reference-checkout>`.
Script-controlled accuracy and calculated power use their effective simulator
representation rather than unused fields in the ROM's move table.

FireRed formula corrections live in `data/mods/gen3local`. Full Gen III learnsets
remain available, including moves obtainable in other Gen III games.
The bag supplies 10 practice items each battle and reusable flutes. Capture balls,
escape items and items usable only outside battle are unavailable in trainer
battles. Event-defined Enigma Berry payloads are not modeled.

Build: `npm run build:local`.
Tests: `node --test test/local-battle.test.cjs test/local-mechanics.test.cjs`.
Browser check: `node test/local-browser.cjs`.

Tests cover every species entering battle, execution of all 354 numbered moves
(370 internal records), 76 abilities and 129 held item records. Separate checks
verify damage rolls, stat/item rounding, accuracy, statuses, weather, multi-turn
effects, stat changes, multihits, bag effects and the offline browser interface.

This is targeted regression coverage, not exhaustive proof of every cartridge
interaction or contextual dialogue branch. ROM RNG sequences, badge bonuses,
story/tutorial battles, prize money and experience progression are outside this
local simulator.
