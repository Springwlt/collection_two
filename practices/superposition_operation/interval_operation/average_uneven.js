'use strict';

function average_uneven(collection) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var count = 0;
    var odd_result = _.filter(collection,function(n,i){
        return n%2 != 0;
    });
    return _.sum(odd_result)/odd_result.length;
}

module.exports = average_uneven;
