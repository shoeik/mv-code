const people = [
  {
    role: "営業部門",
    photo:
      "linear-gradient(90deg, rgba(255,255,255,.2), transparent 36%), radial-gradient(circle at 55% 21%, #e9d2bc 0 8%, transparent 8.4%), linear-gradient(105deg, transparent 0 42%, #111923 42% 61%, transparent 61%), linear-gradient(135deg, #d8e0dc 0 38%, #647178 38% 41%, #e7dfd5 41% 100%)"
  },
  {
    role: "プランニング部門",
    photo:
      "linear-gradient(90deg, transparent 0 40%, rgba(255,255,255,.16) 40% 42%, transparent 42%), radial-gradient(circle at 42% 20%, #e1bd9c 0 8%, transparent 8.5%), linear-gradient(118deg, transparent 0 34%, #151515 34% 54%, transparent 54%), linear-gradient(#d8c19c 0 20%, #8a663c 20% 24%, #d9b98a 24% 100%)"
  },
  {
    role: "クリエイティブ部門",
    photo:
      "linear-gradient(90deg, transparent 0 58%, rgba(0,0,0,.28) 58% 75%, transparent 75%), radial-gradient(circle at 44% 19%, #efd1b3 0 8%, transparent 8.4%), linear-gradient(105deg, transparent 0 39%, #bfc4bc 39% 56%, transparent 56%), linear-gradient(#d9c7a3 0 32%, #f1e7d4 32% 100%)"
  },
  {
    role: "デジタル部門",
    photo:
      "linear-gradient(90deg, rgba(94,144,172,.35), transparent 38%), radial-gradient(circle at 46% 20%, #eed0b0 0 8%, transparent 8.4%), linear-gradient(110deg, transparent 0 42%, #ece7df 42% 56%, transparent 56%), linear-gradient(90deg, #a9bfd0 0 26%, #dac39b 26% 100%)"
  }
];

const track = document.querySelector('[data-role="track"]');
let activeIndex = -1;
let rotateTimer = 0;
let resumeTimer = 0;
const sequence = [-1, 0, 1, 2, 3];
let sequenceIndex = 0;

function columnsFor(index) {
  return index;
}

function render() {
  track.innerHTML = "";
  people.forEach((person, index) => {
    const card = document.createElement("button");
    card.className = "person-card";
    card.type = "button";
    card.style.setProperty("--photo", person.photo);
    card.style.flexGrow = "1";
    card.style.setProperty("--shade", "rgba(0, 0, 0, 0.54)");
    card.innerHTML = `
      <span class="photo-layer" aria-hidden="true"></span>
      <span class="card-content">
        <span class="role">${person.role}</span>
        <span class="arrow">→</span>
      </span>
    `;
    card.addEventListener("mouseenter", () => setActive(index, true));
    card.addEventListener("focus", () => setActive(index, true));
    card.addEventListener("click", () => setActive(index, true));
    track.append(card);
  });
}

function setActive(index, restart = false) {
  activeIndex = index < 0 ? -1 : (index + people.length) % people.length;
  columnsFor(activeIndex);
  [...track.children].forEach((card, cardIndex) => {
    const isActive = cardIndex === activeIndex;
    const isCompressed = activeIndex >= 0 && !isActive;
    const photo = card.querySelector(".photo-layer");

    card.classList.toggle("is-active", cardIndex === activeIndex);
    card.classList.toggle("is-compressed", isCompressed);
    card.setAttribute("aria-pressed", String(isActive));
    card.style.flexGrow = isActive ? "3.2" : isCompressed ? "0.92" : "1";
    card.style.setProperty("--shade", isActive ? "rgba(0, 0, 0, 0.1)" : isCompressed ? "rgba(0, 0, 0, 0.62)" : "rgba(0, 0, 0, 0.54)");
    photo.style.filter = isActive ? "grayscale(0)" : "grayscale(1)";
    photo.style.scale = isActive ? "1.04" : "1";
  });

  if (restart) pauseRotation();
}

function startRotation() {
  window.clearInterval(rotateTimer);
  rotateTimer = window.setInterval(() => {
    sequenceIndex = (sequenceIndex + 1) % sequence.length;
    setActive(sequence[sequenceIndex]);
  }, 2300);
}

function pauseRotation() {
  sequenceIndex = Math.max(0, sequence.indexOf(activeIndex));
  window.clearInterval(rotateTimer);
  window.clearTimeout(resumeTimer);
  resumeTimer = window.setTimeout(startRotation, 4500);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setActive(activeIndex + 1, true);
  if (event.key === "ArrowLeft") setActive(activeIndex - 1, true);
});

render();
setActive(-1);
startRotation();
