import { axiosSocialApiClient } from '../lib/axios';
import { LoginFormOutput } from '../pages/Login/LoginForm';

export class AuthService {
  public static authenticate(payload: LoginFormOutput) {
    return axiosSocialApiClient.post('/auth/administrators', payload);
  }
}
