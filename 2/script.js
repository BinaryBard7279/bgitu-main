// Theme Toggle
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

// Toggle theme
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Slider functionality for Directions
const directionsSlider = document.getElementById('directionsSlider');
const dirPrev = document.getElementById('dirPrev');
const dirNext = document.getElementById('dirNext');

// Auto-scroll functionality
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const cardWidth = 300 + 30; // card width + gap
        const maxScroll = directionsSlider.scrollWidth - directionsSlider.clientWidth;
        
        if (directionsSlider.scrollLeft >= maxScroll - 10) {
            directionsSlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            directionsSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }, 4000); // scroll every 4 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Start auto-scroll when page loads
startAutoScroll();

// Pause auto-scroll on hover
directionsSlider.addEventListener('mouseenter', stopAutoScroll);
directionsSlider.addEventListener('mouseleave', startAutoScroll);

// Manual navigation buttons
dirPrev.addEventListener('click', () => {
    stopAutoScroll();
    directionsSlider.scrollBy({ left: -330, behavior: 'smooth' });
    setTimeout(startAutoScroll, 5000);
});

dirNext.addEventListener('click', () => {
    stopAutoScroll();
    directionsSlider.scrollBy({ left: 330, behavior: 'smooth' });
    setTimeout(startAutoScroll, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('nav a[href^="#"], .btn[href^="#"], .footer-col a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Add animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.slider-card, .discipline-card, .feature-card, .teacher-card, .timeline-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`nav a[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`nav a[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Add active link style to CSS
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: var(--accent) !important;
    }
    nav a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Counter animation for stats (optional enhancement)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// If you add counters to the page, observe them
// Example: <div class="counter" data-target="100">0</div>

console.log('ТехноУнивер сайт загружен успешно!');