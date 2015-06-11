'use strict'
var is_exist_element = function(collection,element){
    var _= require('/home/wlt/loadsh/myloadsh.js');
    var result = _.filter(collection,function(n,i){
        return i%2 === 0;
    });
    return  _.exist(result,element);
};

module.exports = is_exist_element;
