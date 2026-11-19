const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../play.pokemonshowdown.com');
let socketURL;
const context = vm.createContext({
	console: { warn() {} },
	Config: { testclient: true, routes: { client: 'play.pokemonshowdown.com' } },
	PS: { server: { protocol: 'http', host: 'localhost', port: 8000, prefix: '/showdown' } },
	document: { location: { protocol: 'file:' } },
	Worker: class { constructor() { throw new Error('File URLs cannot create workers'); } },
	WebSocket: class {
		constructor(url) {
			// Exercise the request helper during synchronous connection startup.
			assert.equal(vm.runInContext("Net('/resources').uri", context), '/resources');
			assert.ok(vm.runInContext("typeof PSLoginServer.query === 'function'", context));
			socketURL = url;
		}
	},
	setInterval() {},
});
vm.runInContext(fs.readFileSync(path.join(root, 'js/client-connection.js'), 'utf8'), context);
assert.equal(socketURL, 'ws://localhost:8000/showdown/websocket');
assert.equal(vm.runInContext("Net('/team').uri", context), '/team');

vm.runInContext(fs.readFileSync(path.join(root, 'js/server/chat-formatter.js'), 'utf8'), context);
assert.equal(vm.runInContext("formatText('Hello **world**')", context), 'Hello <b>world</b>');
console.log('Local client startup and text formatting passed.');
