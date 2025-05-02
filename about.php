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