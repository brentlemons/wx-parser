'use strict'

const Metar = require('./lib/metar');
const Taf = require('./lib/taf');

module.exports.parseMetar = parseMetar;
module.exports.parseTaf = parseTaf;

function parseMetar(metarString) {

    return new Metar(metarString);

}

function parseTaf(tafString) {

    return new Taf(tafString);

}

