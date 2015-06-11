'use strict';
var even_group_calculate_average = function(collection){
	var _= require("/home/wlt/loadsh/myloadsh.js");
	var result = [];
	var even_result=_.filter(collection,function(n,i){
        return n%2 === 0 && (i+1)%2 === 0;
	});
	var temp = {};
	_.foreach(even_result,function(n,i){
		temp[(n+"").length] = temp[(n+"").length] || [];
		temp[(n+"").length].push(n);
	});
	var sum = 0;
	for(var i in temp) {
		var arr = temp[i];
        sum = _.reduce(arr,function(a,b){
			return a+b;
		});
		result.push(sum/arr.length);
	}
	return result.length=== 0 ? [0]:result;
};
module.exports = even_group_calculate_average;
