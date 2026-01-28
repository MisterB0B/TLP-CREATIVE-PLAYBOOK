/**
 * THE LIGHT PARK 2026 - Main JavaScript
 * Interactive features and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initScrollAnimations();
    initMobileMenu();
    initIntersectionObserver();
});

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Update active link
                updateActiveNavLink(targetId);
            }
        });
    });
}

/**
 * Scroll animations for task items
 */
function initScrollAnimations() {
    const taskItems = document.querySelectorAll('.task-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);
    
    taskItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(item);
    });
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navContainer = document.querySelector('.nav-container');
    
    // Create mobile menu button if it doesn't exist
    if (!document.querySelector('.mobile-menu-btn')) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        navContainer.appendChild(mobileBtn);
        
        // Add styles for mobile menu button
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                flex-direction: column;
                justify-content: space-around;
                width: 30px;
                height: 25px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 1001;
            }
            
            .mobile-menu-btn span {
                width: 30px;
                height: 3px;
                background: var(--teal-light);
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
                transform: translateX(20px);
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg);
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: flex;
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Toggle menu
        mobileBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn) {
        mobileBtn.classList.remove('active');
    }
    
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

/**
 * Intersection Observer for scroll-based active link highlighting
 */
function initIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Add parallax effect to hero section
 */
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        hero.style.backgroundPositionY = `${rate}px`;
    }
});

/**
 * Add active state styles for navigation
 */
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links a.active {
        color: var(--teal-light) !important;
        background: rgba(20, 184, 166, 0.1) !important;
    }
    
    .nav-links a.active::after {
        width: 80% !important;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: var(--spacing-md);
            gap: 0;
            border-top: 1px solid var(--border-color);
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .nav-links li {
            width: 100%;
            text-align: center;
        }
        
        .nav-links a {
            display: block;
            padding: var(--spacing-sm) 0;
            width: 100%;
        }
    }
`;
document.head.appendChild(activeStyle);