export function mySkip(array, n) {
  let result = [];

  n--; // because array start with 0

  for (let i = 0; i < array.length; i++) {
    if (i !== n) {
      result.push(array[i]);
    }
  }

  return result;
}
