// ============================
// Smooth Scroll for Navigation
// ============================
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================
// Fade-in Animation on Scroll
// ============================
const faders = document.querySelectorAll('.project-card, .about, .contact-container-wrapper');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ============================
// Back to Top Button
// ============================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// Hero Text Floating Animation
// ============================
const heroText = document.querySelector('.hero-text h1');

let floatDirection = 1;
let position = 0;

setInterval(() => {
    position += 0.3 * floatDirection;
    if (position > 10 || position < -10) floatDirection *= -1;
    heroText.style.transform = `translateY(${position}px)`;
}, 50);
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const btn = document.getElementById("playVideoBtn");
    const video = document.getElementById("projectVideo");
    const closeBtn = modal.querySelector(".close");

    // Open modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        video.play();
    });

    // Close modal on × click
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    });

    // Close modal if clicking outside modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            video.pause();
            video.currentTime = 0;
        }
    });
});
