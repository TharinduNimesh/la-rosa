<?php
if (!defined('ROOT_PATH')) {
    define('ROOT_PATH', dirname(dirname(__DIR__)));
}

if (!function_exists('get_site_url')) {
    function get_site_url()
    {
        return '//' . $_SERVER['HTTP_HOST'];
    }
}

$page_title = '404 Page Not Found';
ob_start();
?>

<div class="error-page-area pt-120 pb-120">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="error-wrapper text-center">
                    <div class="error-text">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The page you are looking for might have been removed, had its name changed, or is temporarily
                            unavailable.</p>
                        <div class="error-btn">
                            <a href="<?php echo get_site_url(); ?>" class="lv-theme-btn">
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
</div>

<?php
$content = ob_get_clean();
include ROOT_PATH . '/components/layout/template.php';
?>