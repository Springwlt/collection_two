'use strict';
var rank_desc = function(collection){
    var _=require("/home/wlt/loadsh/myloadsh.js");
    return _.sort(collection,function(a,b){
        return a > b;
    });
};

module.exports = rank_desc;
