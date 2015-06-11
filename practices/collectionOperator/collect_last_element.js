'use strict';

function collect_last_element(collection) {
    var _= require('/home/wlt/loadsh/myloadsh.js');
    return _.last(collection,function(n){
        return n;
    })
}
module.exports = collect_last_element;
