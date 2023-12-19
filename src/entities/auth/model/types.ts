import { UserModel } from "../domen/auth";


export type AuthInitState = {
  user: UserModel | null,
  authorization: boolean,
  loading: boolean;
  error: string | null;
  isRemember: boolean;
  password: string | null,
  username: string | null,
  isModalOpen: boolean;
  isLogoutModalOpen: boolean;
};
