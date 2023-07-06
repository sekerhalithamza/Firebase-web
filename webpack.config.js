const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/bundler.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
