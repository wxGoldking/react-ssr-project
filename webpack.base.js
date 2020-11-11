const path = require('path');
module.exports = {
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"], //引入文件时支持省略后缀,配置越多性能消耗越多
    alias: {
        "@": path.resolve(__dirname, "../src"), //引用文件时可以用“@”代表“src”的绝对路径，样式文件中为“~@”
    }
  }
}