const root = document.documentElement;
const body = document.body;
const trigger = document.querySelector("[data-contact]");

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let renderedX = cursorX;
let renderedY = cursorY;

function setLocalPointer(event) {
  const rect = trigger.getBoundingClientRect();
  const localX = event.clientX - rect.left - rect.width / 2;
  const localY = event.clientY - rect.top - rect.height / 2;

  trigger.style.setProperty("--local-x", `${localX.toFixed(2)}px`);
  trigger.style.setProperty("--local-y", `${localY.toFixed(2)}px`);
  body.classList.add("is-contact-hover");
  trigger.classList.add("is-active");
}

function animateCursor() {
  renderedX += (cursorX - renderedX) * 0.22;
  renderedY += (cursorY - renderedY) * 0.22;

  root.style.setProperty("--cursor-x", `${renderedX.toFixed(2)}px`);
  root.style.setProperty("--cursor-y", `${renderedY.toFixed(2)}px`);

  requestAnimationFrame(animateCursor);
}

window.addEventListener("pointermove", (event) => {
  cursorX = event.clientX;
  cursorY = event.clientY;
  body.classList.add("has-pointer");
});

trigger.addEventListener("pointermove", setLocalPointer);
trigger.addEventListener("pointerover", setLocalPointer);

trigger.addEventListener("pointerenter", (event) => {
  body.classList.add("is-contact-hover");
  trigger.classList.add("is-active");
  setLocalPointer(event);
});

trigger.addEventListener("pointerleave", () => {
  body.classList.remove("is-contact-hover");
  trigger.classList.remove("is-active");
  trigger.style.setProperty("--local-x", "0px");
  trigger.style.setProperty("--local-y", "0px");
});

trigger.addEventListener("focus", () => {
  trigger.classList.add("is-active");
});

trigger.addEventListener("blur", () => {
  trigger.classList.remove("is-active");
});

animateCursor();
