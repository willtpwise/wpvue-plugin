<?php
/**
 * Lines up static resources (CSS, JS)
 */

add_action('admin_enqueue_scripts', function () {
	global $wpvue_plugin;

	wp_enqueue_script(
		'wpvue-plugin',
		$wpvue_plugin->uri() . 'dist/main.' . $wpvue_plugin->hash() . '.js',
		[],
		false,
		true
	);
});
