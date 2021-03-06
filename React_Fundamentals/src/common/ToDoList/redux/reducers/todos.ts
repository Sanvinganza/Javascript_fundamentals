import {
  ADD_TODO,
  ADD_TODO_LIST,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  LOADING_DATA,
  TOGGLE_TODO,
} from "../actions/actions.types";

export type PropsList = {
  id: number,
  text: string,
  completed: boolean
};

export type State = {
  isLoading?: boolean,
  list : PropsList[]
};

const initalState: State = {
  isLoading: false,
  list: []
};

export interface Action {
    type: string,
    payload: {
      text: string,
      id: number,
      list: Array<string>,
      status: boolean
    },
  }

const rootReducerTodos = (state: State = initalState, action: Action) => {
  switch (action.type) {
  case ADD_TODO:
    if(!state.list.length) 
      return {
        list: [
          { id: 0, text: action.payload.text, completed: false }
        ]
      };
    return {
      list: [
        ...state.list,
        { id: state.list[state.list.length - 1].id + 1, text: action.payload.text, completed: false }
      ]
    };
  case CLEAR_TODO_LIST:
    return initalState;
  case DELETE_TODO:
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.payload.id)
    };
  case TOGGLE_TODO:
    return {
      ...state,
      list: state.list.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    };
  case ADD_TODO_LIST:
    return {
      ...state,
      list: [...state.list, ...action.payload.list.map( (item, index) => {
        if(!state.list.length) return { id: index, text: item, completed: false };
        return { id: state.list[state.list.length - 1].id + index + 1, text: item, completed: false };
      })]
    };
  case LOADING_DATA:
    return {
      ...state,
      isLoading: action.payload.status
    };
  default:
    return state;
  }
};

export default rootReducerTodos;