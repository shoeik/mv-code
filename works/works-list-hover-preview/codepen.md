# Works List Hover Preview

## HTML

```html
<main class="works-page" data-theme="0">
    <header class="site-header">
      <a class="brand" href="#">
        <strong>Fracta inc.</strong>
        <span>Design systems for lasting digital products.</span>
      </a>

      <nav class="global-nav" aria-label="Primary navigation">
        <a href="#">ABOUT</a>
        <a href="#">WORKS<sup>14</sup></a>
        <a href="#">NEWS<sup>11</sup></a>
        <a href="#">ESSAY &amp; PHOTO<sup>78</sup></a>
        <a href="#">DIARY<sup>68</sup></a>
        <a class="contact-link" href="#">CONTACT</a>
      </nav>
    </header>

    <section class="works-section" aria-label="Works">
      <div class="section-label">
        <span></span>
        <p>Works</p>
      </div>

      <div class="table-head" aria-hidden="true">
        <span>Project Name</span>
        <span>Category</span>
        <span>Release</span>
      </div>

      <div class="works-list" data-role="list"></div>

      <aside class="preview" aria-live="polite">
        <div class="preview-card">
          <div class="preview-art preview-art--old" data-role="oldArt"></div>
          <div class="preview-art preview-art--new" data-role="newArt"></div>
        </div>
      </aside>

      <a class="view-more" href="#" data-role="viewMore">
        <span>view more</span>
        <span>↗</span>
      </a>

      <a class="more-link" href="#">
        <span>and more...</span>
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
  --bg: #071324;
  --fg: #f5f7fa;
  --muted: rgba(245, 247, 250, 0.52);
  --line: rgba(245, 247, 250, 0.12);
  --accent: #e7d9bc;
  --active-row: rgba(255, 255, 255, 0.07);
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--fg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #050b14;
}

a,
button {
  color: inherit;
  font: inherit;
}

.works-page {
  min-height: 100vh;
  overflow: hidden;
  background: var(--bg);
  transition: background 520ms ease, color 520ms ease;
}

.works-page::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 82% 42%, rgba(255, 255, 255, 0.13), transparent 0 17%),
    linear-gradient(120deg, rgba(0, 0, 0, 0.18), transparent 42%);
  mix-blend-mode: soft-light;
  opacity: 0.8;
}

.site-header {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px clamp(18px, 3vw, 44px);
  pointer-events: none;
}

.brand,
.global-nav {
  pointer-events: auto;
}

.brand {
  display: grid;
  gap: 4px;
  text-decoration: none;
}

.brand strong {
  font-size: clamp(22px, 2.4vw, 30px);
  line-height: 1;
}

.brand span {
  max-width: 300px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.global-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 24px);
}

.global-nav a {
  color: var(--fg);
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.global-nav sup {
  font-size: 9px;
}

.contact-link {
  min-height: 30px;
  padding: 8px 16px;
  border-radius: 999px;
  color: #0d1118 !important;
  background: #fff;
}

.works-section {
  position: relative;
  display: grid;
  min-height: 100vh;
  align-content: center;
  padding: 122px clamp(20px, 4vw, 48px) 80px;
  --cursor-x: 50vw;
  --cursor-y: 50vh;
  --image-follow-y: 0px;
}

.works-section.is-cursor-active,
.works-section.is-cursor-active .work-row {
  cursor: none;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 42px;
  color: var(--fg);
}

.section-label span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.section-label p {
  margin: 0;
  font-size: 12px;
  font-weight: 800;
}

.table-head,
.work-row {
  display: grid;
  grid-template-columns: 1.15fr 1fr 0.42fr;
  width: min(58vw, 720px);
  min-width: 470px;
}

.table-head {
  padding: 0 0 16px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.works-list {
  width: min(58vw, 720px);
  min-width: 470px;
  border-top: 1px solid var(--line);
}

.work-row {
  position: relative;
  min-height: 74px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: color 260ms ease, background 260ms ease;
}

.work-row::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  background: var(--active-row);
  transition: opacity 260ms ease;
}

.work-row::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: currentColor;
  opacity: 0.9;
  transition: width 420ms cubic-bezier(0.18, 0.85, 0.2, 1);
}

.work-row span {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 0 18px 0 0;
  font-size: clamp(12px, 1.2vw, 15px);
  font-weight: 800;
}

.work-row.is-active {
  color: var(--fg);
}

.work-row.is-active::before {
  opacity: 1;
}

.work-row.is-active::after {
  width: 100%;
}

.preview {
  position: absolute;
  right: clamp(28px, 7vw, 112px);
  top: 50%;
  width: min(38vw, 460px);
  aspect-ratio: 1.42;
  transform: translateY(calc(-42% + var(--image-follow-y)));
  pointer-events: none;
}

.preview-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.22);
}

.preview-art {
  position: absolute;
  inset: 0;
  background: var(--art, #111);
  transform: translate3d(0, 0, 0) scale(1);
  transition: transform 620ms cubic-bezier(0.18, 0.9, 0.18, 1), clip-path 620ms cubic-bezier(0.18, 0.9, 0.18, 1);
}

.preview-art::before,
.preview-art::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.preview-art::before {
  inset: 8%;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.preview-art::after {
  left: 8%;
  right: 8%;
  bottom: 9%;
  height: 18%;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.16);
}

.preview-art--old {
  z-index: 1;
}

.preview-art--new {
  z-index: 2;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.preview-art--new.is-revealed {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.preview-card.is-changing .preview-art--old {
  transform: translate3d(0, -10px, 0) scale(0.99);
}

.view-more {
  position: fixed;
  z-index: 8;
  left: var(--cursor-x);
  top: var(--cursor-y);
  display: grid;
  place-items: center;
  width: clamp(74px, 9vw, 112px);
  height: clamp(74px, 9vw, 112px);
  transform: translate(-50%, -50%) scale(0.86);
  border-radius: 50%;
  color: #141414;
  background: var(--accent);
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.18);
  opacity: 0;
  pointer-events: none;
  transition: background 420ms ease, color 420ms ease, opacity 180ms ease, transform 280ms ease;
  will-change: left, top, transform;
}

.works-section.is-cursor-active .view-more {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.works-section.is-cursor-pressing .view-more {
  transform: translate(-50%, -50%) scale(0.9);
}

.view-more span {
  line-height: 1;
}

.more-link {
  position: absolute;
  left: 50%;
  bottom: 56px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transform: translateX(-50%);
  color: var(--fg);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
}

.more-link span:last-child {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: #111;
  background: #fff;
}

@media (max-width: 780px) {
  .site-header {
    gap: 20px;
  }

  .global-nav {
    max-width: 58vw;
    overflow: hidden;
    gap: 12px;
  }

  .works-section {
    padding-inline: 20px;
  }

  .table-head,
  .work-row,
  .works-list {
    width: 100%;
    min-width: 0;
  }

  .preview {
    position: relative;
    right: auto;
    top: auto;
    order: -1;
    width: min(100%, 420px);
    margin: 0 0 28px auto;
    transform: translateY(var(--image-follow-y));
  }
}
```

