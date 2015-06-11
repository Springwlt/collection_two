'use strict';
var single_element = function(collection) {
    var _ =require("/home/wlt/loadsh/myloadsh.js");

    var even_result = _.filter(collection,function(n,i){
        return i%2 != 0;
    });

    var temp = {};
    _.foreach(even_result,function(n,i){
            temp[n+" "] = temp[n+" "]||0;
            temp[n+" "]++;
    });

    var result = [];
    for(var key in temp) {
        if(temp[key] === 1) {
            result.push(parseInt(key));
        }
    }
    return result;
    var result= _.no_repeat(even_result);
}

module.exports = single_element;
