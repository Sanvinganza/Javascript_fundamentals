import { getNewTodos } from "../../api/getNewTodos";
import { addTodoList, loadingData } from "../actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTodoList = () => (dispatch: any) => {
  dispatch(loadingData(true));
  getNewTodos()
    .then((res) => {
      dispatch(addTodoList(res));
      dispatch(loadingData(false));
    })
    .catch(error => {
      dispatch(loadingData(false));
      console.log(error);
    });
};