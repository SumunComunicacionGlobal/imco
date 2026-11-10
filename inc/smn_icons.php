<?php
/**
 * sumun icon collection
 *
 * @package smn
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('init', 'smn_icons_register');

function smn_icons_register(): void
{
	wp_register_icon_collection('imco', [
		'label'       => __('IMCO', 'imco'),
		'description' => __('Iconos para IMCO.', 'imco')
	]);

	$icons = [
		[ __('Dot Caption', 'imco'), 'dot-caption' ],
		[ __('Cart', 'imco'), 'cart' ],
		[ __('Arrow Btn', 'imco'), 'arrow-btn' ],
        [ __('Symbol', 'imco'), 'symbol-white' ],
		[ __('Mail', 'imco'), 'mail' ],
		[ __('Phone', 'imco'), 'phone' ],
		[ __('Star', 'imco'), 'star' ],
		[ __('Location', 'imco'), 'location' ],
	];

	foreach ( $icons as $icon ) {
		wp_register_icon( 'imco/' . $icon[1], [
			'label'   => $icon[0],
			'file_path' => get_template_directory() . '/assets/icons/' . $icon[1] . '.svg',
		] );
	}

}