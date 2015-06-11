'use strict';
var calculate_median = function(collection){
	// var median = 0;
	//
	// for(var i = 0; i < collection.length; i++) {
	// 	if(collection.length%2 === 0) {
	// 		median = Math.ceil((collection[collection.length/2-1]+collection[collection.length/2])/2);
	// 	}
	// 	if(collection.length%2 != 0) {
	// 		median = collection[parseInt(collection.length/2)];
	// 	}
	// }
	// return  median;
	var _= require("/home/wlt/loadsh/myloadsh.js");
	var result = _.median(collection);
	return Math.ceil(result);
};
module.exports = calculate_median;
