import { ipcMain } from 'electron';

import { IPC } from '../shared/constants/ipc';
import {
  IAuthenticateRequest,
  IAuthenticateResponse,
} from '../shared/types/ipc';

import { AuthService } from './services/auth-service';

ipcMain.handle(
  IPC.AUTH.AUTHENTICATE,
  (_, payload: IAuthenticateRequest): Promise<IAuthenticateResponse> =>
    AuthService.authenticate(payload),
);

ipcMain.handle(IPC.ACCOUNTS.FETCH_ALL, () => {});
