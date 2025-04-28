<?php
/**
 * About
 */
// Define the base path if not already defined
if (!defined('BASE_PATH')) {
    define('BASE_PATH', __DIR__);
}
// Set page title
$page_title = 'Contact | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include About-specific components first
include_once 'components/pages/contact/ContactHero.php';
include_once 'components/pages/contact/ContactTabs.php';
include_once 'components/pages/contact/ContactForm.php';
include_once 'components/pages/contact/ContactMap.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>