const path = require("path");
const webpack = require("webpack");
const loaders = require("../loaders");
const devPlugins = require("./plugins");
const { PROTOCOL, HOST, PORT } = require("../env");

module.exports = {
    entry: [
        `webpack-dev-server/client?${PROTOCOL}://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: loaders
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.json']
    },
    devtool: "#eval-source-map",
    plugins: devPlugins(webpack),
    mode: "development"
};
