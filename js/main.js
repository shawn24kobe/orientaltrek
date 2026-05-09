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