## JS

```js
const works = [
  {
    name: "Signal Platform",
    category: "Product Website",
    release: "2026",
    color: "#07243b",
    accent: "#f1ead7",
    art:
      "linear-gradient(140deg, transparent 0 42%, rgba(255,255,255,.18) 42% 47%, transparent 47%), linear-gradient(110deg, #101826 0 35%, #e9edf2 35% 58%, #121821 58% 100%)"
  },
  {
    name: "Identity Atlas",
    category: "Brand System",
    release: "2026",
    color: "#0b1116",
    accent: "#eee1c8",
    art:
      "linear-gradient(135deg, #111 0 42%, #fafafa 42% 48%, #222 48%), radial-gradient(circle at 72% 42%, #fff 0 8%, transparent 9%), linear-gradient(#0c0f13, #1c1f25)"
  },
  {
    name: "Future Campus",
    category: "Campaign LP",
    release: "2026",
    color: "#9f9222",
    accent: "#7f8ed8",
    art:
      "linear-gradient(148deg, transparent 0 44%, #f25aa6 44% 50%, transparent 50%), linear-gradient(156deg, transparent 0 49%, #ffe144 49% 56%, transparent 56%), linear-gradient(164deg, transparent 0 54%, #2637c7 54% 63%, transparent 63%), linear-gradient(90deg, #d1bd6f 0 72%, #2d241d 72%)"
  },
  {
    name: "Commerce Desk",
    category: "Ecommerce Renewal",
    release: "2025",
    color: "#0f5f97",
    accent: "#efaa45",
    art:
      "radial-gradient(circle at 76% 30%, #fff 0 9%, transparent 10%), linear-gradient(110deg, #ecf3f6 0 48%, #202c3c 48% 50%, #e7edf1 50% 76%, #12171f 76%)"
  },
  {
    name: "Recruit Studio",
    category: "Recruit Site",
    release: "2025",
    color: "#456f46",
    accent: "#d3b3cb",
    art:
      "linear-gradient(120deg, #0c1016 0 22%, #efefef 22% 58%, #111 58%), linear-gradient(40deg, transparent 0 55%, #ffe04d 55% 61%, #2c49d8 61% 67%, transparent 67%)"
  },
  {
    name: "Studio Archive",
    category: "Portfolio",
    release: "2025",
    color: "#11161b",
    accent: "#ffffff",
    art:
      "linear-gradient(112deg, #111 0 35%, #f4f4f4 35% 43%, #151515 43% 72%, #f5f5f5 72% 80%, #111 80%)"
  }
];

const page = document.querySelector(".works-page");
const section = document.querySelector(".works-section");
const list = document.querySelector('[data-role="list"]');
const previewCard = document.querySelector(".preview-card");
const oldArt = document.querySelector('[data-role="oldArt"]');
const newArt = document.querySelector('[data-role="newArt"]');
const viewMore = document.querySelector('[data-role="viewMore"]');

let activeIndex = 0;
let changeTimer = 0;
let commitTimer = 0;
let followFrame = 0;

const pointer = {
  active: false,
  x: window.innerWidth * 0.58,
  y: window.innerHeight * 0.5,
  targetX: window.innerWidth * 0.58,
  targetY: window.innerHeight * 0.5,
  imageY: 0,
  targetImageY: 0
};

function renderRows() {
  list.innerHTML = "";

  works.forEach((work, index) => {
    const row = document.createElement("button");
    row.className = "work-row";
    row.type = "button";
    row.innerHTML = `<span>${work.name}</span><span>${work.category}</span><span>${work.release}</span>`;
    row.addEventListener("mouseenter", () => setActive(index));
    row.addEventListener("focus", () => setActive(index));
    row.addEventListener("click", () => setActive(index));
    list.append(row);
  });
}

function setActive(index) {
  if (index === activeIndex) return;
  const previous = works[activeIndex];
  activeIndex = index;
  const work = works[index];

  window.clearTimeout(changeTimer);
  window.clearTimeout(commitTimer);

  oldArt.style.setProperty("--art", previous.art);
  newArt.style.setProperty("--art", work.art);
  previewCard.classList.remove("is-changing");
  newArt.classList.remove("is-revealed");

  changeTimer = window.setTimeout(() => {
    previewCard.classList.add("is-changing");
    newArt.classList.add("is-revealed");
  }, 24);

  page.style.setProperty("--bg", work.color);
  page.style.setProperty("--accent", work.accent);
  viewMore.href = `#${work.name.toLowerCase().replace(/\\s+/g, "-")}`;

  [...list.children].forEach((row, rowIndex) => {
    row.classList.toggle("is-active", rowIndex === index);
    row.setAttribute("aria-pressed", String(rowIndex === index));
  });

  commitTimer = window.setTimeout(() => {
    oldArt.style.setProperty("--art", work.art);
    previewCard.classList.remove("is-changing");
    newArt.classList.remove("is-revealed");
  }, 690);
}

