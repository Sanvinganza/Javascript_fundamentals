export function getTodoAPI () {
  return new Promise((resolve) => setTimeout(() => {
    resolve(['first', 'second', 'third']);
  }, 1000));
}
