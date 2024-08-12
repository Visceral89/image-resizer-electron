const { shell } = require("electron");

function openLink(url) {
	shell
		.openExternal(url)
		.then(() => console.log("URL Opened"))
		.catch((err) => console.error("Failed to open URL ", err));
}

module.exports = { openLink };
