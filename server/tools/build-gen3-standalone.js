#!/usr/bin/env node
'use strict';

/**
 * Flatten Pokemon Showdown's historical Gen 3 data inheritance into the base
 * data directory, then remove mods and random-team data newer than Gen 3.
 *
 * This intentionally works on TypeScript source instead of runtime JSON so
 * event handlers (functions) on moves, items, abilities, and conditions are
 * preserved.
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const MODS = path.join(DATA, 'mods');
const LAYERS = ['base', 'gen8', 'gen7', 'gen6', 'gen5', 'gen4', 'gen3'];
const TABLES = {
	Abilities: 'abilities.ts',
	Conditions: 'conditions.ts',
	FormatsData: 'formats-data.ts',
	Items: 'items.ts',
	Learnsets: 'learnsets.ts',
	Moves: 'moves.ts',
	Pokedex: 'pokedex.ts',
	TypeChart: 'typechart.ts',
};
const KEPT_MODS = new Set([
	'gen1', 'gen1jpn', 'gen1stadium',
	'gen2', 'gen2stadium2',
	'gen3', 'gen3colosseum', 'gen3frlg', 'gen3rs',
]);
const GEN3_TYPES = new Set([
	'bug', 'dark', 'dragon', 'electric', 'fighting', 'fire', 'flying', 'ghost',
	'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water',
]);
const GEN3_EXTRA_FORMES = new Set([
	'castformsunny', 'castformrainy', 'castformsnowy',
	'deoxysattack', 'deoxysdefense', 'deoxysspeed',
]);

function fail(message) {
	throw new Error(message);
}

function readTable(file, exportName) {
	if (!fs.existsSync(file)) return null;
	const text = fs.readFileSync(file, 'utf8');
	const declarationStart = text.indexOf(`export const ${exportName}`);
	if (declarationStart < 0) fail(`Could not find export ${exportName} in ${file}`);
	const objectStart = text.indexOf('{', text.indexOf('=', declarationStart));
	const objectEnd = matchingBrace(text, objectStart);
	if (objectStart < 0 || objectEnd < 0) fail(`Could not find object export ${exportName} in ${file}`);
	const entries = new Map();
	for (const property of splitObject(text.slice(objectStart, objectEnd + 1))) {
		if (property.value === null) continue;
		entries.set(property.name, expressionValue(property.value));
	}
	return {
		prefix: text.slice(0, objectStart),
		suffix: text.slice(objectEnd + 1),
		entries,
	};
}

function matchingBrace(text, start) {
	let depth = 0;
	for (let i = start; i < text.length; i++) {
		const skipped = skipLiteralOrComment(text, i);
		if (skipped !== i) {
			i = skipped;
			continue;
		}
		if (text[i] === '{') depth++;
		if (text[i] === '}' && --depth === 0) return i;
	}
	return -1;
}

function skipLiteralOrComment(text, index) {
	const quote = text[index];
	if (quote === '/' && text[index + 1] === '/') {
		const end = text.indexOf('\n', index + 2);
		return end < 0 ? text.length - 1 : end;
	}
	if (quote === '/' && text[index + 1] === '*') {
		const end = text.indexOf('*/', index + 2);
		return end < 0 ? text.length - 1 : end + 1;
	}
	if (!['\'', '"', '`'].includes(quote)) return index;
	for (let i = index + 1; i < text.length; i++) {
		if (text[i] === '\\') {
			i++;
			continue;
		}
		if (text[i] === quote) return i;
	}
	return text.length - 1;
}

function splitObject(raw) {
	const properties = [];
	let start = 1;
	let braces = 0;
	let brackets = 0;
	let parens = 0;
	for (let i = 1; i < raw.length - 1; i++) {
		const skipped = skipLiteralOrComment(raw, i);
		if (skipped !== i) {
			i = skipped;
			continue;
		}
		switch (raw[i]) {
		case '{': braces++; break;
		case '}': braces--; break;
		case '[': brackets++; break;
		case ']': brackets--; break;
		case '(': parens++; break;
		case ')': parens--; break;
		case ',':
			if (!braces && !brackets && !parens) {
				addProperty(properties, raw.slice(start, i));
				start = i + 1;
			}
		}
	}
	addProperty(properties, raw.slice(start, -1));
	return properties;
}

