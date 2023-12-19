import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers,
});

