import {
  SET_STATE
} from './actions.types';

export interface IItems {
    checked: boolean,
    item: string
}

export interface IDismensions {
    checked: false,
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
    {
      checked: false,
      category: 'myCategory',
      dismensions: [
        {
          checked: false,
          subcategory: 'mySubCategory',
          items: [{checked: true, item: 'item1'}]
        }
      ]
    }
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
    console.log('ACTION SET STATE = ', action.payload.state);
    return { ...state, ...action.payload.state };
  default: return state;
  }
};