function init() {
  renderRows();
  const first = works[0];
  page.style.setProperty("--bg", first.color);
  page.style.setProperty("--accent", first.accent);
  oldArt.style.setProperty("--art", first.art);
  newArt.style.setProperty("--art", first.art);
  list.children[0].classList.add("is-active");
  list.children[0].setAttribute("aria-pressed", "true");
  setupPointerFollow();
}

function setupPointerFollow() {
  section.style.setProperty("--cursor-x", `${pointer.x}px`);
  section.style.setProperty("--cursor-y", `${pointer.y}px`);

  const activate = (event) => {
    pointer.active = true;
    section.classList.add("is-cursor-active");
    moveTargets(event);
    startFollow();
  };

  const move = (event) => {
    if (!pointer.active) {
      pointer.active = true;
      section.classList.add("is-cursor-active");
    }
    moveTargets(event);
    startFollow();
  };

  const deactivate = () => {
    pointer.active = false;
    pointer.targetImageY = 0;
    section.classList.remove("is-cursor-active", "is-cursor-pressing");
    startFollow();
  };

  section.addEventListener("pointerenter", activate);
  section.addEventListener("pointermove", move);
  section.addEventListener("pointerleave", deactivate);
  section.addEventListener("mouseenter", activate);
  section.addEventListener("mousemove", move);
  section.addEventListener("mouseleave", deactivate);

  section.addEventListener("pointerdown", () => {
    section.classList.add("is-cursor-pressing");
  });

  section.addEventListener("pointerup", () => {
    section.classList.remove("is-cursor-pressing");
  });
}

function moveTargets(event) {
  pointer.targetX = event.clientX;
  pointer.targetY = event.clientY;
  pointer.targetImageY = event.clientY - window.innerHeight * 0.5;
}

function startFollow() {
  if (followFrame) return;
  followFrame = window.requestAnimationFrame(updateFollow);
}

function updateFollow() {
  pointer.x += (pointer.targetX - pointer.x) * 0.28;
  pointer.y += (pointer.targetY - pointer.y) * 0.28;
  const cursorImageY = pointer.y - window.innerHeight * 0.5;
  pointer.imageY = pointer.active ? cursorImageY : pointer.imageY + (0 - pointer.imageY) * 0.28;

  section.style.setProperty("--cursor-x", `${pointer.x.toFixed(2)}px`);
  section.style.setProperty("--cursor-y", `${pointer.y.toFixed(2)}px`);
  section.style.setProperty("--image-follow-y", `${pointer.imageY.toFixed(2)}px`);

  const cursorSettled = Math.abs(pointer.targetX - pointer.x) < 0.4 && Math.abs(pointer.targetY - pointer.y) < 0.4;
  const imageSettled = Math.abs(pointer.imageY) < 0.2;

  if (!pointer.active && cursorSettled && imageSettled) {
    followFrame = 0;
    return;
  }

  followFrame = window.requestAnimationFrame(updateFollow);
}

init();
```
