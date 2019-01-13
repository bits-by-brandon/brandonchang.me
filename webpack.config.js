const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        hot: true,
        inline: true,
    },
    entry: {
        main: path.join(__dirname, 'src', 'entry.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, 'src/styles/'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};

