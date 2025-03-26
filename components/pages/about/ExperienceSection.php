<!-- experience area start -->
<div class="experience-area has-experience-before-overlay-1-1 pt-115 mb-120">
    <div class="container">
        <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="lv-experience-left-1-1 pr-70 mb-50 mb-lg-0">
                    <div class="lv-section-title-wrap mb-20">
                        <h2 class="lv-section-title lv-section-title-1-1 mb-10">Experience and skill make us great </h2>
                        <p class="mb-0">The problem is that you're not an artist, and every time you<br> try to describe
                            your idea translation.</p>
                    </div>
                    <?php
                    $skills = [
                        ['name' => 'Photography', 'percentage' => 80],
                        ['name' => 'Planing', 'percentage' => 60],
                        ['name' => 'Location Set', 'percentage' => 90],
                        ['name' => 'Decoration', 'percentage' => 50]
                    ];
                    ?>
                    <div class="lv-experience-progress-1-1">
                        <?php foreach ($skills as $skill): ?>
                            <div class="lv-experience-progress-single-1-1">
                                <span class="lv-experience-progress-label-1-1"><?php echo $skill['name']; ?></span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: <?php echo $skill['percentage']; ?>%;"
                                        aria-valuenow="<?php echo $skill['percentage']; ?>" aria-valuemin="0"
                                        aria-valuemax="100">
                                        <span><?php echo $skill['percentage']; ?>%</span>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="lv-experience-right-1-1 pl-70 mt-8">
                    <div class="lv-experience-right-img-1-1 bg-default"
                        data-background="assets/img/gallery/experience.jpg">
                        <div class="lv-experience-play-btn-1-1 lv-experience-space-reverce-1-1">
                            <a href="https://www.youtube.com/watch?v=Ebv9_rNb5Ig" class="popup-video">
                                <i class="fas fa-play"></i>
                            </a>
                            <span class="lv-experience-play-label-1-1">Watch <br>how we work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- experience area end -->