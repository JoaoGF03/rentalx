export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driverLicense: string;
}

export interface IAuthenticateUserDTO {
  email: string;
  password: string;
}
