<?php
// Get all category folders inside the gallery directory
$galleryBaseDir = BASE_PATH . '/public/assets/img/gallery/';
$categoryFolders = array_filter(glob($galleryBaseDir . '*'), 'is_dir');
?>
<div class="portfolio-details-area pb-120">
    <div class="container">
        <div class="row pb-105">
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 mb-50 mb-lg-0">
                <?php include BASE_PATH . '/components/pages/portfolio-details/PortfolioInfo.php'; ?>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-12">
                <?php include BASE_PATH . '/components/pages/portfolio-details/PortfolioGallery.php'; ?>
            </div>
            <?php include BASE_PATH . '/components/pages/portfolio-details/PortfolioNavigation.php'; ?>
        </div>
    </div>
</div>