<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" 
        content="View our stunning portfolio of wedding and event planning services. LaRosa - Creating unforgettable moments for your special occasions.">
    <meta name="keywords" content="wedding portfolio, event planning portfolio, wedding gallery, LaRosa events, event planning examples">
    <meta property="og:title" content="Portfolio | LaRosa - Wedding & Event Planning">
    <meta property="og:description"
        content="Explore our collection of beautifully planned weddings and events. See how LaRosa can transform your special day into an unforgettable experience.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/portfolio">
    <meta property="og:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Portfolio | LaRosa - Wedding & Event Planning">
    <meta name="twitter:description"
        content="Explore our collection of beautifully planned weddings and events. See how LaRosa can transform your special day into an unforgettable experience.">
    <meta name="twitter:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
</head>
<?php
/**
 * Portfolio Page
 */
// Define the base path if not already defined
if (!defined('BASE_PATH')) {
    define('BASE_PATH', __DIR__);
}
// Set page title
$page_title = 'Portfolio | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include Shop-specific components
include BASE_PATH . '/components/pages/portfolio/PortfolioHero.php';
include BASE_PATH . '/components/pages/portfolio/PortfolioGallery.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>