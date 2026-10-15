/**
 * KUIPFI Strategic Risk Consultants - Unified Core Interactions
 * Handles navigation, mobile menu, animations, carousel, lightbox, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initScrollAnimations();
    initScrollSpy();
    initHeroSlider();
    initUniformLightbox();
    initContactScopePreselect();
    initFormHandlers();
});

/* ==========================================================================
   1. Mobile Navigation & Overlay
   ========================================================================== */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileToggleIcon = document.getElementById('mobileToggleIcon');

    if (!mobileToggle || !mainNav) return;

    function closeMobileNav() {
        mainNav.classList.remove('is-open');
        if (mobileOverlay) mobileOverlay.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        if (mobileToggleIcon) {
            mobileToggleIcon.className = 'fa-solid fa-bars';
        }
    }

    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mainNav.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
        if (mobileOverlay) {
            mobileOverlay.classList.toggle('is-open', isOpen);
        }
        if (mobileToggleIcon) {
            mobileToggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
    });

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileNav);
    }

    // Auto-close on link tap
    document.querySelectorAll('#mainNav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 960) {
                closeMobileNav();
            }
        });
    });

    // Close on outside tap
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('is-open')) {
            if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileNav();
            }
        }
    });

    // Auto-close if screen expands past mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 960 && mainNav.classList.contains('is-open')) {
            closeMobileNav();
        }
    });
}

/* ==========================================================================
   2. Scroll-Triggered Fade-In Animations
   ========================================================================== */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   3. Dynamic ScrollSpy (Home page section highlight)
   ========================================================================== */
function initScrollSpy() {
    const navLinks = document.querySelectorAll('#mainNav a:not(.btn-request-security)');
    if (!navLinks.length) return;

    const sections = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                sections.push({ href: href, element: target, link: link });
            }
        }
    });

    if (!sections.length) return;

    sections.sort((a, b) => a.element.offsetTop - b.element.offsetTop);

    let isTicking = false;

    function highlightCurrentSection() {
        const scrollPos = window.scrollY + 160;
        let currentSection = null;

        const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

        if (atBottom) {
            currentSection = sections[sections.length - 1];
        } else {
            for (let i = sections.length - 1; i >= 0; i--) {
                const sec = sections[i];
                if (sec.element.offsetTop <= scrollPos) {
                    currentSection = sec;
                    break;
                }
            }
        }

        sections.forEach(sec => {
            if (currentSection && sec.href === currentSection.href) {
                sec.link.classList.add('active');
            } else {
                sec.link.classList.remove('active');
            }
        });

        isTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(highlightCurrentSection);
            isTicking = true;
        }
    }, { passive: true });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    highlightCurrentSection();
    window.addEventListener('resize', () => {
        sections.sort((a, b) => a.element.offsetTop - b.element.offsetTop);
        highlightCurrentSection();
    });
}

/* ==========================================================================
   4. Hero Background Slideshow Carousel (Home Page)
   ========================================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    const SLIDE_DURATION = 3000; // 3 seconds cycle

    function goToSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function advanceSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(advanceSlide, SLIDE_DURATION);
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
            goToSlide(targetIndex);
            resetTimer();
        });
    });

    resetTimer();
}

/* ==========================================================================
   5. Uniform Lightbox Modal (Home Page)
   ========================================================================== */
function initUniformLightbox() {
    const lightbox = document.getElementById('uniformLightbox');
    if (!lightbox) return;

    window.openUniformLightbox = function () {
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };

    window.closeUniformLightbox = function () {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            window.closeUniformLightbox();
        }
    });
}

/* ==========================================================================
   6. Contact Service Scope Pre-Selection (Contact Page)
   ========================================================================== */
function initContactScopePreselect() {
    const selectElement = document.getElementById('cScope');
    if (!selectElement) return;

    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
        for (let i = 0; i < selectElement.options.length; i++) {
            const val = selectElement.options[i].value.toLowerCase();
            const param = serviceParam.toLowerCase();
            if (val.includes(param) || param.includes(val)) {
                selectElement.selectedIndex = i;
                break;
            }
        }
    }
}

/* ==========================================================================
   7. Form Submissions
   ========================================================================== */
function initFormHandlers() {
    // Provide globally accessible functions for backward-compatibility with inline onsubmit
    window.handleContactSubmit = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        alert('Thank you. Your consultation / procurement enquiry has been logged successfully. A KUIPFI representative will contact you within 24 business hours.');
        if (e && e.target && e.target.reset) e.target.reset();
        return false;
    };

    window.handleFormSubmit = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        alert('Thank you. Your enquiry has been submitted successfully. Our team will respond promptly.');
        if (e && e.target && e.target.reset) e.target.reset();
        return false;
    };

    // Also bind directly to form elements
    document.querySelectorAll('form').forEach(form => {
        if (!form.hasAttribute('onsubmit')) {
            form.addEventListener('submit', (e) => {
                if (form.id === 'contactForm' || form.querySelector('#cScope')) {
                    window.handleContactSubmit(e);
                } else {
                    window.handleFormSubmit(e);
                }
            });
        }
    });
}
