'use strict';

// This entry point loads no Showdown lobby, account, or network client code.
const $ = id => document.getElementById(id);
const STORAGE_KEY = 'gen3-local-teams-v1';
const stats = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
const statNames = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
const statusNames = { brn: 'Burned', psn: 'Poisoned', tox: 'Badly poisoned', par: 'Paralyzed', slp: 'Asleep', frz: 'Frozen' };
const effectNames = { confusion: 'Confused', leechseed: 'Leech Seed', perishsong: 'Perish Song', partiallytrapped: 'Bound',
	focusenergy: 'Focus Energy', mustrecharge: 'Must recharge', lockedmove: 'Rampaging', substitute: 'Substitute',
	yawn: 'Drowsy', nightmare: 'Nightmare', attract: 'Infatuated', curse: 'Curse', ingrain: 'Ingrain' };
const weatherNames = { raindance: 'Rain', sunnyday: 'Harsh sunlight', sandstorm: 'Sandstorm', hail: 'Hail' };
const describeEffect = effect => `${effectNames[effect.id] || effect.name}${effect.duration ? ` (${effect.duration} turns)` : ''}`;
let data, teams = [], selected = 0, currentBattle = null, busy = false;

function element(tag, text, parent) {
	const node = document.createElement(tag);
	if (text !== undefined) node.textContent = text;
	parent?.append(node);
	return node;
}
function showError(error) {
	$('error').hidden = !error;
	$('error').textContent = error?.message || '';
}
async function api(route, body) {
	const response = await fetch(`/api/${route}`, body === undefined ? {} : {
		method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
	});
	const result = await response.json();
	if (!response.ok) throw new Error(result.error || 'Local simulator request failed.');
	return result;
}
function save() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(teams));
		$('save-state').textContent = 'Saved on this computer.';
	} catch {
		$('save-state').textContent = 'Browser storage is unavailable. Teams will last until this tab closes.';
	}
}
function sampleTeam() {
	return { name: 'My team', pokemon: [{
		species: 'Swampert', ability: 'Torrent', item: 'Leftovers', level: 100, nature: 'Hardy',
		moves: ['Surf', 'Earthquake', 'Ice Beam', 'Protect'],
	}] };
}
function selectField(parent, label, options, value, change) {
	const wrapper = element('label', label, parent);
	const select = element('select', undefined, wrapper);
	for (const value of options) {
		const option = element('option', value || 'None', select);
		option.value = value;
	}
	select.value = value;
	select.addEventListener('change', () => { change(select.value); save(); });
	return select;
}
function numberField(parent, label, value, min, max, change) {
	const wrapper = element('label', label, parent);
	const input = element('input', undefined, wrapper);
	input.type = 'number'; input.min = min; input.max = max; input.value = value;
	input.addEventListener('change', () => {
		const number = Math.max(min, Math.min(max, Number(input.value) || min));
		input.value = number; change(number); save();
	});
}
function button(parent, label, action, disabled = false) {
	const node = element('button', label, parent);
	node.disabled = disabled;
	node.addEventListener('click', action);
	return node;
}
function renderBuilder() {
	$('teams').replaceChildren();
	teams.forEach((team, index) => {
		const option = element('option', team.name, $('teams')); option.value = index;
	});
	$('teams').value = selected;
	$('team-name').value = teams[selected].name;
	$('members').replaceChildren();
	teams[selected].pokemon.forEach((pokemon, index) => {
		const species = data.species.find(s => s.name === pokemon.species) || data.species[0];
		const card = element('article', undefined, $('members')); card.className = 'member';
		const heading = element('div', undefined, card); heading.className = 'toolbar';
		element('h3', `${index + 1}. ${pokemon.species}`, heading);
		button(heading, 'Remove', () => { teams[selected].pokemon.splice(index, 1); save(); renderBuilder(); });
		const grid = element('div', undefined, card); grid.className = 'grid';
		selectField(grid, 'Pokémon', data.species.map(s => s.name), pokemon.species, name => {
			const next = data.species.find(s => s.name === name);
			pokemon.species = name; pokemon.ability = next.abilities[0]; pokemon.moves = [];
			renderBuilder();
		});
		selectField(grid, 'Ability', species.abilities, pokemon.ability, value => { pokemon.ability = value; });
		selectField(grid, 'Item', ['', ...data.items], pokemon.item || '', value => { pokemon.item = value; });
		selectField(grid, 'Nature', data.natures, pokemon.nature || 'Hardy', value => { pokemon.nature = value; });
		numberField(grid, 'Level', pokemon.level || 100, 1, 100, value => { pokemon.level = value; });
		for (let i = 0; i < 4; i++) {
			selectField(grid, `Move ${i + 1}`, ['', ...species.moves], pokemon.moves[i] || '', value => { pokemon.moves[i] = value; });
		}
		const details = element('details', undefined, card); element('summary', 'Training and details', details);
		const extra = element('div', undefined, details); extra.className = 'grid';
		selectField(extra, 'Gender', ['', 'M', 'F'], pokemon.gender || '', value => { pokemon.gender = value; });
		numberField(extra, 'Happiness', pokemon.happiness ?? 255, 0, 255, value => { pokemon.happiness = value; });
		selectField(extra, 'Shiny', ['No', 'Yes'], pokemon.shiny ? 'Yes' : 'No', value => { pokemon.shiny = value === 'Yes'; });
		for (const [key, title, limit, fallback] of [['evs', 'EVs (510 total maximum)', 255, 0], ['ivs', 'IVs', 31, 31]]) {
			element('h4', title, details);
			const row = element('div', undefined, details); row.className = 'stats';
			stats.forEach((stat, i) => numberField(row, statNames[i], pokemon[key]?.[stat] ?? fallback, 0, limit, value => {
				pokemon[key] ||= {}; pokemon[key][stat] = value;
			}));
		}
	});
	$('add-member').disabled = teams[selected].pokemon.length >= 6;
	$('battle').disabled = !teams[selected].pokemon.length || busy;
}

