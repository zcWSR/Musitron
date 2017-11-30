const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, ipcMain } = electron;

let playerWindow;

function createPlayerWindow() {
  playerWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
    transparent: true,
  });

  playerWindow.once('ready-to-show', () => {
    playerWindow.show();
  });
  // and load the index.html of the app.
  playerWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'player.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  playerWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    playerWindow = null;
  });

  ipcMain.on('player/closeWindow', () => {
    playerWindow.hide();
  });

  ipcMain.on('player/minWindow', () => {
    playerWindow.minimize();
  });

  ipcMain.on('player/maxWindow', () => {
    playerWindow.maximize();
  });

  ipcMain.on('player/unmaxWindow', () => {
    playerWindow.unmaximize();
  });
}

app.on('ready', createPlayerWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (playerWindow === null) {
    createWindow();
  } else {
    playerWindow.show();
  }
});

