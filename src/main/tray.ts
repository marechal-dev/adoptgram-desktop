import path from 'node:path';

import { BrowserWindow, Menu, Tray, nativeImage } from 'electron';

export function createTray(_: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, '..', '..', 'resourses', 'rotionTemplate.png'),
  );
  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    { label: 'AdoptGram - Administração', enabled: false },
    { type: 'separator' },
    { label: 'Sair', role: 'quit' },
  ]);

  tray.setContextMenu(menu);
}
