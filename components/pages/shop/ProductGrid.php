<?php
/**
 * ProductGrid component that handles product display and pagination
 */

class ProductGrid {
    private $products = [];
    private $productsPerPage = 9;
    private $currentPage = 1;
    private $totalProducts = 0;
    private $totalPages = 0;
    private $currentProducts = [];

    public function __construct() {
        $this->products = [
            [
                'title' => 'Wedding Flower Bouquet',
                'price' => '15000',
                'image' => '/assets/img/shop/shop-1.jpg',
                'hot' => true
            ],
            [
                'title' => 'Floral Centerpiece',
                'price' => '8500',
                'oldPrice' => '9800',
                'image' => '/assets/img/shop/shop-14.jpg',
                'hot' => true
            ],
            [
                'title' => 'Premium Rose Arrangement',
                'price' => '12000',
                'image' => '/assets/img/shop/shop-2.jpg'
            ],
            [
                'title' => 'Bridal Hair Accessory',
                'price' => '5500',
                'image' => '/assets/img/shop/shop-4.jpg'
            ],
            [
                'title' => 'Poruwa Ceremony Package',
                'price' => '65000',
                'image' => '/assets/img/shop/shop-9.jpg'
            ],
            [
                'title' => 'Adrianna Queen',
                'price' => '258.00',
                'oldPrice' => '332.00',
                'image' => '/assets/img/shop/shop-3.jpg'
            ],
            [
                'title' => 'Beaded Blouson',
                'price' => '278.00',
                'image' => '/assets/img/shop/shop-12.jpg'
            ],
            [
                'title' => 'Sweet Night Queen',
                'price' => '247.00',
                'image' => '/assets/img/shop/shop-6.jpg'
            ],
            [
                'title' => 'Caped Sheath Dress',
                'price' => '329.00',
                'image' => '/assets/img/shop/shop-14.jpg'
            ],
            [
                'title' => 'Evening Gown',
                'price' => '289.00',
                'image' => '/assets/img/shop/shop-3.jpg',
                'hot' => true
            ],
            [
                'title' => 'Crystal Embellished',
                'price' => '345.00',
                'image' => '/assets/img/shop/shop-8.jpg'
            ],
            [
                'title' => 'Floral Lace Gown',
                'price' => '299.00',
                'oldPrice' => '359.00',
                'image' => '/assets/img/shop/shop-5.jpg'
            ]
        ];

        $this->initPagination();
    }

    private function initPagination() {
        $this->currentPage = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $this->totalProducts = count($this->products);
        $this->totalPages = ceil($this->totalProducts / $this->productsPerPage);
        $this->currentPage = max(1, min($this->currentPage, $this->totalPages));
        $offset = ($this->currentPage - 1) * $this->productsPerPage;

        // Get products for current page
        $this->currentProducts = array_slice($this->products, $offset, $this->productsPerPage);
    }

    public function getPaginationData() {
        return [
            'currentPage' => $this->currentPage,
            'totalPages' => $this->totalPages,
            'totalProducts' => $this->totalProducts,
            'productsPerPage' => $this->productsPerPage,
            'showing' => count($this->currentProducts),
            'start' => (($this->currentPage - 1) * $this->productsPerPage) + 1,
            'end' => min((($this->currentPage - 1) * $this->productsPerPage) + count($this->currentProducts), $this->totalProducts)
        ];
    }

    public function renderProduct($product) {
        $hotBadge = isset($product['hot']) && $product['hot'] ? '<div class="lv-product-box-badge-1-6">Hot</div>' : '';
        $oldPrice = isset($product['oldPrice']) ? '<del><span class="price-amount" data-price-lkr="' . $product['oldPrice'] . '">' . number_format($product['oldPrice']) . '</span> <span class="currency-symbol">LKR</span></del>' : '';
        ?>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div class="lv-product-box-1-6 text-center mb-50">
                <div class="lv-product-box-img-1-6 lv-product-box-img-height-2 bg-default" data-background="<?php echo $product['image']; ?>">
                    <?php echo $hotBadge; ?>
                    <a href="shop-details" class="lv-product-box-cart-link-1-6">Add to cart</a>
                </div>
                <div class="lv-product-box-content-1-6">
                    <h4 class="lv-product-box-title-1-6"><a href="shop-details"><?php echo $product['title']; ?></a></h4>
                    <div class="lv-product-box-price-1-6">
                        <div class="price-wrapper">
                            <span class="price-amount" data-price-lkr="<?php echo $product['price']; ?>"><?php echo number_format($product['price']); ?></span>
                            <span class="currency-symbol">LKR</span>
                        </div>
                        <?php echo $oldPrice; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }

    public function render() {
        ?>
        <div class="row pb-45">
            <?php foreach($this->currentProducts as $product): ?>
                <?php $this->renderProduct($product); ?>
            <?php endforeach; ?>
        </div>
        <?php
    }
}

$productGrid = new ProductGrid();
$productGrid->render();

// Make pagination data available
$GLOBALS['pagination'] = $productGrid->getPaginationData();

// Add JavaScript to initialize background images
echo '<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-background]").forEach(function(element) {
        element.style.backgroundImage = "url(" + element.getAttribute("data-background") + ")";
    });
});
</script>';
?>