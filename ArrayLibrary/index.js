import { myFilter } from "./filter.js";
import { myMap } from "./map.js";
import { myReduce } from "./reduce.js";
import { mySkip } from "./skip.js";
import { myTake } from "./take.js";
import { myForEach } from "./foreach.js";

function callMethod(ARRAY, args, fn) {  
  if(ARRAY._array.length !== 0) {
    ARRAY._array = fn(ARRAY._array, ...args);
    return ARRAY;
  }
  
  return fn(...args);
}

export let ARRAY = {
  _array: [],
    
  reduce (array, callback, initialValue) {
    return callMethod(this, [array, callback, initialValue], myReduce);
  },
  
  filter (array, callback) {
    return callMethod(this, [array,callback], myFilter);
  },

  map (array, callback) {
    return callMethod(this, [array,callback], myMap);
  },
  
  take (array, n) {
    return callMethod(this, [array, n], myTake);
  },
   
  skip (array, n) {
    return callMethod(this, [array, n], mySkip);
  },

  foreach (array, callback) {
    return callMethod(this, [array,callback], myForEach);
  },
  
  chain (array) {
    this._array = array;
    return this;
  },
  
  value () {
    const _ = this._array;
    this._array = [];
    return _;
  },
}

console.log(ARRAY.map([1,2,3,4,5], el => el* 4))
console.log(ARRAY
            .chain([1,2,3,4,5])
            .map(el => el * 2)
            .take(3)
            .skip(1)
            .reduce((acc, el) => acc + el)
            .value());
console.log(ARRAY.reduce([1,2,4,5], (acc, el) => acc + el))
console.log(ARRAY.skip([3,4,5,6,7], 6));