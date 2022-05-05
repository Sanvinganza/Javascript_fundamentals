import { Dispatch } from "redux";
import { addTodo, loadingData } from "../actions";

export const fetchTodo = (text: string) => (dispatch: Dispatch) => {
  dispatch(loadingData(true));
  new Promise(() => {    
    setTimeout(() => dispatch(addTodo(text)), 400);
  })
    .then(() => dispatch(loadingData(false)))
    .catch(error => {
      dispatch(loadingData(false));
      console.log(error);
    });
};