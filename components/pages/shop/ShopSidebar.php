<?php
$categories = [
    ['name' => 'All', 'count' => 12],
    ['name' => 'Bridal', 'count' => 8],
    ['name' => 'Decorations', 'count' => 12],
    ['name' => 'Gifts', 'count' => 5],
    ['name' => 'Events', 'count' => 3],
];

$colors = [
    ['name' => 'All', 'code' => '#e5a87f'],
    ['name' => 'White', 'code' => '#FFFFFF'],
    ['name' => 'Pink', 'code' => '#FFC0CB'],
    ['name' => 'Red', 'code' => '#FF0000'],
    ['name' => 'Green', 'code' => '#00FF00'],
    ['name' => 'Yellow', 'code' => '#FFFF00'],
];

$topProducts = [
    [
        'title' => 'Premium Wedding Bouquet',
        'price' => '18500',
        'image' => '/assets/img/shop/shop-1.jpg'
    ],
    [
        'title' => 'Decorative Flower Arrangement',
        'price' => '12500',
        'image' => '/assets/img/shop/shop-2.jpg'
    ],
];

$tags = ['all', 'bridal', 'decoration', 'flowers', 'wedding', 'event', 'poruwa', 'centerpiece', 'table', 'bouquet', 'gift'];
?>

<div class="pl-20 pt-10 lv-widget-left-padding-1-6">
    <div class="row">
        <div class="col-xxl-12">
            <!-- Search Widget -->
            <div class="widget lv-widget widget-search mb-50">
                <form action="#" class="lv-search-widget-form-1-6">
                    <input type="text" name="search" placeholder="Search keyword" id="search">
                    <button type="submit"><i class="fal fa-search"></i></button>
                </form>
            </div>

            <!-- Price Filter Widget -->
            <div class="widget lv-widget widget-filter mb-45">
                <h4 class="lv-widget-heading-1-6 mb-40">FILTER BY PRICE</h4>
                <div class="lv-slider-range">
                    <div id="lv-slider-range" class="mb-5-px"></div>
                    <p>
                        <input type="text" id="lv-amount" readonly>
                        <label for="lv-amount" class="lv-amount-filter">Filter</label>
                    </p>
                </div>
            </div>

            <!-- Categories Widget -->
            <div class="widget lv-widget widget-category mb-43">
                <h4 class="lv-widget-heading-1-6 mb-25">Categories</h4>
                <div class="lv-widget-categories-list-1-6">
                    <ul>
                        <?php foreach($categories as $index => $category): ?>
                            <li>
                                <a href="#" <?php echo $index === 0 ? 'class="active"' : ''; ?>>
                                    <?php echo $category['name']; ?> (<?php echo $category['count']; ?>)
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>

            <!-- Top Products Widget -->
            <div class="widget lv-widget widget-top-product-sidebar mb-50">
                <h4 class="lv-widget-heading-1-6 mb-35">Top Products</h4>
                <div class="lv-widget-top-product-list-1-6">
                    <?php foreach($topProducts as $product): ?>
                        <div class="lv-widget-top-product-single-1-6 mb-20">
                            <a href="shop-details">
                                <div class="lv-widget-top-product-img-1-6 bg-default theme-bg"
                                    data-background="<?php echo $product['image']; ?>"></div>
                            </a>
                            <div class="lv-widget-top-product-content-1-6">
                                <h4 class="lv-product-box-title-1-6">
                                    <a href="shop-details"><?php echo $product['title']; ?></a>
                                </h4>
                                <div class="lv-product-box-price-1-6">
                                    <div class="price-wrapper">
                                        <span class="price-amount" data-price-lkr="<?php echo $product['price']; ?>"><?php echo number_format($product['price']); ?></span>
                                        <span class="currency-symbol">LKR</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Color Filter Widget -->
            <div class="widget lv-widget widget-category mb-43">
                <h4 class="lv-widget-heading-1-6 mb-25">Filter by Color</h4>
                <div class="lv-widget-filter-color-list-1-6">
                    <ul>
                        <?php foreach($colors as $index => $color): ?>
                            <li>
                                <a href="#" <?php echo $index === 0 ? 'class="active"' : ''; ?>>
                                    <span class="lv-filter-color-dot-1-6" data-bg-color="<?php echo $color['code']; ?>">
                                    </span> <?php echo $color['name']; ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>

            <!-- Tags Widget -->
            <div class="widget lv-widget widget-category mb-43">
                <h4 class="lv-widget-heading-1-6 mb-25">Tags</h4>
                <div class="tagcloud">
                    <?php foreach($tags as $index => $tag): ?>
                        <a href="#" <?php echo $index === 0 ? 'class="active"' : ''; ?>><?php echo $tag; ?></a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.lv-widget-categories-list-1-6 a.active,
.lv-widget-filter-color-list-1-6 a.active,
.tagcloud a.active {
    color: #e5a87f;
    font-weight: 600;
}
.tagcloud a.active {
    background-color: #e5a87f;
    color: white;
}
.lv-widget-filter-color-list-1-6 a.active span {
    border: 2px solid #e5a87f;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Initialize price range slider if jQuery UI is available
    if(typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined') {
        jQuery("#lv-slider-range").slider({
            range: true,
            min: 0,
            max: 1000,
            values: [100, 800],
            slide: function(event, ui) {
                jQuery("#lv-amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
        });
        jQuery("#lv-amount").val("£" + jQuery("#lv-slider-range").slider("values", 0) +
            " - £" + jQuery("#lv-slider-range").slider("values", 1));
    }
    
    // Set background colors for filter dots
    document.querySelectorAll(".lv-filter-color-dot-1-6").forEach(function(dot) {
        if (dot.hasAttribute("data-bg-color")) {
            dot.style.backgroundColor = dot.getAttribute("data-bg-color");
        }
    });
    
    // Set background images for product thumbnails
    document.querySelectorAll(".lv-widget-top-product-img-1-6").forEach(function(img) {
        if (img.hasAttribute("data-background")) {
            img.style.backgroundImage = "url(" + img.getAttribute("data-background") + ")";
        }
    });
});
</script>