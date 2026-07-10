const people = [
  {
    role: "営業部門",
    photo: "url('https://picsum.photos/id/1011/1200/760')"
  },
  {
    role: "プランニング部門",
    photo: "url('https://picsum.photos/id/1027/1200/760')"
  },
  {
    role: "クリエイティブ部門",
    photo: "url('https://picsum.photos/id/1043/1200/760')"
  },
  {
    role: "デジタル部門",
    photo: "url('https://picsum.photos/id/1050/1200/760')"
  }
];

const stage = document.querySelector(".gallery-stage");
const track = document.querySelector('[data-role="track"]');
const backdrop = document.querySelector('[data-role="backdrop"]');
let activeIndex = -1;

function render() {
  track.innerHTML = "";
  people.forEach((person, index) => {
    const card = document.createElement("button");
    card.className = "person-card";
    card.type = "button";
    card.style.setProperty("--photo", person.photo);
    card.style.setProperty("--shade", "rgba(0, 0, 0, 0.54)");
    card.innerHTML = `
      <span class="card-content">
        <span class="role">${person.role}</span>
        <span class="arrow">→</span>
      </span>
    `;
    card.addEventListener("mouseenter", () => setActive(index));
    card.addEventListener("focus", () => setActive(index));
    track.append(card);
  });
}

function setActive(index) {
  activeIndex = (index + people.length) % people.length;
  stage.classList.add("is-active-mode");
  backdrop.style.setProperty("--active-photo", people[activeIndex].photo);

  [...track.children].forEach((card, cardIndex) => {
    const isActive = cardIndex === activeIndex;

    card.classList.toggle("is-active", cardIndex === activeIndex);
    card.setAttribute("aria-pressed", String(isActive));
    card.style.setProperty("--shade", isActive ? "rgba(0, 0, 0, 0.03)" : "rgba(0, 0, 0, 0.58)");
  });
}

function clearActive() {
  activeIndex = -1;
  stage.classList.remove("is-active-mode");
  backdrop.style.removeProperty("--active-photo");

  [...track.children].forEach((card) => {
    card.classList.remove("is-active");
    card.setAttribute("aria-pressed", "false");
    card.style.setProperty("--shade", "rgba(0, 0, 0, 0.54)");
  });
}

stage.addEventListener("mouseleave", clearActive);
stage.addEventListener("focusout", (event) => {
  if (!stage.contains(event.relatedTarget)) clearActive();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setActive(activeIndex < 0 ? 0 : activeIndex + 1);
  if (event.key === "ArrowLeft") setActive(activeIndex < 0 ? people.length - 1 : activeIndex - 1);
  if (event.key === "Escape") clearActive();
});

render();
clearActive();
