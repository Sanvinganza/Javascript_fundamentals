import {
  SELECT_CONTEXT,
  SELECT_DISMENSION,
  SELECT_ITEM,
  SET_STATE
} from './actions.types';

export interface IItems {
    checked: boolean,
    name: string
}

export interface IDismension {
    checked: boolean,
    subcategory: string,
    items: IItems[]
}

export interface IContexts {
  checked: boolean,
    category: string,
    dismensions: IDismension[]
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
            dismensions: context.dismensions.map( (dismension) => {
              return {
                ...dismension,
                items: dismension.items.map( (item) => {

                  console.log('SELECT_ITEM', item);
                  
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
  case SELECT_DISMENSION:
    return {
      contexts: {
        ...state.contexts.map( (context) => {
          return {
            ...context,
            dismensions: context.dismensions.map( (dismension) => {
              if(dismension.subcategory === action.payload.subcategory){
                return {
                  ...dismension,
                  checked: action.payload.value
                };
              }

              return dismension;
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