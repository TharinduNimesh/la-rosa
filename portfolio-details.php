<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="description" content="Portfolio Details - Discover our wedding and event planning portfolio. LaRosa - Wedding & Event Planning.">
   <meta name="keywords" content="portfolio, wedding, event, planning, LaRosa">
   <meta property="og:title" content="Portfolio Details | LaRosa - Wedding & Event Planning">
   <meta property="og:description" content="Explore our portfolio for inspiration on weddings and events planned by LaRosa.">
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://yourdomain.com/portfolio-details">
   <meta property="og:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="Portfolio Details | LaRosa - Wedding & Event Planning">
   <meta name="twitter:description" content="Explore our portfolio for inspiration on weddings and events planned by LaRosa.">
   <meta name="twitter:image" content="https://yourdomain.com/assets/img/breadcrumb/breadcrumb-bg.jpg">
</head>
<?php
/**
 * Portfolio Details Page
 * 
 * This file displays the portfolio details page with a preview watermark overlay.
 */
// Define the base path if not already defined
if (!defined('BASE_PATH')) {
   define('BASE_PATH', __DIR__);
}
// Set page title
$page_title = 'Portfolio Details | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include Shop-specific components
include BASE_PATH . '/components/pages/portfolio-details/PortfolioHero.php';

// Define CSS styles for watermark in a separate function
function renderPreviewWatermarkStyles()
{
   ?>
   <style>
      .portfolio-preview-watermark {
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

      .portfolio-preview-blur {
         filter: blur(15px);
         -webkit-filter: blur(15px);
         position: relative;
      }
   </style>
   <?php
}

// Render the page content
function renderPortfolioContent()
{
   // Render styles
   renderPreviewWatermarkStyles();

   // Render watermark
   // echo '<div class="portfolio-preview-watermark">PREVIEW ONLY</div>';

   // Render portfolio content with blur effect
   // echo '<div class="portfolio-preview-blur">';
   include BASE_PATH . '/components/pages/portfolio-details/PortfolioDetails.php';
   // echo '</div>';
}

// Render all portfolio content
renderPortfolioContent();

// Get the buffered content
$content = ob_get_clean();

// Include the main template which has the base layout structure
include BASE_PATH . '/components/layout/template-2.php';
?>