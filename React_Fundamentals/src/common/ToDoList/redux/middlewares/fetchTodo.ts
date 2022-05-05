import { addTodo, loadingData } from "../actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTodo = (text: string) => (dispatch: any) => {
  dispatch(loadingData(true));
  new Promise(() => {    
    setTimeout(() => dispatch(addTodo(text)), 400);
  })
    .then(() => dispatch(loadingData(false)))
    .catch(error => {
      dispatch(loadingData(false));
      console.log(error);
    })
  ;
};