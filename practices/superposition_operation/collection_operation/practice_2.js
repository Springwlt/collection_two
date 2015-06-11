'use strict';

function hybrid_operation_to_uneven(collection) {
    // var result = [];
    // for(var i = 0; i < collection.length;i++) {
    //     if(collection[i]%2 != 0 ) {
    //         result.push(collection[i]*3+2);
    //     }
    // }
    // return result;
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var result= _.filter(collection,function(n,i){
        return n%2 != 0
    });
    var output = _.map(result,function(n){
        return   n*3+2;
    });
     return output;
}

module.exports = hybrid_operation_to_uneven;
