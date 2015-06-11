'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var result = [];

     _.foreach(collection_a,function(n){
        _.foreach(collection_b,function(a){
            if(n%a === 0) {
                result.push(n);
            }
        });
    });
    return result;
}

module.exports = choose_divisible_integer;
