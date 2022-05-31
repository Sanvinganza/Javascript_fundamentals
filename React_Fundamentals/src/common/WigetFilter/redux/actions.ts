import {
  SELECT_CONTEXT,
  SELECT_DISMENSION,
  SELECT_ITEM,
  SET_STATE
} from './actions.types';
import { IAction, IState } from './reducer';

export const selectContext = (list: IAction) => {
  return {
    type: SELECT_CONTEXT,
    payload: {
      list
    }
  };
};

export const selectDismension = (list: IAction) => {
  return {
    type: SELECT_DISMENSION,
    payload: {
      list
    }
  };
};

export const selectItem = (list: IAction) => {
  return {
    type: SELECT_ITEM,
    payload: {
      list
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
  
  