# People Card Focus Gallery

## HTML

```html
<header class="site-header">
    <a class="brand" href="#">
      <strong>SCOPE</strong>
      <span>RECRUITING 2027</span>
    </a>
    <nav class="nav" aria-label="Primary navigation">
      <a href="#">ABOUT</a>
      <a href="#">WORKS</a>
      <a href="#">PROJECT STORY</a>
      <a href="#">PEOPLE</a>
      <a href="#">ENVIRONMENT</a>
    </nav>
    <div class="header-actions">
      <a class="entry" href="#">ENTRY</a>
      <button class="menu" type="button" aria-label="Menu">•••</button>
    </div>
  </header>

  <main class="page-shell">
    <section class="people-gallery" aria-label="People gallery">
      <div class="gallery-track" data-role="track"></div>
      <a class="all-view" href="#">
        <span>ALL VIEW</span>
        <span>→</span>
      </a>
    </section>
  </main>
```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --ink: #101214;
  --muted: #62686d;
  --green: #42d54f;
  --paper: #f4f4f2;
  --header-h: 62px;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  background: var(--paper);
}

a,
button {
  color: inherit;
  font: inherit;
}

.site-header {
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 210px 1fr auto;
  align-items: center;
  height: var(--header-h);
  padding: 0 8px;
  border-bottom: 1px solid #d9d9d6;
  background: #fff;
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
  letter-spacing: 0;
}

.brand strong {
  font-size: 24px;
  line-height: 1;
}

.brand span {
  font-size: 10px;
  font-weight: 900;
}

.nav {
  display: flex;
  justify-content: center;
  gap: clamp(14px, 2.2vw, 30px);
}

.nav a {
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.header-actions {
  display: inline-flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
}

.entry {
  min-width: 82px;
  padding: 9px 18px;
  border-radius: 999px;
  color: #fff;
  background: #111;
  font-size: 11px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
}

.menu {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #111;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  letter-spacing: 1px;
}

.page-shell {
  display: grid;
  min-height: 100vh;
  padding-top: var(--header-h);
}

.people-gallery {
  display: grid;
  min-height: calc(100vh - var(--header-h));
  grid-template-rows: minmax(300px, 1fr) auto;
  align-items: stretch;
}

.gallery-track {
  display: flex;
  min-height: 430px;
}

.person-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.68);
  padding: 0;
  color: #fff;
  background: #222;
  cursor: pointer;
  text-align: center;
  flex: 1 1 0;
  transition: flex 760ms cubic-bezier(0.18, 0.82, 0.2, 1);
}

.person-card:last-child {
  border-right: 0;
}

.person-card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.photo-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--photo);
  background-position: center;
  background-size: cover;
  filter: grayscale(1);
  transition: filter 620ms ease, scale 760ms cubic-bezier(0.18, 0.82, 0.2, 1);
}

.person-card::after {
  z-index: 2;
  background: var(--shade, rgba(0, 0, 0, 0.54));
  transition: background 520ms ease;
}

.person-card.is-active {
  flex-grow: 3.2;
}

.person-card.is-compressed {
  flex-grow: 0.92;
}

.person-card.is-active .photo-layer {
  filter: var(--tone, grayscale(0));
  scale: 1.04;
}

.person-card.is-active::after {
  background: rgba(0, 0, 0, 0.1);
}

.person-card.is-active + .person-card::after,
.person-card:has(+ .person-card.is-active)::after {
  background: rgba(0, 0, 0, 0.66);
}

.card-content {
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 50%;
  display: grid;
  gap: 12px;
  justify-items: center;
  width: min(200px, 78%);
  translate: -50% -50%;
  transition: translate 620ms cubic-bezier(0.18, 0.82, 0.2, 1);
}

.person-card.is-active .card-content {
  translate: -50% -44%;
}

.role {
  display: block;
  font-size: clamp(11px, 1.2vw, 14px);
  font-weight: 900;
  text-shadow: 0 1px 18px rgba(0, 0, 0, 0.38);
  white-space: nowrap;
}

.arrow {
  display: grid;
  place-items: center;
  width: 28px;
  height: 22px;
  border-radius: 6px;
  color: #0f2111;
  background: var(--green);
  font-size: 13px;
  font-weight: 900;
  box-shadow: 0 9px 20px rgba(0, 0, 0, 0.18);
}

.all-view {
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin: 38px 0 30px;
  min-width: 116px;
  padding: 10px 10px 10px 16px;
  border-radius: 4px;
  color: #fff;
  background: #111;
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
}

.all-view span:last-child {
  display: grid;
  place-items: center;
  width: 21px;
  height: 18px;
  border-radius: 4px;
  color: #0f2111;
  background: var(--green);
}

@media (max-width: 800px) {
  :root {
    --header-h: 58px;
  }

  .site-header {
    grid-template-columns: 1fr auto;
  }

  .nav {
    display: none;
  }

  .brand strong {
    font-size: 21px;
  }

  .gallery-track {
    display: grid;
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .person-card {
    min-height: 260px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.68);
  }

  .photo-layer {
    filter: grayscale(0);
  }

  .person-card::after {
    background: rgba(0, 0, 0, 0.26);
  }
}
```

## JS

```js
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
```
