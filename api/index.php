<?php
// filepath: c:\xampp\htdocs\la-rosa\api\index.php

ob_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define the base path for includes (assumes la-rosa is one level above api directory)
define('BASE_PATH', dirname(__DIR__));

// Function to verify file existence
function verifyPath($path)
{
    if (!file_exists($path)) {
        error_log("File not found: " . $path);
        return false;
    }
    return true;
}

// Get the request URI and remove any query string
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Handle static files if the request is for assets
if (strpos($request_uri, '/assets/') === 0) {
    // Assumes your public assets are under BASE_PATH/public
    $file_path = BASE_PATH . '/public' . $request_uri;
    if (file_exists($file_path)) {
        $mime_type = mime_content_type($file_path);
        header("Content-Type: $mime_type");
        readfile($file_path);
        exit;
    }
}

// Remove leading slash and .php extension
$page = ltrim($request_uri, '/');
$page = str_replace('.php', '', $page);

// Default to index if no page specified
if (empty($page)) {
    $page = 'index';
}

// Map pages to their corresponding PHP files
$pages = [
    'index' => 'index.php',
    'about' => 'about.php',
    'service' => 'service.php',
    'shop' => 'shop.php',
    'portfolio' => 'portfolio.php',
    'contact' => 'contact.php',
    '404' => '404.php',
    // Add more page mappings as needed
];

if (array_key_exists($page, $pages)) {
    $file_to_include = BASE_PATH . '/' . $pages[$page];
    if (verifyPath($file_to_include)) {
        include $file_to_include;
    } else {
        include BASE_PATH . '/404.php';
    }
} else {
    include BASE_PATH . '/404.php';
}

ob_end_flush();
?>