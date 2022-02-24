export function mySkip(array, n) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== n - 1) { // because array start with 0
      result.push(array[i]);
    }
  }

  return result;
}
