<?php
$brandImages = ['7.png', '10.png', '1.png', '2.png', '3.png', '4.png'];
?>
<!-- brand area start -->
<div class="brand-area pb-85">
    <div class="container">
        <div class="row mb-15">
            <div class="col-xxl-12">
                <div class="text-center">
                    <div class="d-inline-block p-rel fix">
                        <div class="lv-brand-title-sudo-lines-2 d-none d-lg-block">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3 class="lv-brand-title-2 text-center fix">Our Trusted Partners</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xxl-12">
                <div class="row">
                    <?php foreach ($brandImages as $image): ?>
                        <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div class="lv-brand-flex-single">
                                <img src="/assets/img/brand/<?php echo $image; ?>" alt="partner logo">
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- brand area end -->