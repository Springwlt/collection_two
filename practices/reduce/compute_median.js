'use strict';

function compute_median(collection) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    return _.median(_.sort(collection,function(a,b){
        return a > b ;
    }));
}

module.exports = compute_median;
