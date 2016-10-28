const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 620 })
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    // mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function() {
    mainWindow = null
    })
}

app.on('ready', function() {
    createWindow()
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }

})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})

