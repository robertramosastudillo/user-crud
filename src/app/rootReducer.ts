import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "../features/ui/uiSlice";
import userSlice from "../features/user/userSlice";

const rootReducer = combineReducers({ ui: uiSlice, user: userSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
