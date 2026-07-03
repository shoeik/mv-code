# Product Hero Copy Slider

## HTML

```html
<main class="hero" aria-label="Product hero slider">
    <section class="slider" data-state="intro">
      <div class="visual visual--old" aria-hidden="true"></div>
      <div class="visual visual--new" aria-hidden="true"></div>

      <div class="copy copy--old" aria-label="Floating smooth writing ballpoint pen">
        <span class="eyebrow">Product</span>
        <span class="copy-line"><span>浮遊感のある書きごこち</span></span>
        <span class="copy-line"><span>でふわっと書ける、摩擦レス</span></span>
        <span class="copy-line"><span>スポールペン</span></span>
      </div>

      <div class="copy copy--new" aria-label="Expression joy">
        <span class="copy-line" data-line="0">表現する</span>
        <span class="copy-line" data-line="1">よろこびを。</span>
      </div>

      <div class="pager" aria-hidden="true">
        <span>←</span>
        <strong data-role="page">5/5</strong>
        <span>→</span>
      </div>

      <div class="version-switch" aria-label="Version switcher">
        <button type="button" data-mode="cards">2 cards</button>
        <button type="button" data-mode="background">Background</button>
      </div>

      <button class="replay" type="button" data-role="action">Next</button>
    </section>
  </main>
```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --red: #b40012;
  --ease: cubic-bezier(0.72, 0, 0.18, 1);
  --soft: cubic-bezier(0.2, 0.78, 0.18, 1);
}

body {
  margin: 0;
  min-height: 100vh;
  color: #fff;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #20262c;
}

button {
  color: inherit;
  font: inherit;
}

.hero {
  min-height: 100vh;
  overflow: hidden;
}

.slider {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #5e666c;
  transition: background 540ms var(--ease);
}

.slider.is-red,
.slider.is-travel,
.slider.is-settled {
  background: var(--red);
}

.visual {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  background-position: center;
  background-size: cover;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.22);
  transform: translate3d(0, 0, 0);
  transition:
    top 820ms var(--ease),
    left 820ms var(--ease),
    width 820ms var(--ease),
    height 820ms var(--ease),
    border-radius 820ms var(--ease),
    transform 820ms var(--ease);
}

.slider.is-resetting .visual,
.slider.is-resetting .visual::after,
.slider.is-resetting .copy--old .copy-line span,
.slider.is-resetting .eyebrow,
.slider.is-resetting .copy-char {
  transition: none !important;
}

.visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  transition: background 520ms ease;
}

.visual--old {
  z-index: 2;
  background-image: url("../frames/old-visual.png");
}

.visual--new {
  z-index: 3;
  top: 26vh;
  left: 112vw;
  width: min(64vw, 720px);
  height: 48vh;
  border-radius: 9px;
  background-image: url("../frames/new-visual.png");
  visibility: hidden;
}

.slider.is-red .visual--old {
  top: 17vh;
  left: 11vw;
  width: 78vw;
  height: 69vh;
  border-radius: 10px;
}

.slider.is-red .visual--old::after,
.slider.is-travel .visual--old::after,
.slider.is-settled .visual--old::after,
.slider.is-settled .visual--new::after {
  background: rgba(0, 0, 0, 0.08);
}

.slider.is-travel .visual--old {
  top: 26vh;
  left: -40vw;
  width: min(64vw, 720px);
  height: 48vh;
  border-radius: 10px;
}

.slider.is-travel .visual--new {
  left: 44vw;
  visibility: visible;
}

.slider.is-settled .visual--old {
  top: 26vh;
  left: -92vw;
  width: min(64vw, 720px);
  height: 48vh;
  border-radius: 10px;
}

.slider.is-settled .visual--new {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  visibility: visible;
}

.slider.is-red.is-settled .visual--old {
  top: 26vh;
  left: -92vw;
  width: min(64vw, 720px);
  height: 48vh;
  border-radius: 10px;
}

