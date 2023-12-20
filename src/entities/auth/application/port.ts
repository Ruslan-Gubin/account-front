import { CustomError } from "../../../shared/types/custom_error";
import { AuthorizationInput, AuthorizationResponse, ConnectResponse, EditUserInput, GetAllUsersResponse, RegistrationUserInput, RegistrationUserResponse } from "../DTO/auth-dto";


export interface AuthService {
  authorization: (args: AuthorizationInput) => Promise<AuthorizationResponse | CustomError>;
  registrationUser: (payload: RegistrationUserInput) => Promise<RegistrationUserResponse | CustomError>;
  editUser: (payload: EditUserInput) => Promise<RegistrationUserResponse | CustomError>;
  getAll: (payload: { id: string }) => Promise<GetAllUsersResponse | CustomError>;
  connect: () => Promise<ConnectResponse>;
}
