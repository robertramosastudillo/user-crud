import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./userState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    collapsedMenu: (state, { payload }: PayloadAction) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { collapsedMenu } = userSlice.actions;
export default userSlice.reducer;