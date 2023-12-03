export interface IAuthenticateRequest {
  email: string;
  password: string;
}

export interface IAuthenticateResponse {
  role: 'Administrator';
  accessToken: string;
}
