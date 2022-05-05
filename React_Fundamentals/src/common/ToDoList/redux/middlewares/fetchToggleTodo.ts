import { loadingData, toggleTodo } from "../actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchToggleTodo = (id: number) => (dispatch: any) => {
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