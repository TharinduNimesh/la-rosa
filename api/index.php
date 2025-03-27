<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the configuration file
require_once __DIR__ . '/../config.php';

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove leading slash and .php extension if present
$page = ltrim($path, '/');
$page = str_replace('.php', '', $page);

// Default to index if no page specified
if (empty($page)) {
    $page = 'index';
}

// Map pages to their PHP files in the root directory
$pages = [
    'index' => '../index.php',
    'about' => '../about.php',
    'service' => '../service.php',
    'portfolio' => '../portfolio.php',
    'portfolio-details' => '../portfolio-details.php',
    'shop' => '../shop.php',
    'shop-details' => '../shop-details.php',
    'contact' => '../contact.php',
    '404' => '../404.php'
];

// Debug information
error_log("Requested page: " . $page);
error_log("Base path: " . BASE_PATH);

// Include the requested page if it exists
if (isset($pages[$page])) {
    $file_path = __DIR__ . '/' . $pages[$page];
    error_log("Attempting to load: " . $file_path);
    
    if (file_exists($file_path)) {
        include $file_path;
    } else {
        error_log("File not found: " . $file_path);
        include __DIR__ . '/../index.php'; // Fallback to index if file doesn't exist
    }
} else {
    // If page is not in our map, include the index page
    include __DIR__ . '/../index.php';
}
?>