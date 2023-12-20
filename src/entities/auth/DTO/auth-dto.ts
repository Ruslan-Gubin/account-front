import { UserModel } from "../domen/auth";

export type RegistrationUserInput = {
  name: string;
  email: string;
  password: string;
  avatar: File;
  date_of_birth: string;
  gender: string;
};

export type RegistrationUserResponse = {
  data: UserModel | null;
  result: "success" | "error";
};

export type AuthorizationInput = {
  [key: string]: string;
  email: string;
  password: string;
};

export type AuthorizationResponse = {
  data: UserModel | null;
  result: "success" | "error";
};

export type EditUserInput = {
  name?: string;
  prevImg?: string;
  newImg?: File;
  password?: string;
  id: string;
};

export type AccountUser = {
  _id: string;
  name: string;
  date_of_birth: string;
  avatar: string;
};

export type GetAllUsersResponse = {
  status: string;
  data: {
    users: AccountUser[];
    text?: string;
  };
};

export type ConnectResponse =
  | string
  | {
      success: boolean;
      test: boolean;
    };
