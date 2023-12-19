export interface UserModel {
  createdAt: string;
  date_of_birth: string;
  email: string;
  gender: string;
  avatar: { public_id: string; url: string };
  name: string;
  token: string;
  updatedAt: string;
  _id: string;
  error?: { text: string };
  text?: string; 
}








