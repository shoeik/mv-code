# Scroll Service Switcher

## HTML

```html
  <header class="site-header">
    <a class="brand" href="#">
      <strong>Fracta inc.</strong>
      <span>長く愛されるブランドづくりを支援するWeb制作会社</span>
    </a>
    <nav class="global-nav" aria-label="Primary navigation">
      <a href="#">ABOUT</a>
      <a href="#">WORKS</a>
      <a href="#">NEWS</a>
      <a href="#">ESSAY &amp; PHOTO</a>
      <a href="#">DIARY</a>
      <a class="contact-link" href="#">CONTACT</a>
    </nav>
  </header>

  <main>
    <section class="spacer intro">
      <p>きちんと考え、形にする。</p>
    </section>

    <section class="service-scroll" aria-label="What We Do">
      <div class="service-sticky">
        <div class="section-label">
          <span></span>
          <p>What We Do</p>
        </div>

        <div class="service-layout">
          <div class="service-media" aria-hidden="true">
            <div class="media-card is-active" data-media="0">
              <span class="grid-shot"></span>
            </div>
            <div class="media-card" data-media="1">
              <span class="dashboard-shot"></span>
            </div>
          </div>

          <div class="service-copy" aria-live="polite">
            <p class="eyebrow" data-role="eyebrow">Web Design &amp; Development</p>
            <h1 data-role="title">WEBサイト・ホームページ制作</h1>
            <p class="description" data-role="description">
              ブランドの世界観や目的に合わせ、印象に残るサイトを制作します。デザインから実装、運用までを一貫して行い、訪れる人にとって心地よいサイトを丁寧に設計します。
            </p>
          </div>
        </div>

        <div class="side-indicator" aria-label="Service progress">
          <button class="indicator-dot is-active" type="button" aria-label="WEBサイト・ホームページ制作"></button>
          <button class="indicator-dot" type="button" aria-label="WEBマーケティング・集客支援"></button>
        </div>
      </div>
    </section>

    <section class="spacer outro">
      <p>必要な支援を、必要な深さで。</p>
    </section>
  </main>

```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --ink: #111418;
  --muted: #60656f;
  --paper: #f7f7f5;
  --line: #d9d9d4;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--paper);
}

a,
button {
  color: inherit;
  font: inherit;
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
  padding: 26px clamp(18px, 3vw, 42px);
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
  font-size: clamp(22px, 2.6vw, 31px);
  line-height: 1;
  letter-spacing: 0;
}

.brand span {
  max-width: 280px;
  color: #4d535d;
  font-size: 11px;
  font-weight: 700;
}

.global-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 24px);
}

.global-nav a {
  color: #111;
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.contact-link {
  min-height: 30px;
  padding: 8px 16px;
  border-radius: 999px;
  color: #fff !important;
  background: #050506;
}

.spacer {
  display: grid;
  min-height: 74vh;
  place-items: center;
  padding: 120px 20px;
}

.spacer p {
  max-width: 720px;
  margin: 0;
  color: rgba(16, 20, 24, 0.72);
  font-size: clamp(22px, 3vw, 42px);
  font-weight: 800;
  line-height: 1.5;
  text-align: center;
}

.service-scroll {
  position: relative;
  height: 220vh;
}

.service-sticky {
  position: sticky;
  top: 0;
  display: grid;
  min-height: 100vh;
  align-items: center;
  padding: 118px clamp(22px, 7vw, 98px) 72px;
}

.section-label {
  position: absolute;
  top: 24%;
  left: clamp(22px, 7vw, 98px);
  display: flex;
  align-items: center;
  gap: 9px;
  color: #20242a;
}

.section-label span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #111;
}

.section-label p {
  margin: 0;
  font-size: 12px;
  font-weight: 800;
}

.service-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.95fr) minmax(300px, 0.9fr);
  gap: clamp(36px, 6vw, 92px);
  align-items: center;
  width: min(1120px, 100%);
  margin: 0 auto;
}

.service-media {
  position: relative;
  width: 100%;
  aspect-ratio: 1.34;
}

.media-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 9px;
  opacity: 0;
  transform: translateY(0);
  background: #ddd;
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.12);
  clip-path: inset(0 0 0 0);
}

.media-card.is-active {
  opacity: 1;
  z-index: 1;
}

.media-card.is-entering {
  opacity: 1;
  z-index: 2;
  animation: media-wipe-up 720ms cubic-bezier(0.16, 0.86, 0.28, 1) forwards;
}

.grid-shot,
.dashboard-shot {
  position: absolute;
  inset: 0;
  display: block;
}

