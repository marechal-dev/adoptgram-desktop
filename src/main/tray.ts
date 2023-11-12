import path from 'node:path';

import { BrowserWindow, Menu, Tray, nativeImage } from 'electron';

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, '..', '..', 'resourses', 'rotionTemplate.png'),
  );
  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    { label: 'AdoptGram - Moderação', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document');
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Docs',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    { type: 'separator' },
    { label: 'Sair', role: 'quit' },
  ]);

  tray.setContextMenu(menu);
}
