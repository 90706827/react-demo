
import { configureStore } from '@reduxjs/toolkit'
import CountReducer from './CountReducer'

const store = configureStore({
  reducer: {
    count: CountReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store