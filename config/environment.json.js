/**
 * Node-processed variables which will be passed to the PHP engine
 *
 * See dist/config/environment.json for raw output
 * See inc/environment.php for PHP management
 */
module.exports = JSON.stringify({
  hash: module.compilation.hash,
  node: process.env.NODE_ENV || 'development',
  brand: process.env.BRAND
})
