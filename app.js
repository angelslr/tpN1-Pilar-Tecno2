const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode) {
    for (let i = 0; i < countries.length; i++) {
        if (isoCode == countries[i].iso3)
            return (countries[i].name + ', ' + countries[i].capital);
    }
    return "No se encontró el país.";
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language) {
    for (let i = 0; i < countries.length; i++) {
        if (isoCode == countries[i].iso3)
            return countries[i].translations[language];
    }
    return "No se encontró el idioma.";
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion) {
    const countriesBySubregion = [];
    for (let i = 0; i < countries.length; i++) {
        if (subregion == countries[i].subregion)
            countriesBySubregion.push(countries[i].name + ', ' + countries[i].capital);
    }
    return countriesBySubregion.length ? countriesBySubregion : "No hay países en la subregión especificada.";
}

function main() {
    var cowsay = require("cowsay");

    console.log(cowsay.say({
        text: "Buscador de países",
        e: "oO",
        T: "U "
    }));

    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('CHN'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('CHN', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();

exports._test = {
    getCountryByIso3,
    getCountryTranslatedName,
    getCountriesBySubregion
}