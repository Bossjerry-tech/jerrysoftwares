// ===== Theme Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load preference
    if (localStorage.getItem('jerry-theme') === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerHTML = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        
        // Visual feedback
        themeBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeBtn.innerHTML = isLight ? '☀️' : '🌙';
            themeBtn.style.transform = 'scale(1)';
        }, 150);

        localStorage.setItem('jerry-theme', isLight ? 'light' : 'dark');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Mobile Menu Toggle =====
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open'); // optional for animating the hamburger icon
});


// icons on scroll//
// Function to show/hide floating buttons on scroll
window.addEventListener('scroll', () => {
    const floatingGroup = document.querySelector('.floating-contact');
    
    // Show icons after scrolling 400px down
    if (window.scrollY > 400) {
        floatingGroup.classList.add('show');
    } else {
        floatingGroup.classList.remove('show');
    }
});

// Optional: Add a subtle 'bounce' every 10 seconds to catch attention
setInterval(() => {
    const whatsapp = document.querySelector('.whatsapp');
    if (whatsapp && document.querySelector('.floating-contact').classList.contains('show')) {
        whatsapp.style.transform = 'scale(1.2)';
        setTimeout(() => whatsapp.style.transform = 'scale(1)', 300);
    }
}, 10000);

//learn more button
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.querySelector('.btn-secondary'); // Your Learn More Button
    const modal = document.getElementById('learn-more-modal');
    const closeBtn = document.getElementById('close-modal');

    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close on backdrop click
    window.addEventListener('click', (e) => {
        if (e.target == modal.querySelector('.modal-backdrop')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

//learn more modal content
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('learn-more-modal');
    const modalContactBtn = document.getElementById('modal-contact-trigger');

    // Close modal and scroll to contact
    modalContactBtn.addEventListener('click', (e) => {
        // Only trigger if the link is an anchor on the same page
        if(modalContactBtn.getAttribute('href').startsWith('#')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});


//btn secondary
