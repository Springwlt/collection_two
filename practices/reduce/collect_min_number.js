'use strict';

function collect_min_number(collection) {
    var _= require('../../lodash.js');
    return _(collection).min(collection).value();
}
module.exports = collect_min_number;
