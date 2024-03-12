export interface ISignUpData {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  password: string;
  email: string;
  phone: string;
}

export interface ISignInData {
  password: string;
  email: string;
}
