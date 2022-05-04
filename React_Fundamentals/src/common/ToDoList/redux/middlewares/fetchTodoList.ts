import { getNewTodos } from "../../api/getNewTodos";
import { addTodoList } from "../actions";

export const fetchTodoList = (dispatch: any) => {
  getNewTodos()
    .then((res: any) => {
      dispatch(addTodoList(res));
    })
    .catch(error => console.log(error));
};