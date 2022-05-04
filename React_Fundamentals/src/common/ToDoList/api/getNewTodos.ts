export function getNewTodos () {
  return new Promise((resolve) => setTimeout(() => {
    resolve(['first todo', 'second todo', 'third todo']);
  }, 1000));
}
