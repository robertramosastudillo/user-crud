import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userAction";
import { initialState } from "./userState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
        state.users = payload;
    },
    [getUsers.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const { getUsers } = userSlice.actions;
export default userSlice.reducer;
