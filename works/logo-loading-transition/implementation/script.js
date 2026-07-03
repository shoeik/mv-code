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
