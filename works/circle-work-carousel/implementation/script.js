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
