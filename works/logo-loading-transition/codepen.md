# Logo Loading Transition

## HTML

```html
<main class="stage" aria-live="polite">
  <section class="intro-screen" data-screen="intro">
    <header class="topbar">
      <button class="menu-button" type="button" aria-label="Open menu">
        <span></span>
        <span></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Recruit</a>
        <a href="#">News</a>
        <a href="#">Security</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <div class="project-card">
      <div class="print-preview" aria-hidden="true">
        <span class="line line-a"></span>
        <span class="line line-b"></span>
        <span class="line line-c"></span>
        <span class="line line-d"></span>
        <span class="crest"></span>
      </div>
      <button class="view-button" type="button">View More</button>
    </div>
  </section>

  <section class="hero-screen" data-screen="hero">
    <header class="topbar hero-topbar">
      <button class="menu-button" type="button" aria-label="Open menu">
        <span></span>
        <span></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Recruit</a>
        <a href="#">News</a>
        <a href="#">Security</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <div class="hero-media" aria-hidden="true"></div>
    <div class="hero-copy">
      <p>WE ARE</p>
      <p>SMALL GIANTS.</p>
    </div>
    <button class="replay-button" type="button">Replay</button>
  </section>

  <div class="loader" aria-hidden="true">
    <div class="brand-lockup">
      <span class="brand-mark"></span>
      <span class="brand-text">F&amp;S CREATIONS</span>
    </div>
  </div>
</main>
```

## CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --blue: #0a63ff;
  --ink: #0b0d10;
  --muted: #667085;
  --loader-duration: 900ms;
}

body {
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f7f8;
}

button,
a {
  font: inherit;
}

.stage {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f5f7f8;
}

.intro-screen,
.hero-screen,
.loader {
  position: absolute;
  inset: 0;
}

.intro-screen {
  z-index: 1;
  display: grid;
  place-items: center;
  background: #f5f7f8;
  transition: opacity 500ms ease;
}

.stage.is-loading .intro-screen {
  opacity: 0;
}

.topbar {
  position: absolute;
  z-index: 5;
  top: 24px;
  left: 24px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-button {
  display: grid;
  gap: 5px;
  width: 34px;
  height: 34px;
  padding: 0;
  place-content: center;
  border: 0;
  color: currentColor;
  background: transparent;
  cursor: pointer;
}

.menu-button span {
  display: block;
  width: 15px;
  height: 2px;
  background: currentColor;
}

.nav-links {
  display: flex;
  gap: clamp(16px, 2vw, 28px);
  align-items: center;
}

.nav-links a {
  color: rgba(11, 13, 16, 0.72);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.project-card {
  position: relative;
  width: min(72vw, 760px);
  aspect-ratio: 1.45;
  transform: rotate(18deg);
  background: #102a55;
  border-radius: 7px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

.print-preview {
  position: absolute;
  inset: 8%;
  border: 3px solid #65d8f1;
  color: #fff;
}

.line {
  position: absolute;
  height: 4px;
  border-radius: 999px;
  background: currentColor;
}

.line-a {
  width: 48%;
  left: 9%;
  top: 18%;
}

.line-b {
  width: 38%;
  right: 8%;
  top: 31%;
  background: #e78cff;
}

.line-c {
  width: 58%;
  left: 12%;
  bottom: 26%;
  background: #ffcf63;
}

.line-d {
  width: 32%;
  right: 12%;
  bottom: 15%;
}

.crest {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border: 8px solid #fff;
  border-radius: 50%;
}

.view-button {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 84px;
  transform: translate(-50%, -50%) rotate(-18deg);
  border: 0;
  border-radius: 50%;
  color: #101010;
  background: #f8ec20;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
}

.hero-screen {
  z-index: 0;
  color: #fff;
  background: #07537d;
  opacity: 0;
  transform: scale(1.02);
  transition: opacity 700ms ease, transform 900ms ease;
}

.stage.is-complete .hero-screen {
  opacity: 1;
  transform: scale(1);
}

.hero-topbar {
  color: #fff;
}

.hero-topbar .nav-links a {
  color: rgba(255, 255, 255, 0.78);
}

.hero-media {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(4, 40, 65, 0.92), rgba(4, 72, 98, 0.45)),
    radial-gradient(circle at 61% 38%, rgba(180, 235, 255, 0.72) 0 7%, transparent 18%),
    linear-gradient(112deg, #063651 0 42%, #237fa0 42% 48%, #073c59 48% 100%);
}

.hero-media::after {
  content: "";
  position: absolute;
  left: 48%;
  top: -10%;
  width: 18%;
  height: 120%;
  transform: rotate(8deg);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
  filter: blur(24px);
  opacity: 0.6;
}

.hero-copy {
  position: absolute;
  left: clamp(18px, 4vw, 56px);
  bottom: clamp(56px, 10vw, 120px);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.86;
  color: var(--blue);
}

.hero-copy p {
  margin: 0;
  font-size: clamp(54px, 14vw, 168px);
}

.replay-button {
  position: absolute;
  z-index: 8;
  right: 28px;
  bottom: 24px;
  height: 38px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 999px;
  color: #fff;
  background: rgba(0, 0, 0, 0.22);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.loader {
  z-index: 10;
  display: grid;
  place-items: center;
  background: #fff;
  opacity: 0;
  pointer-events: none;
}

.stage.is-loading .loader {
  animation: loader-layer 2300ms ease forwards;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: 0;
  transform: translateY(10px);
}

.stage.is-loading .brand-lockup {
  animation: brand-reveal 1600ms ease forwards;
}

.brand-mark {
  position: relative;
  width: 30px;
  height: 22px;
}

.brand-mark::before,
.brand-mark::after {
  content: "";
  position: absolute;
  left: 0;
  height: 6px;
  background: #111;
}

.brand-mark::before {
  top: 3px;
  width: 30px;
}

.brand-mark::after {
  bottom: 3px;
  width: 18px;
}

.brand-text {
  color: #111;
  font-size: clamp(16px, 2vw, 24px);
  font-weight: 900;
  letter-spacing: 0.18em;
}

@keyframes loader-layer {
  0% { opacity: 0; }
  18%, 72% { opacity: 1; }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes brand-reveal {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(8px);
  }

  28%, 58% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-8px);
    filter: blur(8px);
  }
}

@media (max-width: 720px) {
  .topbar {
    top: 18px;
    left: 16px;
    right: 16px;
  }

  .nav-links {
    gap: 12px;
    max-width: calc(100vw - 78px);
    overflow: hidden;
  }

  .nav-links a {
    font-size: 11px;
  }

  .project-card {
    width: 88vw;
  }

  .view-button {
    width: 72px;
    height: 72px;
  }
}
```

## JS

```js
const stage = document.querySelector(".stage");
const viewButton = document.querySelector(".view-button");
const replayButton = document.querySelector(".replay-button");

let transitionTimer = 0;

function playTransition() {
  window.clearTimeout(transitionTimer);

  stage.classList.remove("is-loading", "is-complete");
  void stage.offsetWidth;

  stage.classList.add("is-loading");

  transitionTimer = window.setTimeout(() => {
    stage.classList.add("is-complete");
  }, 1500);
}

viewButton.addEventListener("click", playTransition);
replayButton.addEventListener("click", playTransition);

window.addEventListener("load", () => {
  window.setTimeout(playTransition, 500);
});
```
