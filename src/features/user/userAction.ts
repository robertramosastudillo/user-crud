import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
    const res = await fetch("http://localhost:4000/api/users").then((data) =>
      data.json()
    );
    return res;
  });