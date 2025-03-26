<div class="shop-area pb-120">
    <div class="container">
        <div class="row">
            <div class="col-xxl-9 col-xl-9 col-lg-8">
                <!-- Shop Meta Top -->
                <div class="lv-shop-meta-top-wrapper-1-6">
                    <div class="row pb-35 align-items-center">
                        <div class="col-xxl-6 col-xl-6 col-md-6">
                            <?php 
                            $pagination = isset($GLOBALS['pagination']) ? $GLOBALS['pagination'] : ['start' => 1, 'end' => 8, 'totalProducts' => 8];
                            ?>
                            <div class="lv-shop-product-count-1-6"><span>Showing <?php echo $pagination['start']; ?>-<?php echo $pagination['end']; ?> of <?php echo $pagination['totalProducts']; ?> results</span></div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-md-6">
                            <div class="lv-shop-list-dropdown-1-6 text-start text-md-end">
                                <select name="drop" id="drop" class="lv-shop-dropdown-select-1-6">
                                    <option value="arrival">New Arrival</option>
                                    <option value="popular">Popular Product</option>
                                    <option value="purched">Most Purched</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Grid -->
                <?php include_once 'ProductGrid.php'; ?>
            </div>

            <!-- Sidebar -->
            <div class="col-xxl-3 col-xl-3 col-lg-4">
                <?php include 'ShopSidebar.php'; ?>
            </div>
        </div>

        <!-- Pagination -->
        <div class="row">
            <div class="col-xxl-12">
                <div class="lv-shop-pagination-1-6 text-center">
                    <?php if(isset($pagination['currentPage']) && $pagination['currentPage'] > 1): ?>
                        <a href="?page=<?php echo ($pagination['currentPage'] - 1); ?>" class="paginate-left"><i class="fal fa-angle-left"></i></a>
                    <?php else: ?>
                        <a href="shop" class="paginate-left"><i class="fal fa-angle-left"></i></a>
                    <?php endif; ?>
                    
                    <?php 
                    $totalPages = isset($pagination['totalPages']) ? $pagination['totalPages'] : 2;
                    $currentPage = isset($pagination['currentPage']) ? $pagination['currentPage'] : 1;
                    
                    for($i = 1; $i <= $totalPages; $i++): ?>
                        <a href="?page=<?php echo $i; ?>" <?php echo $i === $currentPage ? 'class="active"' : ''; ?>>
                            <?php echo str_pad($i, 2, '0', STR_PAD_LEFT); ?>
                        </a>
                    <?php endfor; ?>
                    
                    <?php if(isset($pagination['currentPage']) && $pagination['currentPage'] < $pagination['totalPages']): ?>
                        <a href="?page=<?php echo ($pagination['currentPage'] + 1); ?>" class="paginate-right"><i class="fal fa-angle-right"></i></a>
                    <?php else: ?>
                        <a href="shop" class="paginate-right"><i class="fal fa-angle-right"></i></a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>