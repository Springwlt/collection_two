'use strict';

function get_intersection(collection_a, collection_b) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var result = [];

     _.foreach(collection_b,function(n){
        _.foreach(collection_a,function(a){
            if(n === a) {
                result.push(n);
            }
        });
    });
    return result;
}
module.exports = get_intersection;
