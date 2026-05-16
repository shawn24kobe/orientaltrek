// Mobile navigation toggle
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

if (logo) {
    logo.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
    }
});

// Hero slider functionality
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

const updateSlide = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const showPrev = () => {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    updateSlide();
};

const showNext = () => {
    currentIndex = (currentIndex + 1) % slideItems.length;
    updateSlide();
};

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
}

if (slides) {
    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    slides.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                showPrev();
            } else {
                showNext();
            }
            isDragging = false;
        }
    });

    slides.addEventListener('touchend', () => {
        isDragging = false;
    });
}
