export const myReduce = function(array, callback, initialValue = 0) {
    let result = initialValue;
    
    for(let i = 0; i < array.length; i++) {
      result = callback(result, array[i]);
    }
    
    return result;
  };