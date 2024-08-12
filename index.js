const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const {
	WINDOW_TITLE,
	WINDOW_HEIGHT,
	WINDOW_WIDTH,
} = require("./constants/constants");

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

const createWindow = () => {
	const win = new BrowserWindow({
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.loadFile("index.html");
};
