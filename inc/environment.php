<?php
/**
 * Environment config
 *
 * Handles the interaction between webpack and runtime PHP
 */

( function () {
  global $wpvue_plugin;

  $prod_env = 'environment.json';
  $dev_env = 'environment.dev.json';
  $config_path = $wpvue_plugin->dir() . 'dist/config/';
  $config_contents = scandir($wpvue_plugin->dir() . 'dist/config/');

  // Load the content
  $env = in_array($dev_env, $config_contents) ? $dev_env : $prod_env;
  $env = file_get_contents($config_path . $env);
  $env = json_decode($env);

  // Define the file's contents
  $GLOBALS['WPVUE_PLUGIN_ENV'] = $env->node;
  $GLOBALS['WPVUE_PLUGIN_HASH'] = $env->node === 'production' ? $env->hash : 'dev';
})();
