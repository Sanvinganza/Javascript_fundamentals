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

export const selectDismension = (subcategory: string, value: boolean) => {
  return {
    type: SELECT_DISMENSION,
    payload: {
      subcategory,
      value
    }
  };
};

export const selectItem = (item: string, value: boolean) => {
  return {
    type: SELECT_ITEM,
    payload: {
      item,
      value
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
  
  