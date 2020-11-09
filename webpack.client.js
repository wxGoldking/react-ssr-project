const path = require('path');
const baseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { 
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              modules: {
                compileType: 'module',
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
            }
          }
        ]
      },
    ]
  }
})