.grid-shot {
  background:
    linear-gradient(16deg, transparent 0 70%, rgba(255, 214, 0, 0.9) 70% 78%, transparent 78%),
    linear-gradient(155deg, transparent 0 62%, #1e40af 62% 68%, #e43f83 68% 74%, transparent 74%),
    linear-gradient(90deg, rgba(0,0,0,0.22), rgba(255,255,255,0.08)),
    repeating-linear-gradient(90deg, #1b222c 0 32%, #f7f3e8 32% 34%, #9aa3ac 34% 66%, #f7f3e8 66% 68%, #1b222c 68% 100%);
}

.grid-shot::after {
  content: "";
  position: absolute;
  inset: 9%;
  background:
    linear-gradient(#fff, #fff) 0 0 / 48% 42% no-repeat,
    linear-gradient(#e8edf2, #e8edf2) 100% 0 / 44% 42% no-repeat,
    linear-gradient(#e5d9bc, #e5d9bc) 0 100% / 46% 48% no-repeat,
    linear-gradient(#f7f5ef, #f7f5ef) 100% 100% / 48% 48% no-repeat;
  mix-blend-mode: screen;
  opacity: 0.72;
}

.dashboard-shot {
  background:
    radial-gradient(circle at 24% 72%, rgba(255,255,255,0.95) 0 16%, transparent 17%),
    linear-gradient(102deg, rgba(255,255,255,0.88) 0 42%, transparent 42%),
    linear-gradient(140deg, #191817 0 42%, #f1f3f5 42% 68%, #0f0f10 68%);
}

.dashboard-shot::before,
.dashboard-shot::after {
  content: "";
  position: absolute;
  border-radius: 5px;
  background: #eef1f3;
  box-shadow: inset 0 0 0 2px #bfc5cc;
}

.dashboard-shot::before {
  left: 17%;
  top: 20%;
  width: 44%;
  height: 42%;
  transform: rotate(8deg);
}

.dashboard-shot::after {
  left: 39%;
  bottom: 13%;
  width: 26%;
  height: 38%;
  transform: rotate(-5deg);
}

@keyframes media-wipe-up {
  0% {
    clip-path: inset(100% 0 0 0);
    transform: translateY(34px);
  }

  100% {
    clip-path: inset(0 0 0 0);
    transform: translateY(0);
  }
}

.service-copy {
  display: grid;
  gap: 16px;
  max-width: 580px;
  min-height: 235px;
  transition: opacity 360ms ease, transform 440ms ease;
}

.service-copy.is-switching {
  opacity: 0;
  transform: translateY(18px);
}

.eyebrow {
  order: 2;
  margin: -8px 0 0;
  color: #4b515b;
  font-size: 13px;
  font-weight: 800;
}

.service-copy h1 {
  order: 1;
  margin: 0;
  font-size: clamp(25px, 3vw, 42px);
  line-height: 1.18;
  letter-spacing: 0;
}

.description {
  order: 3;
  margin: 0;
  color: #20242a;
  font-size: clamp(14px, 1.25vw, 16px);
  font-weight: 650;
  line-height: 2.1;
}

.side-indicator {
  position: absolute;
  right: clamp(18px, 4vw, 60px);
  top: 50%;
  display: grid;
  gap: 20px;
  transform: translateY(-50%);
}

.indicator-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #d0d0ca;
  cursor: pointer;
}

.indicator-dot.is-active {
  background: #111;
}

@media (max-width: 560px) {
  .site-header {
    gap: 18px;
  }

  .global-nav {
    max-width: 58vw;
    overflow: hidden;
    gap: 12px;
  }

  .global-nav a {
    font-size: 11px;
  }

  .service-sticky {
    padding: 110px 24px 58px;
  }

  .section-label {
    top: 18%;
    left: 24px;
  }

  .service-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .service-copy {
    min-height: 250px;
  }
}

```

## JS

```js
const services = [
  {
    title: "WEBサイト・ホームページ制作",
    eyebrow: "Web Design & Development",
    description:
      "ブランドの世界観や目的に合わせ、印象に残るサイトを制作します。デザインから実装、運用までを一貫して行い、訪れる人にとって心地よいサイトを丁寧に設計します。"
  },
  {
    title: "WEBマーケティング・集客支援",
    eyebrow: "Web Marketing Support",
    description:
      "サイト公開後も、成果を見据えた運用を継続的にサポートします。SEO対策やアクセス解析、SNS運用などを通じて、ブランドの魅力をより多くの人へ届けていきます。"
  }
];

const scrollSection = document.querySelector(".service-scroll");
const copy = document.querySelector(".service-copy");
const title = document.querySelector('[data-role="title"]');
const eyebrow = document.querySelector('[data-role="eyebrow"]');
const description = document.querySelector('[data-role="description"]');
const mediaCards = [...document.querySelectorAll(".media-card")];
const dots = [...document.querySelectorAll(".indicator-dot")];

let activeIndex = 0;
let switchTimer = 0;
let mediaTimer = 0;

function setActiveService(index) {
  if (index === activeIndex) return;
  const previousIndex = activeIndex;
  activeIndex = index;
  const service = services[index];
  const enteringCard = mediaCards[index];

  window.clearTimeout(mediaTimer);
  copy.classList.add("is-switching");
  mediaCards.forEach((card, cardIndex) => {
    if (cardIndex !== previousIndex) {
      card.classList.remove("is-active", "is-entering");
    }
  });
  enteringCard.classList.remove("is-entering");
  void enteringCard.offsetWidth;
  enteringCard.classList.add("is-entering");

  window.clearTimeout(switchTimer);
  switchTimer = window.setTimeout(() => {
    title.textContent = service.title;
    eyebrow.textContent = service.eyebrow;
    description.textContent = service.description;

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });

    copy.classList.remove("is-switching");
  }, 180);

  mediaTimer = window.setTimeout(() => {
    mediaCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === index);
      card.classList.remove("is-entering");
    });
  }, 760);
}

function getScrollProgress() {
  const rect = scrollSection.getBoundingClientRect();
  const scrollable = scrollSection.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  return Math.min(Math.max(-rect.top / scrollable, 0), 1);
}

function updateFromScroll() {
  const progress = getScrollProgress();
  const nextIndex = progress > 0.45 ? 1 : 0;
  setActiveService(nextIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const top = scrollSection.offsetTop + (scrollSection.offsetHeight - window.innerHeight) * index;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

window.addEventListener("scroll", updateFromScroll, { passive: true });
window.addEventListener("resize", updateFromScroll);
updateFromScroll();

```
