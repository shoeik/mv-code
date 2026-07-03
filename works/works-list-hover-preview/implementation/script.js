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
