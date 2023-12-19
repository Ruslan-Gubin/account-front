import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { NotificationInitState } from "./types";

export const reducers = {
  
  activeNotification(
    state: NotificationInitState,
    action: PayloadAction<{ message: string, status: 'error' | 'success'; }>
  ) {
    const { message, status } = action.payload

    if (state.notificationList.length === 0) {
      state.notificationList.push({
        message,
        status,
        timeFrom: new Date().toString()
      })
    }
  },

  clearNotification(
    state: NotificationInitState,
    action: PayloadAction<{ time: string }>
  ) {
    state.notificationList = state.notificationList.filter(item => item.timeFrom !== action.payload.time)
  },

 

  
};
