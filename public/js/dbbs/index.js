import Skeleton from "./components/Skeleton.js";
import { SearchForm, Search } from "./components/Search.js";
import setActiveMenu from "../utils/setActiveMenu.js";
import trackUrl from "../utils/trackUrl.js";
import { requestDbbs } from "../utils/request.js";
import { getDbbKeywords } from "../utils/keywords.js";

let searchDbbKeywordsEl;

export default function (ctx) {
    trackUrl(ctx);
    setActiveMenu(ctx.path);
    document.title = ctx.title = 'Brave Frontier Wiki';
    document.querySelector('main').textContent = '';
    document.querySelector('main').appendChild(SearchForm());
    document.querySelector('main').appendChild(Skeleton());
    searchDbbKeywordsEl = new Choices(document.getElementById('searchDbbKeywords'), {
        items: getDbbKeywords(),
        choices: getDbbKeywords(),
        removeItemButton: true,
        maxItemCount: 3,
        maxItemText: (maxItemCount) => {
            return `Only ${maxItemCount} values can be added`;
        }
    });
    let filteredDbbs;
    requestDbbs().then(data => {
        ctx.state.dbbs = data;
        ctx.save();
        filteredDbbs = filterDbbs(ctx);
        import("./components/Content.js").then(module => {
            module.default(filteredDbbs);
            Search();
        });
    });
    // Scroll to the top page.
    window.scrollTo(0, 0);
}

function filterDbbs(ctx) {
    let filteredDbbs;
    if (ctx.querystring) {
        const searchParams = new URLSearchParams(ctx.querystring);
        const searchName = searchParams.get('name');
        const searchEsName = searchParams.get('esname');
        const searchKeywords = searchParams.get('keywords');
        const selectedKeywords = (searchKeywords) ? searchKeywords.split(",") : [];
        if (searchName && searchEsName && searchKeywords) {
            document.getElementById('searchOmniUnitName').value = searchName;
            document.getElementById('searchElementalSynergy').value = searchEsName;
            searchDbbKeywordsEl.setChoiceByValue(selectedKeywords);
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let firstUnitName = dbb.firstUnitName.toLowerCase();
                let secondUnitName = dbb.secondUnitName.toLowerCase();
                let esName = dbb.elementalSynergyName;
                if (firstUnitName.includes(searchName.toLowerCase()) || secondUnitName.includes(searchName.toLocaleLowerCase())) {
                    if (esName === searchEsName) {
                        for (let keyword of dbb.keywords) {
                            if (selectedKeywords.includes(keyword)) {
                                return dbb;
                            }
                        }
                    }
                }
            });
        } else if (searchName && searchKeywords) {
            document.getElementById('searchOmniUnitName').value = searchName;
            searchDbbKeywordsEl.setChoiceByValue(selectedKeywords);
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let firstUnitName = dbb.firstUnitName.toLowerCase();
                let secondUnitName = dbb.secondUnitName.toLowerCase();
                if (firstUnitName.includes(searchName.toLowerCase()) || secondUnitName.includes(searchName.toLocaleLowerCase())) {
                    for (let keyword of dbb.keywords) {
                        if (selectedKeywords.includes(keyword)) {
                            return dbb;
                        }
                    }
                }
            });
        } else if (searchName && searchEsName) {
            document.getElementById('searchOmniUnitName').value = searchName;
            document.getElementById('searchElementalSynergy').value = searchEsName;
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let firstUnitName = dbb.firstUnitName.toLowerCase();
                let secondUnitName = dbb.secondUnitName.toLowerCase();
                let esName = dbb.elementalSynergyName;
                if (firstUnitName.includes(searchName.toLowerCase()) || secondUnitName.includes(searchName.toLocaleLowerCase())) {
                    if (esName === searchEsName) {
                        return dbb;
                    }
                }
            });
        } else if (searchEsName && searchKeywords) {
            document.getElementById('searchElementalSynergy').value = searchEsName;
            searchDbbKeywordsEl.setChoiceByValue(selectedKeywords);
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let esName = dbb.elementalSynergyName;
                if (esName === searchEsName) {
                    for (let keyword of dbb.keywords) {
                        if (selectedKeywords.includes(keyword)) {
                            return dbb;
                        }
                    }
                }
            });
        } else if (searchName) {
            document.getElementById('searchOmniUnitName').value = searchName;
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let firstUnitName = dbb.firstUnitName.toLowerCase();
                let secondUnitName = dbb.secondUnitName.toLowerCase();
                if (firstUnitName.includes(searchName.toLowerCase()) || secondUnitName.includes(searchName.toLocaleLowerCase())) {
                    return dbb;
                }
            });
        } else if (searchEsName) {
            document.getElementById('searchElementalSynergy').value = searchEsName;
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
                let esName = dbb.elementalSynergyName;
                if (esName === searchEsName) {
                    return dbb;
                }
            });
        } else if (searchKeywords) {
            searchDbbKeywordsEl.setChoiceByValue(selectedKeywords);
            filteredDbbs = ctx.state.dbbs.filter(dbb => {
              for (let keyword of dbb.keywords) {
                if (selectedKeywords.includes(keyword)) {
                  return dbb;
                }
              }
            });
        }
    } else {
        filteredDbbs = ctx.state.dbbs;
    }
    window.dbbs = filteredDbbs;
    let end = 49;
    return (filteredDbbs) ? filteredDbbs.slice(0, end) : [].slice(0, end);
}