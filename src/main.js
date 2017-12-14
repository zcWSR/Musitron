const electron = require('electron');
const path = require('path');
const url = require('url');

const {
  app, BrowserWindow, ipcMain
} = electron;

let mainWindow;
let playerWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    show: false,
    frame: false,
    transparent: true,
    webPreferences: { webSecurity: false }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'musitron.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  ipcMain.on('player/closeWindow', () => {
    mainWindow.hide();
  });

  ipcMain.on('player/minWindow', () => {
    mainWindow.minimize();
  });

  ipcMain.on('player/maxWindow', () => {
    mainWindow.maximize();
  });

  ipcMain.on('player/unmaxWindow', () => {
    mainWindow.unmaximize();
  });
}

function createPlayerWindow() {
  playerWindow = new BrowserWindow({
    show: false
  });

  playerWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'player.html'),
    protocol: 'file',
    slashes: true
  }));
}


app.on('ready', () => {
  createMainWindow();
  createPlayerWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow();
  } else {
    mainWindow.show();
  }
});

