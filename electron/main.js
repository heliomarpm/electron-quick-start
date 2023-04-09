// Modules to control application life and create native browser window
const { app, BrowserWindow, screen, session, shell, ipcMain } = require('electron')
const path = require('path')
const pkg = require("../package.json")
// const isDebug = !app.isPackaged;
const isDebug = process.argv.indexOf("--developer") != -1;

let mainWindow = null;
function createWindow() {
    const size = screen.getPrimaryDisplay().workAreaSize

    // Create the browser window.
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, "../src/assets/icons/icon.png"),
        title: `${pkg.productName} | ${pkg.description} - v${pkg.version}`,
        minWidth: 650,
        minHeight: 550,
        width: 650,
        height: size.height - 150,
        resizable: true,
        maximizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('src/index.html')

    // Open the DevTools.
    if (isDebug) {
        mainWindow.openDevTools(); //{ mode: 'detach' });
        mainWindow.maximize();
    }

    allOpenExternalUrl(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    // header security policy
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': ['script-src \'self\'']
            }
        })
    })

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        const allWindows = BrowserWindow.getAllWindows()
        allWindows.length === 0 ? createWindow() : allWindows[0].focus();
    });
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    mainWindow = null
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

let aboutWin = null;
ipcMain.on('openAbout', () => {
    if (aboutWin == null) {
        aboutWin = new BrowserWindow({
            width: 800,
            height: 630,
            // frame: false,
            autoHideMenuBar: true,
        });

        allOpenExternalUrl(aboutWin);
        aboutWin.on('closed', () => {
            aboutWin = null;
        });
    }
    console.log('aboutWin');
    aboutWin.loadURL(`file://${__dirname}/../src/about.html`);
});

function allOpenExternalUrl(window) {
    // Make all links open with the browser, not with the application
    window.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:')) shell.openExternal(url)
        return { action: 'deny' }
    })
}