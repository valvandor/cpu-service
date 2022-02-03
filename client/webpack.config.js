const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.bundle.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    
    module: {
      rules: [
          // JavaScript
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader'],
          },
          // CSS
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      ],
    },

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}