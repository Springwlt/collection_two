'use strict';

function median_to_letter(collection) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var result = 0;
    var  median=Math.ceil(_.median(collection));

    return _.letter(median);
}

module.exports = median_to_letter;