function renderPokemon(id, pokemon, trainer) {
	const node = $(id); node.replaceChildren();
	element('h3', trainer, node);
	element('p', pokemon.name, node);
	const stage = element('div', undefined, node); stage.className = 'sprite-stage';
	const sprite = element('img', undefined, stage);
	sprite.className = `pokemon-sprite${pokemon.fainted ? ' fainted' : ''}`;
	sprite.alt = pokemon.name;
	const spriteId = pokemon.sprite || pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
	sprite.src = `/sprites/gen3${id === 'player' ? '-back' : ''}${pokemon.shiny ? '-shiny' : ''}/${spriteId}.png`;
	const health = element('progress', undefined, node); health.max = pokemon.maxhp; health.value = pokemon.hp;
	health.setAttribute('aria-label', `${pokemon.name} health`);
	element('p', `${pokemon.hp} / ${pokemon.maxhp} HP${pokemon.status ? ` · ${statusNames[pokemon.status] || pokemon.status}` : ''}${pokemon.fainted ? ' · Fainted' : ''}`, node);
	const effects = (pokemon.effects || []).filter(e => !['slp', 'brn', 'psn', 'tox', 'par', 'frz'].includes(e.id)).map(describeEffect);
	for (const [stat, stage] of Object.entries(pokemon.boosts || {})) if (stage) effects.push(`${statNames[stats.indexOf(stat)] || stat} ${stage > 0 ? '+' : ''}${stage}`);
	const conditions = currentBattle?.[id === 'player' ? 'playerConditions' : 'opponentConditions'] || [];
	effects.push(...conditions.map(describeEffect));
	if (effects.length) element('p', effects.join(' · '), node).className = 'effects';
}

async function animateSprite(side, frames, duration = 320) {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const sprite = $(side).querySelector('.pokemon-sprite');
	if (sprite) await sprite.animate(frames, { duration, easing: 'ease-in-out' }).finished;
}

