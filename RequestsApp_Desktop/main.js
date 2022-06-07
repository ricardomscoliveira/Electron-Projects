const electron = require('electron');
const path = require('path');
const url = require('url');
require('v8-compile-cache');


// Hot Reload
try {
  require('electron-reloader')(module)
} catch (_) { }

// SET ENV
process.env.NODE_ENV = 'production';

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

  app.on('ready', function () {

    // Main Window
    mainWindow = new BrowserWindow({
      autoHideMenuBar: true,
      fullscreen: true,
      webPreferences: {
        nodeIntegration: true,
      }
    });
  
    // Load html in window
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file:',
      slashes: true
    }));
  
    // Quit app when closed
    mainWindow.on('closed', function () {
      app.quit();
    });
  
  });

