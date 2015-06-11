'use strict';

 function map_to_three_multiples(collection){
     var _= require('/home/wlt/loadsh/myloadsh.js');
     return _.map(collection,function(n){
         return n*3;
     });
}
module.exports = map_to_three_multiples;
