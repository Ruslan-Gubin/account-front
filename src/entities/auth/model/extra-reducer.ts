import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAuthorization, fetchEditUser, fetchRegistration } from "./thunk";
import { AuthInitState } from "./types";

export const extraReducers = ( 
  builder: ActionReducerMapBuilder<AuthInitState>
) => {
  builder
    .addCase(fetchRegistration.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRegistration.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
  
      state.authorization = false;
    })
    .addCase(fetchRegistration.fulfilled, (state, action) => {
      state.authorization = true;
      state.user = action.payload
    
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchAuthorization.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAuthorization.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
      state.authorization = false;
    })
    .addCase(fetchAuthorization.fulfilled, (state, action) => {
      state.authorization = true;
      state.user = action.payload
      
      state.loading = false;
      state.error = null;
    });
  builder
    .addCase(fetchEditUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchEditUser.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchEditUser.fulfilled, (state, action) => {
      const { avatar, name } = action.payload;
      
      if (name && avatar && state.user) {
        state.user = {
            ...state.user,
          avatar,
          name,
        }
      }
      
      state.loading = false;
      state.error = null;
    });
 
};
