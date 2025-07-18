<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Learn more about LaRosa - Wedding & Event Planning. Discover our vision, experience, and commitment to making your special day unforgettable.">
    <meta name="keywords" content="about, LaRosa, wedding, event, planning, vision, experience">
    <meta property="og:title" content="About Us | LaRosa - Wedding & Event Planning">
    <meta property="og:description" content="Learn more about LaRosa - Wedding & Event Planning. Discover our vision, experience, and commitment to making your special day unforgettable.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/about">
    <meta property="og:image" content="https://yourdomain.com/assets/img/about/about-hero.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="About Us | LaRosa - Wedding & Event Planning">
    <meta name="twitter:description" content="Learn more about LaRosa - Wedding & Event Planning. Discover our vision, experience, and commitment to making your special day unforgettable.">
    <meta name="twitter:image" content="https://yourdomain.com/assets/img/about/about-hero.jpg">
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
include BASE_PATH . '/components/pages/about/AboutHero.php';
include BASE_PATH . '/components/pages/about/AboutContent.php';
include BASE_PATH . '/components/pages/about/ExploreVision.php';
include BASE_PATH . '/components/shared/counter.php';
include BASE_PATH . '/components/pages/about/ExperienceSection.php';
// include BASE_PATH . '/components/pages/about/BrandSection.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>