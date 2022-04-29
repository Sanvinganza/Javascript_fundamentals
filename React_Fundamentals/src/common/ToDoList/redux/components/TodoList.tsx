import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList, getTodo } from "../actions";
import { TypeState as PropsList } from "../reducers/todos";
import { useMemo } from "react";
import { getTodoAPI } from "../../api/getTodoAPI";

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
  const memoList = useMemo(() => list.map((todo: todo) => (
    <TodoItem key={todo.id} {...todo} />
  )), [list]);

  const handleGetTodo = () => {
    getTodoAPI().then((resolve)=>{
      dispatch(getTodo(resolve));
    });
    
  };
  return (
    <div className="todo-list">
      {memoList}
      <div className="bottom">
        <div className="items-left">{}items left</div>
        
        <button 
          className="getTodo"
          onClick={handleGetTodo}
        >
            loadTodo
        </button>

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
