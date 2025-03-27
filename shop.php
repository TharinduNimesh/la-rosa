<?php
/**
 * Shop Page
 */

// Set page title
$page_title = 'Shop | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include Shop-specific components
include __DIR__ . '/components/pages/shop/ShopHero.php';
include __DIR__ . '/components/pages/shop/ShopGrid.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include __DIR__ . '/components/layout/template-2.php';
?>