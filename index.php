<?php
/**
 * Homepage
 */

// Set page title
$page_title = 'LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include homepage-specific components first
include BASE_PATH . '/components/pages/home/slider.php';
include BASE_PATH . '/components/pages/home/about-section.php';

// Include shared components
include BASE_PATH . '/components/pages/home/services.php';
include BASE_PATH . '/components/pages/home/gallery.php';
include BASE_PATH . '/components/shared/counter.php';
include BASE_PATH . '/components/pages/home/testimonials.php';
include BASE_PATH . '/components/pages/home/photography.php';
include BASE_PATH . '/components/pages/home/blog.php';
// Store the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template.php';
?>