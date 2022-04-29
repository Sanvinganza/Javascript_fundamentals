// import { useDispatch } from "react-redux";
// import { deleteTodo, toggleTodo } from "../actions";

interface PropsTodoItem {
    id: number,
    text: string,
    completed: boolean
}


const TodoItem = ({ id, text, completed }: PropsTodoItem) => {
//   const dispatch = useDispatch();
  console.log(id);
  //   const changeBackground = (
  //     e: { target: HTMLInputElement; }, 
  //     text: string) => {
  //     e.target.style.borderStyle = text;
  //     e.target.style.backgroundColor = "grey";
  //   };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  //   const handleDelete = () => {
  //     dispatch(deleteTodo(id));
  //   };

  //   const hanldeToggle = () => {
  //     dispatch(toggleTodo(id));
  //   };

  return (
    <div style={styled}>
      <h6 className="todo-item">
        {text}
        <a className="close"></a>
      </h6>
    </div>
  );
};

export default TodoItem;
