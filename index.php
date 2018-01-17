<?php
/*
  Plugin Name: WPVue-Plugin
  Plugin URI: #
  Description: Wordpress, Vue.js, SCSS & JS Plugin Pack
  Author: William Wise <will@williamwise.net>
  Version: 0.0.0
*/

$GLOBALS['WPVUE_PLUGIN_DIR'] = __DIR__;
$GLOBALS['WPVUE_PLUGIN_URI'] = plugin_dir_url(__FILE__);

require __DIR__ . '/inc/utils.php';
require __DIR__ . '/inc/environment.php';
require __DIR__ . '/inc/dependencies.php';

add_action('admin_menu', function () {
  global $wpvue_plugin;
  global $wpvue_capability;

  // Page title
  $wpvue_page_title = 'WPVUE Plugin Options';

  // Menu item name
  $wpvue_menu_name = 'WPVUE Plugin';

  // The capability required to use
  // See: https://codex.wordpress.org/Roles_and_Capabilities
  $wpvue_capability = 'manage_options';

  // The menu icon
  // See: https://developer.wordpress.org/resource/dashicons/
  $wpvue_menu_icon = 'dashicons-star-filled';

  add_menu_page(
    $wpvue_page_title,
    $wpvue_menu_name,
    $wpvue_capability,
    $wpvue_plugin->dirname(),
    function () {
      global $wpvue_capability;
      if (!current_user_can($wpvue_capability))  {
    		wp_die(__( 'You do not have sufficient permissions to access this page.' ));
    	}

      // Vue will look for the #wpvue-plugin element
      echo "<div class='wrap'><div id='wpvue-plugin'></div></div>";
    },
    $wpvue_menu_icon
  );
});