.slider.is-red.is-settled .visual--new {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  visibility: visible;
}

.slider.mode-background .visual--new {
  top: 17vh;
  left: 11vw;
  width: 78vw;
  height: 69vh;
  border-radius: 10px;
  visibility: hidden;
  transform: scale(0.96);
}

.slider.mode-background.is-travel .visual--old {
  top: 17vh;
  left: 11vw;
  width: 78vw;
  height: 69vh;
  border-radius: 10px;
}

.slider.mode-background.is-travel .visual--new {
  top: 17vh;
  left: 11vw;
  width: 78vw;
  height: 69vh;
  border-radius: 10px;
  visibility: visible;
  transform: scale(1);
}

.slider.mode-background.is-settled .visual--old,
.slider.mode-background.is-red.is-settled .visual--old {
  top: 17vh;
  left: 11vw;
  width: 78vw;
  height: 69vh;
  border-radius: 10px;
}

.slider.mode-background.is-settled .visual--new,
.slider.mode-background.is-red.is-settled .visual--new {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  visibility: visible;
  transform: scale(1);
}

.copy {
  position: absolute;
  z-index: 4;
  display: grid;
  letter-spacing: 0;
}

.copy--old {
  top: 44%;
  right: clamp(42px, 9vw, 110px);
  width: min(46vw, 520px);
  transform: translateY(-50%);
  gap: 5px;
  font-weight: 900;
}

.eyebrow {
  display: block;
  margin-bottom: 7px;
  font-size: 15px;
  font-weight: 800;
  overflow: hidden;
}

.copy--old .copy-line {
  display: block;
  overflow: hidden;
  font-size: clamp(25px, 4vw, 45px);
  line-height: 1.15;
}

.copy--old .copy-line span,
.eyebrow {
  transform: translateY(0);
  transition: transform 480ms var(--soft);
}

.copy--old .copy-line span {
  display: inline-block;
}

.is-copy-out .eyebrow,
.is-copy-out .copy--old .copy-line span {
  transform: translateY(112%);
}

.is-copy-out .copy--old .copy-line:nth-of-type(1) span {
  transition-delay: 30ms;
}

.is-copy-out .copy--old .copy-line:nth-of-type(2) span {
  transition-delay: 90ms;
}

.is-copy-out .copy--old .copy-line:nth-of-type(3) span {
  transition-delay: 150ms;
}

.copy--new {
  left: clamp(30px, 9vw, 118px);
  bottom: clamp(46px, 8vw, 92px);
  gap: 3px;
  font-size: clamp(44px, 9vw, 96px);
  font-weight: 950;
  line-height: 1.02;
}

.copy--new .copy-line {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}

.copy-char {
  display: inline-block;
  transform: translateY(118%);
  transition-property: transform;
  transition-duration: 620ms;
  transition-timing-function: var(--soft);
  transition-delay: calc(var(--line-delay) + var(--char-delay));
}

.is-new-copy .copy-char {
  transform: translateY(0);
}

.pager {
  position: absolute;
  z-index: 5;
  left: clamp(24px, 5vw, 56px);
  bottom: clamp(25px, 5vw, 54px);
  display: inline-flex;
  align-items: center;
  gap: 13px;
  min-width: 118px;
  height: 44px;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 999px;
  color: #fff;
  font-size: 12px;
}

.pager strong {
  min-width: 26px;
  text-align: center;
  font-size: 11px;
}

.replay {
  position: absolute;
  z-index: 6;
  right: 24px;
  bottom: 24px;
  min-height: 38px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.54);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.18);
  cursor: pointer;
}

.version-switch {
  position: absolute;
  z-index: 7;
  right: 24px;
  top: 24px;
  display: inline-flex;
  gap: 6px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.16);
}

.version-switch button {
  min-height: 30px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
}

.version-switch button.is-active {
  color: #111;
  background: #fff;
}

