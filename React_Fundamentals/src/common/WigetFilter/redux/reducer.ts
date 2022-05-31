import {
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
  contexts: [
    // {
    //   category: 'myCategory',
    //   checked: true,
    //   dismensions: [
    //     {
    //       checked: false,
    //       subcategory: 'mySubCategory',
    //       items: [{checked: true, item: 'item1'}]
    //     }
    //   ]
    // }
  ]
};

export interface IAction {
    type: string,
    payload: {
        list: Array<string>,
        state: IState
    }
}

export const rootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {

  case SET_STATE:
    console.log('ACTION SET_STATE = ', {contexts: [...state.contexts, ...action.payload.state.contexts]});
    return { 
      contexts: [
        ...state.contexts, 
        ...action.payload.state.contexts
      ]
    };
  default: return state;
  }
};