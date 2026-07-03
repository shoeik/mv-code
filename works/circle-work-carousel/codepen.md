# Circle Work Carousel

## HTML

```html
  <main class="page-shell">
    <header class="site-header">
      <a class="brand" href="#" aria-label="Fracta home">
        <strong>Fracta inc.</strong>
        <span>Designing brands with sincerity.</span>
      </a>

      <nav class="main-nav" aria-label="Primary navigation">
        <a href="#">ABOUT</a>
        <a href="#">WORKS<sup>14</sup></a>
        <a href="#">NEWS<sup>11</sup></a>
        <a href="#">ESSAY &amp; PHOTO<sup>78</sup></a>
        <a href="#">DIARY<sup>68</sup></a>
        <a class="contact-link" href="#">CONTACT</a>
      </nav>
    </header>

    <section class="carousel" aria-label="Featured works">
      <p class="background-type" aria-hidden="true">timeless, with sincerity.</p>

      <div class="work-stage">
        <button class="work-visual" type="button" aria-label="Show next work">
          <span class="device device-left"></span>
          <svg class="circle-progress" viewBox="0 0 100 100" aria-hidden="true">
            <circle class="circle-progress-track" cx="50" cy="50" r="48"></circle>
            <circle class="circle-progress-bar" cx="50" cy="50" r="48"></circle>
          </svg>
          <span class="image-circle">
            <span class="work-art" data-art="0"></span>
          </span>
        </button>

        <span class="tag-pill" data-role="tag">Uxbridge</span>

        <div class="work-copy" aria-live="polite">
          <h1 data-role="title">STOKED BASE</h1>
          <p data-role="meta">2025 · Corporate Site</p>
        </div>

        <div class="pager" aria-label="Carousel pagination">
          <div class="dots" data-role="dots"></div>
          <button class="pause-button" type="button" aria-label="Pause carousel">Ⅱ</button>
        </div>
      </div>

      <aside class="news-strip" data-role="news">
        <span>2026 · 06 · 24</span>
        <strong>Corporate website project released.</strong>
      </aside>
    </section>
  </main>

```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --ink: #121417;
  --muted: #6f737b;
  --blue: #102f66;
  --gold: #a88d2f;
  --cream: #f4f1ea;
  --dot: #d5d1c7;
}

body {
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f7f6f2;
}

a,
button {
  color: inherit;
  font: inherit;
}

.page-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.site-header {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px clamp(18px, 3vw, 42px);
}

.brand {
  display: grid;
  gap: 4px;
  text-decoration: none;
}

.brand strong {
  font-size: clamp(20px, 2.6vw, 30px);
  line-height: 1;
  letter-spacing: 0;
}

.brand span {
  max-width: 260px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 24px);
  padding-top: 4px;
}

