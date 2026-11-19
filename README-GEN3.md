# Pokemon Roguelike: standalone Generation III fork

This working fork is derived from Pokemon Showdown and Pokemon Showdown Client.
The untouched source installation remains at `C:\Users\KoreaSeoulSouthMissi\PokemonRoguelike`.

## Run local battles

Double-click `Start Local Battles.cmd`, leave its window open, and open
**http://127.0.0.1:8080/**. The previous test-client HTML files also point here.
Stop the previous Showdown server; it is not used by this interface.
`npm start` and `node pokemon-showdown start --skip-build` now also launch this
local app on port 8080 instead of the multiplayer server.

The local interface at `client/local` has a team builder, browser-local saved teams,
and singles battles against a trainer AI. Generation III is fixed. There is no
account, name prompt, format selection, lobby, ladder, tournament, spectator,
friends, resource menu, or format-folder feature. No external scripts, assets,
login services, or internet connection are used. The HTTP host binds exclusively
to `127.0.0.1`; the browser only talks to that local process.

The trainer uses a fixed legal team, matched to the player's team size, and chooses
attacks using power, type effectiveness, accuracy, and STAB. It can replace fainted
Pokémon. This is a basic trainer policy, not a competitive search AI.

`server/local-battle.cjs` uses the existing compiled battle engine directly; it does
not launch the Showdown multiplayer server. The old upstream client sources remain
for reference and are not served or loaded by the local application. Local app edits
need no build step. Teams from the previous file-based client are not migrated.

Run local regression tests with `node --test test/local-battle.test.cjs` from `server`.

Battles use FireRed dialogue templates on the right and display statuses,
ongoing effects, stat stages, side conditions and weather. The Bag contains
practice supplies replenished each battle; using an item consumes a turn.
FireRed formula corrections live in `server/data/mods/gen3local`. Sources and
test coverage are documented in `server/local-data/README.md`.

The server-side conversion tool at `server/tools/build-gen3-standalone.js` flattens
the historical data inheritance chain into source tables containing Generation I-III
content. It preserves function-valued battle effects, changes Gen III to inherit from
the generic battle core, and removes later mods and random-battle generators.

The conversion is intentionally performed in this separate Git working tree so every
generated deletion and rewrite is reviewable and reversible.

## Result

- 392 species records (the 386 National Pokedex species plus Generation III forms)
- 354 numbered Generation III moves, plus 16 internal battle-engine variants
- 76 abilities
- 129 Generation I-III item records
- 17 types
- 389 filtered learnset records
- No Generation IV+ mods, localized later-generation data, or random-battle tables
- A Generation III-only client Pokedex, search index, teambuilder table, learnsets,
  formats, abilities, moves, items, and type chart

Random-team generation was removed because Showdown's Generation I-III random-team
classes inherit from the modern random-battle implementation. Normal supplied-team
battles, including the custom `[Gen 3] Roguelike` format, remain supported.

## Rebuild

For the local simulator, run `npm run build:local` from `server`, then
`node --test test/local-battle.test.cjs test/local-mechanics.test.cjs`.
This compiles the engine, supporting libraries and historical battle data.

From `server`, install dependencies and build the converted fork:

```powershell
npm run build
```

Then build the sibling `client`. Its `build-tools/build-indexes` script reads the
standalone server's emitted `dist` data and produces the Generation III-only browser
payload.

`server/tools/build-gen3-standalone.js` is a one-time conversion tool. To repeat the
conversion, copy it into a fresh full Pokemon Showdown checkout and run it before the
Generation IV+ source mods have been deleted.

## Scope note

The selectable content, primary content tables, historical mods, and generated client
payload are restricted to Generations I-III. The shared simulator, common condition
records, and client still contain generic compatibility branches and field names for
modern Showdown mechanics.
Those dormant branches were retained because removing every identifier would be a
separate rewrite of the common battle protocol and UI, with a high risk of breaking
working Generation III battles. They are not backed by Generation IV+ content here.
