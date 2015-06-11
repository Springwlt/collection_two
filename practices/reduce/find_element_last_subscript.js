'use strict';

function calculate_elements_sum(collection, element) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var index = -1;
    _.foreach(collection,function(n,i){
        if(n === element) {
            index = i;
        }
    });
    return index;
}

module.exports = calculate_elements_sum;
