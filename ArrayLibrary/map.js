export const myMap = function (array, callback) {
  let result = [];
  let i = 0;

  for (; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
};
