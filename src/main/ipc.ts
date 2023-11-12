import { ipcMain } from 'electron';

import { IPC } from '../shared/constants/ipc';

ipcMain.handle(IPC.ACCOUNTS.FETCH_ALL, () => {});
