import { createSlice } from "@reduxjs/toolkit"

export const toolkitSlice = createSlice({
  name: 'toolkitSlice',
  initialState: {
    count: 0,
    todos: ['разобраться с toolkit']
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removelastTodo(state) {
      state.todos.pop()
    }
  }
})

export default toolkitSlice.reducer
export const {increment, decrement, addTodo, removelastTodo} = toolkitSlice.actions