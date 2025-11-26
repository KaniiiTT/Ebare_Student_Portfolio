// Sidebar smooth scroll
document.querySelectorAll(".sidebar-nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Modal
const modal = document.getElementById("videoModal");
const btn = document.getElementById("playVideoBtn");
const video = document.getElementById("projectVideo");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
    modal.style.display = "block";
    video.play();
});

closeBtn.onclick = () => {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
};
