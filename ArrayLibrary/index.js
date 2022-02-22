import { myFilter } from "./filter";
import { myMap } from "./map";
import { myReduce } from "./reduce";
import { mySkip } from "./skip";
import { myTake } from "./take";
import { myForEach } from "./foreach";

export function ARRAY_LIB() {
  this._array;
  let self = this;
  
  function callMethods(args, fn) {    
    if(self._array) {
      self._array = fn.apply(null, [self._array, ...args]);
      return self;
    }
    
    return fn.apply(null, args);
  }
  
  this.reduce = (array,callback, initialValue) => {
    return callMethods([array, callback, initialValue], myReduce);
  };
  
  this.filter = (array,callback) => {
    return callMethods([array,callback], myFilter);
  };

  this.map = (array,callback) => {
    return callMethods([array,callback], myMap);
  };
  
  this.take = (array, n) => {
    return callMethods([array, n], myTake);
  };
   
  this.skip = (array, n) => {
    return callMethods([array, n], mySkip);
  };

  this.foreach = (array,callback) => {
    return callMethods([array,callback], myForEach);
  };
  
  this.chain = (array) => {
    self._array = array;
    return this;
  };
  
  this.value = () => {
    const _ = self._array;
    delete self._array;
    return _;
  }
}
