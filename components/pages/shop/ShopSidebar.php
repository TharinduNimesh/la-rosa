<?php
$categories = [
    ['name' => 'Long Dresses', 'count' => 13],
    ['name' => 'Jewelry', 'count' => 8],
    ['name' => 'Wedding Dresses', 'count' => 2],
];

$colors = [
    ['name' => 'Light Brown', 'code' => '#E9D3BC'],
    ['name' => 'Light Gray', 'code' => '#EBEBEB'],
    ['name' => 'White', 'code' => '#F6F6F6'],
    ['name' => 'Light Blue', 'code' => '#E5F2FC'],
];

$topProducts = [
    [
        'title' => 'Sequin Mermaid Gown',
        'price' => '178.00',
        'image' => 'assets/img/shop/shop-13.jpg'
    ],
    [
        'title' => 'FLOWERS EARINGS',
        'price' => '206.00',
        'image' => 'assets/img/shop/shop-4.jpg'
    ],
];

$tags = ['blue', 'bride', 'decoration', 'fashion', 'dress', 'groom', 'jewelry', 'rose', 'wedding', 'white'];
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
                        <?php foreach($categories as $category): ?>
                            <li>
                                <a href="shop"><?php echo $category['name']; ?> (<?php echo $category['count']; ?>)</a>
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
                            <a href="portfolio-details">
                                <div class="lv-widget-top-product-img-1-6 bg-default theme-bg"
                                    data-background="<?php echo $product['image']; ?>"></div>
                            </a>
                            <div class="lv-widget-top-product-content-1-6">
                                <h4 class="lv-product-box-title-1-6">
                                    <a href="shop-details"><?php echo $product['title']; ?></a>
                                </h4>
                                <div class="lv-product-box-price-1-6">
                                    <span>£<?php echo $product['price']; ?></span>
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
                        <?php foreach($colors as $color): ?>
                            <li>
                                <a href="shop">
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
                    <?php foreach($tags as $tag): ?>
                        <a href="shop"><?php echo $tag; ?></a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>

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