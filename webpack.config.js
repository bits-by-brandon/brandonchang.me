var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: getEntrySources([
            './app/entry.js'
        ])
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        }),
    ]
}

function getEntrySources(sources){
    if(process.env.NODE_ENV !== 'production'){
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}
