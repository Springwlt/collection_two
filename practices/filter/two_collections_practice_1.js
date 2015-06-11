'use strict';

function choose_common_elements(collection_a, collection_b) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var result = [];

     _.foreach(collection_a,function(n){
        _.foreach(collection_b,function(a){
            if(n === a) {
                result.push(n);
            }
        });
    });
    return result;
}

module.exports = choose_common_elements;
