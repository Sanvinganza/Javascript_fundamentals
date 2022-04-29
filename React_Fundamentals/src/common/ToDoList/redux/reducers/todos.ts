import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  GET_TODO,
  TOGGLE_TODO,
} from "../actions/actions.types";

export type TypeState = typeof initalState;

export type PropsList = {
    id: number,
    text: string,
    completed: boolean
};

export type State = {
    list : PropsList[]
};

export interface action {
    type: string,
    text: string,
    id: number
    payload: Array<string>
}

const initalState: State = {
  list: []
};
  
const todos = (state: TypeState = initalState, action: action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      list: [
        ...state.list,
        { text: action.text, completed: false }
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
  case GET_TODO:
    return {
      ...state,
      //   list: [...state.list, action.payload.map((item, id) => {
        
    // })]
    };
  default:
    return state;
  }
};
  
export default todos;
  