'use strict';
const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const Tail = require('tail').Tail;

require('electron-debug')({
	showDevTools: true
});

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 600,
		height: 400
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
// init app menu
	const template = require('./app-menu.js').template;
	console.log("menu template", template);
	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	mainWindow = createMainWindow();
});

app.on('opened-file', (event) => {
	console.log('RAISED EVENT opened-file', event);

	const tail = new Tail(event.file, '\n', {}, true);

	tail.on('line', data => {
		console.log(data) ;
		mainWindow.webContents.send('append-line', { data: data });
	});
});
