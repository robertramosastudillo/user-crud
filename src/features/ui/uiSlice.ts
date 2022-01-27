import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./uiState";

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    collapsedMenu: (state, { payload }: PayloadAction) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { collapsedMenu } = uiSlice.actions;
export default uiSlice.reducer;