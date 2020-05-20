const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node-modules/,
            loader: 'babel-loader'
                // use: ['babel-loader', 'eslint-loader'],
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
}