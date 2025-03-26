<?php
/**
 * About
 */

// Set page title
$page_title = 'About Us | LaRosa - Wedding & Event Planning';

// Start output buffering
ob_start();

// Include About-specific components first
include 'components/pages/about/AboutHero.php';
include 'components/pages/about/AboutContent.php';
include 'components/pages/about/ExploreVision.php';
include 'components/shared/counter.php';
include 'components/pages/about/ExperienceSection.php';
include 'components/pages/about/BrandSection.php';

$content = ob_get_clean();

// Include the main template which has the base layout structure
include 'components/layout/template-2.php';
?>