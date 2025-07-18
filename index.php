<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="LaRosa - Wedding & Event Planning. Professional wedding and event planning services to make your special day unforgettable.">
    <meta name="keywords" content="wedding, event, planning, LaRosa, services, celebration">
    <meta property="og:title" content="LaRosa - Wedding & Event Planning">
    <meta property="og:description" content="Professional wedding and event planning services to make your special day unforgettable.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/">
    <meta property="og:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="LaRosa - Wedding & Event Planning">
    <meta name="twitter:description" content="Professional wedding and event planning services to make your special day unforgettable.">
    <meta name="twitter:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
</head>
<?php
/**
 * Homepage
 */

// Define the base path if not already defined
if (!defined('BASE_PATH')) {
    define('BASE_PATH', __DIR__);
}

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
// include BASE_PATH . '/components/pages/home/blog.php';
// Store the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template.php';
?>