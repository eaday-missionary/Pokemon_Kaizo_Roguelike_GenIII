'use strict';

// Compile the local simulator without scanning the unused multiplayer server.
const fs = require('node:fs');
const path = require('node:path');
const { transformSync } = require('esbuild');
const root = path.resolve(__dirname, '..');
let count = 0;
function compile(directory) {
	for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
		const relative = path.join(directory, entry.name);
		if (entry.isDirectory()) { compile(relative); continue; }
		if (!entry.name.endsWith('.ts') || entry.name.endsWith('.d.ts') || entry.name === 'global-types.ts') continue;
		const destination = path.join(root, 'dist', relative.replace(/\.ts$/, '.js'));
		fs.mkdirSync(path.dirname(destination), { recursive: true });
		fs.writeFileSync(destination, transformSync(fs.readFileSync(path.join(root, relative), 'utf8'), {
			loader: 'ts', format: 'cjs', target: 'es2022', sourcefile: relative,
		}).code);
		count++;
	}
}
for (const directory of ['sim', 'lib', 'data', 'config']) compile(directory);
console.log(`Compiled ${count} local simulator files.`);
