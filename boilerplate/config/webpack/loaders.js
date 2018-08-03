const path = require("path");

module.exports = [
    {
        test: /\.(tsx|ts|js)?$/,
        use: ['ts-loader'],
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
        test: /\.json$/,
        loader: 'json-loader'
    },

    {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=src/assets/fonts/**/[name].[ext]'
    },

    {
        test: /\.(png|gif|jpg|jpeg|ico)$/,
        loader: 'file-loader?name=src/assets/images/**/[name].[ext]'
    }
];
