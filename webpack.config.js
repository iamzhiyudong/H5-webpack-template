const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    contentBase: 'src',
    port: 3000,
    // hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      // 配置postcss
      {
        test: /\.css$/, 
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] }, //配置处理 .less 文件的第三方 loader 规则
      {
        test: /\.(jpg|png|gif|bmp|svg)$/,
        use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}