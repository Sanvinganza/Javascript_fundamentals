import { waitFor } from "@testing-library/dom";
import { getNewTodos } from "../api/getNewTodos";

describe('getNewTodos function', () => {
  test('getNewTodos function returns the expected value', async () => {
    await expect(getNewTodos()).resolves.toStrictEqual(['first todo', 'second todo', 'third todo']);
  })
});