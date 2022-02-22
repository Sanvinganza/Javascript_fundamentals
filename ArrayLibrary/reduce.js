export const myReduce = function(array, callback, initialValue) {
    let result = initialValue || 0;
    
    for(let i = 0; i < array.length; i++) {
      result = callback(result, array[i]);
    }
    
    return result;
  };