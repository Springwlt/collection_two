'use strict';
function rank_by_two_large_one_small(collection){
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var result = [];
    _.sort(collection,function(a,b){
        return a > b;
    })
    for(var i = 0;i < collection.length-2; i +=3) {

        var temp = 0;
        temp = collection[i];
        collection[i] = collection[i+2];
        collection[i+2] = temp;
    }
    for(var i = 0;i < collection.length-2; i +=3) {
        var temp = 0;
        temp = collection[i];
        collection[i] = collection[i+1];
        collection[i+1] = temp;
    }
    return collection;
}

module.exports = rank_by_two_large_one_small;
