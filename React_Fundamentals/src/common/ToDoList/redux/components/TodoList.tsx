import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions";
import { TypeState as PropsList } from "../reducers/todos";
import { useEffect, useMemo, useState } from "react";
import { fetchTodoList } from "../middlewares/fetchTodoList";

type todo = { id: number, text: string, completed: boolean }
type stateType = {
    todos: PropsList
}

const TodoList = () => {
  const { list } = useSelector((state: stateType) => state.todos);
  console.log(list);

  useEffect(
    () => {
      setResultList(list);
    }, [list]
  );

  const [resultList, setResultList] = useState(list);
  const dispatch = useDispatch();
  
  const completedItems = useMemo(() => list.filter((item: todo) => 
    item.completed === true), [list]);

  const incompletedItems = useMemo(() => list.filter((item: todo) => 
    item.completed !== true), [list]);
    
  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const memoList = useMemo(() => resultList.map((todo: todo) => (
    <TodoItem key={todo.id} {...todo} />
  )), [resultList]);

  const handleGetTodo = () => {
    dispatch(fetchTodoList());
  };
  
  const handleSelectedTodos = (e:any) => {
    switch(e.target.value) {
    case "All": setResultList(list); break;
    case "Completed": setResultList(completedItems); break;
    case "Not_Completed": setResultList(incompletedItems); break;
    }
  };

  return (
    <div className="todo-list">
      {memoList.length? memoList: 'List is empty...'}
      <div className="bottom">
        <div className="items-left">{completedItems.length} items left</div>
        
        <button  className="getTodo" onClick={handleGetTodo}>
          newTodo
        </button>

        <select name="select" onChange={handleSelectedTodos}>
          <option value="All" selected>All</option>
          <option value="Completed">Completed</option>
          <option value="Not_Completed">Not Completed</option>
        </select>

        <button type="button" onClick={handleClearList}>
          clear list
        </button>
      </div>
    </div>
  );
};

export default TodoList;
