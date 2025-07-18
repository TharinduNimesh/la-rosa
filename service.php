<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" 
        content="Discover our comprehensive wedding and event planning services at LaRosa. Professional planning, coordination, and design services for your special day.">
    <meta name="keywords" content="wedding services, event planning, wedding coordination, event design, LaRosa events, wedding packages">
    <meta property="og:title" content="Our Services | LaRosa - Wedding & Event Planning">
    <meta property="og:description" 
        content="Professional wedding and event planning services by LaRosa. Create unforgettable moments with our expert planning and coordination services.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/service">
    <meta property="og:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Our Services | LaRosa - Wedding & Event Planning">
    <meta name="twitter:description" 
        content="Professional wedding and event planning services by LaRosa. Create unforgettable moments with our expert planning and coordination services.">
    <meta name="twitter:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
</head>
<?php
/**
 * About
 */
// Define the base path if not already defined
if (!defined('BASE_PATH')) {
    define('BASE_PATH', __DIR__);
}
// Set page title
$page_title = 'About Us | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include About-specific components first
include BASE_PATH . '/components/pages/service/ServiceHero.php';
include BASE_PATH . '/components/pages/service/ServiceCards.php';
// include BASE_PATH . '/components/pages/service/PricingSection.php';
include BASE_PATH . '/components/pages/service/PricingSectionExpan.php';


$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>