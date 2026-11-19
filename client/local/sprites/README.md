Gen III sprite assets

Downloaded from https://play.pokemonshowdown.com/sprites/ for offline use.
Pokémon artwork belongs to Nintendo, Creatures, and GAME FREAK. Sprite
collection and hosting provided by Pokémon Showdown; these assets are not
covered by the simulator source code's MIT license.

All 392 internal Gen III species records have front/back and normal/shiny
PNGs. Filenames use the simulator's species IDs. To restore missing files,
run `node tools/download-local-sprites.cjs` from the server directory;
this setup tool needs internet access. Running battles does not.

The local interface uses these static sprites with simple browser animations
for attacks, damage, healing, switching, and fainting. It does not load the
upstream client's full move-effect renderer. Reduced-motion preferences
disable these animations.
