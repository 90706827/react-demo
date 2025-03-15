
import { configureStore } from '@reduxjs/toolkit'
import CountReducer from './CountReducer'
import UserReducer from './user/UserReducer'

const store = configureStore({
  reducer: {
    count: CountReducer,
    users: UserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

export default store