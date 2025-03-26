<?php
if (!defined('ROOT_PATH')) {
    define('ROOT_PATH', dirname(dirname(__DIR__)));
}

/**
 * 500 Error Page
 */

// Set page title
$page_title = '500 - Server Error';

// Define base URL for assets
function get_base_url() {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $host = $_SERVER['HTTP_HOST'];
    $script_name = dirname($_SERVER['SCRIPT_NAME']);
    
    // Remove 'components/error' from the path if present
    $base_path = str_replace('components/error', '', $script_name);
    
    return $protocol . $host . $base_path;
}

$base_url = get_base_url();

// Start output buffering
ob_start();
?>

<section class="error-area pt-120 pb-120">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="error-wrapper text-center">
                    <div class="error-text">
                        <h1>500</h1>
                        <h2>Server Error</h2>
                        <p>Sorry, something went wrong on our server. We're working to fix the issue. Please try again later.</p>
                        <div class="error-btn mt-50">
                            <a href="<?php echo $base_url; ?>" class="lv-theme-btn">
                                <span class="lv-theme-horizontal-line"></span>
                                <span class="lv-theme-vertical-line"></span>
                                <span>Back to Home</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
// Store the buffered content
$content = ob_get_clean();

// Define absolute paths for assets
define('ASSETS_URL', $base_url . '/assets');
?>

<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo ASSETS_URL; ?>/img/favicon.png">

    <!-- CSS here -->
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/preloader.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/meanmenu.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/animate.min.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/cursor.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/swiper-bundle.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/backToTop.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/magnific-popup.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/nice-select.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/fontAwesome5Pro.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/flaticon.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/default.css">
    <link rel="stylesheet" href="<?php echo ASSETS_URL; ?>/css/main.css">
</head>

<body>
    <!-- Main Content -->
    <main>
        <?php echo $content; ?>
    </main>

    <!-- Back to top -->
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>

    <!-- JS here -->
    <script src="<?php echo ASSETS_URL; ?>/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="<?php echo ASSETS_URL; ?>/js/bootstrap.bundle.min.js"></script>
    <script src="<?php echo ASSETS_URL; ?>/js/meanmenu.js"></script>
    <script src="<?php echo ASSETS_URL; ?>/js/cursor.js"></script>
    <script src="<?php echo ASSETS_URL; ?>/js/backToTop.js"></script>
    <script src="<?php echo ASSETS_URL; ?>/js/main.js"></script>
</body>

</html>