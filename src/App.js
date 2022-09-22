/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import './App.css';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, addTodo, removelastTodo } from './redux/slices/slice';
// import { fetchRepos } from './redux/actions/reposActions'


const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;
        case 'isEmail':
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break;
      }
    }
  }, [value, validations])

  useEffect(() => {
    if(isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid
  }

}


const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = e => {
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

  const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
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
        {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div> }
        {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Некорректная длина</div> }
        {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Некорректный емайл</div> }
        <input value={email.value} onChange={email.onChange} onBlur={email.onBlur} type="text" name="email" placeholder='Enter your email...'/>
        {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div> }
        {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>Некорректная длина</div> }
        <input value={password.value} onChange={password.onChange} onBlur={password.onBlur} type="password" name="password" placeholder='Enter your password...'/>
        <button disabled={!email.inputValid || !password.inputValid} type="submit">Registration</button>
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
