'use strict';

function amount_even(collection) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var even_result = _.filter(collection,function(n){
        return n%2 === 0;
    });
    return _.sum(even_result);
}

module.exports = amount_even;
