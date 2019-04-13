const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, 'src', 'entry.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {Styles: path.resolve(__dirname, 'src/styles/')}
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {targets: {browsers: "last 2 versions"}} // or whatever your project requires
            ],
            "@babel/preset-typescript",
            "@babel/preset-react"
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", {legacy: true}],
            ["@babel/plugin-proposal-class-properties", {loose: true}],
            "react-hot-loader/babel"
          ]
        }
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
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
};

