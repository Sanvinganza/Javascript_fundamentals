export function myTake(array, n) {
    let result = [];
    let i = 0;
    
    for(; i < n; i++) {
      result.push(array[i]);
    }
    
    return result;
  }