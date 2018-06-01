const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const env = process.env.NODE_ENV

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
        ]
    },

    module: {
        rules: [
            
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },

            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.scss$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=src/assets/fonts/**/[name].[ext]'
            },

            {
                test: /\.(png|gif|jpg|jpeg|ico)$/,
                loader: 'file-loader?name=src/assets/images/**/[name].[ext]'
            }

        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new UglifyWebpackPlugin(),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ],
};
