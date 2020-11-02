const path = require('path');
const baseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
})