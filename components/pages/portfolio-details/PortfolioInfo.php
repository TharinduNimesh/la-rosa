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
?>
<div class="lv-portfolio-details-left-1-4">
    <div class="lv-portfolio-details-top-wrap-1-4 mb-35">
        <h4 class="lv-portfolio-details-title-1-4"><?php echo htmlspecialchars($event['title']); ?></h4>
        <h5 class="lv-portfolio-member-name-1-4"><?php echo htmlspecialchars($event['couple']); ?></h5>
        <span class="lv-portfolio-date-1-4"><?php echo htmlspecialchars($event['main_date']); ?></span>
    </div>
    <div class="lv-portfolio-details-content-1-4 mb-30">
        <p class="mb-25"><?php echo htmlspecialchars($event['description_1']); ?></p>
        <p><?php echo htmlspecialchars($event['description_2']); ?></p>
    </div>
    <div class="lv-portfolio-meta-list-1-4">
        <ul>
            <li><span>Category :</span> <?php echo htmlspecialchars($event['title']); ?></li>
            <li><span>Location :</span> <?php echo htmlspecialchars($event['location']); ?></li>
            <li><span>Date :</span> <?php echo htmlspecialchars($event['date']); ?></li>
            <li><span>Tags :</span> <?php echo htmlspecialchars($event['tags']); ?></li>
        </ul>
    </div>
</div>