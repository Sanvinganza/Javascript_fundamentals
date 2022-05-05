import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../middlewares/fetchTodo";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = useCallback(event => {
    if (text !== "") {
      dispatch(fetchTodo(text));
      setText("");
    } else {
      alert("cant not to empty text");
    }
    event.preventDefault();
  }, [text]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a todo item"
        name="todo"
        value={text}
        onChange={event => setText(event.target.value)}
      />
    </form>
  );
};

export default TodoInput;
