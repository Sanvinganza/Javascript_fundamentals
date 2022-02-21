export const myReduce = function(array, callback, initialValue) {
    let result = initialValue || 0;
    let i = 0;
    
    for(; i < array.length; i++) {
      result = callback(result, array[i]);
    }
    
    return result;
  };