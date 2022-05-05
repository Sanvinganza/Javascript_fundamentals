import { Provider } from 'react-redux';
import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import TodoInput from './redux/components/TodoInput';
import TodoList from './redux/components/TodoList';
import rootReducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { RootReducer } from './redux/reducers/todos';

const store: Store<RootReducer, AnyAction> = createStore(rootReducer, 
  applyMiddleware(thunkMiddleware));

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
