'use strict';

function hybrid_operation(collection) {
    var _= require("/home/wlt/loadsh/myloadsh.js")
    var result = _.map(collection,function(n){
        return n*3+2;
    });
    return _.sum(result);
}

module.exports = hybrid_operation;
