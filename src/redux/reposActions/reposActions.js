import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchRepos = () => {
  return async (Dispatch) => {
    try {
      const response = await axios.get('https://api.github.com/users/TimofeyMelikhov')
      console.log(response)
    } catch(e) {

    }
  }
}