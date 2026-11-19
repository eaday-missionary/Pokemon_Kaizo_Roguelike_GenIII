'use strict';

// Optional end-to-end smoke check using the locally installed Edge browser.
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createServer } = require('../local-battle.cjs');

async function main() {
	const browserPath = process.env.LOCAL_TEST_BROWSER || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
	if (!fs.existsSync(browserPath)) throw new Error('Set LOCAL_TEST_BROWSER to a Chromium browser executable.');
	const server = createServer();
	await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
	const origin = `http://127.0.0.1:${server.address().port}`;
	const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'gen3-local-browser-'));
	const browser = spawn(browserPath, [
		'--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
		'--disable-background-networking', '--disable-component-update', '--disable-sync',
		'--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
	], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
	let socket;
	try {
		const endpoint = await new Promise((resolve, reject) => {
			let output = '';
			const timeout = setTimeout(() => reject(new Error('Browser startup timed out.')), 20000);
			browser.on('error', error => { clearTimeout(timeout); reject(error); });
			browser.stderr.on('data', chunk => {
				output += chunk;
				const match = /DevTools listening on (ws:\/\/[^\s]+)/.exec(output);
				if (match) { clearTimeout(timeout); resolve(match[1]); }
			});
		});
		socket = new WebSocket(endpoint);
		await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
		const pending = new Map();
		let nextID = 0;
		const failures = [], requests = [];
		socket.onmessage = event => {
			const message = JSON.parse(event.data);
			if (message.id) {
				const task = pending.get(message.id); pending.delete(message.id);
				if (message.error) task.reject(new Error(message.error.message)); else task.resolve(message.result);
			} else if (message.method === 'Runtime.exceptionThrown') {
				failures.push(message.params.exceptionDetails.text);
			} else if (message.method === 'Network.requestWillBeSent') {
				requests.push(message.params.request.url);
			}
		};
		function send(method, params = {}, sessionId) {
			const id = ++nextID;
			return new Promise((resolve, reject) => {
				const timer = setTimeout(() => { pending.delete(id); reject(new Error(`Browser command timed out: ${method}`)); }, 15000);
				pending.set(id, {
					resolve(value) { clearTimeout(timer); resolve(value); },
					reject(error) { clearTimeout(timer); reject(error); },
				});
				socket.send(JSON.stringify({ id, method, params, sessionId }));
			});
		}
		const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
		const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
		const page = (method, params) => send(method, params, sessionId);
		await page('Runtime.enable'); await page('Network.enable'); await page('Page.enable');
		await page('Page.navigate', { url: origin });
		const evaluate = async expression => {
			const result = await page('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
			if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
			return result.result.value;
		};
		const waitFor = expression => evaluate(`new Promise((resolve, reject) => {
			const deadline = Date.now() + 10000;
			const timer = setInterval(() => {
				if (${expression}) { clearInterval(timer); resolve(true); }
				else if (Date.now() > deadline) { clearInterval(timer); reject(new Error('UI condition timed out')); }
			}, 40);
		})`);
		await waitFor("document.querySelectorAll('#members .member').length === 1");
		assert.equal(await evaluate("document.querySelector('#error').hidden"), true);
		assert.equal(await evaluate("document.querySelectorAll('#members select')[0].value"), 'Swampert');
		await evaluate("document.querySelector('#team-name').value='Saved locally'; document.querySelector('#team-name').dispatchEvent(new Event('input'))");
		await page('Page.reload');
		await waitFor("document.querySelector('#team-name')?.value === 'Saved locally'");
		await evaluate("document.querySelector('#battle').click()");
		await waitFor("!document.querySelector('#arena').hidden && document.querySelectorAll('#actions button').length === 4");
		await waitFor("[...document.querySelectorAll('.pokemon-sprite')].length === 2 && [...document.querySelectorAll('.pokemon-sprite')].every(img => img.complete && img.naturalWidth > 0)");
		assert.match(await evaluate("document.querySelector('#player img').src"), /\/sprites\/gen3-back\/swampert\.png$/);
		await evaluate("window.animationCount = 0; const originalAnimate = Element.prototype.animate; Element.prototype.animate = function (...args) { window.animationCount++; return originalAnimate.apply(this, args); }");
		await evaluate("document.querySelector('#actions button').click()");
		await waitFor("document.querySelector('#turn').textContent === 'Turn 2'");
		assert.ok(await evaluate('window.animationCount >= 2'), 'Turn should animate attacks and damage');
		assert.equal(await evaluate("document.querySelector('#error').hidden"), true);
		assert.ok(await evaluate("document.querySelector('#log').getBoundingClientRect().left > document.querySelector('.battle-controls').getBoundingClientRect().left"), 'Dialogue should be on the right');
		assert.ok(await evaluate("document.querySelector('#log').textContent.includes('SURF!')"), 'FireRed move dialogue should render');
		await evaluate("document.querySelector('#bag').open = true; const item = document.querySelector('#bag-controls select'); item.value = 'Max Potion'; item.dispatchEvent(new Event('change')); document.querySelector('#bag-controls button').click()");
		await waitFor("document.querySelector('#turn').textContent === 'Turn 3'");
		assert.equal(await evaluate("document.querySelector('#error').hidden"), true);
		assert.equal(await evaluate("currentBattle.bag.find(i => i.id === 'maxpotion').count"), 9);
		await evaluate("document.querySelector('#back').click(); document.querySelector('#add-member').click()");
		await waitFor("document.querySelectorAll('#members .member').length === 2");
        // Exercise the actual forced-turn controls, opponent editor and narrow stat layout.
        await evaluate("teams[selected].pokemon = [{species:'Mew', ability:'Synchronize', level:100, moves:['Fly','Hyper Beam','Soft-Boiled','Protect']}]; teams[selected].opponent = [{species:'Shuckle',level:100},{species:'Magikarp',level:5}]; renderBuilder(); save()");
        assert.equal(await evaluate("document.querySelectorAll('#opponent-members select').length"), 2);
        await evaluate("startBattle()");
        assert.equal(await evaluate("document.querySelector('#error').textContent"), '');
        assert.equal(await evaluate("currentBattle.opponentTeam.length"), 2);
        assert.equal(await evaluate("document.querySelectorAll('.team-ball').length"), 12);
        assert.equal(await evaluate("document.querySelector('#player').textContent.includes('Base stats')"), false);
        assert.equal(await evaluate("document.querySelectorAll('#player .stats > div').length"), 6);
        assert.equal(await evaluate("[...document.querySelectorAll('#player .stats > div')].every(cell => cell.scrollWidth <= cell.clientWidth)"), true);
        await evaluate("choose('move 1')");
        assert.equal(await evaluate("document.querySelectorAll('#actions button').length"), 1);
        assert.equal(await evaluate("document.querySelector('#actions button').disabled"), false);
        assert.match(await evaluate("document.querySelector('#actions button').textContent"), /Continue turn/);
        await evaluate("document.querySelector('#actions button').click()");
        await waitFor("!busy && currentBattle.turn === 3");
        await evaluate("choose('move 2')");
        assert.equal(await evaluate("document.querySelector('#actions button').disabled"), false);
        await evaluate("document.querySelector('#actions button').click()");
        await waitFor("!busy && currentBattle.turn === 5");
        assert.match(await evaluate("document.querySelector('#log').textContent"), /recharge/i);
        assert.equal(await evaluate("document.querySelector('#error').hidden"), true);
        assert.equal(await evaluate("document.querySelectorAll('#opponent .stats > div').length"), 6);
        assert.match(await evaluate("document.querySelector('#actions').textContent"), /Acc\. 95%/);
        await evaluate("(async () => { teams[selected].pokemon = [{species:'Mew',ability:'Synchronize',level:100,moves:['Substitute','Rain Dance','Protect','Thunder']}]; await startBattle(); await choose('move 1'); })()");
        assert.equal(await evaluate("document.querySelector('#player .substitute-sprite')?.getAttribute('src')"), '/effects/substitute-back.png');
        await evaluate("choose('move 2')");
        assert.equal(await evaluate("document.querySelectorAll('.weather-overlay.raindance').length"), 2);
        assert.match(await evaluate("document.querySelector('#actions').textContent"), /Acc\. 70%/);
        // All visuals follow the authoritative state and disappear when it clears.
        assert.equal(await evaluate("document.querySelectorAll('#explanations details').length"), 5);
        assert.match(await evaluate("document.querySelector('#player').textContent"), /Ability: Synchronize/);
        assert.match(await evaluate("document.querySelector('#actions').textContent"), /Power:/);
        assert.match(await evaluate("document.querySelector('#explanations').textContent"), /Synchronize/);
        await evaluate("window.savedScene = structuredClone(currentBattle)");
        for (const weather of ['raindance', 'sunnyday', 'sandstorm', 'hail']) {
         await evaluate(`currentBattle.weather = '${weather}'; renderBattle()`);
         assert.equal(await evaluate(`document.querySelectorAll('.weather-overlay.${weather}').length`), 2);
        }
        await evaluate("currentBattle.playerConditions = [{id:'spikes',name:'Spikes',layers:3},{id:'reflect',name:'Reflect'}]; currentBattle.opponentConditions = []; renderBattle()");
        assert.equal(await evaluate("document.querySelectorAll('#player .hazard-spikes img').length"), 9);
        assert.equal(await evaluate("document.querySelectorAll('#opponent .hazard-spikes img').length"), 0);
        assert.equal(await evaluate("document.querySelectorAll('#player .side-screen.reflect').length"), 1);
        await evaluate("currentBattle.weather = ''; currentBattle.playerConditions = []; currentBattle.player[0].effects = []; renderBattle()");
        assert.equal(await evaluate("document.querySelectorAll('.weather-overlay, .hazard-spikes, .substitute-sprite, .side-screen').length"), 0);
        await evaluate("currentBattle = window.savedScene; renderBattle()");
        await waitFor("[...document.querySelectorAll('.sprite-stage img')].every(img => img.complete && img.naturalWidth > 0)");
		assert.deepEqual(failures, []);
		assert.deepEqual(requests.filter(url => !url.startsWith(origin) && url !== 'about:blank'), []);
		console.log('Browser passed: saved teams, bot battle, move controls, charging/recharge, opponent editing, party indicators, stat layout, accuracy, weather, Spikes, Substitute, no external requests or JavaScript errors.');
	} finally {
		socket?.close(); browser.kill();
		server.closeAllConnections();
		await new Promise(resolve => server.close(resolve));
	}
}
main().catch(error => { console.error(error); process.exitCode = 1; });
