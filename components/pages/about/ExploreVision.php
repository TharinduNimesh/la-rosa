<!-- explore vision area start -->
<div class="explore-vision-area pt-115 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="lv-section-title-wrap text-center pb-65">
                    <h2 class="lv-section-title">Explore our vision </h2>
                    <p class="mb-0">Creating unforgettable memories through exceptional events and celebrations</p>
                </div>
            </div>
        </div>
        <div class="row">
            <?php
            $visionItems = [
                [
                    'image' => 'explore-1.jpg',
                    'title' => 'Wedding Excellence',
                    'description' => 'We specialize in creating personalized wedding experiences that reflect your unique love story and cultural traditions.'
                ],
                [
                    'image' => 'explore-2.jpg',
                    'title' => 'Floral Artistry',
                    'description' => 'Our talented floral designers create stunning arrangements that transform venues into magical spaces for your celebration.'
                ],
                [
                    'image' => 'explore-3.jpg',
                    'title' => 'Event Innovation',
                    'description' => 'From corporate galas to intimate celebrations, we design and coordinate memorable events with creativity and precision.'
                ]
            ];
            ?>
            <?php foreach($visionItems as $item): ?>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="lv-explore-vision-box-1-1 mb-30">
                    <a href="portfolio-details.php">
                        <div class="lv-explore-vision-box-img-1-1 bg-default" data-background="/assets/img/explore/<?php echo $item['image']; ?>"></div>
                    </a>
                    <div class="lv-explore-vision-box-content-1-1">
                        <h5 class="lv-explore-vision-box-title-1-1">
                            <a href="portfolio-details.php"><?php echo $item['title']; ?></a>
                        </h5>
                        <p class="lv-explore-vision-box-text-1-1"><?php echo $item['description']; ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<!-- explore vision area end -->