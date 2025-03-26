<?php
/**
 * About
 */

// Set page title
$page_title = 'About Us | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include About-specific components first
include BASE_PATH . '/components/pages/service/ServiceHero.php';
include BASE_PATH . '/components/pages/service/ServiceCards.php';
include BASE_PATH . '/components/pages/service/PricingSection.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>