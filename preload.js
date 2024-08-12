const { contextBridge, shell } = require("electron");
const { openLink } = require("./utils/links");

contextBridge.exposeInMainWorld("electronAPI", {
	openLink: openLink,
});
