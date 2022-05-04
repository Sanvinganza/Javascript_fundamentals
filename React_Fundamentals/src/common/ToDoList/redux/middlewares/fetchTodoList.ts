import { getNewTodos } from "../../api/getNewTodos";
import { addTodoList, loadingData } from "../actions";

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