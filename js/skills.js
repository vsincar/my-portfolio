const scrollers = document.querySelectorAll(".scroller");
const appScrollers = document.querySelectorAll(".app-scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });

  appScrollers.forEach((appScroller) => {
    appScroller.setAttribute("data-animated", true);
    const appScrollerInner = appScroller.querySelector(".app_scroller-inner");
    const appScrollerItem = Array.from(appScrollerInner.children);

    appScrollerItem.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      appScrollerInner.appendChild(duplicatedItem);
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".app-scroller-item");
  const tooltip = document.getElementById("skillTooltip");

  items.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      const title = this.getAttribute("data-tooltip");
      const description = this.getAttribute("data-description");
      const skillLevel = this.getAttribute("data-skill-level");
      const iconSrc = this.querySelector("img").src;

      tooltip.querySelector(".tooltip-icon").src = iconSrc;
      tooltip.querySelector(".tooltip-title").textContent = title;
      tooltip.querySelector(".tooltip-description").textContent = description;
      tooltip.querySelector(".skill-level").textContent = `${skillLevel}%`;
      tooltip.querySelector(".progress-fill").style.width = `${skillLevel}%`;

      const rect = this.getBoundingClientRect();
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 10}px`;
      tooltip.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });
});
