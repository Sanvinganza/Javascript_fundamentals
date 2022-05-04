export function getNewTodos (): Promise<Array<string>> {
  return new Promise((resolve) => setTimeout(() => {
    resolve(['first todo', 'second todo', 'third todo']);
  }, 1000));
}