function addProperty(properties, segment) {
	segment = segment.trim();
	while (segment.startsWith('//') || segment.startsWith('/*')) {
		if (segment.startsWith('//')) {
			const end = segment.indexOf('\n');
			if (end < 0) return;
			segment = segment.slice(end + 1).trimStart();
		} else {
			const end = segment.indexOf('*/', 2);
			if (end < 0) return;
			segment = segment.slice(end + 2).trimStart();
		}
	}
	if (!segment) return;
	const match = /^(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$]*)|(\d+))/.exec(segment);
	if (!match) fail(`Unsupported object property: ${segment.slice(0, 80)}`);
	const name = match[1] || match[2] || match[3] || match[4];
	let colon = -1;
	let braces = 0;
	let brackets = 0;
	let parens = 0;
	for (let i = match[0].length; i < segment.length; i++) {
		const skipped = skipLiteralOrComment(segment, i);
		if (skipped !== i) {
			i = skipped;
			continue;
		}
		if (segment[i] === '{') braces++;
		if (segment[i] === '}') braces--;
		if (segment[i] === '[') brackets++;
		if (segment[i] === ']') brackets--;
		if (segment[i] === '(') parens++;
		if (segment[i] === ')') parens--;
		if (segment[i] === ':' && !braces && !brackets && !parens) {
			colon = i;
			break;
		}
	}
	properties.push({ name, raw: segment, value: colon < 0 ? null : segment.slice(colon + 1).trim() });
}

function expressionValue(raw) {
	raw = raw.trim();
	if (raw === 'null') return { kind: 'null', raw };
	if (!raw.startsWith('{') || matchingBrace(raw, 0) !== raw.length - 1) return { kind: 'raw', raw };
	const properties = new Map();
	for (const property of splitObject(raw)) {
		properties.set(property.name, {
			name: property.name,
			raw: property.raw,
			value: property.value === null ? null : expressionValue(property.value),
		});
	}
	return { kind: 'object', properties };
}

function isTrue(value) {
	return value?.kind === 'raw' && value.raw === 'true';
}

function mergeValue(parent, child) {
	if (!child || child.kind === 'null') return child;
	if (child.kind !== 'object') return child;
	const inherit = child.properties.get('inherit');
	if (!isTrue(inherit?.value)) return child;
	if (!parent || parent.kind !== 'object') fail('An inherited entry has no object parent');
	const properties = new Map(parent.properties);
	for (const [name, property] of child.properties) {
		if (name === 'inherit') continue;
		if (name === 'condition' && property.value?.kind === 'object' &&
			isTrue(property.value.properties.get('inherit')?.value)) {
			const old = properties.get(name);
			const merged = mergeValue(old?.value, property.value);
			properties.set(name, { name, raw: null, value: merged });
		} else {
			properties.set(name, property);
		}
	}
	return { kind: 'object', properties };
}

function renderValue(value, indent = 1) {
	if (!value) return 'null';
	if (value.kind !== 'object') return value.raw;
	const tab = '\t'.repeat(indent);
	const childTab = '\t'.repeat(indent + 1);
	const lines = [];
	for (const property of value.properties.values()) {
		let raw = property.raw;
		if (raw === null) raw = `${property.name}: ${renderValue(property.value, indent + 1)}`;
		raw = raw.split('\n').map((line, index) => index ? childTab + line : line).join('\n');
		lines.push(`${childTab}${raw}`);
	}
	return `{\n${lines.join(',\n')}\n${tab}}`;
}

