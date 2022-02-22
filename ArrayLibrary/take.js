export function myTake(array, n) {
    let result = [];
    
    for(let i = 0; i < n; i++) {
      result.push(array[i]);
    }
    
    return result;
  }