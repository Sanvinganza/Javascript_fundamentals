export const myMap = function (array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
};
