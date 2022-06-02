import {
  SELECT_CONTEXT,
  SELECT_DISMENSION,
  SELECT_ITEM,
  SET_STATE
} from './actions.types';
import { IState } from './reducer';

export const selectContext = (category: string, value: boolean) => {
  return {
    type: SELECT_CONTEXT,
    payload: {
      category,
      value
    }
  };
};

export const selectDismension = (category: string) => {
  return {
    type: SELECT_DISMENSION,
    payload: {
      category
    }
  };
};

export const selectItem = (item: string) => {
  return {
    type: SELECT_ITEM,
    payload: {
      item
    }
  };
};
  
export const setState = (state: IState) => {
  return {
    type: SET_STATE,
    payload: {
      state
    }
  };
};
  
  