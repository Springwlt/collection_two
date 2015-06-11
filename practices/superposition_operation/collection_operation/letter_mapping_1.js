'use strict';

function even_to_letter(collection) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    
    var result = _.filter(collection,function(n){
        if(n%2 === 0){
            return n;
        }
    });
    return _.map(result,function(n){
            return String.fromCharCode(n+96);
    });
}

module.exports = even_to_letter;
