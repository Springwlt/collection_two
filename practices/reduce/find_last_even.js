'use strict';

function find_last_even(collection) {
    var _= require('/home/wlt/loadsh/myloadsh.js');
    return _.last(collection,function(n){
        return n%2 === 0;
    });
}

module.exports = find_last_even;
