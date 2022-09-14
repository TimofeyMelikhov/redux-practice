import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  repos: []
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, payload) {
      state.loading = false
      state.repos = payload
    },
    fetchError(state, payload) {
      state.loading = false
      state.error = payload
    }
  }
})

export default reposSlice.reducer