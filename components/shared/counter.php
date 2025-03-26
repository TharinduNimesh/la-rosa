<?php
$counterItems = [
    [
        'count' => '',
        'label' => 'CEREMONIES'
    ],
    [
        'count' => '',
        'label' => 'Cup of coffee'
    ],
    [
        'count' => '',
        'label' => 'Sweet Couples'
    ],
    [
        'count' => '',
        'label' => 'BEST BOUQUETS'
    ]
];
?>
<!-- counter area start -->
<div class="counter-area pb-100">
    <div class="container">
        <div class="row">
            <?php foreach ($counterItems as $item): ?>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 mb-xl-0">
                    <div class="lv-counter-box">
                        <h4 class="lv-counter-box-num odometer" data-count="<?php echo $item['count']; ?>">
                            <?php echo $item['count']; ?></h4>
                        <span class="lv-counter-box-num-link d-inline-block"><?php echo $item['label']; ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<!-- counter area end -->