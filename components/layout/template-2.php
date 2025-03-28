<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php echo isset($page_title) ? $page_title : 'LaRosa - Wedding & Event Planning'; ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

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
    <script src="/assets/js/main.js"></script>
</body>

</html>