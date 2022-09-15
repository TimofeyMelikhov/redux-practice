import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from './slices/slice'

const rootReducer = combineReducers({
  toolkit: toolkitSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}