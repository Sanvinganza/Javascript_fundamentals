import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ToDoList from ".."

describe('TodoItem component', () => {
  test('render is correct', () => {
    expect(render(<ToDoList />)).toMatchSnapshot();
  });
  test('function newTodo should worked corrent', async () => {
    const newTodoButton = screen.getByText('newTodo');
    expect(newTodoButton).toBe('button');
    await waitFor(() => userEvent.click(newTodoButton));

    screen.debug
  });
})