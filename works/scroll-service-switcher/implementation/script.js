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
