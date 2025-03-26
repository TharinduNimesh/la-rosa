<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove leading slash and .php extension if present
$page = ltrim($path, '/');
$page = str_replace('.php', '', $page);

// Default to index if no page specified
if (empty($page)) {
    $page = 'index';
}

// Map pages to their PHP files
$pages = [
    'index' => 'pages/index.php',
    'about' => 'pages/about.php',
    'service' => 'pages/service.php',
    'portfolio' => 'pages/portfolio.php',
    'shop' => 'pages/shop.php',
    'contact' => 'pages/contact.php',
    '404' => 'pages/404.php'
];

// Define the base path for includes
define('BASE_PATH', __DIR__);

// Debug information
error_log("Requested page: " . $page);
error_log("Base path: " . BASE_PATH);

// Include the requested page if it exists
if (isset($pages[$page])) {
    $file_path = BASE_PATH . '/' . $pages[$page];
    error_log("Attempting to load: " . $file_path);
    
    if (file_exists($file_path)) {
        include $file_path;
    } else {
        error_log("File not found: " . $file_path);
        include BASE_PATH . '/pages/404.php';
    }
} else {
    error_log("Page not mapped: " . $page);
    header("HTTP/1.0 404 Not Found");
    include BASE_PATH . '/pages/404.php';
}