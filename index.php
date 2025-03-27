<?php
/**
 * Homepage
 */

// Set page title
$page_title = 'LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include homepage-specific components first
include __DIR__ . '/components/pages/home/slider.php';
include __DIR__ . '/components/pages/home/about-section.php';

// Include shared components
include __DIR__ . '/components/pages/home/services.php';
include __DIR__ . '/components/pages/home/gallery.php';
include __DIR__ . '/components/shared/counter.php';
include __DIR__ . '/components/pages/home/testimonials.php';
include __DIR__ . '/components/pages/home/photography.php';
include __DIR__ . '/components/pages/home/blog.php';
// Store the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include __DIR__ . '/components/layout/template.php';
?>