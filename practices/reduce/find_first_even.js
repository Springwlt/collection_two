'use strict';
function find_first_even(collection) {
    var _= require('/home/wlt/loadsh/myloadsh.js');
    return _.first(collection,function(n){
        return n%2==0;
    });
}

module.exports = find_first_even;
