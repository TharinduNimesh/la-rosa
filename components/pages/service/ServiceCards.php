<?php
$services = [
    [
        'icon' => 'flaticon-wedding',
        'title' => 'Wedding Vision',
        'description' => "The problem is that you're artist and every time you want."
    ],
    [
        'icon' => 'flaticon-wedding-arch',
        'title' => 'Decoration',
        'description' => 'Here starts the partnership with group and Milan office with our planner'
    ],
    [
        'icon' => 'flaticon-photo-size',
        'title' => 'Photography',
        'description' => 'With lot of creativity and the enthusiasm our team style and launch.'
    ],
    [
        'icon' => 'flaticon-bridesmaid',
        'title' => 'Modeling',
        'description' => "The problem is that you're artist and every time you want."
    ],
    [
        'icon' => 'flaticon-front-camera',
        'title' => 'Shooting',
        'description' => 'Here starts the partnership with group and Milan office with our planner'
    ],
    [
        'icon' => 'flaticon-magic-book',
        'title' => 'Editorials',
        'description' => 'With lot of creativity and the enthusiasm our team style and launch.'
    ]
];
?>
<!-- service area start -->
<div class="service-area pb-40">
    <div class="container">
        <div class="row">
            <?php foreach($services as $service): ?>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div class="lv-service-box no-after lv-service-box-space-1-2">
                    <div class="lv-service-box-icon">
                        <i class="<?php echo $service['icon']; ?>"></i>
                    </div>
                    <div class="lv-service-box-content">
                        <h5 class="lv-service-box-content-title">
                            <a href="service.php"><?php echo $service['title']; ?></a>
                        </h5>
                        <p><?php echo $service['description']; ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<!-- service area end -->