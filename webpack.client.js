const path = require('path');
const baseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
})