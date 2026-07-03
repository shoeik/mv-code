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
