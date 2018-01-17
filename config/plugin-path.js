const path = require('path')

module.exports = function pluginPath () {
  var path = __dirname + __dirname
  path = path.replace(/.*\/wp-content\//g, '/wp-content/')
  path = path.replace(/\/config/, '/')
  return path
}
