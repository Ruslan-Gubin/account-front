import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers,
});

