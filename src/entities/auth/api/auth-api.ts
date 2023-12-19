import { FetchService } from "../../../shared/api";
import { AuthorizationInput, AuthorizationResponse,  EditUserInput,  GetAllUsersResponse,  RegistrationUserInput, RegistrationUserResponse } from "../DTO/auth-dto";


const authorization = async (payload: AuthorizationInput): Promise<AuthorizationResponse> => {
  const loginUrl = 'login';
  return FetchService.post({ url: loginUrl, payload });
}

const registrationUser = (payload: RegistrationUserInput): Promise<RegistrationUserResponse> => {
  const registrationUrl = 'register';

  return FetchService.post({ url: registrationUrl, payload });
};

const editUser = (payload: EditUserInput): Promise<RegistrationUserResponse> => {
  const editUrl = 'auth-update';

  return FetchService.patch({ url: editUrl, payload });
};

const getAll = (payload: { id: string }): Promise<GetAllUsersResponse> => {
  const editUrl = 'get-all';

  return FetchService.get({ url: editUrl, params:  payload  });
};

export const AuthApi = {
  authorization,
  registrationUser,
  editUser,
  getAll,
}