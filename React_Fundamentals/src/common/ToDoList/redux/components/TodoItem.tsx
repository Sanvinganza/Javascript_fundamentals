import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";
 
interface PropsTodoItem {
    id: number,
    text: string,
    completed: boolean
}

const TodoItem = ({ id, text, completed }: PropsTodoItem) => {
  const dispatch = useDispatch();

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleCompleted = () => {
    dispatch(toggleTodo(id));
  };
  
  const handleDeleted = () => {
    dispatch(deleteTodo(id));
  };
  
  return (
    <div>
      <h6 className="todo-item" style={styled}>
        <input type="checkbox" onClick={handleCompleted}/>
        {text}
        <button className="close" onClick={handleDeleted}></button>
      </h6>
    </div>
  );
};

export default TodoItem;
