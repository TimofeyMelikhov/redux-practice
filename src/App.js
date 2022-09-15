import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, addTodo, removelastTodo } from './redux/slices/slice';
import { fetchRepos } from './redux/actions/reposActions'

function App() {

  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  return (
    <div className="App">
      <h1> Счетчик: {count} </h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>уменьшить</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>добавить задачу</button>
      <button onClick={() => dispatch(removelastTodo())}>удалить последнюю задачу</button>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}> Имя животного: {todo.name} </li>
        }
        )}
      </ul>
    </div>
  );
}

export default App;
