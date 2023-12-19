import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AuthInitState } from "./types";

export const reducers = {

  logoutAuth(state: AuthInitState) {
    state.authorization = false;
    state.user = null;
  },

  refreshErrorText(state: AuthInitState) {
    state.error = null;
  },

  rememberToggle (state: AuthInitState) {
    state.isRemember = !state.isRemember
  },

  rememberUser (state: AuthInitState, action: PayloadAction<{ username: string | null, password: string | null}>) {
    state.password = action.payload.password
    state.username = action.payload.username
  },

  setToogleModal (state: AuthInitState) {
    if (state.isModalOpen) {
      state.isModalOpen = false
    } else {
      state.isModalOpen = true
    }
  },
  setToogleLogoutModal (state: AuthInitState) {
    if (state.isLogoutModalOpen) {
      state.isLogoutModalOpen = false
    } else {
      state.isLogoutModalOpen = true
    }
  },
  
};
