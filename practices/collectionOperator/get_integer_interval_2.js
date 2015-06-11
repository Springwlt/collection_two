'use strict';

function get_integer_interval_2(number_a, number_b) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var median_result =_.range(number_a,number_b);
    var result =_.filter(median_result,function(n,i){
        return n%2 === 0;
    });
    return result;
}

module.exports = get_integer_interval_2;
