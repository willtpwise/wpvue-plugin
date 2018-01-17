const path = require('path')
const webpack = require('webpack')
const local = require('./local.json')
const pluginPath = require('./plugin-path.js')
const GenerateFilePlugin = require('generate-file-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const bundleName = {
  css: process.env.NODE_ENV === 'production' ? '[name].[hash].css' : '[name].dev.css',
  js: process.env.NODE_ENV === 'production' ? '[name].[hash].js' : '[name].dev.js'
}

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: bundleName.js,
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/wpvue/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico|pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/[name].[ext]',
            publicPath: ((relative) => {
              return path.join(module.exports.output.publicPath, pluginPath(), 'dist/', relative)
            })
          }
        }
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/fonts/[name].[ext]',
              publicPath: ((relative) => {
                return path.join(module.exports.output.publicPath, pluginPath(), 'dist/', relative)
              })
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(process.env.NODE_ENV === 'production' ? true : false)
    }),
    new GenerateFilePlugin('config/environment.json.js', {
      output: process.env.NODE_ENV === 'production' ?
        'config/environment.json' :
        'config/environment.dev.json'
    }),
    // new ExtractTextPlugin(bundleName.css)
  ]
}
