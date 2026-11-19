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
const categorySymbol = category => ({ Physical: '\u2739 Physical', Special: '\u25ce Special', Status: '\u25c7 Status' }[category] || category);
function statPanel(parent, title, values) {
 const panel = element('section', undefined, parent);
 element('h4', title, panel);
 const row = element('div', undefined, panel); row.className = 'stats';
 stats.forEach((key, i) => element('div', `${statNames[i]}: ${values[key]}`, row));
}
function builderStats(pokemon, species) {
 const level = pokemon.level || 100, nature = data.natureDetails[pokemon.nature || 'Hardy'] || {};
 return Object.fromEntries(stats.map(key => {
  const value = Math.floor((2 * species.baseStats[key] + (pokemon.ivs?.[key] ?? 31) + Math.floor((pokemon.evs?.[key] ?? 0) / 4)) * level / 100);
  return [key, key === 'hp' ? (species.name === 'Shedinja' ? 1 : value + level + 10) : Math.floor((value + 5) * (nature.plus === key ? 110 : nature.minus === key ? 90 : 100) / 100)];
 }));
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
		selectField(grid, 'Nature', data.natures, pokemon.nature || 'Hardy', value => { pokemon.nature = value; renderBuilder(); });
		numberField(grid, 'Level', pokemon.level || 100, 1, 100, value => { pokemon.level = value; renderBuilder(); });
		for (let i = 0; i < 4; i++) {
			const moveSelect = selectField(grid, `Move ${i + 1}`, ['', ...data.moves], pokemon.moves[i] || '', value => { pokemon.moves[i] = value; });
			for (const option of moveSelect.options) { const move = data.moveDetails[option.value]; if (move) option.textContent = `${option.value} / ${categorySymbol(move.category)} / ${move.pp} base PP`; }
		}
		statPanel(card, 'Base stats', species.baseStats);
		statPanel(card, 'Total stats', builderStats(pokemon, species));
		const details = element('details', undefined, card); element('summary', 'Training and details', details);
		const extra = element('div', undefined, details); extra.className = 'grid';
		selectField(extra, 'Gender', ['', 'M', 'F'], pokemon.gender || '', value => { pokemon.gender = value; });
		numberField(extra, 'Happiness', pokemon.happiness ?? 255, 0, 255, value => { pokemon.happiness = value; });
		selectField(extra, 'Shiny', ['No', 'Yes'], pokemon.shiny ? 'Yes' : 'No', value => { pokemon.shiny = value === 'Yes'; });
		for (const [key, title, limit, fallback] of [['evs', 'EVs (510 total maximum)', 255, 0], ['ivs', 'IVs', 31, 31]]) {
			element('h4', title, details);
			const row = element('div', undefined, details); row.className = 'stats';
			stats.forEach((stat, i) => numberField(row, statNames[i], pokemon[key]?.[stat] ?? fallback, 0, limit, value => {
				pokemon[key] ||= {}; pokemon[key][stat] = value; renderBuilder();
			}));
		}
	});
	renderOpponentBuilder();
	$('add-member').disabled = teams[selected].pokemon.length >= 6;
	$('battle').disabled = !teams[selected].pokemon.length || busy;
}

function renderOpponentBuilder() {
 const parent = $('opponent-members'); parent.replaceChildren();
 const team = teams[selected];
 team.opponent ||= [{ species: 'Swampert', level: 100 }];
 team.opponent.forEach((pokemon, index) => {
  const row = element('div', undefined, parent); row.className = 'toolbar';
  selectField(row, `Opponent ${index + 1}`, data.species.map(s => s.name), pokemon.species, value => { pokemon.species = value; });
  numberField(row, 'Level', pokemon.level, 1, 100, value => { pokemon.level = value; });
  button(row, 'Remove', () => { team.opponent.splice(index, 1); save(); renderBuilder(); }, team.opponent.length === 1);
 });
 button(parent, 'Add opponent', () => { team.opponent.push({ species: 'Bulbasaur', level: 100 }); save(); renderBuilder(); }, team.opponent.length >= 6);
}
function renderTeamIndicators(parent, members) {
 const strip = element('div', undefined, parent); strip.className = 'team-indicators';
 strip.setAttribute('role', 'img');
 strip.setAttribute('aria-label', `${members.filter(p => !p.fainted).length} of ${members.length} Pokemon remaining`);
 for (let i = 0; i < 6; i++) {
  const member = members[i];
  const ball = element('span', undefined, strip);
  ball.className = `team-ball ${!member ? 'empty' : member.fainted ? 'fainted' : member.status ? 'status' : 'healthy'}`;
  ball.title = !member ? 'Empty slot' : member.fainted ? 'Fainted' : member.status ? 'Status condition' : 'Ready';
 }
}

