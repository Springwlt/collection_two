'use strict';

function double_to_one(collection) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var result = [];
    var array = [];

    for(var i = 0; i <collection.length; i++) {
        for(var j = 0;j < collection[i].length; j++) {
            result.push(collection[i][j]);
        }
    }
    return _.no_repeat(result);

}

module.exports = double_to_one;
