<?php
/**
 * Utilities class
 *
 * This is the main utility class used to manage paths. It should overide other
 * wpvue_plugin instances when constructed.
 */

global $wpvue_plugin;
// $wpvue_plugin = new WPVUE_Plugin();

$wpvue_plugin = new class {
  /**
   * Returns the http path to the plugins root, including a trailing slash
   * E.g. http://your-host.com/wp-content/plugins/your-plugin/
   */
  public function uri () {
    return $GLOBALS['WPVUE_PLUGIN_URI'];
  }

  /**
   * Returns the file system path to the plugins root, including a trailing slash
   * E.g. /your-server/wp-content/plugins/your-plugin/
   */
  public function dir () {
    return $GLOBALS['WPVUE_PLUGIN_DIR'] . '/';
  }

  /**
   * Returns the current HASH from webpack's build
   * See: inc/environment.php
   */
  public function hash () {
    return $GLOBALS['WPVUE_PLUGIN_HASH'];
  }

  /**
   * Returns the current ENV from webpack's build
   * See: inc/environment.php
   */
  public function env () {
    return $GLOBALS['WPVUE_PLUGIN_ENV'];
  }

  /**
   * Returns the directory name of the plugin's folder
   */
  public function dirname () {
    $pattern = '/.*\/wp-content\/plugins\//';
    $path = preg_replace($pattern, '', $this->dir());
    $path = str_replace('/', '', $path);
    return $path;
  }
};
