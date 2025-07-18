<!-- Meta tags for Contact page -->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Contact LaRosa - Wedding & Event Planning. Get in touch with us for your wedding and event planning needs.">
    <meta name="keywords" content="contact, wedding, event, planning, LaRosa">
    <meta property="og:title" content="Contact | LaRosa - Wedding & Event Planning">
    <meta property="og:description"
        content="Contact LaRosa - Wedding & Event Planning. Get in touch with us for your wedding and event planning needs.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/contact">
    <meta property="og:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Contact | LaRosa - Wedding & Event Planning">
    <meta name="twitter:description"
        content="Contact LaRosa - Wedding & Event Planning. Get in touch with us for your wedding and event planning needs.">
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