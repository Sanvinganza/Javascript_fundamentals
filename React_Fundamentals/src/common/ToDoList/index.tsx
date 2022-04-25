import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoInput from './redux/components/TodoInput';
import TodoList from './redux/components/TodoList';
import rootReducer from './redux/reducers';

export default function ToDoList () {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}
