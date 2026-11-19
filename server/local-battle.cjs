'use strict';

// Local-only host: no Showdown server, accounts, matchmaking, or login server.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const { Battle, Dex, TeamValidator } = require('./dist/sim');
const { installBag, bagSnapshot, chooseBag } = require('./local-bag.cjs');
const { renderDialogue } = require('./local-dialogue.cjs');

const { installGrowth, totals, xpProgress } = require('./local-growth.cjs');

const descriptions = require('./local-data/firered-descriptions.json');
const { moveDisplay } = require('./local-move-display.cjs');

const FORMAT = 'gen3roguelike';
const dex = Dex.mod('gen3');
const webRoot = path.resolve(__dirname, '../client/local');
const BOT_TEAM = [
	{ species: 'Swampert', ability: 'Torrent', item: 'Leftovers', moves: ['Surf', 'Earthquake', 'Ice Beam', 'Protect'] },
	{ species: 'Metagross', ability: 'Clear Body', item: 'Lum Berry', moves: ['Meteor Mash', 'Earthquake', 'Rock Slide', 'Psychic'] },
	{ species: 'Salamence', ability: 'Intimidate', item: 'Lum Berry', moves: ['Dragon Claw', 'Flamethrower', 'Earthquake', 'Rock Slide'] },
	{ species: 'Gengar', ability: 'Levitate', item: 'Leftovers', moves: ['Thunderbolt', 'Ice Punch', 'Psychic', 'Giga Drain'] },
	{ species: 'Snorlax', ability: 'Immunity', item: 'Leftovers', moves: ['Body Slam', 'Earthquake', 'Shadow Ball', 'Rest'] },
	{ species: 'Starmie', ability: 'Natural Cure', item: 'Leftovers', moves: ['Surf', 'Psychic', 'Thunderbolt', 'Ice Beam'] },
];

function catalogue() {
	const learnableMoves = species => {
		const moves = new Set();
		for (let s = species; s?.exists; s = s.prevo ? dex.species.get(s.prevo) : null) {
			for (const id of Object.keys(dex.data.Learnsets[s.id]?.learnset || {})) moves.add(dex.moves.get(id).name);
		}
		return [...moves].sort();
	};
	return {
		descriptions,
		species: dex.species.all().filter(s => s.exists && !s.battleOnly).map(s => ({
			name: s.name, abilities: Object.values(s.abilities), types: s.types, baseStats: s.baseStats, moves: learnableMoves(s),
		})),
		moves: [...new Map(dex.moves.all().filter(m => m.exists && m.num > 0 && m.num <= 354).map(m => [m.num, m.name])).values()],
		items: dex.items.all().filter(i => i.exists).map(i => i.name),
		natures: dex.natures.all().map(n => n.name),
		natureDetails: Object.fromEntries(dex.natures.all().map(n => [n.name, { plus: n.plus, minus: n.minus }])),
		moveDetails: Object.fromEntries(dex.moves.all().filter(m => m.exists).map(m => [m.name, { category: m.category, pp: m.pp, accuracy: m.accuracy, type: m.type }])),
	};
}

// Deterministic trainer policy: choose available attacks by power, STAB,
// effectiveness and accuracy; use status/recovery when useful. Never reads
// the player's selected action or consumes the simulator's random generator.
function botChoice(battle) {
	const side = battle.p2;
	const request = side.activeRequest;
	if (!request || request.wait) return null;
	if (request.forceSwitch) {
		const candidates = side.pokemon.map((p, i) => ({ p, i })).filter(({ p }) => !p.fainted && !p.isActive);
		candidates.sort((a, b) => b.p.hp / b.p.maxhp - a.p.hp / a.p.maxhp);
		return candidates.length ? `switch ${candidates[0].i + 1}` : 'pass';
	}
	const user = side.active[0];
	const target = battle.p1.active[0];
	const choices = request.active[0].moves.map((entry, index) => {
		if (entry.disabled || entry.pp === 0) return { index, score: -Infinity };
		const move = dex.moves.get(entry.id);
		let score = 12;
		if (move.category !== 'Status') {
			const power = move.basePower || (move.damage ? 70 : 40);
			const effectiveness = dex.getImmunity(move.type, target.types) ? 2 ** dex.getEffectiveness(move.type, target.types) : 0;
			score = power * effectiveness * (user.hasType(move.type) ? 1.5 : 1) * (move.accuracy === true ? 1 : move.accuracy / 100);
			if (target.hasAbility('Levitate') && move.type === 'Ground') score = 0;
		} else if (move.heal || move.id === 'rest') {
			score = user.hp < user.maxhp * 0.4 ? 160 : 0;
		} else if (move.status) {
			score = target.status ? 0 : 55;
		}
		return { index, score };
	});
	choices.sort((a, b) => b.score - a.score);
	return `move ${choices[0].index + 1}`;
}