function renderPokemon(id, pokemon, trainer, scene = currentBattle) {
	const node = $(id); node.replaceChildren();
	element('h3', trainer, node);
	renderTeamIndicators(node, id === 'player' ? scene.team : scene.opponentTeam);
	element('p', `${pokemon.name} / Lv. ${pokemon.level}`, node);
	if (id === 'player' && pokemon.xpProgress) {
		const xp = pokemon.xpProgress;
		element('p', xp.needed ? `xp:${xp.current}/${xp.needed}` : 'xp:MAX', node).className = 'xp-indicator';
	}
	if (id === 'player') element('p', `Ability: ${pokemon.ability}`, node);
	const stage = element('div', undefined, node); stage.className = `sprite-stage weather-${scene.weather || 'none'}`;
	const conditions = scene[id === 'player' ? 'playerConditions' : 'opponentConditions'] || [];
	renderStageEffects(stage, conditions, scene.weather);
	const sprite = element('img', undefined, stage);
	sprite.className = `pokemon-sprite${pokemon.fainted ? ' fainted' : ''}`;
	const substitute = pokemon.effects?.some(e => e.id === 'substitute') && !pokemon.fainted;
	sprite.alt = substitute ? `${pokemon.name}'s Substitute` : pokemon.name;
	if (substitute) sprite.classList.add('substitute-sprite');
	const spriteId = pokemon.sprite || pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
	sprite.src = `/sprites/gen3${id === 'player' ? '-back' : ''}${pokemon.shiny ? '-shiny' : ''}/${spriteId}.png`;
	if (substitute) sprite.src = `/effects/substitute${id === 'player' ? '-back' : ''}.png`;
	const health = element('progress', undefined, node); health.max = pokemon.maxhp; health.value = pokemon.hp;
	health.setAttribute('aria-label', `${pokemon.name} health`);
	element('p', `${pokemon.hp} / ${pokemon.maxhp} HP${pokemon.status ? ` · ${statusNames[pokemon.status] || pokemon.status}` : ''}${pokemon.fainted ? ' · Fainted' : ''}`, node);
	const effects = (pokemon.effects || []).filter(e => !['slp', 'brn', 'psn', 'tox', 'par', 'frz'].includes(e.id)).map(describeEffect);
	for (const [stat, stage] of Object.entries(pokemon.boosts || {})) if (stage) effects.push(`${statNames[stats.indexOf(stat)] || stat} ${stage > 0 ? '+' : ''}${stage}`);
	effects.push(...conditions.map(describeEffect));
	if (pokemon.stats) {
		statPanel(node, 'Total stats', pokemon.stats);
	}
	if (effects.length) element('p', effects.join(' · '), node).className = 'effects';
}

function renderStageEffects(stage, conditions, weather) {
 if (weather) {
  const overlay = element('div', undefined, stage); overlay.className = `weather-overlay ${weather}`;
  overlay.setAttribute('aria-label', weatherNames[weather] || weather);
 }
 for (const condition of conditions) {
  if (condition.id === 'spikes') {
   const spikes = element('div', undefined, stage); spikes.className = 'hazard-spikes';
   spikes.setAttribute('role', 'img'); spikes.setAttribute('aria-label', `Spikes: ${condition.layers || 1} layer(s)`);
   for (let i = 0; i < (condition.layers || 1) * 3; i++) {
    const spike = element('img', undefined, spikes); spike.src = '/effects/spikes.png'; spike.alt = '';
   }
  } else if (['reflect', 'lightscreen', 'safeguard', 'mist'].includes(condition.id)) {
   const screen = element('div', undefined, stage); screen.className = `side-screen ${condition.id}`;
   screen.setAttribute('aria-label', condition.name);
  }
 }
}

