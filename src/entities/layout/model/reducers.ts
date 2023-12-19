import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { LayoutModel } from "../domain/layout";

export const reducers = {

  toggleMenuIsOpen(state: LayoutModel, action: PayloadAction<{value?: boolean | null}>) {
    if (typeof action.payload.value !== 'boolean') {
      state.sideBarSubMenuOpen = !state.sideBarSubMenuOpen
    } else {
      state.sideBarSubMenuOpen = action.payload.value
    }
  },

  changeMenuItemActive(state: LayoutModel, action: PayloadAction<{value: string}>) {
      if (state.currentItemMenu === action.payload.value) {
        state.currentItemMenu = ''
      } else { 
        state.currentItemMenu = action.payload.value
      }
  },
  
};
