import './App.css';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, addTodo, removelastTodo } from './redux/slices/slice';
// import { fetchRepos } from './redux/actions/reposActions'

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case 'minLengthError': 
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
      }
    }
  }, [value])

  return {
    isEmpty,
    minLengthError
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

function App() {

  const email = useInput('', {isEmpty: true, minLength: 3})
  const password = useInput('', {isEmpty: true, minLength: 5})

  // const count = useSelector(state => state.toolkit.count)
  // const todos = useSelector(state => state.toolkit.todos)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchRepos())
  // }, [dispatch])

  return (
    <div className="App">

    <form>
      <h1>Регистрация</h1>
      {(email.isDirty && email.isEmpty) && <div style={{color:'red'}}> Поле не может быть пустым </div>}
      {(email.isDirty && email.minLengthError) && <div style={{color:'red'}}> Некорректная длина </div>}
      <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="text" name="email" placeholder='Enter your email...'/>
      <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} type="password" name="password" placeholder='Enter your password...'/>
      <button type="submit">Registration</button>
    </form>

      {/* <h1> Счетчик: {count} </h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>уменьшить</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>добавить задачу</button>
      <button onClick={() => dispatch(removelastTodo())}>удалить последнюю задачу</button>

      <ul>
        {todos.map(todo => {
            return <li key={todo.id}> <h4> {todo.name} </h4> <img src={todo.image_link} alt="" /> </li>
          }
        )}
      </ul> */}
      
    </div>
  );
}

export default App;
