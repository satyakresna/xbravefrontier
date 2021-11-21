const fsPromises = require('fs').promises;
const { join } = require('path');
const file = join(__dirname, '..', '..', 'data', 'omniunits', 'raw.json');

exports.handler = async (event, context) => {
    const text = await fsPromises.readFile(file, 'utf8');
    const omniUnits = JSON.parse(text);

    const path = event.path.replace(/\/\api\/v1\/[^/]*\//, '');
    const pathParts = (path) ? path.split('/') : [];

    if (pathParts[0]) {
        let name = pathParts[0];
        let selectedUnit = {};
        for (let omniUnit of omniUnits) {
            if (omniUnit.name === name.split('_').join(' ').trim()) {
                selectedUnit = omniUnit;
            }
        }

        const statusCode = (selectedUnit.hasOwnProperty('name')) ? 200 : 404;
        const result = (selectedUnit.hasOwnProperty('name')) 
            ? selectedUnit 
            : { message : `Unit ${name} not found` };

        return {
            statusCode: statusCode,
            body: JSON.stringify(result)
        };
    }

    let name = event.queryStringParameters.name;
    let element = event.queryStringParameters.element;
    let keywords = event.queryStringParameters.keywords;
    
    let result = omniUnits;

    if (name && element && keywords) {
        result = omniUnits.filter(unit => {
            let unitName = unit.name.toLowerCase();
            let unitElement = unit.element.toLowerCase();
            for (const key of createKeywords(keywords)) {
                for (let keyword of unit.keywords) {
                    keyword = keyword.toLowerCase();
                    if (keyword.includes(key)) {
                        return (unitName.includes(lowerCase(name)) && unitElement.includes(lowerCase(element)));
                    }
                }
            }
        });
    } else if (name)  {
        result = omniUnits.filter(unit => {
            let unitName = unit.name.toLowerCase();
            return unitName.includes(lowerCase(name));
        });
    } else if (element) {
        result = omniUnits.filter(unit => {
            let unitElement = unit.element.toLowerCase();
            return unitElement.includes(lowerCase(element));
        });
    } else if (keywords) {
        result = omniUnits.filter(unit => {
            for (const key of createKeywords(keywords)) {
                if (unit.keywords.length >= 1) {
                    for (let keyword of unit.keywords) {
                        keyword = keyword.toLowerCase();
                        if (keyword.includes(key)) {
                            return unit;
                        }
                    }   
                }
            }
        })
    }

    for (const omniUnit of result) {
        delete omniUnit.artwork;
        delete omniUnit.spRecommendation;
        delete omniUnit.skills;
        delete omniUnit.enhancements;
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}

function lowerCase(string) {
    return string.toLowerCase();
}

function createKeywords(string) {
    return string.toLowerCase().replace(/\s*,\s*/g, ",").split(",");
}