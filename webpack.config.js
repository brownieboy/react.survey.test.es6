var webpack = require("webpack");
var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/App')],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            // test for both js and jsx
            test: /\.jsx?$/,

            // use babel loader with Stage 1 features
            loader: 'babel?stage=1',

            // operate only on our app directory
            include: path.resolve(ROOT_PATH, 'app')
        }]
    }
};

if (TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel?stage=1',
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }
    });
}

if(TARGET === 'dev') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}