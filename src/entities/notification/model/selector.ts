import { useAppSelector } from "../../../shared";
import { notificationSlice } from "./slice";

const notificationSelect = (state: RootState) => state.notification;
export const notificationAction = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;

export const useNotificationSelect = () => {
  return useAppSelector(notificationSelect);
};
