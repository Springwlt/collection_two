'use strict';

function collect_all_even(collection) {
    var _= require('/home/wlt/loadsh/myloadsh.js');
    return _.filter(collection,function(n){
        return n%2 === 0 ;
    })
}

module.exports = collect_all_even;