function advanceBot(battle) {
	for (let n = 0; n < 12 && !battle.ended; n++) {
		if (battle.p2.isChoiceDone()) break;
		const choice = botChoice(battle);
		if (!choice) break;
		if (!battle.choose('p2', choice)) throw new Error('Bot could not choose a legal action.');
		if (!battle.p1.isChoiceDone()) break;
	}
}

function opponentTeam(entries) {
 if (!Array.isArray(entries) || !entries.length || entries.length > 6) throw new Error('Choose one to six opponent Pokemon.');
 return entries.map(entry => {
  const species = dex.species.get(entry.species);
  if (!species.exists || species.battleOnly || !Number.isInteger(entry.level) || entry.level < 1 || entry.level > 100) throw new Error('Invalid opponent species or level.');
  const preset = BOT_TEAM.find(p => p.species === species.name);
  if (preset) return { ...preset, moves: [...preset.moves], level: entry.level };
  const set = { species: species.name, ability: species.abilities[0], level: 100, moves: [] };
  const validator = new TeamValidator(FORMAT), candidates = new Set();
  for (let s = species; s?.exists; s = s.prevo ? dex.species.get(s.prevo) : null) {
   for (const move of Object.keys(dex.data.Learnsets[s.id]?.learnset || {})) candidates.add(move);
  }
  if (species.id === 'smeargle') candidates.add('tackle');
  const legal = [...candidates].filter(move => !validator.validateTeam([{ ...set, moves: [move] }]));
  legal.sort((a, b) => dex.moves.get(b).basePower - dex.moves.get(a).basePower);
  for (const move of legal) {
   if (!validator.validateTeam([{ ...set, moves: [...set.moves, move] }])) set.moves.push(move);
   if (set.moves.length === 4) break;
  }
  if (!set.moves.length) throw new Error('Opponent has no legal moves.');
  set.level = entry.level;
  return set;
 });
}
function createBattle(team, opponent) {
	if (!Array.isArray(team) || team.length < 1 || team.length > 6) throw new Error('Choose one to six Pokémon.');
	const errors = new TeamValidator(FORMAT).validateTeam(team);
	if (errors?.length) throw new Error(errors.join('\n'));
	const battle = new Battle({
		formatid: FORMAT,
		p1: { name: 'Player', team },
		p2: { name: 'Trainer AI', team: opponent ? opponentTeam(opponent) : BOT_TEAM.slice(0, team.length).map(p => ({ ...p, moves: [...p.moves] })) },
	});
	installBag(battle);
	installGrowth(battle);
	advanceBot(battle);
	return battle;
}

function snapshot(battle) {
	const effects = states => Object.entries(states).map(([id, state]) => ({
		id, name: battle.dex.conditions.get(id).name || id, duration: state.duration, layers: state.layers,
	}));
	const pokemon = p => ({ ability: battle.dex.abilities.get(p.ability).name, level: p.level, stats: totals(p), ...(p.side === battle.p1 ? { baseStats: p.baseSpecies.baseStats, evs: { ...p.set.evs }, experience: p.experience, xpProgress: xpProgress(p) } : {}), name: p.species.name, sprite: p.species.id, shiny: p.shiny, hp: p.hp, maxhp: p.maxhp,
		status: p.status, fainted: p.fainted, effects: effects(p.volatiles), boosts: { ...p.boosts },
		moves: p.moveSlots.map(m => ({ ...moveDisplay(battle, p, p.side.foe.active[0], m.id), id: m.id, name: m.move, category: battle.dex.moves.get(m.id).category, accuracy: battle.dex.moves.get(m.id).accuracy, pp: m.pp, maxpp: m.maxpp })),
	});
	// Both teams are local: retain exact HP rather than public rounded HP bars.
	const log = [];
	for (let i = 0; i < battle.log.length; i++) {
		const line = battle.log[i];
		if (line.startsWith('|split|')) {
			log.push(battle.log[i + 1]);
			i += 2;
		} else {
			log.push(line);
		}
	}
	return {
		turn: battle.turn, ended: battle.ended, winner: battle.winner,
		player: battle.p1.active.map(pokemon), opponent: battle.p2.active.map(pokemon),
		opponentTeam: battle.p2.pokemon.map(p => ({ fainted: p.fainted, status: p.status })),
		team: battle.p1.pokemon.map(pokemon), request: battle.p1.activeRequest, log, dialogue: renderDialogue(log),
		bag: bagSnapshot(battle), weather: battle.field.weather,
		weatherDuration: battle.field.weatherState.duration,
		fieldEffects: effects(battle.field.pseudoWeather),
		playerConditions: effects(battle.p1.sideConditions), opponentConditions: effects(battle.p2.sideConditions),
	};
}

