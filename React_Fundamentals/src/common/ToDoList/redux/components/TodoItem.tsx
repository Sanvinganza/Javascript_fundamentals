import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";
 
interface PropsTodoItem {
    id: number,
    text: string,
    completed: boolean
}

const TodoItem = ({ id, text, completed }: PropsTodoItem) => {
  const dispatch = useDispatch();
  console.log(id);
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
      <div className="todo-item" style={styled}>
        <input className="completed" type="checkbox" onClick={handleCompleted}/>
        {text}
        <button className="close" onClick={handleDeleted}></button>
      </div>
    </div>
  );
};

export default TodoItem;
