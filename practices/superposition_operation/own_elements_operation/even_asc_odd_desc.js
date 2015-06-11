'use strict';
var even_asc_odd_desc = function(collection){
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var even_result = _.filter(collection,function(n,i){
        return n%2 === 0;
    });
    var odd_result = _.filter(collection,function(n,i){
        return n%2 != 0;
    });
    _.sort(even_result,function(a,b){
        return a > b;
    });
    _.sort(odd_result,function(a,b){
        return b > a;
    });
    _.foreach(odd_result,function(n,i){
        even_result.push(n);
    })
     return even_result;
}
module.exports = even_asc_odd_desc;
