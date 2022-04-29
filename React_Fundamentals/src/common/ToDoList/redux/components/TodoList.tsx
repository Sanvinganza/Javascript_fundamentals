import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions";
import { TypeState as PropsList } from "../reducers/todos";

type todo = { id: number, text: string, completed: boolean }
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
    <div className="todo-list">
      {list.map((todo: todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
      <div className="bottom">
        <div className="items-left">{}items left</div>
        <button
          type="button"
          onClick={handleClearList}
        >
        clear list
        </button>
      </div>
    </div>
  );
};

export default TodoList;
