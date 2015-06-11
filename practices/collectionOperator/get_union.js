'use strict';

function get_union(collection_a, collection_b) {
    var _=require("/home/wlt/loadsh/myloadsh.js");
    for(var i = 0; i <collection_b.length;i++) {
        collection_a.push(collection_b[i]);
    }
    return _.no_repeat(collection_a);
}

module.exports = get_union;
