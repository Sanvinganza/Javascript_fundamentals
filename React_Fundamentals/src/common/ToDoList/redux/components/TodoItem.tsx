import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import { fetchToggleTodo } from "../middlewares/fetchToggleTodo";
import { PropsList as PropsTodoItem } from "../reducers/todos";

const TodoItem = ({ id, text, completed }: PropsTodoItem) => {
  const dispatch = useDispatch();

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const onSelect = () => {
    dispatch(fetchToggleTodo(id));
  };
  
  const onDelete = () => {
    dispatch(deleteTodo(id));
  };
  
  return (
    <div>
      <div className="todo-item" style={styled}>
        <input className="completed" type="checkbox" onClick={onSelect} defaultChecked={completed}/>
        {text}
        <button className="close" onClick={onDelete}></button>
      </div>
    </div>
  );
};

export default TodoItem;
