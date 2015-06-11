'use strict';

function compare_collections(collection_a, collection_b) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var mark = false;

     _.foreach(collection_b,function(n){
        _.foreach(collection_a,function(a){
            if(n === a) {
                mark = true;
            }
        });
    });
    return mark;
}

module.exports = compare_collections;
