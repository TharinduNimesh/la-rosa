<?php
/**
 * Shop Page
 */

// Set page title
$page_title = 'Shop | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include Shop-specific components
include BASE_PATH . '/components/pages/shop/ShopHero.php';
include BASE_PATH . '/components/pages/shop/ShopGrid.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>