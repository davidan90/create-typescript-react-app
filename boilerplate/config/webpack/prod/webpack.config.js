const path = require("path");
const webpack = require("webpack");
const prodPlugins = require("./plugins");
const loaders = require("../loaders");

module.exports = {
    entry: {
        index: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "./../../../dist"),
        publicPath: "./",
        filename: 'bundle.js'
    },
    module: {
        rules: loaders
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json']
    },
    optimization: {
        minimize: true
    },
    devtool: "#source-map",
    plugins: prodPlugins(webpack),
    mode: "production"
};
