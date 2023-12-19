import { CONFIG_APP, CookieService, createAppThunk } from "../../../shared";
import { AuthorizationInput, EditUserInput, RegistrationUserInput } from "../DTO/auth-dto";
import { authAdapter } from "../service";


export const fetchAuthorization = createAppThunk(
  "auth/fetchAuthorization",
  async (payload: AuthorizationInput, { rejectWithValue }) => {
    const response = await authAdapter.authorization(payload);

    if (response.data && 'text' in response.data ) {
      return rejectWithValue(
        `${response.data.text}`
      );
    }

    if (response.data?.token) {
      CookieService.set( response.data.token, CONFIG_APP.TOKEN)
    }

    return response.data;
  }
);

export const fetchRegistration = createAppThunk(
  "auth/fetchRegistration",
  async (payload: RegistrationUserInput, { rejectWithValue }) => {
    const response = await authAdapter.registrationUser(payload);
 
    if (response.data && 'text' in response.data ) {
      return rejectWithValue(
        `${response.data.text}`
      );
    }

     if (response.data?.token) {
      CookieService.set( response.data.token, CONFIG_APP.TOKEN)
    }
   
    return response.data;
  }
);

export const fetchEditUser = createAppThunk(
  "auth/fetchEditUser",
  async (payload: EditUserInput, { rejectWithValue }) => {
    const response = await authAdapter.editUser(payload);
 
    if (response.data && 'text' in response.data ) {
      return rejectWithValue(
        `${response.data.text}`
      );
    }
    
    const avatar = response.data?.avatar;
    const name = response.data?.name;

    return { avatar, name };
  }
);


