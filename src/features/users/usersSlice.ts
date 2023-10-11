import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./usersService"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await getUsers()
  return response
})

const initialState = {
  entities: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // @ts-ignore
      state.entities.push(...action.payload)
    })
  }
});

export default usersSlice.reducer;
