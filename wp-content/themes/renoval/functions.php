<?php
if ( ! function_exists( 'renoval_setup' ) ) :
function renoval_setup() {

/**
 * Define Theme Version
 */
define( 'RENOVAL_THEME_VERSION', '6.2' );

// Root path/URI.
define( 'RENOVAL_PARENT_DIR', get_template_directory() );
define( 'RENOVAL_PARENT_URI', get_template_directory_uri() );

// Root path/URI.
define( 'RENOVAL_PARENT_INC_DIR', RENOVAL_PARENT_DIR . '/inc');
define( 'RENOVAL_PARENT_INC_URI', RENOVAL_PARENT_URI . '/inc');

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 */
	add_theme_support( 'title-tag' );
	
	add_theme_support( 'custom-header' );
	
	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 */
	add_theme_support( 'post-thumbnails' );
	
	//Add selective refresh for sidebar widget
	add_theme_support( 'customize-selective-refresh-widgets' );
	
	/*
	 * Make theme available for translation.
	 */
	load_theme_textdomain( 'renoval' );
		
	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary_menu' => esc_html__( 'Primary Menu', 'renoval' ),
		'footer_menu' => esc_html__( 'Footer Menu', 'renoval' )
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
	
	
	add_theme_support('custom-logo');
	
	/*
	 * WooCommerce Plugin Support
	 */
	add_theme_support( 'woocommerce' );
	
	// Gutenberg wide images.
		add_theme_support( 'align-wide' );
	
	/*
	 * This theme styles the visual editor to resemble the theme style,
	 * specifically font, colors, icons, and column width.
	 */
	add_editor_style( array( 'assets/css/editor-style.css', renoval_google_font() ) );
	
	//Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'renoval_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'renoval_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function renoval_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'renoval_content_width', 1170 );
}
add_action( 'after_setup_theme', 'renoval_content_width', 0 );


/**
 * All Styles & Scripts.
 */
require_once get_template_directory() . '/inc/enqueue.php';

/**
 * Nav Walker fo Bootstrap Dropdown Menu.
 */

require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

/**
 * Implement the Custom Header feature.
 */
require_once get_template_directory() . '/inc/custom-header.php';


/**
 * Called Breadcrumb
 */
require_once get_template_directory() . '/inc/breadcrumb/breadcrumb.php';

/**
 * Sidebar.
 */
require_once get_template_directory() . '/inc/sidebar/sidebar.php';

/**
 * Custom template tags for this theme.
 */
require_once get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require_once get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
 require_once get_template_directory() . '/inc/renoval-customizer.php';


/**
 * Customizer additions.
 */
 require get_template_directory() . '/inc/customizer-repeater/functions.php';

 function register_news_entities() {
	$news_args = array(
	  'public' => true,
	  'label'  => null,
	  'labels' => array(
		'name'               => 'Новости',
		'singular_name'      => 'Новость',
		'add_new'            => 'Добавить новость',
		'add_new_item'       => 'Добавление новости',
		'edit_item'          => 'Редактирование новости',
		'new_item'           => 'Новая новость',
		'view_item'          => 'Смотреть новость',
		'search_items'       => 'Искать новости',
		'not_found'          => 'Не найдено',
		'not_found_in_trash' => 'Не найдено в корзине',
		'parent_item_colon'  => '',
		'menu_name'          => 'Новости',
	  ),
	  'menu_position' => 5,
	  'menu_icon' => 'dashicons-welcome-widgets-menus',
	  'rewrite' => array( 'slug' => 'news' ),
	  'has_archive' => true
	);
	register_post_type( 'news', $news_args );
  }
  
  add_action( 'init', 'register_news_entities' );

function custom_page_template($template) {
    if (is_page_template('archive-news.php')) {
        $template = get_template_directory() . '/templates/news-archive.php';
    }
    return $template;
}
add_filter('page_template', 'custom_page_template');