@media (max-width: 720px) {
  .copy--old {
    top: 43%;
    left: 8vw;
    right: auto;
    width: 84vw;
  }

  .slider.is-red .visual--old {
    top: 19vh;
    left: 7vw;
    width: 86vw;
    height: 57vh;
  }

  .visual--new {
    top: 35%;
    left: 112vw;
    width: 78vw;
    height: 38vh;
  }

  .slider.is-travel .visual--old {
    top: 35%;
    left: -50vw;
    width: 78vw;
    height: 38vh;
  }

  .slider.is-travel .visual--new {
    left: 42vw;
    visibility: visible;
  }

  .slider.is-settled .visual--new {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    visibility: visible;
  }

  .slider.is-red.is-settled .visual--old {
    top: 35%;
    left: -98vw;
    width: 78vw;
    height: 38vh;
  }

  .slider.is-red.is-settled .visual--new {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    visibility: visible;
  }

  .slider.mode-background .visual--new,
  .slider.mode-background.is-travel .visual--old,
  .slider.mode-background.is-travel .visual--new,
  .slider.mode-background.is-settled .visual--old,
  .slider.mode-background.is-red.is-settled .visual--old {
    top: 19vh;
    left: 7vw;
    width: 86vw;
    height: 57vh;
    border-radius: 10px;
  }

  .slider.mode-background.is-settled .visual--new,
  .slider.mode-background.is-red.is-settled .visual--new {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  .copy--new {
    left: 8vw;
    bottom: 86px;
  }

  .replay {
    right: 14px;
    bottom: 14px;
  }

  .version-switch {
    top: 14px;
    right: 14px;
  }
}
```

## JS

```js
const slider = document.querySelector(".slider");
const page = document.querySelector('[data-role="page"]');
const actionButton = document.querySelector('[data-role="action"]');
const modeButtons = [...document.querySelectorAll("[data-mode]")];
const newLines = [...document.querySelectorAll(".copy--new .copy-line")];

const steps = [
  { className: "is-red", delay: 420 },
  { className: "is-copy-out", delay: 760 },
  { className: "is-travel", delay: 1120 },
  { className: "is-settled", delay: 2650 },
  { className: "is-new-copy", delay: 3300 }
];

let timers = [];
let hasPlayed = false;
let mode = new URLSearchParams(window.location.search).get("mode") || "cards";

function splitCopy() {
  newLines.forEach((line, lineIndex) => {
    const text = line.textContent.trim();
    line.textContent = "";

    [...text].forEach((char, charIndex) => {
      const span = document.createElement("span");
      span.className = "copy-char";
      span.textContent = char;
      span.style.setProperty("--line-delay", `${lineIndex * 170}ms`);
      span.style.setProperty("--char-delay", `${charIndex * 24}ms`);
      line.append(span);
    });
  });
}

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function updateControls() {
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });

  actionButton.textContent = hasPlayed ? "Reset" : "Next";
}

function resetSlider() {
  clearTimers();
  slider.className = `slider mode-${mode} is-resetting`;
  page.textContent = "5/5";
  hasPlayed = false;

  slider.offsetHeight;
  slider.className = `slider mode-${mode}`;
  updateControls();
}

function runTimeline() {
  hasPlayed = true;
  updateControls();

  steps.forEach((step) => {
    const timer = window.setTimeout(() => {
      slider.classList.add(step.className);

      if (step.className === "is-travel") {
        page.textContent = "1/5";
      }
    }, step.delay);

    timers.push(timer);
  });
}

function playFromStart() {
  resetSlider();
  const timer = window.setTimeout(runTimeline, 90);
  timers.push(timer);
}

function handleAction() {
  if (hasPlayed) {
    resetSlider();
    return;
  }

  runTimeline();
}

function setMode(nextMode) {
  mode = nextMode;
  resetSlider();
}

splitCopy();
setMode(mode === "background" ? "background" : "cards");

actionButton.addEventListener("click", handleAction);

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});
```
