# Scroll Blur Field Gallery

## HTML

```html
<main>
    <section class="hero" aria-label="Facility overview">
      <div class="hero-image"></div>
    </section>

    <section class="field-section" data-role="fieldSection" aria-labelledby="fieldTitle">
      <div class="field-header">
        <div class="title-group blur-target" data-blur-key="title">
          <h1 id="fieldTitle">Our Field</h1>
          <span>事業と職場</span>
        </div>
        <p class="lead blur-target" data-blur-key="lead">
          日本空調サービスってどんな会社？<br>
          私たちの強みと4つの職種をご紹介。
        </p>
      </div>

      <div class="card-grid">
        <article class="field-card">
          <div class="field-photo field-photo--scope blur-target" data-blur-key="cardA"></div>
          <div class="field-card__meta">
            <div>
              <span>Business Scope</span>
              <h2>事業を知る</h2>
            </div>
            <a href="#" aria-label="Business Scope">→</a>
          </div>
        </article>

        <article class="field-card">
          <div class="field-photo field-photo--job blur-target" data-blur-key="cardB"></div>
          <div class="field-card__meta">
            <div>
              <span>Job Introduction</span>
              <h2>職種を知る</h2>
            </div>
            <a href="#" aria-label="Job Introduction">→</a>
          </div>
        </article>
      </div>
    </section>

    <section class="next-image" aria-label="Next section preview"></section>
  </main>
```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --ink: #191f24;
  --muted: #8a949d;
  --paper: #f4f8fa;
  --line: #dce4e9;
  --title-blur: 18px;
  --lead-blur: 18px;
  --card-a-blur: 18px;
  --card-b-blur: 18px;
}

html {
  background: #dfe9ee;
}

body {
  margin: 0;
  color: var(--ink);
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  background: var(--paper);
}

main {
  min-height: 190vh;
  overflow: clip;
}

.hero {
  height: 58vh;
  min-height: 330px;
  background: #bed4df;
}

.hero-image,
.next-image,
.field-photo {
  background-position: center;
  background-size: cover;
}

