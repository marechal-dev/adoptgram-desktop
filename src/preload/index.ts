/* eslint-disable @typescript-eslint/naming-convention */
import { ElectronAPI } from '@electron-toolkit/preload';
import { contextBridge } from 'electron';

const api = {};

declare global {
  export interface Window {
    electron: ElectronAPI;
    api: typeof api;
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.api = api;
}
