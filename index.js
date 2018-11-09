'use strict'

const Metar = require('./lib/metar');

module.exports = metarParser;

function metarParser(metarString) {

    return new Metar(metarString);

}

