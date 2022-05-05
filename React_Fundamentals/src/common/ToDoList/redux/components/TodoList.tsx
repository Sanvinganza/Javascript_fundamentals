import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions";
import { State as PropsList } from "../reducers/todos";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { fetchTodoList } from "../middlewares/fetchTodoList";
import { Loading } from "./Loading";
import { PropsList as PropsTodo} from "../reducers/todos";

type rootState = {
  rootReducerTodos: PropsList
  isLoading: boolean
}

const TodoList = () => {
  const list = useSelector((state: rootState) => state.rootReducerTodos.list);
  const isLoading = useSelector((state: rootState) => state.rootReducerTodos.isLoading);
  const [resultList, setResultList] = useState(list);
  const dispatch = useDispatch();

  useEffect(
    () => {
      setResultList(list);
    }, [list]
  );

  const memoList = useMemo(() => resultList.map((todo: PropsTodo) => (
    <TodoItem key={todo.id} {...todo} />
  )), [resultList]);

  const completedItems = useMemo(() => list.filter((item: PropsTodo) => 
    item.completed), [list]);

  const incompletedItems = useMemo(() => list.filter((item: PropsTodo) => 
    !item.completed), [list]);

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const loadingTodo = () => {
    dispatch(fetchTodoList());
  };
  
  const onSelecteOption = (e: FormEvent<HTMLSelectElement>) => {
    switch(e.currentTarget.value) {
    case "All": setResultList(list); break;
    case "Completed": setResultList(completedItems); break;
    case "Not_Completed": setResultList(incompletedItems); break;
    }
  };

  return (
    <div className="todo-list">
      {isLoading? <Loading />:
        (memoList.length? memoList: 'List is empty...')}
      <div className="footer">
        <div className="items-left">{memoList.length - completedItems.length} items left</div>
        
        <button  className="getTodo" onClick={loadingTodo}>
          newTodo
        </button>

        <select name="select" onChange={onSelecteOption}>
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
