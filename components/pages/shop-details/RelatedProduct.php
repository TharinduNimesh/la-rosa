<div class="related-product-area pb-45">
    <div class="container">
        <div class="row mb-45">
            <div class="col-xxl-12">
                <div class="lv-related-product-title-1-7">
                    <h4 class="lv-product-stock-title-1-7">Related Products</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <?php
            // Array of related products
            $relatedProducts = [
                [
                    'image' => 'assets/img/shop/shop-2.jpg',
                    'badge' => '',
                    'title' => 'MADI LANE BRIDAL',
                    'price' => '£178.00',
                    'oldPrice' => '',
                    'link' => 'shop-details.html'
                ],
                [
                    'image' => 'assets/img/shop/shop-14.jpg',
                    'badge' => 'Hot',
                    'title' => 'TALIA CHAMPAGNE',
                    'price' => '£247.00',
                    'oldPrice' => '£316.00',
                    'link' => 'shop-details.html'
                ],
                [
                    'image' => 'assets/img/shop/shop-13.jpg',
                    'badge' => '',
                    'title' => 'Keyhole Rhinestone',
                    'price' => '£136.00',
                    'oldPrice' => '',
                    'link' => 'shop-details.html'
                ],
                [
                    'image' => 'assets/img/shop/shop-4.jpg',
                    'badge' => '',
                    'title' => 'Keyhole Rhinestone',
                    'price' => '£136.00',
                    'oldPrice' => '',
                    'link' => 'shop-details.html'
                ]
            ];

            // Loop through the products
            foreach ($relatedProducts as $product):
                ?>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div class="lv-product-box-1-6 text-center mb-50">
                        <div class="lv-product-box-img-1-6 lv-height-2 bg-default"
                            data-background="<?php echo $product['image']; ?>">
                            <?php if (!empty($product['badge'])): ?>
                                <div class="lv-product-box-badge-1-6 lv-has-left-center-1-7"><?php echo $product['badge']; ?>
                                </div>
                            <?php endif; ?>
                            <a href="#0" class="lv-product-box-cart-link-1-6">Add to cart</a>
                        </div>
                        <div class="lv-product-box-content-1-6">
                            <h4 class="lv-product-box-title-1-6"><a
                                    href="<?php echo $product['link']; ?>"><?php echo $product['title']; ?></a></h4>
                            <div class="lv-product-box-price-1-6">
                                <span><?php echo $product['price']; ?></span>
                                <?php if (!empty($product['oldPrice'])): ?>
                                    <del><?php echo $product['oldPrice']; ?></del>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>