function scalar(value, name) {
	if (value?.kind !== 'object') return undefined;
	const field = value.properties.get(name)?.value;
	if (!field || field.kind !== 'raw') return undefined;
	if (/^-?\d+$/.test(field.raw)) return Number(field.raw);
	if (/^['\"].*['\"]$/.test(field.raw)) return field.raw.slice(1, -1);
	return undefined;
}

function keepEntry(table, id, value) {
	if (value?.kind !== 'object') return false;
	const num = scalar(value, 'num');
	const gen = scalar(value, 'gen');
	switch (table) {
	case 'Abilities': return Number.isInteger(num) && num >= 1 && num <= 76;
	case 'Moves': return Number.isInteger(num) && num >= 1 && num <= 354;
	case 'Items': return Number.isInteger(gen) && gen <= 3;
	case 'Pokedex': {
		if (!Number.isInteger(num) || num < 1 || num > 386 || (gen && gen > 3)) return false;
		return scalar(value, 'baseSpecies') === undefined || GEN3_EXTRA_FORMES.has(id);
	}
	case 'TypeChart': return GEN3_TYPES.has(id);
	default: return true;
	}
}

function toID(value) {
	return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function filterNamedObject(value, allowed) {
	if (value?.kind !== 'object') return value;
	const properties = new Map();
	for (const [name, property] of value.properties) {
		const raw = property.value?.kind === 'raw' ? property.value.raw : '';
		const match = /^['"]([^'"]+)['"]$/.exec(raw);
		if (name !== 'H' && name !== 'S' && (!match || allowed.has(toID(match[1])))) properties.set(name, property);
	}
	return { kind: 'object', properties };
}

function sanitizeMoves(result) {
	for (const value of result.values()) {
		if (value.kind !== 'object') continue;
		for (const field of ['zMove', 'maxMove', 'isZ', 'isMax']) value.properties.delete(field);
	}
}

function sanitizeItems(result) {
	for (const value of result.values()) {
		if (value.kind !== 'object') continue;
		for (const field of [
			'fling', 'naturalGift', 'megaStone', 'megaEvolves', 'zMove', 'zMoveType',
			'onAnyAfterMega', 'onAfterMega', 'onPrimal',
		]) value.properties.delete(field);
	}
}

function sanitizeLearnsets(result) {
	const moveIDs = new Set(flattened.get('Moves').keys());
	for (const value of result.values()) {
		if (value.kind !== 'object') continue;
		const learnsetProperty = value.properties.get('learnset');
		if (learnsetProperty?.value?.kind !== 'object') continue;
		const kept = new Map();
		for (const [moveid, property] of learnsetProperty.value.properties) {
			if (!moveIDs.has(moveid) || property.value?.kind !== 'raw') continue;
			const sources = [...property.value.raw.matchAll(/['"]([123][^'"]*)['"]/g)].map(match => match[1]);
			if (!sources.length) continue;
			const rawValue = `[${sources.map(source => JSON.stringify(source)).join(', ')}]`;
			kept.set(moveid, {
				name: moveid,
				raw: `${JSON.stringify(moveid)}: ${rawValue}`,
				value: { kind: 'raw', raw: rawValue },
			});
		}
		learnsetProperty.value = { kind: 'object', properties: kept };
		learnsetProperty.raw = null;
		learnsetProperty.name = 'learnset';
		for (const laterField of ['eventData', 'encounters']) value.properties.delete(laterField);
	}
}

function filterStringArray(property, allowed) {
	if (property?.value?.kind !== 'raw') return property;
	const names = [...property.value.raw.matchAll(/['"]([^'"]+)['"]/g)].map(match => match[1]);
	if (!names.length) return property;
	const kept = names.filter(name => allowed.has(toID(name)));
	if (!kept.length) return null;
	const rawValue = `[${kept.map(name => JSON.stringify(name)).join(', ')}]`;
	return { raw: `${property.raw.slice(0, property.raw.indexOf(':') + 1)} ${rawValue}`, value: { kind: 'raw', raw: rawValue } };
}

function sanitizePokedex(result) {
	const abilityIDs = new Set(flattened.get('Abilities').keys());
	const itemIDs = new Set(flattened.get('Items').keys());
	const speciesIDs = new Set(result.keys());
	for (const value of result.values()) {
		if (value.kind !== 'object') continue;
		for (const obsolete of ['canGigantamax', 'gmaxUnreleased', 'maleOnlyHidden']) {
			value.properties.delete(obsolete);
		}
		const abilities = value.properties.get('abilities');
		if (abilities) {
			const filtered = filterNamedObject(abilities.value, abilityIDs);
			value.properties.set('abilities', { name: 'abilities', raw: null, value: filtered });
		}
		for (const field of ['evos', 'otherFormes', 'formeOrder', 'cosmeticFormes']) {
			const property = filterStringArray(value.properties.get(field), speciesIDs);
			if (property) value.properties.set(field, property);
			else value.properties.delete(field);
		}
		const requiredItem = scalar(value, 'requiredItem');
		if (requiredItem && !itemIDs.has(toID(requiredItem))) value.properties.delete('requiredItem');
		const requiredItems = filterStringArray(value.properties.get('requiredItems'), itemIDs);
		if (requiredItems) value.properties.set('requiredItems', requiredItems);
		else value.properties.delete('requiredItems');
		const changesFrom = scalar(value, 'changesFrom');
		if (changesFrom && !speciesIDs.has(toID(changesFrom))) value.properties.delete('changesFrom');
	}
}

function flattenTable(exportName, filename) {
	let declaration;
	let result = new Map();
	for (const layer of LAYERS) {
		const file = layer === 'base' ? path.join(DATA, filename) : path.join(MODS, layer, filename);
		const table = readTable(file, exportName);
		if (!table) continue;
		if (!declaration) declaration = table;
		for (const [id, child] of table.entries) {
			if (child.kind === 'null') {
				result.delete(id);
			} else {
				result.set(id, mergeValue(result.get(id), child));
			}
		}
	}
	if (!declaration) fail(`No source found for ${exportName}`);
	if (exportName === 'Items') {
		declaration.prefix = declaration.prefix.replace(/(?:Modded)?ItemDataTable/, 'ModdedItemDataTable');
	}

	if (exportName === 'Learnsets' || exportName === 'FormatsData') {
		const species = flattened.get('Pokedex');
		result = new Map([...result].filter(([id]) => species.has(id)));
	} else {
		result = new Map([...result].filter(([id, value]) => keepEntry(exportName, id, value)));
	}
	if (exportName === 'Pokedex') sanitizePokedex(result);
	if (exportName === 'Moves') sanitizeMoves(result);
	if (exportName === 'Items') sanitizeItems(result);
	if (exportName === 'Learnsets') sanitizeLearnsets(result);
	flattened.set(exportName, result);

	const body = [...result].map(([id, value]) => `\t${JSON.stringify(id)}: ${renderValue(value)},`).join('\n');
	const source = `${declaration.prefix}{\n${body}\n}${declaration.suffix}`;
	fs.writeFileSync(path.join(DATA, filename), source.split('\n').map(line => line.trimEnd()).join('\n'));
	console.log(`${exportName}: ${result.size}`);
}

function removeLaterContent() {
	for (const entry of fs.readdirSync(MODS, { withFileTypes: true })) {
		if (entry.isDirectory() && !KEPT_MODS.has(entry.name)) {
			fs.rmSync(path.join(MODS, entry.name), { recursive: true, force: true });
		}
	}
	const randomRoot = path.join(DATA, 'random-battles');
	fs.rmSync(randomRoot, { recursive: true, force: true });
	fs.rmSync(path.join(ROOT, 'server', 'chat-plugins', 'randombattles'), { recursive: true, force: true });
	for (const filename of Object.values(TABLES)) {
		if (filename === 'rulesets.ts') continue;
		const redundant = path.join(MODS, 'gen3', filename);
		if (fs.existsSync(redundant)) fs.rmSync(redundant);
	}
}

function detachGen3() {
	const scripts = path.join(MODS, 'gen3', 'scripts.ts');
	const text = fs.readFileSync(scripts, 'utf8');
	fs.writeFileSync(scripts, text.replace("\tinherit: 'gen4',\n", ''));
	fs.writeFileSync(path.join(DATA, 'scripts.ts'), "export const Scripts: BattleScriptsData = {\n\tgen: 3,\n};\n");
}

function writeFilteredTextTable(filename, exportName, dataName) {
	const file = path.join(DATA, 'text', filename);
	const table = readTable(file, exportName);
	if (!table) return;
	const allowed = flattened.get(dataName);
	const entries = new Map([...table.entries].filter(([id]) => allowed.has(id)));
	const body = [...entries].map(([id, value]) => `\t${JSON.stringify(id)}: ${renderValue(value)},`).join('\n');
	const source = `${table.prefix}{\n${body}\n}${table.suffix}`;
	fs.writeFileSync(file, source.split('\n').map(line => line.trimEnd()).join('\n'));
}

function writeStandaloneSupportData() {
	fs.writeFileSync(path.join(DATA, 'aliases.ts'), [
		"export const Aliases: { [alias: string]: string } = {};",
		"export const CompoundWordNames: string[] = [];",
		'',
	].join('\n'));
	fs.writeFileSync(path.join(DATA, 'pokemongo.ts'), 'export const PokemonGoData = {};\n');
	fs.writeFileSync(path.join(DATA, 'tags.ts'), [
		'export interface TagData {',
		'\tname: string;',
		'\tspeciesFilter?: (species: Species) => boolean;',
		'\tmoveFilter?: (move: Move) => boolean;',
		'\tgenericFilter?: (thing: Species | Move | Item | Ability) => boolean;',
		'\tspeciesNumCol?: (species: Species) => number;',
		'\tmoveNumCol?: (move: Move) => number;',
		'\tgenericNumCol?: (thing: Species | Move | Item | Ability) => number;',
		'}',
		'',
		'export const Tags: { [id: IDEntry]: TagData } = {',
		'\tnonexistent: {',
		"\t\tname: 'Nonexistent',",
		"\t\tgenericFilter: thing => !!thing.isNonstandard && thing.isNonstandard !== 'Unobtainable',",
		'\t},',
		'};',
		'',
	].join('\n'));
	fs.writeFileSync(path.join(DATA, 'rulesets.ts'), [
		"export const Rulesets: import('../sim/dex-formats').FormatDataTable = {",
		'\tobtainable: {',
		"\t\teffectType: 'ValidatorRule',",
		"\t\tname: 'Obtainable',",
		"\t\tdesc: 'Makes sure the team is legal in Generation III',",
		"\t\truleset: ['Obtainable Moves', 'Obtainable Abilities', 'Obtainable Formes', 'EV Limit = Auto', 'Obtainable Misc'],",
		'\t},',
		"\tobtainablemoves: { effectType: 'ValidatorRule', name: 'Obtainable Moves' },",
		"\tobtainableabilities: { effectType: 'ValidatorRule', name: 'Obtainable Abilities' },",
		"\tobtainableformes: { effectType: 'ValidatorRule', name: 'Obtainable Formes' },",
		"\tobtainablemisc: { effectType: 'ValidatorRule', name: 'Obtainable Misc' },",
		'\tevlimit: {',
		"\t\teffectType: 'ValidatorRule',",
		"\t\tname: 'EV Limit',",
		"\t\tdesc: 'Maximum total EVs on each Pokemon',",
		"\t\thasValue: 'integer',",
		'\t},',
		'};',
		'',
	].join('\n'));

	const textRoot = path.join(DATA, 'text');
	for (const entry of fs.readdirSync(textRoot, { withFileTypes: true })) {
		if (entry.isDirectory()) fs.rmSync(path.join(textRoot, entry.name), { recursive: true, force: true });
	}
	for (const filename of ['names.ts', 'tags.ts']) {
		fs.rmSync(path.join(textRoot, filename), { force: true });
	}
	writeFilteredTextTable('pokedex.ts', 'PokedexText', 'Pokedex');
	writeFilteredTextTable('moves.ts', 'MovesText', 'Moves');
	writeFilteredTextTable('items.ts', 'ItemsText', 'Items');
	writeFilteredTextTable('abilities.ts', 'AbilitiesText', 'Abilities');
}

const flattened = new Map();
flattenTable('Abilities', TABLES.Abilities);
flattenTable('Items', TABLES.Items);
flattenTable('Pokedex', TABLES.Pokedex);
flattenTable('Moves', TABLES.Moves);
flattenTable('Conditions', TABLES.Conditions);
flattenTable('TypeChart', TABLES.TypeChart);
flattenTable('FormatsData', TABLES.FormatsData);
flattenTable('Learnsets', TABLES.Learnsets);
detachGen3();
removeLaterContent();
writeStandaloneSupportData();

console.log('Gen 3 standalone data generated.');
