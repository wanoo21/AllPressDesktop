const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
const radioListPath = 'http://allpress.today/assets/radio-list/';

let menu = Menu.buildFromTemplate([
    {
        label: 'Toggle Dev. Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
            focusedWindow && focusedWindow.webContents.toggleDevTools()
        }
    }
]);

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        height: 600,
        width: 700
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.openDevTools();
    Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
    app.quit()
});