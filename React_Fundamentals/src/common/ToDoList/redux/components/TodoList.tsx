import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions";
import { TypeState as PropsList } from "../reducers/todos";
import { useEffect, useMemo, useState } from "react";
import { fetchTodoList } from "../middlewares/fetchTodoList";
import { Loading } from "./Loading";

type todo = { id: number, text: string, completed: boolean }

type stateType = {
  todos: PropsList,
  isLoading: boolean
}

const TodoList = () => {
  const { list } = useSelector((state: stateType) => state.todos);
  const isLoading = useSelector((state: stateType) => state.todos.isLoading);
  const [resultList, setResultList] = useState(list);
  const dispatch = useDispatch();
  console.log(isLoading);
  useEffect(
    () => {
      setResultList(list);
    }, [list]
  );

  const memoList = useMemo(() => resultList.map((todo: todo) => (
    <TodoItem key={todo.id} {...todo} />
  )), [resultList]);

  const completedItems = useMemo(() => list.filter((item: todo) => 
    item.completed === true), [list]);

  const incompletedItems = useMemo(() => list.filter((item: todo) => 
    item.completed !== true), [list]);

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const handleGetTodo = () => {
    dispatch(fetchTodoList());
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectedTodos = (e:any) => {
    switch(e.target.value) {
    case "All": setResultList(list); break;
    case "Completed": setResultList(completedItems); break;
    case "Not_Completed": setResultList(incompletedItems); break;
    }
  };

  return (
    <div className="todo-list">
      {isLoading? <Loading />:
        (memoList.length? memoList: 'List is empty...')}
      <div className="bottom">
        <div className="items-left">{completedItems.length} items left</div>
        
        <button  className="getTodo" onClick={handleGetTodo}>
          newTodo
        </button>

        <select name="select" onChange={handleSelectedTodos}>
          <option value="All">All</option>
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
