const baseWebpackConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const GenerateFilePlugin = require('generate-file-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
