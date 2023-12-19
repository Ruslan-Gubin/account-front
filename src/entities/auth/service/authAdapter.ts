import { AuthApi } from "../api/auth-api";
import { AuthService } from "../application/port";


export const authAdapter: AuthService = {
   authorization(payload) {
       return AuthApi.authorization(payload)
   },
   registrationUser(payload) {
    return AuthApi.registrationUser(payload)
   },
   editUser(payload) {
    return AuthApi.editUser(payload)  
   },
   getAll(payload) {
    return AuthApi.getAll(payload)  
   },
};
