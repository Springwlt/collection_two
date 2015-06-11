'use strict';

function compute_average(collection) {
    var _= require('/home/wlt/loadsh/myloadsh.js');
    
    return _.sum(collection)/collection.length;
}

module.exports = compute_average;
