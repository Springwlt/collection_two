'use strict';

function hybrid_operation_to_uneven(collection) {
    // var sum = 0;
    //
    // for(var i = 0; i < collection.length;i++) {
    //     if(collection[i]%2 != 0 ) {
    //         sum += collection[i]*3+5;
    //     }
    // }
    // return sum;
    var _=require("/home/wlt/loadsh/myloadsh.js");
    var result =_.filter(collection,function(n,i){
        return n%2 != 0;
    });
    var array=_.map(result,function(n){
        return n*3+5;
    });
    return _.sum(array);
}

module.exports = hybrid_operation_to_uneven;
