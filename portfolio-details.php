<?php
/**
 * About
 */

// Set page title
$page_title = 'Portfolio Details | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include About-specific components first
include BASE_PATH . '/components/pages/portfolio-details/PortfolioHero.php';
include BASE_PATH . '/components/pages/portfolio-details/PortfolioDetails.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>