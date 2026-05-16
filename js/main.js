// Bakery & Cake Design Studio - Main JS
// Handles Navigation Sync, Theme Switching, and UI Interactions

const BAKERY_PRODUCTS = {
    "cake-velvet-dream": {
        id: "cake-velvet-dream",
        name: "Velvet Dream Cake",
        category: "Wedding Cakes",
        price: 45.00,
        image: "../images/hero.png",
        badge: "Best Seller",
        description: "Our signature red velvet sponge, incredibly moist and tender, layered with our secret recipe cream cheese frosting and finished with delicate edible gold leaf. Perfect for weddings, anniversaries, or elegant celebrations.",
        ingredients: "Premium Flour, Cocoa Powder, Buttermilk, Cream Cheese, Organic Beetroot Extract, Edible Gold Leaf.",
        rating: 4.8,
        reviewsCount: 48
    },
    "cake-midnight-orchid": {
        id: "cake-midnight-orchid",
        name: "Midnight Orchid Cake",
        category: "Wedding Cakes",
        price: 85.00,
        image: "../images/wedding_cat.png",
        badge: "Premium",
        description: "A dark chocolate ganache cake infused with espresso, decorated with hand-sculpted sugar orchids. A sophisticated choice for a modern evening wedding.",
        ingredients: "Valrhona Chocolate, Espresso Roast, Madagascar Vanilla, Cane Sugar, Hand-sculpted Sugar Art.",
        rating: 4.9,
        reviewsCount: 24
    },
    "cake-white-lace": {
        id: "cake-white-lace",
        name: "White Lace & Pearls",
        category: "Wedding Cakes",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1522760883748-aa2c07936653?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Classic",
        description: "A timeless multi-tier vanilla bean cake with delicate royal icing lace patterns and edible pearl clusters. Pure elegance in every bite.",
        ingredients: "Tahitian Vanilla Bean, Belgian Butter, Egg Whites, Royal Icing, Edible Sugar Pearls.",
        rating: 4.7,
        reviewsCount: 36
    },
    "cake-choc-truffle": {
        id: "cake-choc-truffle",
        name: "Chocolate Truffle Indulgence",
        category: "Birthday Cakes",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Popular",
        description: "Triple-layered rich chocolate sponge filled with dark chocolate truffle ganache and coated in smooth Belgian chocolate. A chocolate lover's ultimate birthday wish.",
        ingredients: "Dark Chocolate 70%, Dutch Cocoa, Heavy Cream, Sea Salt, Chocolate Shavings.",
        rating: 4.9,
        reviewsCount: 62
    },
    "cake-berry-confetti": {
        id: "cake-berry-confetti",
        name: "Berry Confetti Surprise",
        category: "Birthday Cakes",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Kids Choice",
        description: "Funfetti sponge with fresh strawberry compote filling and rainbow sprinkle buttercream. The happiest cake for the most joyful birthdays.",
        ingredients: "Sprinkle Cake Base, Fresh Strawberries, Swiss Meringue Buttercream, Rainbow Sprinkles.",
        rating: 4.6,
        reviewsCount: 55
    },
    "cupcakes-pastel-party": {
        id: "cupcakes-pastel-party",
        name: "Pastel Party Set",
        category: "Cupcakes",
        price: 32.00,
        image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Best Seller",
        description: "A curated set of 12 cupcakes in soft pastel shades. Includes Vanilla Rose, Lavender Lemon, and Earl Grey Honey flavors. Beautiful and delicious.",
        ingredients: "Artisanal Flour, Organic Petals, Local Honey, Meyer Lemons, Earl Grey Infusion.",
        rating: 4.8,
        reviewsCount: 84
    },
    "macarons-parisian-gold": {
        id: "macarons-parisian-gold",
        name: "Parisian Gold Macarons",
        category: "Macarons",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "New",
        description: "Authentic French macarons with almond shells and gold-dusted chocolate ganache. A box of 6 luxury treats that melt in your mouth.",
        ingredients: "Almond Flour, Organic Egg Whites, Gold Leaf, Belgian Chocolate, Sea Salt.",
        rating: 4.9,
        reviewsCount: 31
    },
    "pastry-berry-bliss": {
        id: "pastry-berry-bliss",
        name: "Berry Bliss Tart",
        category: "Pastries",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Fresh Today",
        description: "A buttery shortbread crust filled with silky vanilla bean custard and topped with a mosaic of fresh seasonal berries.",
        ingredients: "Shortbread Pastry, Vanilla Custard, Raspberries, Blueberries, Apricot Glaze.",
        rating: 4.7,
        reviewsCount: 42
    },
    "cake-vegan-matcha": {
        id: "cake-vegan-matcha",
        name: "Zen Matcha Vegan Cake",
        category: "Vegan Options",
        price: 52.00,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Healthy",
        description: "A plant-based masterpiece made with ceremonial grade matcha, coconut cream, and a gluten-free almond base. Subtle, earthy, and perfectly sweet.",
        ingredients: "Ceremonial Matcha, Coconut Milk, Almond Flour, Maple Syrup, Flax Seeds.",
        rating: 4.8,
        reviewsCount: 19
    },
    "cupcakes-velvet-duet": {
        id: "cupcakes-velvet-duet",
        name: "Red Velvet Duet",
        category: "Cupcakes",
        price: 36.00,
        image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Romantic",
        description: "A romantic pairing of red velvet and white chocolate cupcakes. Perfectly sized for sharing or indulging alone.",
        ingredients: "Cocoa, Buttermilk, White Chocolate Ganache, Cream Cheese Frosting.",
        rating: 4.7,
        reviewsCount: 28
    },
    "macarons-rose-garden": {
        id: "macarons-rose-garden",
        name: "Rose Garden Macarons",
        category: "Macarons",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1569864358642-9d16197022c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Handcrafted",
        description: "Delicate rose-infused shells filled with a light raspberry cream. These macarons capture the essence of a spring garden in bloom.",
        ingredients: "Rose Water, Raspberry Purée, Almond Flour, Organic Sugar, Egg Whites.",
        rating: 4.8,
        reviewsCount: 22
    },
    "pastry-lemon-meringue": {
        id: "pastry-lemon-meringue",
        name: "Cloud Nine Lemon Tart",
        category: "Pastries",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Zesty",
        description: "Tangy lemon curd in a crisp pastry shell, topped with a mountain of toasted Italian meringue. It's like eating a cloud.",
        ingredients: "Meyer Lemon Curd, Italian Meringue, All-Butter Pastry, Candied Zest.",
        rating: 4.6,
        reviewsCount: 39
    },
    "cake-vegan-berry": {
        id: "cake-vegan-berry",
        name: "Wild Berry Vegan Galette",
        category: "Vegan Options",
        price: 48.00,
        image: "../images/celebration_cat.png",
        badge: "Plant Based",
        description: "A rustic, free-form tart filled with a medley of wild blackberries, blueberries, and raspberries. 100% vegan and naturally delicious.",
        ingredients: "Wild Berries, Vegan Shortcrust, Coconut Sugar, Lemon Juice, Cornstarch.",
        rating: 4.9,
        reviewsCount: 15
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const isRoot = !window.location.pathname.includes('/pages/');
    const basePath = isRoot ? 'pages/' : '';
    const rootPath = isRoot ? '' : '../';

    // 1. Centralized Navbar & Footer Injection
    // Skip injection on dashboard pages to prevent layout interference
    window.APP_CONFIG = {
        isRoot: isRoot,
        basePath: basePath,
        rootPath: rootPath,
        isDashboard: window.location.pathname.includes('admin-') || 
                     window.location.pathname.includes('dashboard.html') ||
                     window.location.pathname.includes('my-orders.html') ||
                     window.location.pathname.includes('order-tracking.html') ||
                     window.location.pathname.includes('wishlist.html') ||
                     window.location.pathname.includes('profile.html') ||
                     window.location.pathname.includes('settings.html') ||
                     window.location.pathname.includes('notifications.html') ||
                     window.location.pathname.includes('support-center.html') ||
                     window.location.pathname.includes('payment-methods.html') ||
                     window.location.pathname.includes('saved-addresses.html') ||
                     window.location.pathname.includes('user-')
    };

    if (!window.APP_CONFIG.isDashboard) {
        injectNavigation(isRoot, basePath, rootPath);
        injectFooter(isRoot, basePath, rootPath);
    }

    // 2. Initialize Core Functionalities
    initThemeSwitcher();
    initMobileMenu();
    initDashboardSidebar();
    initScrollEffects();
    initRevealAnimations();
    initCart();
    populateProductDetail();
    initHeroSlideshow();
});

