import { combineReducers } from "@reduxjs/toolkit";
import { authReducer, layoutReducer, notificationReducer } from "../../../entities";


export const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  layout: layoutReducer,

});
