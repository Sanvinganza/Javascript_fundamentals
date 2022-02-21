export const myFilter = function(array, callback){
  let result = [];
  let i = 0;
  
  for(; i < array.length; i++){
      if(callback(array[i])){
        result.push(array[i]);
      }
  }

  return result;
};