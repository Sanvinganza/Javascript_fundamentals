import { Provider } from 'react-redux';
import TodoInput from './redux/components/TodoInput';
import TodoList from './redux/components/TodoList';
import rootReducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunkMiddleware]
});

export default function ToDoList () {
  return (
    <div className="todo">
      <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  );
}
