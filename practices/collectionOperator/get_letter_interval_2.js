'use strict';
function get_letter_interval_2(number_a, number_b) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var array = [];
    if(number_a < number_b) {
        for(var i = number_a; i <= number_b; i++) {
            array.push(_.letter(i));
        }
        return array;
    }
    if(number_a > number_b) {
        for(var i = number_a; i >= number_b; i--) {
            array.push(_.letter(i));
        }
        return array;
    }
    if(number_a<=26){
        array.push(_.letter(number_a));
    }
    if(number_a>26){
        array.push(_.letter(number_a));
    }
    return array;
}
module.exports = get_letter_interval_2;
