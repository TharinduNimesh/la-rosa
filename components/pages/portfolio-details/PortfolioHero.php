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
    $event = ['location' => 'Not Found'];
}
?>
<!-- breadcrumb area start -->
<div class="lv-breadcrumb-area has-breadcrumb-overlay bg-default pt-205 pb-200 mb-120"
    data-background="/assets/img/breadcrumb/breadcrumb-bg.jpg">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="lv-breadcrumb-content text-center">
                    <?php if (!empty($event['location'])): ?>
                        <h4 class="lv-breadcrumb-title"><?php echo htmlspecialchars($event['location']); ?></h4>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- breadcrumb area end -->