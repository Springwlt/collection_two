function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
  _.prototype = {
    each:function(fn) {
      for(var i = 0;i< this.collection.length;i++) {
        fn(this.collection[i],i)
      }
    },
    map:function(fn) {
      var result = [];
      this.each(function(n, i){
        result.push(fn(n,i))
      });
      this.collection = result;
      return this;
    },
    // filter:function(fn,operate){
    //   var result = [];
    //   this.each(function(n,i){
    //     if(operate(n,i)){
    //       result.push(n);
    //     };
    //   });
    //   this.collection = result;
    //   return this;
    // }
  }
var a = [1, 2, 3];
// var b=_(a).filter(function(n){
//   return n+1;
// },function(a, b){
//   return a % 2 === 0;
// });
var b = _(a).map(function(n){
  return n*n;
});
console.log(b);
