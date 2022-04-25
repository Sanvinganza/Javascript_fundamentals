import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  RESET_COUNTER,
  TOGGLE_TODO,
} from "./actions.types";
  
export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    text
  };
};
  
export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  };
};
  
export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    count: 0
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
  