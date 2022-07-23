# Brave Frontier Wiki Unofficial

Brave Frontier Wiki Unofficial for Omniunits and Dual Brave Burst (DBB)s. The data comes from The data comes from [Brave Frontier Global Fandom website](https://bravefrontierglobal.fandom.com/wiki/Brave_Frontier_Wiki).

## Specifications

- [x] Get list of omni units
- [x] Filter omni units based on name, element and **keywords**.
- [x] Display detail of omni unit (Leader Skill, Extra Skill, Brave Burst, Super Brave Burst, Ultimate Brave Burst, Enhancements, SP Recommendation).
- [x] Share detail of omni unit with Web Share API.
- [x] Get list of Dual Brave Burst (DBB) of omni units.
- [x] Filter DBBs based on name, elemental synergy and **keywords**.

## API Usage

### List of Omni Units

To get list of omni units please go to: https://bravefrontier.netlify.app/api/v1/omniunits. You can also get specific list of omni units by param search like `name` and `element`.

Example:

1. By `name` https://bravefrontier.netlify.app/api/v1/omniunits?name=war
2. By `element` https://bravefrontier.netlify.app/api/v1/omniunits?element=fire
3. By `name` and `element` https://bravefrontier.netlify.app/api/v1/omniunits?name=sun&element=fire

## Detail of Omni Unit

To get detail of omni unit, you should use `name` of omni unit as path and if space(s) exist in omni unit's name then you should replace them with underscrore (_).

Here's is example:

1. Ignis Halcyon Vargas = https://bravefrontier.netlify.app/api/v1/omniunits/Ignis_Halcyon_Vargas
2. Fearless Tate & Tama = https://bravefrontier.netlify.app/api/v1/omniunits/Fearless_Tate_&_Tama
3. Kranus, the Argen = https://bravefrontier.netlify.app/api/v1/omniunits/Kranus,_the_Argent

## Technology

This project design with monorepo powered by Netlify. Frontend based on Single Page Application stored in `public` folder and backend for API stored in `api` folder.

For scraper service (to get data to build API) it separate from Netlify and it powered by GitHub Actions. The scraper service located in `services` folder and GitHub Workflow located in `.github/workflows` root directory.

### How to run?

> This project require [Netlify CLI](https://cli.netlify.com/netlify-dev/) so please make sure you install it!

**Note: this project requires Node JS version at least 16 or more.**
- Clone this project.
- Install dependencies with `npm install`.
- Run `netlify dev`.
- Run `npm run watch:css` and `npm run watch:js` in another tab terminal.