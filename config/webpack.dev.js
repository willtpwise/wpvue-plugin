const baseWebpackConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const autoInjectPlugin = require('auto-inject-webpack-plugin')
const GenerateFilePlugin = require('generate-file-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const local = require('./local.json')

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      proxy: local.proxy,
      files: [
        '**/*.php'
      ],
      reloadDelay: 0
    })
  ]
})
