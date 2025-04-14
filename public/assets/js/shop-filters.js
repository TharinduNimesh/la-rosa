/**
 * Shop Filter JavaScript for La Rosa Flora
 * Handles filtering products by price, category, color, and search
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all products on the page
    const products = document.querySelectorAll('.lv-single-product-design');
    const priceSlider = document.getElementById('lv-slider-range');
    const priceDisplay = document.getElementById('lv-amount');
    const filterButton = document.querySelector('.lv-amount-filter');
    const searchForm = document.querySelector('.lv-search-widget-form-1-6');
    const searchInput = document.getElementById('search');
    
    // Store original product list for resetting filters
    const allProducts = Array.from(products);
    
    // Set price range based on product prices
    let minPrice = Infinity;
    let maxPrice = 0;
    
    // Get min and max prices from products
    allProducts.forEach(product => {
        const priceEl = product.querySelector('.price-amount');
        if (priceEl) {
            const price = parseFloat(priceEl.getAttribute('data-price-lkr').replace(/,/g, ''));
            minPrice = Math.min(minPrice, price);
            maxPrice = Math.max(maxPrice, price);
        }
    });
    
    // Round min/max for nicer values
    minPrice = Math.floor(minPrice / 1000) * 1000;
    maxPrice = Math.ceil(maxPrice / 1000) * 1000;
    
    // Initialize price slider
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && priceSlider) {
        jQuery(priceSlider).slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function(event, ui) {
                // Update display based on current currency
                const currentCurrency = localStorage.getItem('preferredCurrency') || 'LKR';
                
                if (currentCurrency === 'LKR') {
                    jQuery(priceDisplay).val("LKR " + formatNumber(ui.values[0]) + " - LKR " + formatNumber(ui.values[1]));
                } else {
                    const minUSDT = (ui.values[0] * 0.0031).toFixed(2);
                    const maxUSDT = (ui.values[1] * 0.0031).toFixed(2);
                    jQuery(priceDisplay).val("USDT " + minUSDT + " - USDT " + maxUSDT);
                }
            }
        });
        
        // Set initial values
        const currentCurrency = localStorage.getItem('preferredCurrency') || 'LKR';
        if (currentCurrency === 'LKR') {
            jQuery(priceDisplay).val("LKR " + formatNumber(jQuery(priceSlider).slider("values", 0)) + 
                " - LKR " + formatNumber(jQuery(priceSlider).slider("values", 1)));
        } else {
            const minUSDT = (jQuery(priceSlider).slider("values", 0) * 0.0031).toFixed(2);
            const maxUSDT = (jQuery(priceSlider).slider("values", 1) * 0.0031).toFixed(2);
            jQuery(priceDisplay).val("USDT " + minUSDT + " - USDT " + maxUSDT);
        }
    }
    
    // Format number with commas
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // Filter products by price
    if (filterButton) {
        filterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const priceRange = jQuery(priceSlider).slider("values");
            const minPrice = priceRange[0];
            const maxPrice = priceRange[1];
            
            // Filter products
            filterProductsByPrice(minPrice, maxPrice);
        });
    }
    
    // Filter products by price range
    function filterProductsByPrice(min, max) {
        let visibleCount = 0;
        
        allProducts.forEach(product => {
            const priceEl = product.querySelector('.price-amount');
            if (priceEl) {
                const price = parseFloat(priceEl.getAttribute('data-price-lkr').replace(/,/g, ''));
                
                if (price >= min && price <= max) {
                    product.style.display = '';
                    visibleCount++;
                } else {
                    product.style.display = 'none';
                }
            }
        });
        
        // Update showing results count
        const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
        if (resultsCountEl) {
            resultsCountEl.textContent = `Showing ${visibleCount} of ${allProducts.length} results`;
        }
        
        // Hide pagination if all filtered
        const paginationEl = document.querySelector('.lv-shop-pagination-1-6');
        if (paginationEl) {
            paginationEl.style.display = visibleCount === 0 ? 'none' : '';
        }
    }
    
    // Search functionality
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') {
                // Reset search
                allProducts.forEach(product => {
                    product.style.display = '';
                });
                return;
            }
            
            let visibleCount = 0;
            
            // Filter by search term
            allProducts.forEach(product => {
                const titleEl = product.querySelector('.lv-single-product-design-content-title a');
                if (titleEl) {
                    const title = titleEl.textContent.toLowerCase();
                    
                    if (title.includes(searchTerm)) {
                        product.style.display = '';
                        visibleCount++;
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
            
            // Update showing results count
            const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
            if (resultsCountEl) {
                resultsCountEl.textContent = `Showing ${visibleCount} of ${allProducts.length} results`;
            }
        });
    }
    
    // Category filter
    const categoryLinks = document.querySelectorAll('.lv-widget-categories-list-1-6 a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get category name (remove the count in parentheses)
            const categoryText = this.textContent.trim();
            const categoryName = categoryText.substring(0, categoryText.indexOf('(')).trim();
            
            // Remove active class from all links
            categoryLinks.forEach(el => el.classList.remove('active'));
            
            // Add active class to current link
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // Filter by category
            allProducts.forEach(product => {
                const titleEl = product.querySelector('.lv-single-product-design-content-title a');
                if (titleEl) {
                    // Check if product belongs to category (for demo, we check if title contains category)
                    // In a real implementation, you'd have category data in your product
                    const title = titleEl.textContent;
                    
                    if (categoryName === 'All' || title.includes(categoryName)) {
                        product.style.display = '';
                        visibleCount++;
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
            
            // Update showing results count
            const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
            if (resultsCountEl) {
                resultsCountEl.textContent = `Showing ${visibleCount} of ${allProducts.length} results`;
            }
        });
    });
    
    // Color filter
    const colorLinks = document.querySelectorAll('.lv-widget-filter-color-list-1-6 a');
    colorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get color name
            const colorName = this.textContent.trim();
            
            // Remove active class from all links
            colorLinks.forEach(el => el.classList.remove('active'));
            
            // Add active class to current link
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // For demo purposes, we're using pre-defined color-product relationships
            // In a real implementation, you'd have color data in your product
            const colorToProductMap = {
                'White': ['Wedding', 'Bouquet', 'Bridal'],
                'Pink': ['Rose', 'Bouquet', 'Premium'],
                'Red': ['Rose', 'Premium'],
                'Green': ['Table', 'Centerpiece', 'Decoration'],
                'Yellow': ['Gifts', 'Arrangement']
            };
            
            // Get relevant products for this color
            const relevantTerms = colorToProductMap[colorName] || [];
            
            // Filter by color
            allProducts.forEach(product => {
                const titleEl = product.querySelector('.lv-single-product-design-content-title a');
                if (titleEl) {
                    const title = titleEl.textContent;
                    
                    // Check if product title contains any of the relevant terms for this color
                    const matchesColor = relevantTerms.some(term => title.includes(term));
                    
                    if (colorName === 'All' || matchesColor) {
                        product.style.display = '';
                        visibleCount++;
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
            
            // Update showing results count
            const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
            if (resultsCountEl) {
                resultsCountEl.textContent = `Showing ${visibleCount} of ${allProducts.length} results`;
            }
        });
    });
    
    // Tag filter
    const tagLinks = document.querySelectorAll('.tagcloud a');
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get tag name
            const tagName = this.textContent.trim();
            
            // Remove active class from all links
            tagLinks.forEach(el => el.classList.remove('active'));
            
            // Add active class to current link
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // Filter by tag
            allProducts.forEach(product => {
                const titleEl = product.querySelector('.lv-single-product-design-content-title a');
                if (titleEl) {
                    const title = titleEl.textContent.toLowerCase();
                    
                    if (tagName === 'all' || title.includes(tagName.toLowerCase())) {
                        product.style.display = '';
                        visibleCount++;
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
            
            // Update showing results count
            const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
            if (resultsCountEl) {
                resultsCountEl.textContent = `Showing ${visibleCount} of ${allProducts.length} results`;
            }
        });
    });
    
    // Reset filters
    const resetButton = document.createElement('button');
    resetButton.className = 'lv-reset-filters-btn';
    resetButton.textContent = 'Reset Filters';
    resetButton.style.cssText = 'background-color: #e5a87f; color: white; border: none; padding: 10px 15px; margin-top: 20px; border-radius: 5px; cursor: pointer; display: block; width: 100%;';
    
    // Add reset button to sidebar
    const sidebar = document.querySelector('.lv-widget-left-padding-1-6');
    if (sidebar) {
        sidebar.appendChild(resetButton);
    }
    
    resetButton.addEventListener('click', function() {
        // Reset all products display
        allProducts.forEach(product => {
            product.style.display = '';
        });
        
        // Reset search input
        if (searchInput) {
            searchInput.value = '';
        }
        
        // Reset price slider to default values
        if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && priceSlider) {
            jQuery(priceSlider).slider("values", 0, minPrice);
            jQuery(priceSlider).slider("values", 1, maxPrice);
            
            const currentCurrency = localStorage.getItem('preferredCurrency') || 'LKR';
            if (currentCurrency === 'LKR') {
                jQuery(priceDisplay).val("LKR " + formatNumber(minPrice) + " - LKR " + formatNumber(maxPrice));
            } else {
                const minUSDT = (minPrice * 0.0031).toFixed(2);
                const maxUSDT = (maxPrice * 0.0031).toFixed(2);
                jQuery(priceDisplay).val("USDT " + minUSDT + " - USDT " + maxUSDT);
            }
        }
        
        // Remove active class from all filter links
        document.querySelectorAll('.lv-widget-categories-list-1-6 a, .lv-widget-filter-color-list-1-6 a, .tagcloud a').forEach(el => {
            el.classList.remove('active');
        });
        
        // Reset showing results count
        const resultsCountEl = document.querySelector('.lv-shop-product-count-1-6 span');
        if (resultsCountEl) {
            resultsCountEl.textContent = `Showing ${allProducts.length} of ${allProducts.length} results`;
        }
        
        // Show pagination
        const paginationEl = document.querySelector('.lv-shop-pagination-1-6');
        if (paginationEl) {
            paginationEl.style.display = '';
        }
    });
    
    // Update price display when currency changes
    document.addEventListener('currencyChanged', function(e) {
        const currency = e.detail.currency;
        
        if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && priceSlider && priceDisplay) {
            const minValue = jQuery(priceSlider).slider("values", 0);
            const maxValue = jQuery(priceSlider).slider("values", 1);
            
            if (currency === 'LKR') {
                jQuery(priceDisplay).val("LKR " + formatNumber(minValue) + " - LKR " + formatNumber(maxValue));
            } else {
                const minUSDT = (minValue * 0.0031).toFixed(2);
                const maxUSDT = (maxValue * 0.0031).toFixed(2);
                jQuery(priceDisplay).val("USDT " + minUSDT + " - USDT " + maxUSDT);
            }
        }
    });
});