/**
 * Hero Slideshow Logic
 */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow img');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    let currentSlide = 0;
    setInterval(() => {
        // Handle slides
        slides.forEach(s => s.classList.remove('active', 'prev'));
        let prevSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[prevSlide].classList.add('prev');
        slides[currentSlide].classList.add('active');

        // Handle dots
        dots.forEach(d => d.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }, 5000);
}

/**
 * Dashboard Sidebar Logic (Mobile)
 */
function initDashboardSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle') || 
                          document.getElementById('dash-hamburger') || 
                          document.querySelector('.dashboard-toggle');
    
    const sidebar = document.querySelector('.admin-sidebar') || 
                    document.getElementById('dash-sidebar') || 
                    document.querySelector('.dashboard-sidebar') ||
                    document.querySelector('.dash-sidebar');
    
    const overlay = document.querySelector('.sidebar-overlay') || 
                    document.getElementById('dash-overlay');
    
    const closeLinks = document.querySelectorAll('.admin-link, .sidebar-link, .dash-nav-link');

    if (sidebarToggle && sidebar && overlay) {
        const toggleSidebar = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent scrolling when sidebar is open on mobile
            if (window.innerWidth <= 992) {
                document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
            }
        };

        sidebarToggle.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

        closeLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
}

/**
 * Injects a synchronized navbar across all pages
 */
