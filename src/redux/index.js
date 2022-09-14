import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reposSlice from './slices/slice'

const rootReducer = combineReducers({
  repos: reposSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}