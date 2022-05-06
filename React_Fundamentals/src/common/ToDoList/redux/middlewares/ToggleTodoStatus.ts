import { Dispatch } from "redux";
import { loadingData, toggleTodo } from "../actions";

export const ToggleTodoStatus = (id: number) => (dispatch: Dispatch) => {
  dispatch(loadingData(true));
  new Promise(() => {    
    setTimeout(() => dispatch(toggleTodo(id)), 200);
    dispatch(loadingData(false));
  })
    .catch(error => {
      dispatch(loadingData(false));
      console.log(error);
    });
};