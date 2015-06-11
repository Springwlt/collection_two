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
   value: function() {
       return this.collection;
   }
}
module.exports = _;
