import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import TodoInput from './redux/components/TodoInput';
import TodoList from './redux/components/TodoList';
import rootReducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { useDispatch } from 'react-redux';

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

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
