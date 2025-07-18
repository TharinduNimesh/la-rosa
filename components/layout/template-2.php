<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?= ($page_title ?? '') ? "$page_title | LaRosa" : 'LaRosa - Wedding & Event Planning' ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="<?= $page_description ?? 'LaRosa offers premium wedding and event planning services. Transform your special day into an unforgettable experience with our expert team.' ?>">
    <meta name="keywords"
        content="<?= $page_keywords ?? 'wedding planning, event planning, luxury events, wedding services, LaRosa events' ?>">

    <!-- Open Graph / Social Media -->
    <meta property="og:title"
        content="<?= ($page_title ?? '') ? "$page_title | LaRosa" : 'LaRosa - Wedding & Event Planning' ?>">
    <meta property="og:description"
        content="<?= $page_description ?? 'LaRosa offers premium wedding and event planning services. Transform your special day into an unforgettable experience with our expert team.' ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= $current_url ?? 'https://larosaflora.com' ?>">
    <meta property="og:image" content="<?= $og_image ?? 'public/assets/img/og-default.jpg' ?>">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title"
        content="<?= ($page_title ?? '') ? "$page_title | LaRosa" : 'LaRosa - Wedding & Event Planning' ?>">
    <meta name="twitter:description"
        content="<?= $page_description ?? 'LaRosa offers premium wedding and event planning services. Transform your special day into an unforgettable experience with our expert team.' ?>">
    <meta name="twitter:image" content="<?= $og_image ?? 'public/assets/img/og-default.jpg' ?>">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png">

    <!-- CSS here -->
    <link rel="stylesheet" href="/assets/css/preloader.css">
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/meanmenu.css">
    <link rel="stylesheet" href="/assets/css/animate.min.css">
    <link rel="stylesheet" href="/assets/css/cursor.css">
    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/assets/css/swiper-bundle.css">
    <link rel="stylesheet" href="/assets/css/backToTop.css">
    <link rel="stylesheet" href="/assets/css/whatsapp.css">
    <link rel="stylesheet" href="/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="/assets/css/nice-select.css">
    <link rel="stylesheet" href="/assets/css/fontAwesome5Pro.css">
    <link rel="stylesheet" href="/assets/css/flaticon.css">
    <link rel="stylesheet" href="/assets/css/default.css">
    <link rel="stylesheet" href="/assets/css/main.css">
</head>

<body>
    <!-- background animation -->
    <?php include BASE_PATH . '/components/shared/bgAnimation.php'; ?>

    <!-- Load Preloader Component -->
    <?php include BASE_PATH . '/components/layout/preloader/preloader.php'; ?>

    <!-- Load Header Component -->
    <?php include BASE_PATH . '/components/layout/header/header-2.php'; ?>

    <!-- Load Sidebar Component -->
    <?php include BASE_PATH . '/components/layout/sidebar/sidebar-2.php'; ?>
    <?php include BASE_PATH . '/components/layout/cart/CartSidebar.php'; ?>

    <!-- Main Content -->
    <main>
        <?php
        // This is where page-specific content will be included
        if (isset($content)) {
            echo $content;
        }
        ?>
    </main>

    <?php include BASE_PATH . '/components/shared/instagram.php'; ?>
    <!-- Load Footer Component -->
    <?php include BASE_PATH . '/components/layout/footer/footer.php'; ?>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/94775033375" target="_blank" rel="noopener" class="whatsapp-float-btn"
        aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M24.5,7.5C22.2,5.2,19.2,4,16,4C9.5,4,4.1,9.4,4.1,15.9c0,2.1,0.5,4.2,1.6,6L4,28.1l6.3-1.7
            c1.7,1,3.7,1.5,5.7,1.5h0l0,0c6.6,0,11.9-5.4,12-11.9C28,12.8,26.8,9.8,24.5,7.5z M16,25.9L16,25.9c-1.8,0-3.5-0.5-5.1-1.4
            l-0.4-0.2l-3.8,1l1-3.7l-0.2-0.4c-1-1.6-1.5-3.4-1.5-5.3c0-5.5,4.5-9.9,9.9-9.9c2.7,0,5.1,1,7,2.9s2.9,4.4,2.9,7
            C26,21.4,21.5,25.9,16,25.9z M21.5,18.4c-0.3-0.1-1.8-0.9-2-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.2s-0.3,0.2-0.6,0.1
            s-1.3-0.5-2.4-1.5c-0.9-0.8-1.5-1.8-1.7-2.1s0-0.5,0.1-0.6c0.1-0.1,0.3-0.3,0.4-0.5s0.2-0.3,0.3-0.5s0.1-0.4,0-0.5
            s-0.7-1.6-0.9-2.2c-0.2-0.6-0.5-0.5-0.7-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0.1-0.8,0.4s-1,1-1,2.5s1.1,2.9,1.2,3.1
            s2.1,3.2,5.1,4.5c0.7,0.3,1.3,0.5,1.7,0.6c0.7,0.2,1.4,0.2,1.9,0.1c0.6-0.1,1.8-0.7,2-1.4c0.2-0.7,0.2-1.3,0.2-1.4
            C22,18.7,21.8,18.6,21.5,18.4z" />
        </svg>
    </a>

    <!-- Back to top -->
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>

    <!-- JS here -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/meanmenu.js"></script>
    <script src="/assets/js/swiper-bundle.min.js"></script>
    <script src="/assets/js/magnific-popup.min.js"></script>
    <script src="/assets/js/jarallax.min.js"></script>
    <script src="/assets/js/appair.min.js"></script>
    <script src="/assets/js/odometer.min.js"></script>
    <script src="/assets/js/jquery-ui-slider-range.js"></script>
    <script src="/assets/js/cursor.js"></script>
    <script src="/assets/js/backToTop.js"></script>
    <script src="/assets/js/nice-select.min.js"></script>
    <script src="/assets/js/ajax-form.js"></script>
    <script src="/assets/js/wow.min.js"></script>
    <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="/assets/js/isotope.pkgd.min.js"></script>
    <script src="/assets/js/currency-converter.js"></script>
    <script src="/assets/js/shop-filters.js"></script>
    <script src="/assets/js/main.js"></script>
</body>

</html>