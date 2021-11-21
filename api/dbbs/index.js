const fsPromises = require('fs').promises;
const { join } = require('path');
const file = join(__dirname, '..', '..', 'data', 'dbbs', 'raw.json');

exports.handler = async (event, callback) => {
    let esname = event.queryStringParameters.esname;
    let unitname = event.queryStringParameters.unitname;
    const text = await fsPromises.readFile(file, 'utf8');
    const dbbs = JSON.parse(text);
    let result = dbbs;

    if (esname && unitname) {
        result = dbbs.filter(dbb => {
            let esName = dbb.elementalSynergyName.toLowerCase();
            let firstUnitName = dbb.firstUnitName.toLowerCase();
            let secondUnitName = dbb.secondUnitName.toLowerCase();
            if (lowerCase(esname) === esName) {
                if (firstUnitName.includes(lowerCase(unitname)) || secondUnitName.includes(lowerCase(unitname))) {
                    return dbb;
                }
            }
        });
    } else if (esname)  {
        result = dbbs.filter(dbb => {
            let esName = dbb.elementalSynergyName.toLowerCase();
            if (lowerCase(esname) === esName) {
                return dbb;
            }
        });
    } else if (unitname) {
        result = dbbs.filter(dbb => {
            let firstUnitName = dbb.firstUnitName.toLowerCase();
            let secondUnitName = dbb.secondUnitName.toLowerCase();
            if (firstUnitName.includes(lowerCase(unitname)) || secondUnitName.includes(lowerCase(unitname))) {
                return dbb;
            }
        });
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}

function lowerCase(string) {
    return string.toLowerCase();
}