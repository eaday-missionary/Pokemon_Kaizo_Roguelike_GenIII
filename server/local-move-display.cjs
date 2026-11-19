'use strict';
// Preview without executing callbacks, which can mutate multi-turn state.
function moveDisplay(b, p, t, id) {
 const m = b.dex.moves.get(id), v = p.volatiles;
 let power = m.basePower, type = m.type, variable = !!m.basePowerCallback;
 switch (m.id) {
 case 'hiddenpower': power = p.hpPower; type = p.hpType; break;
 case 'return': power = Math.max(1, Math.floor(p.happiness * 10 / 25)); break;
 case 'frustration': power = Math.max(1, Math.floor((255 - p.happiness) * 10 / 25)); break;
 case 'eruption': case 'waterspout': power = Math.max(1, Math.floor(150 * p.hp / p.maxhp)); break;
 case 'flail': case 'reversal': {
  const r = Math.max(1, Math.floor(p.hp * 48 / p.maxhp));
  power = r < 2 ? 200 : r < 5 ? 150 : r < 10 ? 100 : r < 17 ? 80 : r < 33 ? 40 : 20; break;
 }
 case 'lowkick': {
  const w = t.getWeight(); power = w >= 2000 ? 120 : w >= 1000 ? 100 : w >= 500 ? 80 : w >= 250 ? 60 : w >= 100 ? 40 : 20; break;
 }
 case 'spitup': power = (v.stockpile?.layers || 0) * 100; break;
 case 'furycutter': power *= Math.min(16, (v.furycutter?.multiplier || 0.5) * 2); break;
 case 'rollout': case 'iceball': power *= 2 ** (v[m.id]?.contactHitCount || 0) * (v.defensecurl ? 2 : 1); break;
 case 'triplekick': power = '10 / 20 / 30'; break;
 case 'magnitude': power = '10–150'; variable = true; break;
 case 'present': power = '40 / 80 / 120 or heal'; variable = true; break;
 case 'facade': if (p.status && !['slp', 'frz'].includes(p.status)) power *= 2; variable = true; break;
 case 'weatherball': {
  const weather = b.field.effectiveWeather();
  if (weather) { power *= 2; type = {sunnyday:'Fire', raindance:'Water', sandstorm:'Rock', hail:'Ice'}[weather] || type; }
  variable = true; break;
 }
 }
 if (m.id === 'smellingsalts') { variable = true; if (t.status === 'par') power *= 2; }
 if (['stomp', 'extrasensory', 'astonish', 'needlearm'].includes(m.id)) { variable = true; if (t.volatiles.minimize) power *= 2; }
 if (['gust', 'twister'].includes(m.id)) { variable = true; if (t.volatiles.fly || t.volatiles.bounce) power *= 2; }
 if (m.id === 'surf') { variable = true; if (t.volatiles.dive) power *= 2; }
 if (['earthquake', 'magnitude'].includes(m.id)) { variable = true; if (t.volatiles.dig && typeof power === 'number') power *= 2; }
 if (m.id === 'solarbeam') { variable = true; if (['raindance', 'sandstorm', 'hail'].includes(b.field.effectiveWeather())) power /= 2; }
 if (['pursuit', 'revenge'].includes(m.id)) {
  variable = true;
  if (m.id === 'pursuit' ? t.beingCalledBack || t.switchFlag : p.attackedBy.some(a => a.source === t && a.damage > 0 && a.thisTurn)) power *= 2;
 }
 let effectiveness = null;
 if (m.category !== 'Status' && !['self', 'allySide', 'allyTeam'].includes(m.target)) {
  effectiveness = t.runImmunity(type, false) ? 2 ** b.dex.getEffectiveness(type, t) : 0;
  if ((type === 'Ground' && t.hasAbility('levitate')) || (type === 'Fire' && t.hasAbility('flashfire')) || (type === 'Water' && t.hasAbility('waterabsorb')) || (type === 'Electric' && t.hasAbility('voltabsorb')) || (t.hasAbility('wonderguard') && effectiveness <= 1 && !m.damage && !m.ohko)) effectiveness = 0;
 }
 if (m.damageCallback) variable = true;
 return { power: m.category === 'Status' ? null : m.ohko ? 'OHKO' : m.damage === 'level' ? `Damage ${p.level}` : m.damage ? (typeof m.damage === 'number' ? `Damage ${m.damage}` : 'Variable damage') : m.damageCallback ? 'Variable damage' : power, variable, effectiveness };
}
module.exports = { moveDisplay };