function injectNavigation(isRoot, basePath, rootPath) {
    const header = document.querySelector('header') || document.getElementById('main-header');
    if (!header) return;

    // Define the synchronized navbar structure
    header.innerHTML = `
        <div class="container">
            <nav>
                <a href="${rootPath}index.html" class="logo-wrapper">
                    <div class="logo-icon">
                        <i class="fa-solid fa-cake-candles"></i>
                    </div>
                    <span class="logo-text">Cakeology</span>
                </a>
                
                <ul class="nav-links" id="mobile-nav">
                    <li><a href="${rootPath}index.html">Home</a></li>
                    <li><a href="${basePath}home2.html">Home 2</a></li>
                    <li><a href="${basePath}shop.html">Shop</a></li>
                    <li><a href="${basePath}about.html">About</a></li>
                    <li><a href="${basePath}gallery.html">Gallery</a></li>
                    <li><a href="${basePath}blog.html">Blog</a></li>
                    <li><a href="${basePath}contact.html">Contact</a></li>
                </ul>

                <div class="nav-actions">
                    <div class="user-account">
                        <div class="account-trigger" title="User Account">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="account-dropdown">
                            <div class="dropdown-body">
                                <a href="${basePath}login.html" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> Login / Signup</a>
                                <a href="${basePath}dashboard.html" class="dropdown-item"><i class="fas fa-th-large"></i> User Dashboard</a>
                                <a href="${basePath}admin-dashboard.html" class="dropdown-item"><i class="fas fa-user-shield"></i> Admin Dashboard</a>
                            </div>
                        </div>
                    </div>
                    <a href="${basePath}cart.html" class="cart-trigger" id="cart-btn" title="Shopping Cart">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span class="cart-count">0</span>
                    </a>
                    <button class="theme-toggle" id="theme-toggle" title="Toggle Dark/Light Mode">
                        <i class="fa-solid fa-moon"></i>
                    </button>
                    <div class="mobile-menu-btn" id="hamburger-btn" title="Menu">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                </div>
            </nav>
        </div>
    `;

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.endsWith(href)) {
            link.classList.add('active');
        }
    });
}

/**
 * Injects a synchronized footer across all pages
 */
