'use strict';

// One-time import from the user's pret/pokefirered reference checkout.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const reference = path.resolve(process.argv[2]);
const read = file => fs.readFileSync(path.join(reference, file), 'utf8');
const source = read('src/battle_message.c') + '\n' + read('src/strings.c').split('\n').filter(line => /gText_(?:PkmnHPRestoredByVar2|PkmnCuredOfPoison|PkmnCuredOfParalysis|PkmnWokeUp2|PkmnBurnHealed|PkmnThawedOut|PPWasRestored|PkmnBecameHealthy|PkmnSnappedOutOfConfusion|PkmnGotOverInfatuation)\[/.test(line)).join('\n');
const strings = {};
for (const match of source.matchAll(/(?:static )?const u8 (?:sText_|gBattleText_|gText_)(\w+)\[\] = _\("((?:[^"\\]|\\.)*)"\);/g)) {
	strings[match[1]] = match[2].replace(/\\[npl]/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\')
		.replace(/\{(?:PAUSE|WAIT|PLAY|STOP|RESUME|SE_|BGM_|COLOR|HIGHLIGHT|SHADOW|FONT|CLEAR|SKIP)[^}]*\}/g, '').trim();
}
const constants = fs.readFileSync(path.join(reference, 'include/constants/moves.h'), 'utf8');
const ids = Object.fromEntries([...constants.matchAll(/#define MOVE_(\w+)\s+(\d+)/g)].map(m => [m[1], Number(m[2])]));
const names = fs.readFileSync(path.join(reference, 'src/data/text/move_names.h'), 'utf8');
const moves = Object.fromEntries([...names.matchAll(/\[MOVE_(\w+)\]\s*= _\("([^"]+)"\)/g)].map(m => [ids[m[1]], m[2]]));
const abilities = Object.fromEntries([...read('src/data/text/abilities.h').matchAll(/\[ABILITY_(\w+)\]\s*= _\("([^"]+)"\)/g)].map(m => [m[1].toLowerCase().replaceAll('_', ''), m[2]]));
const items = Object.fromEntries(JSON.parse(read('src/data/items.json')).items.map(item => [item.itemId.slice(5).toLowerCase().replaceAll('_', ''), item.english]));
const output = path.resolve(__dirname, '../local-data');
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'firered-text.json'), JSON.stringify({
	source: 'https://github.com/pret/pokefirered',
	commit: execFileSync('git', ['-c', `safe.directory=${reference.replace(/\\/g, '/')}`, 'rev-parse', 'HEAD'], { cwd: reference, encoding: 'utf8' }).trim(), strings, moves, abilities, items,
}, null, '\t') + '\n');
console.log(`Imported ${Object.keys(strings).length} FireRed text templates and ${Object.keys(moves).length} move names.`);
