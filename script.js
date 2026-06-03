// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Optional: stop observing once it has appeared
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => {
    observer.observe(el);
});

// Navbar Scroll Effect (blur and background opacity change)
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 242, 254, 0.1)'; /* subtle cyan shadow */
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// Auto-Sliding Carousel for Projects
const carousels = document.querySelectorAll('.project-media-carousel');
carousels.forEach(carousel => {
    setInterval(() => {
        // If scroll reached the end, snap back to start
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Scroll right by exactly the width of the container
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        }
    }, 2000); // 2000 milliseconds = 2 seconds
});
