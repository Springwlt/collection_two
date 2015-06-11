'use strict';
function map_to_four_multiples_add_one(collection){
    var _= require('/home/wlt/loadsh/myloadsh.js');
    return _.map(collection,function(n){
        return n*4+1;
    });
}
module.exports = map_to_four_multiples_add_one;
