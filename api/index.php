
<!-- jQuery (add this first, before other scripts) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define the base path for includes
define('BASE_PATH', dirname(__DIR__));

// Add this function to verify file existence
function verifyPath($path) {
    if (!file_exists($path)) {
        error_log("File not found: " . $path);
        return false;
    }
    return true;
}

// Get the request URI and remove query string
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Handle static files
if (strpos($request_uri, '/assets/') === 0) {
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

// Map pages to their PHP files
$pages = [
    'index' => 'index.php',
    'about' => 'about.php',
    'service' => 'service.php',
    'portfolio' => 'portfolio.php',
    'shop' => 'shop.php',
    'contact' => 'contact.php',
    '404' => '404.php'
];

// Include the requested page if it exists
if (isset($pages[$page])) {
    $file_path = BASE_PATH . '/' . $pages[$page];
    if (verifyPath($file_path)) {
        include $file_path;
    } else {
        include BASE_PATH . '/404.php';
    }
} else {
    header("HTTP/1.0 404 Not Found");
    include BASE_PATH . '/404.php';
}