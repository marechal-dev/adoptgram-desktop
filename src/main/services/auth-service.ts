import {
  IAuthenticateRequest,
  IAuthenticateResponse,
} from '~/src/shared/types/ipc';

import { axiosSocialApiClient } from '../lib/axios';

interface IAxiosAuthenticateResponse {
  accessToken: string;
  role: 'Administrator';
}

export class AuthService {
  public static async authenticate(payload: IAuthenticateRequest) {
    const response = await axiosSocialApiClient.post(
      '/auth/administrators',
      payload,
    );

    return this.#adapt(response.data as IAxiosAuthenticateResponse);
  }

  static #adapt(payload: IAxiosAuthenticateResponse): IAuthenticateResponse {
    return {
      accessToken: payload.accessToken,
      role: payload.role,
    };
  }
}
