'use strict';

// Restore data accidentally omitted by the original standalone extraction.
// Usage: node tools/repair-gen3-data.cjs <original Showdown server directory>
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { transformSync } = require('esbuild');
const root = path.resolve(__dirname, '..');
const original = path.resolve(process.argv[2]);
function load(file, name) {
	const module = { exports: {} };
	const code = transformSync(fs.readFileSync(file, 'utf8'), { loader: 'ts', format: 'cjs', target: 'es2022' }).code;
	vm.runInNewContext(code, { module, exports: module.exports, require });
	return module.exports[name];
}
function serialize(value) {
	if (typeof value === 'function') {
		const text = value.toString();
		return /^(async )?function\b|^\(/.test(text) ? text : `function ${text}`;
	}
	if (Array.isArray(value)) return `[${value.map(serialize).join(', ')}]`;
	if (value && typeof value === 'object') return `{\n${Object.entries(value).map(([k, v]) => `${JSON.stringify(k)}: ${serialize(v)}`).join(',\n')}\n}`;
	return value === undefined ? 'undefined' : JSON.stringify(value);
}
let scripts = {};
for (const layer of ['', 'gen8', 'gen7', 'gen6', 'gen5', 'gen4', 'gen3']) {
	const file = path.join(original, 'data', layer ? `mods/${layer}/scripts.ts` : 'scripts.ts');
	const child = load(file, 'Scripts');
	for (const [key, value] of Object.entries(child)) {
		if (key === 'inherit') continue;
		scripts[key] = value?.inherit ? { ...scripts[key], ...value } : value;
		if (scripts[key]?.inherit) delete scripts[key].inherit;
	}
}
fs.writeFileSync(path.join(root, 'data/mods/gen3/scripts.ts'), '// Effective Gen III mechanics, including inherited historical overrides.\nexport const Scripts: ModdedBattleScriptsData = ' + serialize(scripts) + ';\n');
const current = load(path.join(root, 'data/learnsets.ts'), 'Learnsets');
const upstream = load(path.join(original, 'data/learnsets.ts'), 'Learnsets');
for (const [id, entry] of Object.entries(current)) {
	const events = upstream[id]?.eventData || [];
	const indices = new Map();
	const kept = events.filter((e, i) => {
		if (e.generation > 3) return false;
		indices.set(i, indices.size); return true;
	});
	if (kept.length) entry.eventData = kept;
	else delete entry.eventData;
	for (const move of Object.keys(entry.learnset || {})) {
		const sources = (upstream[id]?.learnset?.[move] || entry.learnset[move]).filter(s => /^[123]/.test(s));
		entry.learnset[move] = sources.flatMap(source => {
			const match = /^([123])S(\d+)$/.exec(source);
			return !match ? [source] : indices.has(Number(match[2])) ? [`${match[1]}S${indices.get(Number(match[2]))}`] : [];
		});
		if (!entry.learnset[move].length) delete entry.learnset[move];
	}
	if (entry.eventOnly && !entry.eventData) delete entry.eventOnly;
}
fs.writeFileSync(path.join(root, 'data/learnsets.ts'), 'export const Learnsets: import("../sim/dex-species").LearnsetDataTable = ' + JSON.stringify(current, null, '\t') + ';\n');
console.log('Restored historical scripts and event records.');
