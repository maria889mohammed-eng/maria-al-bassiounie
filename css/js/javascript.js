
// Smooth navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Navigation:', this.textContent);
    });
});

// Welcome message
console.log("Welcome to Maria Al Basyouni's Portfolio!");

// Scroll animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});

