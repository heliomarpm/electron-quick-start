// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')
const path = require('path')

// const isDebug = !app.isPackaged;
const isDebug = process.argv.indexOf("--developer") != -1;

function createWindow() {
    const size = screen.getPrimaryDisplay().workAreaSize

    // Create the browser window.
    const mainWindow = new BrowserWindow({
        icon: __dirname + "/src/assets/build/icon.png",
        minWidth: 650,
        minHeight: 550,
        width: 650,
        height: size.height - 150,
        resizable: true,
        maximizable: true,
        webPreferences: {
            nodeIntegration: true,
            // enableRemoteModule: true,
            // contextIsolation: true,
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
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.