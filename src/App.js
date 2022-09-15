import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, addTodo, removelastTodo } from './redux/slices/slice';

function App() {

  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> Счетчик: {count} </h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>уменьшить</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>добавить задачу</button>
      <button onClick={() => dispatch(removelastTodo())}>удалить последнюю задачу</button>
      <ul>
        {todos.map(todo => 
          <li key={todo}>{todo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
