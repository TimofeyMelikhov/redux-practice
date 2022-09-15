import axios from "axios"
import { addTodo } from '../slices/slice'

export const fetchRepos = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/10')
      dispatch(addTodo(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}