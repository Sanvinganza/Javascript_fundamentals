import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actions/actions.types";

export type TypeState = typeof initalState;

export type PropsList = {
    id: number,
    text: string,
    completed: boolean
};

export type State = {
    counter: number, 
    list : PropsList[]
};

const initalState: State = {
  counter: 0,
  list: []
};

export interface action {
    type: string,
    text: string,
    id: number
}

const todos = (state: TypeState = initalState, action: action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      counter: state.counter + 1,
      list: [
        ...state.list,
        { id: state.counter + 1, text: action.text, completed: false }
      ]
    };
  case CLEAR_TODO_LIST:
    return initalState;
  case DELETE_TODO:
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.id)
    };
  case TOGGLE_TODO:
    return {
      ...state,
      list: state.list.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    };
  default:
    return state;
  }
};
  
export default todos;
  