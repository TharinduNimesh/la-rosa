<?php
// Load portfolio data from JSON
$dataFile = BASE_PATH . '/public/assets/data/portfolio.json';
$portfolioData = json_decode(file_get_contents($dataFile), true);
$category = isset($_GET['category']) ? $_GET['category'] : ($portfolioData[0]['category'] ?? '');
$event = null;
foreach ($portfolioData as $item) {
    if ($item['category'] === $category) {
        $event = $item;
        break;
    }
}
if (!$event) {
    echo '<div class="alert alert-warning">Event not found.</div>';
    return;
}
$galleryDir = BASE_PATH . '/public/assets/img/gallery/' . $category . '/';
$galleryUrl = 'assets/img/gallery/' . $category . '/';
$images = glob($galleryDir . '*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
sort($images);
?>
<div class="gallery-grids">
    <div class="row g-15">
        <?php if (count($images) > 0): ?>
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 grid-items">
                <a class="image-popups" href="<?php echo $galleryUrl . basename($images[0]); ?>">
                    <div class="lv-p-details-grid-item-1-4-1 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[0]); ?>')"></div>
                </a>
            </div>
        <?php endif; ?>
        <?php if (count($images) > 1): ?>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-items">
                <a class="image-popups" href="<?php echo $galleryUrl . basename($images[1]); ?>">
                    <div class="lv-p-details-grid-item-1-4-2 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[1]); ?>')"></div>
                </a>
            </div>
        <?php endif; ?>
        <?php if (count($images) > 2 || count($images) > 3): ?>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-items">
                <div class="row">
                    <?php if (count($images) > 2): ?>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                            <a class="image-popups" href="<?php echo $galleryUrl . basename($images[2]); ?>">
                                <div class="lv-p-details-grid-item-1-4-3 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[2]); ?>')"></div>
                            </a>
                        </div>
                    <?php endif; ?>
                    <?php if (count($images) > 3): ?>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                            <a class="image-popups" href="<?php echo $galleryUrl . basename($images[3]); ?>">
                                <div class="lv-p-details-grid-item-1-4-3 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[3]); ?>')"></div>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>
        <?php if (count($images) > 4): ?>
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 grid-items">
                <a class="image-popups" href="<?php echo $galleryUrl . basename($images[4]); ?>">
                    <div class="lv-p-details-grid-item-1-4-4 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[4]); ?>')"></div>
                </a>
            </div>
        <?php endif; ?>
        <?php if (count($images) > 5): ?>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-items">
                <a class="image-popups" href="<?php echo $galleryUrl . basename($images[5]); ?>">
                    <div class="lv-p-details-grid-item-1-4-3 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[5]); ?>')"></div>
                </a>
            </div>
        <?php endif; ?>
        <?php if (count($images) > 6): ?>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-items">
                <a class="image-popups" href="<?php echo $galleryUrl . basename($images[6]); ?>">
                    <div class="lv-p-details-grid-item-1-4-3 mb-15 bg-default" style="background-image:url('<?php echo $galleryUrl . basename($images[6]); ?>')"></div>
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>