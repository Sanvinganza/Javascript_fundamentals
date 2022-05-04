import {
  ADD_TODO,
  ADD_TODO_LIST,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  LOADING_DATA,
  TOGGLE_TODO,
} from "./actions.types";
  
export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
};

export const addTodoList = (list: Array<string>) => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      list
    }
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
    payload: {
      id
    }
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};
  
export const loadingData = (status: boolean) => {
  return {
    type: LOADING_DATA,
    payload: {
      status
    }
  };
};