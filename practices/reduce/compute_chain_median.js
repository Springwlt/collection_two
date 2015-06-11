'use strict';

function compute_chain_median(collection) {
  var _ = require("/home/wlt/loadsh/myloadsh.js");
    var array = [];
    var num = "";

    for(var i = 0; i < collection.length; i++) {
        if(parseInt(collection[i]) === parseInt(collection[i])) {
            num += collection[i];
        }else {
            if(num.length != 0){
                array[array.length] = parseInt(num);
                num = "";
            }
        }
        if(i === collection.length-1){
            array[array.length] = parseInt(num);
        }
    }
    _.sort(array,function(a,b){
      return a < b;
    });
    return _.median(array);
}

module.exports = compute_chain_median;
