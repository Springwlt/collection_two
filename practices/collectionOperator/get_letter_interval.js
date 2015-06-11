'use strict';

function get_letter_interval(number_a, number_b) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    
    var result = _.range(number_a,number_b);
    return  _.map(result,function(n){
         return String.fromCharCode(n+96);
     });
}
module.exports = get_letter_interval;
