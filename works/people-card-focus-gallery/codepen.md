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
      <div class="gallery-stage">
        <div class="active-backdrop" data-role="backdrop"></div>
        <div class="gallery-track" data-role="track"></div>
      </div>
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
  min-width: 1120px;
  color: var(--ink);
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  background: var(--paper);
  overflow-x: auto;
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

.gallery-stage {
  position: relative;
  min-height: 430px;
  overflow: hidden;
  background: #222;
}

.active-backdrop {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--active-photo);
  background-position: center;
  background-size: cover;
  opacity: 0;
  transition: background 520ms ease, filter 520ms ease, opacity 320ms ease;
}

.gallery-stage.is-active-mode .active-backdrop {
  opacity: 1;
}

.active-backdrop::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.2), transparent 34%, rgba(0, 0, 0, 0.22)),
    rgba(0, 0, 0, 0.1);
}

.gallery-track {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  min-height: inherit;
}

.person-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.68);
  padding: 0;
  color: #fff;
  background: transparent;
  cursor: pointer;
  text-align: center;
  transition: background 360ms ease;
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

.person-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--photo);
  background-position: center;
  background-size: cover;
  transition: opacity 420ms ease;
}

.person-card::after {
  z-index: 2;
  background: var(--shade, rgba(0, 0, 0, 0.54));
  transition: background 520ms ease;
}

.gallery-stage.is-active-mode .person-card::before {
  opacity: 0;
}

.person-card.is-active::after {
  background: rgba(0, 0, 0, 0.03);
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
  opacity: 1;
  transition: opacity 220ms ease;
}

.gallery-stage.is-active-mode .person-card:not(.is-active) .card-content {
  opacity: 0;
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
```

## JS

```js
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
```
