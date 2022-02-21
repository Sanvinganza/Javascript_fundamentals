import { myFilter } from "./filter";
import { myMap } from "./map";
import { myReduce } from "./reduce";
import { mySkip } from "./skip";
import { myTake } from "./take";
import { myForEach } from "./foreach";

export function ARRAY_LIB() {
  let _array;
  
  this.filter = function(array, callback) {
    // if the first parameter is not an array, 
    // then an argument shift has occurred
    if(!Array.isArray(array)) {
      _array = myFilter(_array, array);
      return this;
    }
    
    return myFilter(array, callback);
  };
  
  this.map = function(array, callback) {
    if(!Array.isArray(array)) {
      _array = myMap(_array, array);
      return this;
    }
    
    return myMap(array, callback);
  };
  
  this.reduce = function(array, callback, initialValue) {
    if(!Array.isArray(array)) {
      _array = myReduce(_array, array, callback);
      return this;
    }
    
    return myReduce(array, callback, initialValue);
  };
  
  this.take = function(array, n) {
    if(!Array.isArray(array)) {
      _array = myTake(_array, array);
      return this;
    }
    
    return myTake(array, n);
  };
   
  this.skip = function(array, n) {
    if(!Array.isArray(array)) {
      _array = mySkip(_array, array);
      return this;
    }
    
    return mySkip(array, n);
  };

  this.foreach = function(array, callback) {
    if(!Array.isArray(array)) {
      _array = myForEach(_array, array);
      return this;
    }
    
    _array = myForEach(array, callback);
  };
  
  this.chain = function(array) {
    _array = array;
    return this;
  }
  
  this.value = function() {
    return _array;
  }
}