.hero-image {
  height: 100%;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0)),
    linear-gradient(135deg, rgba(44, 74, 85, 0.12) 0 16%, transparent 16%),
    repeating-linear-gradient(0deg, #4d6670 0 5px, #738a93 5px 10px, #58717b 10px 15px),
    linear-gradient(115deg, transparent 0 42%, #c6d7dd 42% 46%, transparent 46%),
    linear-gradient(145deg, transparent 0 58%, #526976 58% 61%, transparent 61%),
    linear-gradient(#b9d9e7, #eff8fb 48%, #9eb4be 48%);
}

.field-section {
  position: relative;
  z-index: 2;
  min-height: 105vh;
  margin-top: -72px;
  padding: clamp(72px, 12vw, 122px) clamp(26px, 4.8vw, 76px) 92px;
  border-radius: 34px 34px 0 0;
  background: var(--paper);
}

.field-section::before,
.field-section::after {
  content: "";
  position: absolute;
  pointer-events: none;
  border: 1px solid rgba(178, 194, 203, 0.36);
  border-left: 0;
  border-bottom: 0;
}

.field-section::before {
  top: 62px;
  left: 36px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-color: rgba(178, 194, 203, 0.18);
}

.field-section::after {
  right: 78px;
  bottom: 120px;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  border-color: rgba(178, 194, 203, 0.16);
}

.field-header {
  position: sticky;
  top: 84px;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(220px, 0.75fr) minmax(260px, 1fr);
  gap: clamp(28px, 5vw, 74px);
  align-items: start;
  max-width: 980px;
  margin-bottom: 48px;
}

.title-group {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.title-group h1 {
  margin: 0;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 0.95;
  letter-spacing: 0;
}

.title-group span {
  padding-left: 14px;
  border-left: 1px solid #98a5ad;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.lead {
  max-width: 410px;
  margin: 0;
  font-size: clamp(13px, 1.25vw, 16px);
  font-weight: 800;
  line-height: 1.9;
}

.card-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 4.5vw, 70px);
  max-width: 1160px;
  margin-top: clamp(46px, 8vw, 92px);
}

.field-card {
  min-width: 0;
}

.field-card:nth-child(2) {
  padding-top: clamp(44px, 7vw, 92px);
}

.field-photo {
  width: 100%;
  aspect-ratio: 1.08;
  border-radius: 2px;
  background-color: #d8e3e8;
}

.field-photo--scope {
  background-image:
    linear-gradient(180deg, transparent 66%, rgba(244, 248, 250, 0.62)),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent 46%),
    repeating-linear-gradient(90deg, #e7eef2 0 28px, #263943 28px 33px, #74a5c9 33px 50px, #f1f5f7 50px 80px),
    repeating-linear-gradient(0deg, transparent 0 72px, rgba(20, 38, 48, 0.75) 72px 78px),
    linear-gradient(145deg, #dbe7ec 0 34%, #a4c7d6 34% 38%, #edf3f6 38% 100%);
}

.field-photo--job {
  background-image:
    linear-gradient(180deg, transparent 68%, rgba(244, 248, 250, 0.55)),
    radial-gradient(circle at 32% 35%, #f2f6f8 0 8%, transparent 8.5%),
    radial-gradient(circle at 46% 53%, #eef4f6 0 10%, transparent 10.5%),
    linear-gradient(105deg, transparent 0 45%, #172e46 45% 58%, transparent 58%),
    linear-gradient(150deg, transparent 0 55%, #1e4f74 55% 63%, transparent 63%),
    linear-gradient(90deg, #eff5f7 0 66%, #f79b23 66% 73%, #2b3439 73% 100%);
}

.field-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 26px;
}

.field-card__meta span {
  display: block;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 10px;
  font-weight: 800;
}

.field-card__meta h2 {
  margin: 0;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.1;
  letter-spacing: 0;
}

.field-card__meta a {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  color: #72808a;
  background: #fff;
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(59, 80, 91, 0.08);
}

.blur-target {
  will-change: filter;
}

[data-blur-key="title"] {
  filter: blur(var(--title-blur));
}

[data-blur-key="lead"] {
  filter: blur(var(--lead-blur));
}

[data-blur-key="cardA"] {
  filter: blur(var(--card-a-blur));
}

[data-blur-key="cardB"] {
  filter: blur(var(--card-b-blur));
}

.next-image {
  height: 58vh;
  min-height: 330px;
  background-image:
    linear-gradient(180deg, rgba(244, 248, 250, 0.26), rgba(244, 248, 250, 0)),
    repeating-linear-gradient(90deg, #89a1aa 0 24px, #cbd8de 24px 30px, #9bb0b8 30px 56px),
    repeating-linear-gradient(0deg, transparent 0 70px, rgba(80, 99, 108, 0.7) 70px 76px),
    linear-gradient(#d3e0e5, #8098a3);
}

@media (max-width: 760px) {
  .hero,
  .next-image {
    height: 42vh;
    min-height: 260px;
  }

  .field-section {
    margin-top: -42px;
    padding: 58px 20px 72px;
    border-radius: 24px 24px 0 0;
  }

  .field-header,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .field-header {
    position: relative;
    top: auto;
    gap: 20px;
    margin-bottom: 28px;
  }

  .card-grid {
    gap: 36px;
    margin-top: 36px;
  }

  .field-card:nth-child(2) {
    padding-top: 0;
  }
}
```

## JS

```js
const section = document.querySelector('[data-role="fieldSection"]');
const maxBlur = 18;

const ranges = {
  title: [0.08, 0.34],
  lead: [0.14, 0.42],
  cardA: [0.28, 0.62],
  cardB: [0.38, 0.76]
};

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(value, start, end) {
  return clamp((value - start) / (end - start));
}

function blurFor(progress, key) {
  const [start, end] = ranges[key];
  const eased = mapRange(progress, start, end);
  return (maxBlur * (1 - eased)).toFixed(2);
}

function updateBlur() {
  const rect = section.getBoundingClientRect();
  const viewport = window.innerHeight || document.documentElement.clientHeight;
  const total = rect.height + viewport;
  const progress = clamp((viewport - rect.top) / total);

  section.style.setProperty("--title-blur", `${blurFor(progress, "title")}px`);
  section.style.setProperty("--lead-blur", `${blurFor(progress, "lead")}px`);
  section.style.setProperty("--card-a-blur", `${blurFor(progress, "cardA")}px`);
  section.style.setProperty("--card-b-blur", `${blurFor(progress, "cardB")}px`);
}

let ticking = false;

function requestUpdate() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateBlur();
    ticking = false;
  });
}

window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
updateBlur();
```
