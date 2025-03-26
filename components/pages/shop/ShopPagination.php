<?php
class ShopPagination {
    public function render($pagination) {
        $currentPage = $pagination['currentPage'];
        $totalPages = $pagination['totalPages'];
        ?>
        <div class="row">
            <div class="col-xxl-12">
                <div class="lv-shop-pagination-1-6 text-center">
                    <?php if($currentPage > 1): ?>
                        <a href="?page=<?php echo ($currentPage - 1); ?>" class="paginate-left">
                            <i class="fal fa-angle-left"></i>
                        </a>
                    <?php endif; ?>

                    <?php for($i = 1; $i <= $totalPages; $i++): ?>
                        <a href="?page=<?php echo $i; ?>" <?php echo $i === $currentPage ? 'class="active"' : ''; ?>>
                            <?php echo str_pad($i, 2, '0', STR_PAD_LEFT); ?>
                        </a>
                    <?php endfor; ?>

                    <?php if($currentPage < $totalPages): ?>
                        <a href="?page=<?php echo ($currentPage + 1); ?>" class="paginate-right">
                            <i class="fal fa-angle-right"></i>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
    }
}
?>