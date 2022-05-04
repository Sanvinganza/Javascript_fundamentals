import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import TodoInput from './redux/components/TodoInput';
import TodoList from './redux/components/TodoList';
import rootReducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

export default function ToDoList () {
  const store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware));

  return (
    <div className="todo">
      <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  );
}
