export function mySkip(array, n) {
  let result = [];
  let i = 0;

  n--; // because array start with 0

  for (; i < array.length; i++) {
    if (i !== n) {
      result.push(array[i]);
    }
  }

  return result;
}
