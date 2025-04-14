<?php
class ShopPagination {
    public function render($pagination) {
        $currentPage = $pagination['currentPage'];
        $totalPages = $pagination['totalPages'];
        
        if ($totalPages <= 1) {
            return; // Don't display pagination if only one page
        }
        ?>
        <div class="row">
            <div class="col-xxl-12">
                <div class="lv-shop-pagination-1-6 text-center">
                    <?php if($currentPage > 1): ?>
                        <a href="?page=<?php echo ($currentPage - 1); ?>" class="paginate-left">
                            <i class="fal fa-angle-left"></i>
                        </a>
                    <?php else: ?>
                        <span class="paginate-left disabled">
                            <i class="fal fa-angle-left"></i>
                        </span>
                    <?php endif; ?>

                    <?php 
                    // Display pagination numbers with ellipsis for many pages
                    $startPage = max(1, min($currentPage - 2, $totalPages - 4));
                    $endPage = min($totalPages, max(5, $currentPage + 2));
                    
                    // Always show first page
                    if ($startPage > 1): ?>
                        <a href="?page=1">01</a>
                        <?php if ($startPage > 2): ?>
                            <span class="pagination-ellipsis">...</span>
                        <?php endif; ?>
                    <?php endif; ?>

                    <?php for($i = $startPage; $i <= $endPage; $i++): ?>
                        <a href="?page=<?php echo $i; ?>" <?php echo $i === $currentPage ? 'class="active"' : ''; ?>>
                            <?php echo str_pad($i, 2, '0', STR_PAD_LEFT); ?>
                        </a>
                    <?php endfor; ?>

                    <?php 
                    // Always show last page
                    if ($endPage < $totalPages): ?>
                        <?php if ($endPage < $totalPages - 1): ?>
                            <span class="pagination-ellipsis">...</span>
                        <?php endif; ?>
                        <a href="?page=<?php echo $totalPages; ?>">
                            <?php echo str_pad($totalPages, 2, '0', STR_PAD_LEFT); ?>
                        </a>
                    <?php endif; ?>

                    <?php if($currentPage < $totalPages): ?>
                        <a href="?page=<?php echo ($currentPage + 1); ?>" class="paginate-right">
                            <i class="fal fa-angle-right"></i>
                        </a>
                    <?php else: ?>
                        <span class="paginate-right disabled">
                            <i class="fal fa-angle-right"></i>
                        </span>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <style>
            .pagination-ellipsis {
                display: inline-block;
                padding: 5px 10px;
                color: #777;
            }
            .lv-shop-pagination-1-6 .disabled {
                color: #ccc;
                cursor: not-allowed;
                pointer-events: none;
            }
            .lv-shop-pagination-1-6 a:focus, 
            .lv-shop-pagination-1-6 a:hover {
                color: #e5a87f;
            }
            .lv-shop-pagination-1-6 a.active {
                color: #fff;
                background-color: #e5a87f;
            }
        </style>
        <?php
    }
}
?>