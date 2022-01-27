import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "../features/ui/uiSlice";

const rootReducer = combineReducers({ ui: uiSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;