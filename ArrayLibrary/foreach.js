export function myForEach(array, callback){
    let i = 0;
    
    for(; i < array.length; i++) {
      callback(array[i]);
    }
}