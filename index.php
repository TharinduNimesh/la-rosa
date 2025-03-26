<?php
/**
 * Homepage
 */

// Set page title
$page_title = 'LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include homepage-specific components first
include 'components/pages/home/slider.php';
include 'components/pages/home/about-section.php';

// Include shared components
include 'components/pages/home/services.php';
include 'components/pages/home/gallery.php';
include 'components/shared/counter.php';
include 'components/pages/home/testimonials.php';
include 'components/pages/home/photography.php';
include 'components/pages/home/blog.php';
include 'components/shared/instagram.php';
// Store the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include 'components/layout/template.php';
?>