function injectFooter(isRoot, basePath, rootPath) {
    const footer = document.querySelector('footer') || document.getElementById('main-footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <!-- Brand Section -->
                <div class="footer-col">
                    <a href="${rootPath}index.html" class="logo-wrapper" style="display: flex; margin-bottom: 25px;">
                        <div class="logo-icon">
                            <i class="fa-solid fa-cake-candles"></i>
                        </div>
                        <span class="logo-text">Cakeology</span>
                    </a>
                    <p class="footer-desc">Crafting luxury bespoke cakes and artisanal pastries for your most precious moments. Every creation is a unique piece of art handcrafted with love.</p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-pinterest-p"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>

                <!-- Discovery Section -->
                <div class="footer-col">
                    <h4>Collections</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}shop.html">Wedding Collection</a></li>
                        <li><a href="${basePath}shop.html">Celebration Cakes</a></li>
                        <li><a href="${basePath}shop.html">Designer Cupcakes</a></li>
                        <li><a href="${basePath}shop.html">Seasonal Specials</a></li>
                        <li><a href="${basePath}offers.html">Exclusive Offers</a></li>
                    </ul>
                </div>

                <!-- Experience Section -->
                <div class="footer-col">
                    <h4>The Studio</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}about.html">Our Story</a></li>
                        <li><a href="${basePath}gallery.html">Art Portfolio</a></li>
                        <li><a href="${basePath}custom-order.html">Custom Design</a></li>
                        <li><a href="${basePath}blog.html">Baking Blog</a></li>
                        <li><a href="${basePath}testimonials.html">Reviews</a></li>
                    </ul>
                </div>

                <!-- Support Section -->
                <div class="footer-col">
                    <h4>Visit Us</h4>
                    <ul class="contact-info-list">
                        <li>
                            <i class="fas fa-location-dot"></i>
                            <span>123 Bakery Lane, Sugar City, NY 10001</span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>hello@cakeology.com</span>
                        </li>
                        <li>
                            <i class="fas fa-clock"></i>
                            <span>Tue - Sat: 9:00 AM - 6:00 PM<br>Sun - Mon: Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Cakeology Artisanal Bakery. All rights reserved.</p>
                <div class="legal-links">
                    <a href="${basePath}privacy.html">Privacy Policy</a>
                    <a href="${basePath}terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Theme Switcher Logic
 */
function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function applyTheme(theme, isInitial = false) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) {
                const icon = themeToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-sun';
            }
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) {
                const icon = themeToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-moon';
            }
            localStorage.setItem('theme', 'light');
        }
        
        if (isInitial) {
            body.style.transition = 'none';
            setTimeout(() => { body.style.transition = ''; }, 100);
        }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply theme regardless of toggle presence
    applyTheme(activeTheme, true);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }
}

/**
 * Mobile Menu Logic
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('mobile-nav');
    const accountTrigger = document.querySelector('.account-trigger');
    const accountDropdown = document.querySelector('.account-dropdown');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            if (accountDropdown) accountDropdown.classList.remove('active');
        });
    }

    if (accountTrigger && accountDropdown) {
        accountTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isMobile = window.innerWidth <= 992;
            accountDropdown.classList.toggle('active');
            
            if (!isMobile && navLinks) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (accountDropdown && accountTrigger && !accountDropdown.contains(e.target) && !accountTrigger.contains(e.target)) {
            accountDropdown.classList.remove('active');
        }
        if (navLinks && mobileMenuBtn && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (accountDropdown) accountDropdown.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        }
    });

    // Close on Resize (if going to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            if (navLinks) navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        }
    });
}

/**
 * Header Scroll Effects
 */
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (!header) return;
        
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Reveal Animations
 */
function initRevealAnimations() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Populate Product Detail Page
 */
