<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="description"
      content="Shop our exclusive collection of wedding and event planning products. Find everything you need for your special day at LaRosa - Wedding & Event Planning.">
   <meta name="keywords" content="wedding products, event planning supplies, wedding accessories, LaRosa, wedding shop">
   <meta property="og:title" content="Shop Products | LaRosa - Wedding & Event Planning">
   <meta property="og:description"
      content="Discover our premium selection of wedding and event planning products. Quality items carefully curated for your special occasions.">
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://yourdomain.com/shop">
   <meta property="og:image" content="https://yourdomain.com/assets/img/shop/product-preview.jpg">
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="Shop Products | LaRosa - Wedding & Event Planning">
   <meta name="twitter:description"
      content="Discover our premium selection of wedding and event planning products. Quality items carefully curated for your special occasions.">
   <meta name="twitter:image" content="https://yourdomain.com/assets/img/shop/product-preview.jpg">
</head>
<?php
/**
 * Shop Page
 * 
 * This file displays the shop page with a preview watermark overlay.
 */

// Set page title
$page_title = 'Product Details | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include Shop-specific components
include BASE_PATH . '/components/pages/shop-details/DetailHero.php';

// Define CSS styles for watermark in a separate function
function renderPreviewWatermarkStyles()
{
   ?>
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
         filter: blur(15px);
         -webkit-filter: blur(15px);
         position: relative;
      }
   </style>
   <?php
}

// Render the page content
function renderShopContent()
{
   // Render styles
   renderPreviewWatermarkStyles();

   // Render watermark
   echo '<div class="shop-preview-watermark">PREVIEW ONLY</div>';

   // Render shop content with blur effect
   echo '<div class="shop-preview-blur">';
   include BASE_PATH . '/components/pages/shop-details/DetailArea.php';
   include BASE_PATH . '/components/pages/shop-details/RelatedProduct.php';
   echo '</div>';
}

// Render all shop content
renderShopContent();

// Get the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';