async function animateSprite(side, frames, duration = 320) {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const sprite = $(side).querySelector('.pokemon-sprite');
	if (sprite) await sprite.animate(frames, { duration, easing: 'ease-in-out' }).finished;
}

// Replay only new protocol events, then show the authoritative engine snapshot.
async function animateTurn(previous, next) {
	const scene = structuredClone(previous);
	const visible = { player: scene.player[0], opponent: scene.opponent[0] };
	for (const [offset, line] of next.log.slice(previous.log.length).entries()) {
		for (const entry of next.dialogue.filter(entry => entry.line === previous.log.length + offset)) {
			element('p', entry.text, $('log'));
			$('log').scrollTop = $('log').scrollHeight;
			$('battle-status').textContent = entry.text.replaceAll('\n', ' ');
		}
		const [, command, actor, value] = line.split('|');
		const side = actor?.startsWith('p1') ? 'player' : actor?.startsWith('p2') ? 'opponent' : null;
        if (command === '-weather') {
         scene.weather = {RainDance: 'raindance', SunnyDay: 'sunnyday', Sandstorm: 'sandstorm', Hail: 'hail', none: ''}[actor] || '';
         for (const id of ['player', 'opponent']) renderPokemon(id, visible[id], id === 'player' ? 'Player' : 'Trainer AI', scene);
        }
        if (side && (command === '-sidestart' || command === '-sideend')) {
         const key = side === 'player' ? 'playerConditions' : 'opponentConditions';
         const id = value.replace(/^move: /, '').toLowerCase().replace(/[^a-z0-9]/g, '');
         const old = scene[key].find(e => e.id === id);
         scene[key] = scene[key].filter(e => e.id !== id);
         if (command === '-sidestart') scene[key].push({ id, name: value.replace(/^move: /, ''), layers: (old?.layers || 0) + 1 });
         renderPokemon(side, visible[side], side === 'player' ? 'Player' : 'Trainer AI', scene);
        }
		if (!side) continue;
		const pokemon = visible[side];
		if ((command === '-start' || command === '-end') && value === 'Substitute') {
			pokemon.effects = (pokemon.effects || []).filter(e => e.id !== 'substitute');
			if (command === '-start') pokemon.effects.push({ id: 'substitute', name: 'Substitute' });
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
		} else if (command === 'move') {
			await animateSprite(side, [{ transform: 'translateX(0)' }, { transform: `translateX(${side === 'player' ? 35 : -35}px)` }, { transform: 'translateX(0)' }]);
		} else if (command === 'switch' || command === 'drag') {
			await animateSprite(side, [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.2)' }], 180);
			pokemon.name = value.split(',')[0];
			pokemon.sprite = pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
			pokemon.shiny = value.split(', ').includes('shiny');
			pokemon.level = Number(/(?:^|, )L(\d+)/.exec(value)?.[1] || 100);
			if (side === 'player') { const member = next.team.find(p => p.name === pokemon.name); if (member) Object.assign(pokemon, member); }
			pokemon.fainted = false; pokemon.status = ''; pokemon.effects = [];
			if (side === 'opponent') pokemon.stats = next.opponent[0].stats;
			const condition = line.split('|')[4].split(' ')[0].split('/').map(Number);
			pokemon.hp = condition[0]; pokemon.maxhp = condition[1] || 100;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
			await animateSprite(side, [{ opacity: 0, transform: 'scale(.2)' }, { opacity: 1, transform: 'scale(1)' }]);
		} else if (command === '-formechange' || command === 'detailschange') {
			pokemon.name = value.split(',')[0];
			pokemon.sprite = pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '');
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
		} else if (command === '-damage' || command === '-heal') {
			const condition = value.split(' ')[0].split('/').map(Number);
			pokemon.hp = condition[0]; pokemon.maxhp = condition[1] || pokemon.maxhp;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
			await animateSprite(side, command === '-damage' ? [{ opacity: 1 }, { opacity: .15, transform: 'translateX(8px)' }, { opacity: 1 }] : [{ filter: 'brightness(1)' }, { filter: 'brightness(2) drop-shadow(0 0 12px #78cf9a)' }, { filter: 'brightness(1)' }]);
		} else if (command === '-status' || command === '-curestatus') {
			pokemon.status = command === '-status' ? value : '';
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
		} else if (command === 'faint') {
			await animateSprite(side, [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(65px)' }], 450);
			pokemon.fainted = true;
			renderPokemon(side, pokemon, side === 'player' ? 'Player' : 'Trainer AI', scene);
		}
	}
}
function renderBag() {
	const parent = $('bag-controls'); parent.replaceChildren();
	$('bag').hidden = currentBattle.ended || !!currentBattle.request?.forceSwitch || !!currentBattle.request?.active?.[0]?.moves.some(m => m.pp === undefined);
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
		active?.moves.forEach((move, i) => {
			const struggle = move.id === 'struggle';
			const forced = move.pp === undefined;
			const category = struggle ? 'Physical' : battle.player[0].moves.find(m => m.name === move.move)?.category || data.moveDetails[move.move]?.category;
			const accuracy = battle.player[0].moves.find(m => m.name === move.move)?.accuracy ?? data.moveDetails[move.move]?.accuracy;
			const accuracyText = accuracy === true ? 'Always hits' : typeof accuracy === 'number' ? `Acc. ${accuracy}%` : '';
			const moveButton = button($('actions'), `${forced ? '' : categorySymbol(category) + ' '}${move.move}${accuracyText ? ' / ' + accuracyText : ''} / ${forced ? 'Continue turn' : struggle ? 'No PP required' : `${move.pp}/${move.maxpp} PP`}`, () => choose(`move ${i + 1}`), busy || move.disabled || (!forced && !struggle && !move.pp));
			const detail = battle.player[0].moves.find(m => m.id === move.id);
            if (detail?.power != null) {
             const power = element('span', `Power: ${detail.power}`, moveButton);
             power.className = detail.variable ? 'move-power variable-power' : 'move-power';
            }
            const multiplier = detail?.effectiveness;
            const symbol = {2:'^',4:'^^',0.5:'\u2304',0.25:'\u2304\u2304',0:'X'}[multiplier];
            if (symbol) {
             const badge = element('span', symbol, moveButton);
             badge.className = `effectiveness ${multiplier === 0 ? 'immune' : multiplier > 1 ? 'effective' : 'resisted'}`;
             badge.setAttribute('aria-label', `${multiplier}\u00d7 effectiveness`);
             badge.title = `${multiplier}\u00d7 effectiveness against the current opponent`;
            }
			moveButton.title = 'Base accuracy. Weather, abilities, accuracy and evasion can change the chance to hit.';
		});
		battle.team.forEach((pokemon, i) => button($('switches'), `${pokemon.name} · ${pokemon.hp}/${pokemon.maxhp}`, () => choose(`switch ${i + 1}`), busy || pokemon.fainted || battle.request?.side?.pokemon[i]?.active || !!active?.trapped));
	}
	$('log').replaceChildren();
	for (const entry of battle.dialogue) element('p', entry.text, $('log'));
	const explanations = $('explanations'); explanations.replaceChildren();
    const descriptions = data.descriptions;
    for (let i = 0; i < 5; i++) {
     const ability = i === 4;
     const name = ability ? battle.player[0].ability : battle.player[0].moves[i]?.name;
     const box = element('details', undefined, explanations);
     element('summary', name || 'Empty move slot', box);
     const key = (!ability && battle.player[0].moves[i]?.id) || (name || '').toLowerCase().replace(/[^a-z0-9]/g, '').replace(/^hiddenpower.+/, 'hiddenpower');
     element('p', name ? descriptions[ability ? 'abilities' : 'moves'][key] || '' : 'No move.', box);
    }
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
		currentBattle = await api('battle', { team, opponent: teams[selected].opponent, previous: currentBattle?.id });
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