// Replay only new protocol events, then show the authoritative engine snapshot.
async function animateTurn(previous, next) {
	const visible = { player: { ...previous.player[0] }, opponent: { ...previous.opponent[0] } };
	for (const [offset, line] of next.log.slice(previous.log.length).entries()) {
		for (const entry of next.dialogue.filter(entry => entry.line === previous.log.length + offset)) {
			element('p', entry.text, $('log'));
			$('log').scrollTop = $('log').scrollHeight;
			$('battle-status').textContent = entry.text.replaceAll('\n', ' ');
		}
		const [, command, actor, value] = line.split('|');
		const side = actor?.startsWith('p1') ? 'player' : actor?.startsWith('p2') ? 'opponent' : null;
		if (!side) continue;
		const pokemon = visible[side];
		if (command === 'move') {
			await animateSprite(side, [{ transform: 'translateX(0)' }, { transform: `translateX(${side === 'player' ? 35 : -35}px)` }, { transform: 'translateX(0)' }]);
		} else if (command === 'switch' || command === 'drag') {
			await animateSprite(side, [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.2)' }], 180);
			pokemon.name = value.split(',')[0];
			pokemon.sprite = pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
			pokemon.shiny = value.split(', ').includes('shiny');
			pokemon.fainted = false; pokemon.status = '';
			const condition = line.split('|')[4].split(' ')[0].split('/').map(Number);
			pokemon.hp = condition[0]; pokemon.maxhp = condition[1] || 100;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI');
			await animateSprite(side, [{ opacity: 0, transform: 'scale(.2)' }, { opacity: 1, transform: 'scale(1)' }]);
		} else if (command === '-formechange' || command === 'detailschange') {
			pokemon.name = value.split(',')[0];
			pokemon.sprite = pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI');
		} else if (command === '-damage' || command === '-heal') {
			const condition = value.split(' ')[0].split('/').map(Number);
			pokemon.hp = condition[0]; pokemon.maxhp = condition[1] || pokemon.maxhp;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI');
			await animateSprite(side, command === '-damage' ? [{ opacity: 1 }, { opacity: .15, transform: 'translateX(8px)' }, { opacity: 1 }] : [{ filter: 'brightness(1)' }, { filter: 'brightness(2) drop-shadow(0 0 12px #78cf9a)' }, { filter: 'brightness(1)' }]);
		} else if (command === '-status' || command === '-curestatus') {
			pokemon.status = command === '-status' ? value : '';
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI');
		} else if (command === 'faint') {
			await animateSprite(side, [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(65px)' }], 450);
			pokemon.fainted = true;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI');
		}
	}
}
function renderBag() {
	const parent = $('bag-controls'); parent.replaceChildren();
	$('bag').hidden = currentBattle.ended || !!currentBattle.request?.forceSwitch;
	if ($('bag').hidden) return;
	const item = selectField(parent, 'Item', currentBattle.bag.filter(i => i.count > 0).map(i => i.name), 'Potion', update);
	for (const option of item.options) {
		const entry = currentBattle.bag.find(i => i.name === option.value);
		option.textContent = `${entry.name} (${entry.reusable ? 'reusable' : entry.count})`;
	}
	const target = selectField(parent, 'Target', currentBattle.team.map((p, i) => `${i + 1}. ${p.name} (${p.hp}/${p.maxhp})`), '', update);
	target.selectedIndex = 0;
	const move = selectField(parent, 'Move to restore', [], '', () => {});
	function update() {
		const selectedItem = currentBattle.bag.find(i => i.name === item.value);
		const pokemon = currentBattle.team[target.selectedIndex];
		move.parentElement.hidden = !selectedItem?.oneMove;
		move.replaceChildren();
		pokemon?.moves.forEach((m, i) => { const option = element('option', `${m.name} (${m.pp}/${m.maxpp} PP)`, move); option.value = i; });
	}
	update();
	button(parent, 'Use item', () => {
		const selectedItem = currentBattle.bag.find(i => i.name === item.value);
		choose('bag', { item: selectedItem.id, target: target.selectedIndex, move: Number(move.value || 0) });
	}, busy);
	for (const select of parent.querySelectorAll('select')) select.disabled = busy;
}
function renderBattle() {
	const battle = currentBattle;
	$('builder').hidden = true; $('arena').hidden = false;
	$('turn').textContent = `Turn ${battle.turn}`;
	renderPokemon('player', battle.player[0], 'Player');
	renderPokemon('opponent', battle.opponent[0], 'Trainer AI');
	$('field-status').textContent = [battle.weather ? `${weatherNames[battle.weather] || battle.weather}${battle.weatherDuration ? ` (${battle.weatherDuration} turns)` : ''}` : '', ...(battle.fieldEffects || []).map(describeEffect)].filter(Boolean).join(' · ');
	$('actions').replaceChildren(); $('switches').replaceChildren();
	$('battle-status').textContent = battle.ended ? (battle.winner ? `${battle.winner} wins!` : 'Tie!') : battle.request?.forceSwitch ? 'Choose your next Pokémon.' : 'Choose a move or switch Pokémon.';
	if (!battle.ended) {
		const active = battle.request?.active?.[0];
		active?.moves.forEach((move, i) => button($('actions'), `${move.move} · ${move.pp}/${move.maxpp} PP`, () => choose(`move ${i + 1}`), busy || move.disabled || !move.pp));
		battle.team.forEach((pokemon, i) => button($('switches'), `${pokemon.name} · ${pokemon.hp}/${pokemon.maxhp}`, () => choose(`switch ${i + 1}`), busy || pokemon.fainted || battle.request?.side?.pokemon[i]?.active || !!active?.trapped));
	}
	$('log').replaceChildren();
	for (const entry of battle.dialogue) element('p', entry.text, $('log'));
	renderBag();
	$('log').scrollTop = $('log').scrollHeight;
	$('rematch').disabled = busy;
	$('back').disabled = busy;
}
async function startBattle() {
	if (busy) return;
	busy = true; showError(null); $('battle').disabled = true;
	try {
		const team = structuredClone(teams[selected].pokemon);
		for (const pokemon of team) pokemon.moves = pokemon.moves.filter(Boolean);
		currentBattle = await api('battle', { team, previous: currentBattle?.id });
		renderBattle();
	} catch (error) { showError(error); }
	finally { busy = false; if (!$('arena').hidden) renderBattle(); else renderBuilder(); }
}
async function choose(choice, details = {}) {
	if (busy) return;
	busy = true; showError(null); renderBattle();
	try {
		const next = await api('choice', { id: currentBattle.id, choice, ...details });
		await animateTurn(currentBattle, next);
		currentBattle = next;
	}
	catch (error) { showError(error); }
	finally { busy = false; renderBattle(); }
}
async function init() {
	try {
		data = await api('data');
		try { teams = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { teams = []; }
		if (!Array.isArray(teams) || !teams.length || teams.some(t => !t || !Array.isArray(t.pokemon))) teams = [sampleTeam()];
		$('teams').addEventListener('change', () => { selected = Number($('teams').value); renderBuilder(); });
		$('team-name').addEventListener('input', () => {
			teams[selected].name = $('team-name').value || 'Untitled team';
			$('teams').options[selected].textContent = teams[selected].name; save();
		});
		$('new-team').addEventListener('click', () => { teams.push({ name: 'New team', pokemon: [] }); selected = teams.length - 1; save(); renderBuilder(); });
		$('delete-team').addEventListener('click', () => {
			if (!confirm('Delete this saved team?')) return;
			teams.splice(selected, 1); if (!teams.length) teams.push({ name: 'New team', pokemon: [] }); selected = 0; save(); renderBuilder();
		});
		$('add-member').addEventListener('click', () => {
			if (teams[selected].pokemon.length >= 6) return;
			teams[selected].pokemon.push({ species: 'Bulbasaur', ability: 'Overgrow', moves: ['Tackle'], nature: 'Hardy', level: 100 });
			save(); renderBuilder();
		});
		$('battle').addEventListener('click', startBattle); $('rematch').addEventListener('click', startBattle);
		$('back').addEventListener('click', () => { $('arena').hidden = true; $('builder').hidden = false; showError(null); renderBuilder(); });
		save(); renderBuilder();
	} catch (error) { showError(error); $('battle').disabled = true; }
}
init();
