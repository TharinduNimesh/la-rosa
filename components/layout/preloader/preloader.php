<div id="preloader">
    <!-- No image needed here - it's already in the CSS background -->
</div>

<!-- Mouse Cursor -->
<div class="mouseCursor cursor-outer"></div>
<div class="mouseCursor cursor-inner"></div>

<!-- Preloader Script -->
<script>
    // Ensure the preloader disappears after page load
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            // First try with fadeOut if jQuery is loaded
            if(typeof jQuery !== 'undefined') {
                jQuery('#preloader').fadeOut('slow', function(){
                    jQuery(this).remove();
                });
            } else {
                // Fallback to vanilla JS if jQuery isn't loaded yet
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.5s ease';
                
                setTimeout(function() {
                    if(preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 500);
            }
        }
    });
</script>