/* ==========================================================
   HOW TO ADD EXPERIENCE
   Add one { time, title, description } block to the list below.
   Separate blocks with commas. Example:
     { time: "2025", title: "Student Council Member", description: "Worked in the public relations team." },
   While the list is empty, the "No achievements to show for now" message is shown.
   ========================================================== */
const experiences = [
  // { time: "2025", title: "Activity / organization name", description: "Your role and what you achieved." },
];

const timeline = document.getElementById("timeline");
const emptyState = document.getElementById("emptyState");

function renderExperiences() {
  timeline.innerHTML = "";
  if (experiences.length === 0) {
    timeline.hidden = true;
    emptyState.hidden = false;
    return;
  }
  timeline.hidden = false;
  emptyState.hidden = true;
  experiences.forEach((item) => {
    const li = document.createElement("li");

    const time = document.createElement("span");
    time.className = "when";
    time.textContent = item.time;

    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    body.append(title, description);

    li.append(time, body);
    timeline.appendChild(li);
  });
}
renderExperiences();

// Navigation menu for phones
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// The sun slides along the equator line following the cursor / touch
const hero = document.querySelector(".hero");
const sun = document.getElementById("sun");

function moveSun(clientX) {
  const rect = hero.getBoundingClientRect();
  const percent = ((clientX - rect.left) / rect.width) * 100;
  sun.style.left = Math.min(96, Math.max(4, percent)) + "%";
}
hero.addEventListener("mousemove", (e) => moveSun(e.clientX));
hero.addEventListener("touchmove", (e) => moveSun(e.touches[0].clientX), { passive: true });

// Profile photo: try several file names/formats, otherwise show the "SZ" initials
const photo = document.getElementById("photo");
const photoImg = document.getElementById("photoImg");
const photoCandidates = [
  "assets/foto-profil.jpg", "assets/foto-profil.jpeg", "assets/foto-profil.png", "assets/foto-profil.webp"
];
let photoIndex = 0;
photoImg.addEventListener("error", () => {
  photoIndex += 1;
  if (photoIndex < photoCandidates.length) {
    photoImg.src = photoCandidates[photoIndex];
  } else {
    photo.classList.add("no-img");
  }
});
if (photoImg.complete && photoImg.naturalWidth === 0) photoImg.dispatchEvent(new Event("error"));

// Automatic year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

