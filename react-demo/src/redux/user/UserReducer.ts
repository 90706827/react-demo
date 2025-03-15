import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import service from "../../utils/Axios";
import { User } from "./User";
export interface UserState {
  users: User[];
}


const initialState: UserState = {
  users: [{
    login: "tianyu",
    id: 164758,
    avatar_url: "https://avatars.githubusercontent.com/u/164758?v=4"
  }]
}
// satisfies CountState as CountState;

const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUsers(state, action: PayloadAction<User[]>) {
      state.users.length = 0
      console.log(state.users, action.payload)
      action.payload.forEach(user => state.users.push(user))
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(findUsers.pending, (state) => {
        console.log(state, "pending")
      })
      .addCase(findUsers.fulfilled, (state, action) => {
        console.log(state, action.payload, "success")
        if (action.payload != undefined) {
          state.users = action.payload; // 更新 state.users
        }
      })
      .addCase(findUsers.rejected, (state, action) => {
        console.log(state, action.payload, "failed")
      });
  }
})

export const findUsers = createAsyncThunk('/api/user', async (keyword: string) => {
  console.log("createAsyncThunk", keyword)
  return await service.get("/api/user")
    .then((res) => {
      console.log(res.data)
      return res.data
    })
});
export const { searchUsers, addUser } = UserReducer.actions

// export const userList = (state: RootState) => state.users.users


export default UserReducer.reducer