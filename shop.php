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
?>

<!-- Preview Watermark Overlay -->
<!-- Preview Watermark Overlay -->
<style>
    .shop-preview-watermark {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        font-size: 5rem;
        color: rgba(255, 0, 0, 0.3);
        font-weight: bold;
        z-index: 1000;
        pointer-events: none;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    .shop-preview-blur {
        filter: blur(3px);
        -webkit-filter: blur(3px);
        position: relative;
    }
</style>

<div class="shop-preview-watermark">PREVIEW ONLY</div>

<!-- Shop Content with Blur Effect -->
<div class="shop-preview-blur">
    <?php
    include BASE_PATH . '/components/pages/shop/ShopGrid.php';
    ?>
</div>

<?php
$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>