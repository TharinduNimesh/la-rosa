<?php
$instagramImages = [
    'insta-1.jpg',
    'insta-2.jpg',
    'insta-3.jpg',
    'insta-4.jpg',
    'insta-5.jpg',
    'insta-6.jpg'
];
?>
<!-- instagram area start -->
<div class="instagram-area pb-20">
    <div class="container-fluid pl-20 pr-20">
        <div class="row">
            <?php foreach ($instagramImages as $image): ?>
                <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                    <div class="lv-instagram-img lv-instagram-img-height bg-default"
                        data-background="/assets/img/instagram/<?php echo $image; ?>">
                        <div class="lv-instagram-icon">
                            <a href="https://www.instagram.com/p/DHNS8SNoDo2/?igsh=anFtaHkzZm51MW14" target="_blank"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<!-- instagram area end -->