import { myFilter } from "./filter.js";
import { myMap } from "./map.js";
import { myReduce } from "./reduce.js";
import { mySkip } from "./skip.js";
import { myTake } from "./take.js";
import { myForEach } from "./foreach.js";

function callMethods(ARRAY, args, fn) {  
  if(ARRAY._array.length !== 0) {
    ARRAY._array = fn(ARRAY._array, ...args);
    return ARRAY;
  }
  
  return fn(...args);
}

export let ARRAY = {
  "_array": [],
    
  "reduce": (array, callback, initialValue) => {
    return callMethods(ARRAY, [array, callback, initialValue], myReduce);
  },
  
  "filter": (array, callback) => {
    return callMethods(ARRAY, [array,callback], myFilter);
  },

  "map": (array, callback) => {
    return callMethods(ARRAY, [array,callback], myMap);
  },
  
  "take": (array, n) => {
    return callMethods(ARRAY, [array, n], myTake);
  },
   
  "skip": (array, n) => {
    return callMethods(ARRAY, [array, n], mySkip);
  },

  "foreach": (array, callback) => {
    return callMethods(ARRAY, [array,callback], myForEach);
  },
  
  "chain": (array) => {
    ARRAY._array = array;
    return ARRAY;
  },
  
  "value": () => {
    const _ = ARRAY._array;
    ARRAY._array = [];
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
