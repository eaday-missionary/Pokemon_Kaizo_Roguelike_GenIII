'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const { spawn } = require('node:child_process');
const path = require('node:path');
const { createServer, createBattle, snapshot, advanceBot, BOT_TEAM } = require('../local-battle.cjs');

test('the existing start command opens the local app instead of the multiplayer server', async () => {
	const child = spawn(process.execPath, ['pokemon-showdown', 'start', '--skip-build', '0'], {
		cwd: path.resolve(__dirname, '..'), windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'],
	});
	try {
		const origin = await new Promise((resolve, reject) => {
			let output = '';
			const timer = setTimeout(() => reject(new Error('Local startup timed out.')), 10000);
			child.on('error', error => { clearTimeout(timer); reject(error); });
			child.on('exit', code => { clearTimeout(timer); reject(new Error(`Local startup exited: ${code}`)); });
			child.stdout.on('data', chunk => {
				output += chunk;
				const match = /http:\/\/127\.0\.0\.1:\d+/.exec(output);
				if (match) { clearTimeout(timer); resolve(match[0]); }
			});
		});
		assert.match(await (await fetch(origin)).text(), /Battle trainer AI/);
		assert.equal((await fetch(`${origin}/api/data`)).status, 200);
	} finally { child.kill(); }
});

test('trainer and player finish full singles battles, including forced switches', () => {
	for (const size of [1, 3, 6]) {
		const battle = createBattle(structuredClone(BOT_TEAM.slice(0, size)));
		let switches = 0;
		try {
			for (let step = 0; step < 1000 && !battle.ended; step++) {
				const request = battle.p1.activeRequest;
				let choice;
				if (request.forceSwitch) {
					choice = `switch ${battle.p1.pokemon.findIndex(p => !p.fainted && !p.isActive) + 1}`;
					switches++;
				} else {
					choice = `move ${request.active[0].moves.findIndex(m => !m.disabled && m.pp > 0) + 1}`;
				}
				assert.equal(battle.choose('p1', choice), true, battle.p1.choice.error);
				advanceBot(battle);
			}
			assert.equal(battle.ended, true);
			assert.ok(battle.turn > 1);
			assert.ok(snapshot(battle).log.some(line => line.startsWith('|win|')));
			assert.ok(!snapshot(battle).log.some(line => line.startsWith('|split|')));
			if (size === 6) assert.ok(switches > 0);
		} finally { battle.destroy(); }
	}
});

test('local HTTP interface validates teams/actions and serves only the local app', async () => {
	const server = createServer();
	await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
	const origin = `http://127.0.0.1:${server.address().port}`;
	const post = (route, body, headers = {}) => fetch(`${origin}/api/${route}`, {
		method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body),
	});
	try {
		const page = await fetch(origin);
		assert.equal(page.status, 200);
		assert.match(page.headers.get('content-security-policy'), /connect-src 'self'/);
		assert.doesNotMatch(await page.text(), /https?:\/\/|login|formatfolder|ladder|tournament/i);
		const catalogue = await (await fetch(`${origin}/api/data`)).json();
		assert.ok(catalogue.species.some(p => p.name === 'Swampert' && p.moves.includes('Surf')));
		assert.ok(!catalogue.species.some(p => p.name === 'Garchomp'));
		assert.equal(catalogue.moves.length, 354);
		assert.equal(catalogue.natures.length, 25);
		assert.equal((await post('battle', { team: [] })).status, 400);
		assert.equal((await post('battle', { team: [{ species: 'Garchomp', moves: ['Tackle'] }] })).status, 400);
		assert.equal((await post('battle', { team: BOT_TEAM.slice(0, 1) }, { Origin: 'https://example.com' })).status, 403);
		assert.equal((await fetch(`${origin}/js/client-connection.js`)).status, 404);
		const response = await post('battle', { team: BOT_TEAM.slice(0, 2) });
		assert.equal(response.status, 200);
		const battle = await response.json();
		assert.equal(battle.request.side.name, 'Player');
		assert.equal((await post('choice', { id: battle.id, choice: 'move 9' })).status, 400);
		const turn = await (await post('choice', { id: battle.id, choice: 'move 1' })).json();
		assert.ok(turn.turn > battle.turn);
		assert.ok(turn.log.some(line => line.startsWith('|move|p1')));
		assert.ok(turn.log.some(line => line.startsWith('|move|p2')));
		const replacement = await post('battle', { team: BOT_TEAM.slice(0, 1), previous: battle.id });
		assert.equal(replacement.status, 200);
		assert.equal((await post('choice', { id: battle.id, choice: 'move 1' })).status, 400);
	} finally {
		await new Promise(resolve => server.close(resolve));
	}
});
