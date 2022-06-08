import {
  SELECT_CONTEXT,
  SELECT_DIMENSION,
  SELECT_ITEM,
  SET_STATE
} from './actions.types';

export interface IItems {
    checked: boolean,
    name: string
}

export interface IDimension {
    checked: boolean,
    subcategory: string,
    items: IItems[]
}

export interface IContexts {
  checked: boolean,
    category: string,
    dimensions: IDimension[]
}

export interface IState {
  contexts: IContexts[]
}

const initialState: IState = {
  contexts: []
};

export interface IAction {
    type: string,
    payload: {
        state: IState,
        category: string,
        subcategory: string,
        value: boolean,
        item: string
    }
}

export const rootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
  case SELECT_ITEM : 
    return {
      contexts: {
        ...state.contexts.map( (context) => {
          return {
            ...context,
            dimensions: context.dimensions.map( (dimension) => {
              return {
                ...dimension,
                items: dimension.items.map( (item) => {
                  if(item.name === action.payload.item) {
                    return {
                      ...item,
                      checked: action.payload.value
                    };
                  }
                  return item;
                })
              };
            })
          };
        })
      }
    };
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
  case SELECT_DIMENSION:
    return {
      contexts: {
        ...state.contexts.map( (context) => {
          return {
            ...context,
            dimensions: context.dimensions.map( (dimension) => {
              if(dimension.subcategory === action.payload.subcategory){
                return {
                  ...dimension,
                  checked: action.payload.value
                };
              }
              return dimension;
            })
          };
        })
      }
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