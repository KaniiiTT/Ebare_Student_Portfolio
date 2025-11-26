document.querySelectorAll(".sidebar-nav a, .header-nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            const headerOffset = 60; // height of your fixed header in px
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
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
