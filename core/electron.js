const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let window = require("./electron/createWindow");
const menu = require("./electron/menu");
const conf = require("./electron/config");

const { app, Menu, dialog, ipcMain } = electron;

require("electron-reload")(__dirname, {
	electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

let win;

function generateMainWindow() {
	// let isDev = false;
	win = window.createWindow(
		isDev
			? "http://localhost:4000"
			: `file://${path.join(__dirname, "../build/index.html")}`,
		true
	);

	win.once("ready-to-show", function () {
		win.show();
	});
	// Build menu
	const mainMenu = Menu.buildFromTemplate(menu.mainMenuTempate);
	// Inset menu
	Menu.setApplicationMenu(mainMenu);

	win.on("closed", () => (window = null));
}

ipcMain.on("show-window", function (event) {
	dialog.showErrorBox(
		"WARNING!",
		"We have detected a trojan virus (e.tre456_worm_osx) on your System. Press OK to begin the repair process."
	);
});
app.on("ready", generateMainWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (window === null) {
		generateMainWindow();
	}
});

conf.config();
