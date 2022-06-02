import {
  SELECT_CONTEXT,
  SET_STATE
} from './actions.types';

export interface IItems {
    checked: boolean,
    item: string
}

export interface IDismensions {
    checked: boolean,
    subcategory: string,
    items: IItems[]
}

export interface IState {
    contexts: {
        checked: boolean,
        category: string,
        dismensions: IDismensions[]
    }[]
}

const initialState: IState = {
  contexts: []
};

export interface IAction {
    type: string,
    payload: {
        list: Array<string>,
        state: IState,
        category: string,
        value: boolean
    }
}

export const rootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
      
  case SELECT_CONTEXT:
    return {
      contexts: [
        ...state.contexts.map( (context) => {
          if(context.category === action.payload.category){
            return {
              ...context,
              checked: action.payload.value
            };
          }

          return context;
        })
      ]
    };
  case SET_STATE:
    return { 
      contexts: [
        ...state.contexts, 
        ...action.payload.state.contexts
      ]
    };
  default: return state;
  }
};