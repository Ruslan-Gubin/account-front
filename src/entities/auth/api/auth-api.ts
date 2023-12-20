import { FetchService } from "../../../shared/api";
import { AuthorizationInput, AuthorizationResponse,  EditUserInput,  GetAllUsersResponse,  RegistrationUserInput, RegistrationUserResponse } from "../DTO/auth-dto";


const authorization = async (payload: AuthorizationInput): Promise<AuthorizationResponse> => {
  const loginUrl = 'login';
  return FetchService.post({ url: loginUrl, payload });
}

const registrationUser = (payload: RegistrationUserInput): Promise<RegistrationUserResponse> => {

  const formData = new FormData()
  formData.append('avatar', payload.avatar) 
  formData.append('date_of_birth', payload.date_of_birth)
  formData.append('email', payload.email)
  formData.append('gender', payload.gender)
  formData.append('name', payload.name)
  formData.append('password', payload.password)

  const registrationUrl = 'register';

  return FetchService.post({ url: registrationUrl, payload: formData });
};

const editUser = (payload: EditUserInput): Promise<RegistrationUserResponse> => {
  
  const formData = new FormData()
  formData.append('id', payload.id) 

  if (payload.name) {
    formData.append('name', payload.name) 
  }
  if (payload.password) {
    formData.append('password', payload.password) 
  }

  if (payload.prevImg && payload.newImg) {
    formData.append('newImg', payload.newImg) 
    formData.append('prevImg', payload.prevImg) 
  }

  const editUrl = 'auth-update';

  return FetchService.patch({ url: editUrl, payload: formData });
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