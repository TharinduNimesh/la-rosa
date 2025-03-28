<?php
/**
 * Portfolio Page
 */

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