function populateProductDetail() {
    if (!window.location.pathname.includes('product-detail.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'cake-velvet-dream';
    const product = BAKERY_PRODUCTS[productId];

    if (!product) return;

    // Update Title & Breadcrumbs
    document.title = `${product.name} | Cakeology`;
    const breadcrumb = document.querySelector('.product-detail nav');
    if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="shop.html">Shop</a> / <a href="#">${product.category}</a> / ${product.name}`;
    }

    // Update Image
    const mainImg = document.querySelector('.main-img');
    if (mainImg) mainImg.src = product.image;

    // Update Info
    const title = document.querySelector('.product-info-side h1');
    if (title) title.innerText = product.name;

    const price = document.querySelector('.price-tag');
    if (price) price.innerText = `$${product.price.toFixed(2)}`;

    const desc = document.querySelector('.product-info-side p');
    if (desc) desc.innerText = product.description;

    const categoryText = document.querySelector('.product-info-side div p:nth-child(1)');
    if (categoryText) {
        categoryText.innerHTML = `<strong>Category:</strong> ${product.category}`;
    }

    const ingredientsText = document.querySelector('.product-info-side div p:nth-child(2)');
    if (ingredientsText) {
        ingredientsText.innerHTML = `<strong>Ingredients:</strong> ${product.ingredients}`;
    }

    // Update Rating
    const stars = document.querySelectorAll('.product-info-side .fa-star, .product-info-side .fa-star-half-alt');
    const reviewsCount = document.querySelector('.product-info-side span[style*="color: var(--text-muted)"]');
    if (reviewsCount) reviewsCount.innerText = `(${product.reviewsCount} Customer Reviews)`;

    // Update Add to Cart Logic for this specific product
    const productContainer = document.querySelector('.product-card');
    if (productContainer) {
        productContainer.dataset.id = product.id;
        productContainer.dataset.category = product.category;
        
        const cardTitle = productContainer.querySelector('h1');
        if (cardTitle) cardTitle.classList.add('product-title'); // For addToCart to find name
        
        const cardPrice = productContainer.querySelector('.price-tag');
        if (cardPrice) {
            // Wrap price in span for addToCart to parse
            cardPrice.innerHTML = `<span class="product-price"><span>$${product.price.toFixed(2)}</span></span>`;
        }
    }
}

/**
 * Shopping Cart Logic
 */
// Cart data is handled directly via localStorage to ensure synchronization

function initCart() {
    const config = window.APP_CONFIG || { basePath: '', isDashboard: false };
    const { basePath, isDashboard } = config;
    // Inject Cart Drawer HTML if not present
    if (!document.querySelector(".cart-drawer")) {
        const cartHTML = `
            <div class="cart-overlay"></div>
            <div class="cart-drawer">
                <div class="cart-header">
                    <h3>Your Basket</h3>
                    <button class="close-cart">&times;</button>
                </div>
                <div class="cart-items"></div>
                <div class="cart-footer">
                    <div class="cart-total">
                        <span>Total</span>
                        <span class="total-amount">$0.00</span>
                    </div>
                    <button class="checkout-btn">Proceed to Checkout</button>
                    <a href="${basePath}cart.html" class="view-full-cart" style="display: block; text-align: center; margin-top: 15px; color: var(--text-secondary); font-size: 0.9rem; text-decoration: underline;">View Full Basket</a>
                </div>
            </div>
            <div class="toast-container"></div>
        `;
        document.body.insertAdjacentHTML("beforeend", cartHTML);

        // Add checkout button listener
        document.querySelector(".checkout-btn").addEventListener("click", () => {
            window.location.href = `${basePath}cart.html`;
        });
    }

    const cartBtn = document.getElementById("cart-btn");
    const closeBtn = document.querySelector(".close-cart");
    const cartDrawer = document.querySelector(".cart-drawer");
    const overlay = document.querySelector(".cart-overlay");

    if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
            // If we are already on the cart page, don't open the drawer
            if (window.location.pathname.includes('cart.html')) return;
            
            e.preventDefault();
            cartDrawer.classList.add("active");
            overlay.classList.add("active");
            renderCart();
        });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeCart);
    if (overlay) overlay.addEventListener("click", closeCart);

    function closeCart() {
        cartDrawer.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Handle "Add to Cart" and Card Redirections
    document.addEventListener("click", (e) => {
        const addToCartBtn = e.target.closest(".add-to-cart");
        const productCard = e.target.closest(".product-card");

        // 1. Handle Add to Cart
        if (addToCartBtn && productCard) {
            e.preventDefault();
            e.stopPropagation();

            const name = productCard.querySelector(".product-title")?.innerText || 
                         productCard.querySelector("h3")?.innerText || 
                         productCard.querySelector("h1")?.innerText;
            
            const priceText = productCard.querySelector(".product-price")?.innerText || 
                              productCard.querySelector(".price-tag")?.innerText || "0";
            
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
            
            const image = productCard.querySelector(".product-img img")?.src || 
                          productCard.querySelector(".main-img")?.src ||
                          productCard.querySelector("img")?.src;

            const product = {
                id: productCard.dataset.id || `prod-${Date.now()}`,
                name: name,
                price: price,
                image: image,
                category: productCard.dataset.category || productCard.querySelector(".product-category")?.innerText || "Pastries",
                quantity: 1
            };
            
            window.addToCart(product);
            return; // Stop here, don't trigger redirection
        }

        // 2. Handle Card Redirection
        if (productCard && !isDashboard) {
            // Check if we clicked something interactive that isn't the cart button
            // (Buttons, inputs, etc should not trigger redirect)
            if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select') || e.target.closest('.qty-btn')) {
                return;
            }

            const productId = productCard.dataset.id;
            if (productId) {
                const isRoot = !window.location.pathname.includes('/pages/');
                const prefix = isRoot ? 'pages/' : '';
                window.location.href = `${prefix}product-detail.html?id=${productId}`;
            }
        }
    });

    // Initialize Filtering (if on Shop page)
    initProductFilters();

    window.updateCartCount();
}

function initProductFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");

    if (filterBtns.length > 0 && products.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const category = btn.innerText.trim();
                
                products.forEach(product => {
                    const productCat = product.dataset.category || product.querySelector(".product-category")?.innerText;
                    
                    if (category === "All Delights" || productCat === category) {
                        product.style.display = "block";
                        // Re-trigger reveal animation if hidden
                        product.classList.remove("animate-fade-up");
                        setTimeout(() => product.classList.add("animate-fade-up"), 10);
                    } else {
                        product.style.display = "none";
                    }
                });
            });
        });
    }
}

/**
 * Update Cart Count Badge
 */
function updateCartCount() {
    const localCart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
    const count = localCart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll(".cart-count").forEach(el => {
        el.innerText = count;
        el.classList.remove('animate');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('animate');
    });
}
window.updateCartCount = updateCartCount;

/**
 * Add Product to Cart
 */
function addToCart(product) {
    if (!product.name || isNaN(product.price)) {
        console.error("Invalid product data", product);
        return;
    }

    const localCart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
    const existingItem = localCart.find(item => item.id === product.id || item.name === product.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        localCart.push(product);
    }
    
    localStorage.setItem("bakery_cart", JSON.stringify(localCart));
    window.updateCartCount();
    
    // If cart drawer is open, re-render it
    const cartDrawer = document.querySelector(".cart-drawer");
    if (cartDrawer && cartDrawer.classList.contains("active")) {
        window.renderCart();
    }
    
    showToast(`${product.name} added to basket!`);
}
window.addToCart = addToCart;

// Stale functions removed

window.renderCart = () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalAmount = document.querySelector(".total-amount");
    const localCart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
    
    if (!cartItemsContainer) return;

    if (localCart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-shopping-basket"></i>
                <p>Your basket is empty.</p>
                <a href="shop.html" class="btn btn-outline" style="margin-top: 20px;">Start Shopping</a>
            </div>
        `;
        totalAmount.innerText = "$0.00";
        return;
    }

    cartItemsContainer.innerHTML = localCart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                    <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <i class="fas fa-trash remove-item" onclick="removeFromCart(${index})"></i>
                </div>
            </div>
        </div>
    `).join("");

    const total = localCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.innerText = `$${total.toFixed(2)}`;
}

window.changeQty = (index, delta) => {
    const localCart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
    localCart[index].quantity += delta;
    if (localCart[index].quantity < 1) {
        localCart.splice(index, 1);
    }
    localStorage.setItem("bakery_cart", JSON.stringify(localCart));
    window.updateCartCount();
    window.renderCart();
};

window.removeFromCart = (index) => {
    const localCart = JSON.parse(localStorage.getItem("bakery_cart")) || [];
    localCart.splice(index, 1);
    localStorage.setItem("bakery_cart", JSON.stringify(localCart));
    window.updateCartCount();
    window.renderCart();
};

function showToast(message) {
    const container = document.querySelector(".toast-container");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add("active"), 100);
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
