const rules = require("./webpack.rules");
const path = require("path");

rules.push({
	test: /\.scss$/,
	use: [
		{ loader: "style-loader" },
		{ loader: "css-loader" },
		{ loader: "sass-loader" },
	],
});

module.exports = {
	module: {
		rules,
	},
	// Make sure to specify where the output should go
	output: {
		filename: "renderer.js",
		path: path.resolve(__dirname, "dist"),
	},
};
