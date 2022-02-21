import { myFilter } from "./filter";
import { myMap } from "./map";

export function ARRAY_LIB(array) {
  this.filter = function (callback) {
    return myFilter(array, callback);
  };

  this.map = function (callback) {
    return myMap(array, callback);
  };

  this.reduce = function (callback, initialValue) {
    return myReduce(array, callback, initialValue);
  };
  
  this.take = function (callback, initialValue) {
    return myTake(array, callback, initialValue);
  };
  
  this.skip = function(n) {
    return mySkip(array, n);
  };
}