.main-nav a {
  display: inline-flex;
  align-items: flex-start;
  gap: 2px;
  color: #16181c;
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.main-nav sup {
  font-size: 9px;
  line-height: 1;
}

.contact-link {
  min-height: 28px;
  padding: 8px 16px;
  border-radius: 999px;
  color: #fff !important;
  background: #050506;
}

.carousel {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 90px 20px 58px;
}

.background-type {
  position: absolute;
  inset: -8vh -3vw auto;
  margin: 0;
  width: 110vw;
  color: rgba(34, 46, 63, 0.065);
  font-size: clamp(72px, 11vw, 158px);
  font-weight: 950;
  line-height: 0.92;
  letter-spacing: 0;
  text-align: left;
  pointer-events: none;
}

.work-stage {
  position: relative;
  display: grid;
  justify-items: center;
  width: min(92vw, 720px);
}

.work-visual {
  position: relative;
  width: clamp(240px, 39vw, 405px);
  aspect-ratio: 1;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.circle-progress {
  position: absolute;
  z-index: 4;
  inset: -9px;
  width: calc(100% + 18px);
  height: calc(100% + 18px);
  overflow: visible;
  transform: rotate(-90deg);
  pointer-events: none;
}

.circle-progress-track,
.circle-progress-bar {
  fill: none;
  stroke-width: 0.8;
}

.circle-progress-track {
  stroke: rgba(22, 24, 28, 0.18);
}

.circle-progress-bar {
  stroke: var(--progress-color, var(--blue));
  stroke-linecap: round;
  stroke-dasharray: 301.59;
  stroke-dashoffset: 301.59;
  transition: opacity 260ms ease, stroke 260ms ease;
}

.work-stage.is-switching .circle-progress-bar {
  opacity: 0.35;
}

.image-circle {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border: 3px solid rgba(26, 27, 31, 0.82);
  border-radius: 50%;
  background: #ddd;
  box-shadow: 0 20px 48px rgba(36, 32, 20, 0.18);
}

.work-art {
  position: absolute;
  inset: -3%;
  display: block;
  opacity: 1;
  transform: scale(1);
  background: var(--art);
  transition: opacity 360ms ease, transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
}

.work-stage.is-switching .work-art {
  opacity: 0;
  transform: scale(1.08) translateX(12px);
}

.work-art[data-art="0"] {
  --art:
    linear-gradient(16deg, transparent 0 46%, rgba(255,255,255,0.78) 46% 50%, transparent 50%),
    linear-gradient(90deg, #313946 0 24%, #ece8df 24% 27%, #15191f 27% 78%, #ece8df 78% 80%, #29313c 80%),
    repeating-linear-gradient(0deg, #f7f5ef 0 10px, #d8d3c5 10px 13px);
}

.work-art[data-art="1"] {
  --art:
    linear-gradient(146deg, transparent 0 43%, #f54c92 43% 49%, transparent 49%),
    linear-gradient(154deg, transparent 0 49%, #ffe02c 49% 55%, transparent 55%),
    linear-gradient(162deg, transparent 0 54%, #313acb 54% 62%, transparent 62%),
    linear-gradient(90deg, #d2bd6a 0 72%, #2b2219 72%);
}

.work-art[data-art="2"] {
  --art:
    radial-gradient(circle at 68% 33%, #fff 0 6%, transparent 7%),
    linear-gradient(124deg, #203a74 0 36%, #f6d24f 36% 51%, #e85088 51% 67%, #151515 67%),
    linear-gradient(#e9e1c9, #b99253);
}

.device {
  position: absolute;
  z-index: 3;
  display: block;
  border: 2px solid rgba(33, 31, 24, 0.35);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.device-left {
  left: -22%;
  bottom: 10%;
  width: 28%;
  height: 37%;
}

.tag-pill {
  position: absolute;
  right: 12%;
  top: 57%;
  min-width: 76px;
  padding: 8px 14px;
  border-radius: 999px;
  color: #fff;
  background: var(--blue);
  font-size: 11px;
  font-weight: 900;
  text-align: center;
  transition: background 260ms ease, transform 360ms ease;
}

.work-stage.is-switching .tag-pill {
  transform: translateY(6px);
}

.work-copy {
  display: grid;
  justify-items: center;
  gap: 8px;
  min-height: 86px;
  margin-top: 28px;
  text-align: center;
}

.work-copy h1 {
  margin: 0;
  font-size: clamp(24px, 3vw, 38px);
  line-height: 1;
  letter-spacing: 0;
  clip-path: inset(0 0 0 0);
  transition: clip-path 340ms ease, transform 340ms ease;
}

.work-copy p {
  margin: 0;
  color: #4a4e58;
  font-size: 14px;
  font-weight: 700;
}

.work-stage.is-switching .work-copy h1 {
  transform: translateY(10px);
  clip-path: inset(0 100% 0 0);
}

.pager {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 1px solid #b8b2a5;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.dot.is-active {
  background: var(--active-color, var(--blue));
  border-color: var(--active-color, var(--blue));
}

.pause-button {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid #c7c0b0;
  border-radius: 50%;
  background: #fff;
  color: #5a5f67;
  font-size: 10px;
  cursor: pointer;
}

.news-strip {
  position: absolute;
  right: clamp(18px, 4vw, 54px);
  bottom: clamp(22px, 5vw, 56px);
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 42px;
  max-width: min(44vw, 430px);
  padding: 10px 18px;
  border-radius: 8px;
  color: #fff;
  background: var(--blue);
  box-shadow: 0 18px 36px rgba(30, 30, 30, 0.12);
  transition: background 260ms ease, transform 360ms ease, opacity 360ms ease;
}

.news-strip span,
.news-strip strong {
  font-size: 12px;
  white-space: nowrap;
}

.news-strip strong {
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-strip.is-switching {
  opacity: 0;
  transform: translateX(24px);
}

@media (max-width: 760px) {
  .site-header {
    gap: 20px;
  }

  .main-nav {
    max-width: 58vw;
    overflow: hidden;
    gap: 12px;
  }

  .main-nav a {
    font-size: 11px;
  }

  .tag-pill {
    right: 3%;
  }

  .news-strip {
    left: 18px;
    right: 18px;
    max-width: none;
  }
}

```

## JS

```js
const works = [
  {
    title: "STOKED BASE",
    meta: "2025 · Corporate Site",
    tag: "Uxbridge",
    news: "Corporate website project released.",
    color: "#102f66",
    art: "0"
  },
  {
    title: "GAKUSHUING!",
    meta: "2025 · Landing Page",
    tag: "Uchida",
    news: "School campaign landing page launched.",
    color: "#a88d2f",
    art: "1"
  },
  {
    title: "ACTIVE AGENCY",
    meta: "2024 · Brand Identity",
    tag: "Agency",
    news: "Brand renewal and visual system updated.",
    color: "#7e6a2b",
    art: "2"
  }
];

const stage = document.querySelector(".work-stage");
const visual = document.querySelector(".work-visual");
const art = document.querySelector(".work-art");
const title = document.querySelector('[data-role="title"]');
const meta = document.querySelector('[data-role="meta"]');
const tag = document.querySelector('[data-role="tag"]');
const news = document.querySelector('[data-role="news"]');
const dots = document.querySelector('[data-role="dots"]');
const pauseButton = document.querySelector(".pause-button");
const progressBar = document.querySelector(".circle-progress-bar");

let currentIndex = 0;
let isPaused = false;
let timer = 0;
let progressFrame = 0;
let progressStartedAt = 0;
const intervalDuration = 2600;
const progressLength = 301.59;

function buildDots() {
  dots.innerHTML = "";
  works.forEach((work, index) => {
    const button = document.createElement("button");
    button.className = "dot";
    button.type = "button";
    button.ariaLabel = `Show ${work.title}`;
    button.addEventListener("click", () => {
      isPaused = true;
      pauseButton.textContent = "▶";
      showWork(index);
    });
    dots.append(button);
  });
}

function updateDots() {
  [...dots.children].forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    dot.style.setProperty("--active-color", works[currentIndex].color);
  });
}

function restartProgress() {
  progressBar.classList.remove("is-running");
  progressBar.style.setProperty("--progress-color", works[currentIndex].color);
  progressBar.style.strokeDashoffset = String(progressLength);

  if (!isPaused) {
    progressStartedAt = 0;
    progressFrame = window.requestAnimationFrame(animateProgress);
    progressBar.classList.add("is-running");
  }
}

function animateProgress(timestamp) {
  if (!progressStartedAt) progressStartedAt = timestamp;
  const elapsed = timestamp - progressStartedAt;
  const ratio = Math.min(elapsed / intervalDuration, 1);
  progressBar.style.strokeDashoffset = String(progressLength * (1 - ratio));

  if (ratio < 1 && !isPaused) {
    progressFrame = window.requestAnimationFrame(animateProgress);
  }
}

function showWork(index) {
  if (index === currentIndex && !stage.classList.contains("is-switching")) return;

  const next = works[index];
  window.clearTimeout(timer);
  window.cancelAnimationFrame(progressFrame);
  stage.classList.add("is-switching");
  news.classList.add("is-switching");

  window.setTimeout(() => {
    currentIndex = index;
    art.dataset.art = next.art;
    title.textContent = next.title;
    meta.textContent = next.meta;
    tag.textContent = next.tag;
    tag.style.background = next.color;
    news.style.background = next.color;
    news.innerHTML = `<span>2026 · 06 · ${String(24 + index).padStart(2, "0")}</span><strong>${next.news}</strong>`;
    updateDots();
    restartTimer();
  }, 220);

  window.setTimeout(() => {
    stage.classList.remove("is-switching");
    news.classList.remove("is-switching");
  }, 520);
}

function nextWork() {
  showWork((currentIndex + 1) % works.length);
}

function restartTimer() {
  window.clearInterval(timer);
  window.cancelAnimationFrame(progressFrame);
  if (!isPaused) {
    timer = window.setTimeout(nextWork, intervalDuration);
  }
  restartProgress();
}

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "▶" : "Ⅱ";
  restartTimer();
});

visual.addEventListener("click", () => {
  isPaused = true;
  pauseButton.textContent = "▶";
  nextWork();
});

buildDots();
updateDots();
restartTimer();

```
