import { AuthorizationInput } from "../DTO/auth-dto";


export class AuthStorageService {
  constructor() {}

  public loginAuth({ email, password }: AuthorizationInput): AuthorizationInput | null {

    const validLogin = email.length > 1  
    const validPass = password.length > 1

    if (!validLogin || !validPass) return null;

    return {
      email,
      password,
    }
  }



}