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
