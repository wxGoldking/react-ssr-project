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
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            esModule: false,
            importLoaders: 1,
            modules: {
              compileType: 'module',
              localIdentName: '[name]_[local]_[hash:base64:5]'
            },
          }
        }]
      },
    ]
  }
})