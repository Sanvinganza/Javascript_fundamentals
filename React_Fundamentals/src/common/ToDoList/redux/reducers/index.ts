import { combineReducers } from "redux";
import rootReducerTodos from "./todos";

const rootReducer = combineReducers({
  rootReducerTodos
});

export default rootReducer;