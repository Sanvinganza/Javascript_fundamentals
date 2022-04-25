import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions";
import { TypeState as PropsList } from "../reducers/todos";

type todo = {id: number, text: string, completed: boolean}
type stateType = {
    todos: PropsList
}
const TodoList = () => {
  const { list } = useSelector((state: stateType) => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul className="list-group my-5 border border-light">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {list.map((todo: todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={handleClearList}
      >
        clear list
      </button>
    </div>
  );
};

export default TodoList;
