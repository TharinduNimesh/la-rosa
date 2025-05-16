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
$page = isset($_GET['imgpage']) ? max(1, intval($_GET['imgpage'])) : 1;
$perPage = 6;
$start = ($page - 1) * $perPage;
$imagesToShow = array_slice($images, $start, $perPage);
$totalPages = ceil(count($images) / $perPage);
?>
<script>
document.addEventListener("DOMContentLoaded", function() {
  const lazyCards = document.querySelectorAll('.lv-p-details-grid-item-1-4-1[data-bg], .lv-p-details-grid-item-1-4-2[data-bg], .lv-p-details-grid-item-1-4-3[data-bg], .lv-p-details-grid-item-1-4-4[data-bg]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bg = entry.target.getAttribute('data-bg');
          if (bg) entry.target.style.backgroundImage = `url('${bg}')`;
          obs.unobserve(entry.target);
        }
      });
    });
    lazyCards.forEach(card => observer.observe(card));
  } else {
    lazyCards.forEach(card => {
      const bg = card.getAttribute('data-bg');
      if (bg) card.style.backgroundImage = `url('${bg}')`;
    });
  }
});
</script>
<div class="gallery-grids">
    <div class="row g-15">
        <?php foreach ($imagesToShow as $i => $imgPath):
            $imgName = basename($imgPath);
            $imgWebPath = $galleryUrl . $imgName;
            $gridClasses = [
                'lv-p-details-grid-item-1-4-1',
                'lv-p-details-grid-item-1-4-2',
                'lv-p-details-grid-item-1-4-3',
                'lv-p-details-grid-item-1-4-4',
            ];
            $gridClass = $gridClasses[$i % count($gridClasses)];
            $colClass = ($gridClass === 'lv-p-details-grid-item-1-4-1' || $gridClass === 'lv-p-details-grid-item-1-4-4') ? 'col-xxl-12 col-xl-12 col-lg-12 col-md-12 grid-items' : 'col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-items';
        ?>
            <div class="<?php echo $colClass; ?>">
                <a class="image-popups" href="<?php echo $imgWebPath; ?>">
                    <div class="<?php echo $gridClass; ?> mb-15 bg-default" data-bg="<?php echo $imgWebPath; ?>"></div>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
    <?php if ($page < $totalPages): ?>
    <div class="row">
        <div class="col-xxl-12">
            <div class="text-center mt-3">
                <a href="?category=<?php echo urlencode($category); ?>&imgpage=<?php echo $page + 1; ?>" class="lv-banner-link-3">Load More</a>
            </div>
        </div>
    </div>
    <?php endif; ?>
</div>