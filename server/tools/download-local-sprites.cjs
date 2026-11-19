'use strict';

// Run once during setup. The simulator itself never downloads assets.
const fs = require('node:fs/promises');
const path = require('node:path');
const { Dex } = require('../dist/sim');
const root = path.resolve(__dirname, '../../client/local/sprites');

async function main() {
	const species = Dex.mod('gen3').species.all().filter(s => s.exists);
	const jobs = [];
	for (const folder of ['gen3', 'gen3-back', 'gen3-shiny', 'gen3-back-shiny']) {
		await fs.mkdir(path.join(root, folder), { recursive: true });
		for (const s of species) jobs.push({ file: `${folder}/${s.id}.png`, source: `${folder}/${s.name.toLowerCase().replace(/[^a-z0-9-]/g, '')}.png` });
	}
	let next = 0;
	const missing = [];
	await Promise.all(Array.from({ length: 12 }, async () => {
		while (next < jobs.length) {
			const { file, source } = jobs[next++];
			try { await fs.access(path.join(root, file)); continue; } catch {}
			let response;
			for (let attempt = 0; attempt < 3; attempt++) {
				try {
					response = await fetch(`https://play.pokemonshowdown.com/sprites/${source}`, { signal: AbortSignal.timeout(20000) });
					if (response.ok || response.status === 404) break;
				} catch (error) { if (attempt === 2) throw error; }
			}
			if (!response?.ok) { missing.push(file); continue; }
			const bytes = Buffer.from(await response.arrayBuffer());
			if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${file}`);
			await fs.writeFile(path.join(root, file), bytes);
		}
	}));
	console.log(`${jobs.length - missing.length} sprites saved locally. Missing: ${missing.join(', ') || 'none'}`);
	if (missing.length) process.exitCode = 1;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
