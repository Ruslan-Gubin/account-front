import { AuthInitState } from "./types";

const initialState: AuthInitState = {
  user: null,
  authorization: false,
  loading: false,
  error: null,
  isRemember: false,
  password: null,
  username: null,
  isModalOpen: false,
  isLogoutModalOpen: false,
};

export { initialState };
