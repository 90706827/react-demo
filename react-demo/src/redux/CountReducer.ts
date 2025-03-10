import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export interface CountState {
  count: number
}

const initialState: CountState = {
  count: 2
}
// satisfies CountState as CountState;

const CountReducer = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      console.log(state,action.payload)
      state.count += action.payload
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload
    },
  }
})

export const { increment, decrement } = CountReducer.actions

export const selectCount = (state: RootState) => state.count



export default CountReducer.reducer