import {
  SELECT_CONTEXT,
  SELECT_DIMENSION,
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

export const selectDimension = (subcategory: string, value: boolean) => {
  return {
    type: SELECT_DIMENSION,
    payload: {
      subcategory,
      value
    }
  };
};

export const selectItem = (name: string, value: boolean) => {
  return {
    type: SELECT_ITEM,
    payload: {
      name,
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
  
  