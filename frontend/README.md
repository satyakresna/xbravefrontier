# Brave Frontier Wiki (BFWiki)

This is a wiki to collect list of omni units and Dual Brave Burst. The data comes from [scraping Brave Frontier Global Fandom website](https://github.com/satyakresna/scraping-bravefrontier).

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

## Tech stack

This website build by [kiss-kit](https://github.com/satyakresna/kiss-kit).

## How to run

- Install dependencies with `npm install`.
- Run command `npm run dev`.

## Feedback

Please send feeback in English or Bahasa Indonesia in [this issue](https://github.com/satyakresna/bfwiki/issues).