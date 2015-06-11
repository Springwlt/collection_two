'use strict';
var calculate_average = function(collection){
	var _= require("/home/wlt/loadsh/myloadsh.js");

	var even_number = _.filter(collection,function(n,i){
		return  i%2 != 0;
	});

	var result = _.sum(even_number)/even_number.length;
	
	return result;
};
module.exports = calculate_average;
