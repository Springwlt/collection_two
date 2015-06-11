'tuse strict';

function grouping_count(collection) {
    var _= require("/home/wlt/loadsh/myloadsh.js");
    var  result = {};
    
    _.foreach(collection,function(n,i){
        result[[n]] = result[[n]] || 0;
        result[n]++;
    });
    return result;
}

module.exports = grouping_count;
