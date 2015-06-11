'use strict';

function average_to_letter(collection) {
    // var sum = 0;
    // var average = 0;
    // var index = 0;
    // for(var i = 0;i < collection.length;i++) {
    //     sum += collection[i];
    // }
    // average = Math.ceil(sum/collection.length);
    // index = String.fromCharCode(average+96);
    // return index;
    var _= require("/home/wlt/loadsh/myloadsh.js")
    var average =Math.ceil(_.sum(collection)/collection.length);
    return String.fromCharCode(average+96);
}

module.exports = average_to_letter;
