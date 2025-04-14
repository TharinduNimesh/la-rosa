<?php
$services = [
    [
        'icon' => 'flaticon-wedding',
        'title' => 'Wedding Planning',
        'description' => "Full-service wedding planning including receptions, outdoor weddings, church weddings, and traditional poruwa ceremonies."
    ],
    [
        'icon' => 'flaticon-wedding-arch',
        'title' => 'Floral Design',
        'description' => 'Exquisite floral arrangements and decorations for all occasions, from elegant centerpieces to complete venue transformations.'
    ],
    [
        'icon' => 'flaticon-photo-size',
        'title' => 'Corporate Events',
        'description' => 'Professional planning for corporate galas, award ceremonies, product launches, staff conventions, and business conferences.'
    ],
    [
        'icon' => 'flaticon-bridesmaid',
        'title' => 'Special Celebrations',
        'description' => "Creative planning for proposals, gender reveals, birthdays, and bride/groom-to-be parties with personalized themes."
    ],
    [
        'icon' => 'flaticon-front-camera',
        'title' => 'Venue Styling',
        'description' => 'Comprehensive venue decoration services including customized dance floors, hall lighting, LED screens, and stage designs.'
    ],
    [
        'icon' => 'flaticon-magic-book',
        'title' => 'Event Coordination',
        'description' => 'Day-of coordination services ensuring your event runs smoothly while you enjoy your special moment stress-free.'
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