async function readJSON(req) {
	let body = '';
	for await (const chunk of req) {
		body += chunk;
		if (body.length > 100000) throw new Error('Request is too large.');
	}
	return JSON.parse(body || '{}');
}

function createServer() {
	const battles = new Map();
	const server = http.createServer(async (req, res) => {
		const respond = (code, body) => {
			res.writeHead(code, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(body));
		};
		try {
			// Block other websites from controlling the local simulator.
			const ownOrigin = `http://${req.headers.host}`;
			if (req.headers.origin && req.headers.origin !== ownOrigin) return respond(403, { error: 'Local requests only.' });
			if (!/^127\.0\.0\.1:\d+$/.test(req.headers.host || '')) return respond(403, { error: 'Open the simulator using 127.0.0.1.' });
			if (req.method === 'GET' && req.url === '/api/data') return respond(200, catalogue());
			if (req.method === 'POST' && req.url === '/api/battle') {
				const { team, opponent, previous } = await readJSON(req);
				const battle = createBattle(team, opponent);
				if (battles.has(previous)) { battles.get(previous).destroy(); battles.delete(previous); }
				if (battles.size >= 50) {
					const oldest = battles.keys().next().value;
					battles.get(oldest).destroy(); battles.delete(oldest);
				}
				const id = randomUUID();
				battles.set(id, battle);
				return respond(200, { id, ...snapshot(battle) });
			}
			if (req.method === 'POST' && req.url === '/api/choice') {
				const { id, choice, item, target, move } = await readJSON(req);
				const battle = battles.get(id);
				if (!battle) throw new Error('Battle expired. Start a new battle.');
				if (battle.ended) throw new Error('This battle has ended.');
				if (choice === 'bag') chooseBag(battle, item, target, move);
				else {
					if (typeof choice !== 'string' || !/^(move [1-4]|switch [1-6])$/.test(choice)) throw new Error('Invalid action.');
					if (!battle.choose('p1', choice)) throw new Error(battle.p1.choice.error || 'That action is unavailable.');
				}
				advanceBot(battle);
				return respond(200, { id, ...snapshot(battle) });
			}
			const files = { '/': ['index.html', 'text/html'], '/app.js': ['app.js', 'text/javascript'], '/style.css': ['style.css', 'text/css'] };
			const file = req.method === 'GET' && files[req.url];
			// Only known sprite directories and plain species IDs are exposed.
			if (req.method === 'GET' && ['/effects/substitute.png', '/effects/substitute-back.png', '/effects/spikes.png'].includes(req.url)) {
				res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' });
				return res.end(fs.readFileSync(path.join(webRoot, req.url.slice(1))));
			}
			if (req.method === 'GET' && /^\/sprites\/gen3(?:-back)?(?:-shiny)?\/[a-z0-9]+\.png$/.test(req.url)) {
				const spritePath = path.join(webRoot, req.url.slice(1));
				if (!fs.existsSync(spritePath)) return respond(404, { error: 'Sprite not found.' });
				res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' });
				return res.end(fs.readFileSync(spritePath));
			}
			if (!file) return respond(404, { error: 'Not found.' });
			res.writeHead(200, {
				'Content-Type': `${file[1]}; charset=utf-8`,
				'Content-Security-Policy': "default-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'",
				'Cache-Control': 'no-store',
			});
			res.end(fs.readFileSync(path.join(webRoot, file[0])));
		} catch (error) {
			respond(400, { error: error.message });
		}
	});
	server.on('close', () => { for (const battle of battles.values()) battle.destroy(); battles.clear(); });
	return server;
}

function startLocalServer(port = Number(process.env.LOCAL_BATTLE_PORT || 8080)) {
	const server = createServer();
	server.on('error', error => { console.error(error.message); process.exitCode = 1; });
	server.listen(port, '127.0.0.1', () => console.log(`Local Gen III battles: http://127.0.0.1:${server.address().port}\nKeep this window open.`));
	return server;
}

if (require.main === module) startLocalServer();

module.exports = { startLocalServer, createServer, createBattle, snapshot, botChoice, advanceBot, BOT_TEAM };
