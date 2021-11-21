# Brave Frontier Wiki Unofficial

Brave Frontier Wiki Unofficial for Omniunits and Dual Brave Burst (DBB)s. The data comes from The data comes from [Brave Frontier Global Fandom website](https://bravefrontierglobal.fandom.com/wiki/Brave_Frontier_Wiki).

## Specifications

- [x] Get list of omni units
- [x] Filter omni units based on name, element and **keywords**.
- [x] Display detail of omni unit (Leader Skill, Extra Skill, Brave Burst, Super Brave Burst, Ultimate Brave Burst, Enhancements, SP Recommendation).
- [x] Share detail of omni unit with Web Share API.
- [x] Get list of Dual Brave Burst (DBB) of omni units.
- [x] Filter DBBs based on name, elemental synergy and **keywords**.

## Keywords

Keywords mean special abilities that belongs to omni unit. Those get from LS, ES, BB, SBB, UBB and Enhancements. So far list of keywords that have been collected are:

- "extra action", 
- "evasion", 
- "activates BB/SBB/UBB twice",
- "DoT mitigation", 
- "negate all status ailments",
- "negates all status ailments",
- "negates all status ailments for all allies",
- "Stealth", 
- "normal attacks may hit all foes",
- "raises normal hit amount", 
- "status ailment removal",
- "def ignoring effect",
- "reduces BB gauge required",
- "reduction to BB activation cost",
- "fills OD gauge",
- "boosts OD gauge fill rate",
- "status ailments infliction",
- "resistance against KO attack",
- "resistance against 1 KO attack",
- "resistance against 2 KO attacks"
- "Adds Doom effect purge from self to BB/UBB"
- "purges Doom"
- "raises allies from KO",
- "purges LS and ES Lock"
- "DoT mitigation"
- "boost to Summoner Avatar EXP gained"
- "boost to Summoner EXP gained"
- "boost to EXP gained"
- "removes all status ailments"
- "boosts ABP and CBP gain",
- "elemental damage reduction"

## API Usage

### List of Omni Units

To get list of omni units please go to: https://bravefrontier.kresna.me/api/v1/omniunits. You can also get specific list of omni units by param search like `name` and `element`.

Example:

1. By `name` https://bravefrontier.kresna.me/api/v1/omniunits?name=war
2. By `element` https://bravefrontier.kresna.me/api/v1/omniunits?element=fire
3. By `name` and `element` https://bravefrontier.kresna.me/api/v1/omniunits?name=sun&element=fire


## Detail of Omni Unit

To get detail of omni unit, you should use `name` of omni unit as path and if space(s) exist in omni unit's name then you should replace them with underscrore (_).

Here's is example:

1. Ignis Halcyon Vargas = https://bravefrontier.kresna.me/api/v1/omniunits/Ignis_Halcyon_Vargas
2. Fearless Tate & Tama = https://bravefrontier.kresna.me/api/v1/omniunits/Fearless_Tate_%26_Tama (this has been encode).

> Technical only: If omni unit name contains `&` then you must use [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). **Fealess Tate & Tama** is the example.

## Technology

Build by Netlify.

### How to run?

TBA