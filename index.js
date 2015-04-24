var diff = require('./lib/diff');

var createElement = require('./lib/createElement');

var render = require('./lib/render');

var KVD = {
    diff: diff,
    render: render,
    createElement:createElement
}

window.KVD = KVD;

module.exports = KVD;
