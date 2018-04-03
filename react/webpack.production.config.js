'use strict'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    bundle: [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/'
  },
  devtool: false,
  stats: {
    colors: true,
    reasons: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'src': path.join(__dirname, './src'),
      'js': path.join(__dirname, './src/js'),
      'assets': path.join(__dirname, './src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src/')
      },
      {
        test: /\.(html|ttf|eot|png|gif|jpg|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitspace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}
