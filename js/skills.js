const scrollers = document.querySelectorAll(".scroller");
const appScrollers = document.querySelectorAll(".app-scroller");

// Tema kontrolü için fonksiyon
function updateImageFilter() {
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  const images = document.querySelectorAll("img#frmer");

  images.forEach((img) => {
    img.style.filter =
      theme === "dark" ? "invert(1) brightness(2)" : "invert(0)";
  });
}

// Animasyon ekleme fonksiyonu (kullanıcı tercihlerine göre)
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    const duplicateCount = Math.ceil(
      window.innerWidth / scrollerInner.scrollWidth
    );

    for (let i = 0; i < duplicateCount; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });

  appScrollers.forEach((appScroller) => {
    appScroller.setAttribute("data-animated", true);
    const appScrollerInner = appScroller.querySelector(".app_scroller-inner");
    const appScrollerItem = Array.from(appScrollerInner.children);

    const duplicateCount = Math.ceil(
      window.innerWidth / appScrollerInner.scrollWidth
    );

    for (let i = 0; i < duplicateCount; i++) {
      appScrollerItem.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        appScrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}

// Tema değişikliklerini izle
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === "data-theme") {
      updateImageFilter();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
});

// Pencere boyutu değiştiğinde animasyonları yenile
window.addEventListener("resize", function () {
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".scroller_inner");
    const currentCount = scrollerInner.children.length;
    const duplicateCount = Math.ceil(
      window.innerWidth / scrollerInner.scrollWidth
    );

    if (currentCount / scrollerInner.childElementCount < duplicateCount) {
      scroller.querySelector("[data-animated='true']").remove();
      addAnimation();
    }
  });

  appScrollers.forEach((appScroller) => {
    const appScrollerInner = appScroller.querySelector(".app_scroller-inner");
    const currentCount = appScrollerInner.children.length;
    const duplicateCount = Math.ceil(
      window.innerWidth / appScrollerInner.scrollWidth
    );

    if (currentCount / appScrollerInner.childElementCount < duplicateCount) {
      appScroller.querySelector("[data-animated='true']").remove();
      addAnimation();
    }
  });
});

// Tooltip işlevselliği
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".app-scroller-item");
  const tooltip = document.getElementById("skillTooltip");

  // Başlangıçta tema filtrelerini uygula
  updateImageFilter();

  items.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      const title = this.getAttribute("data-tooltip");
      const description = this.getAttribute("data-description");
      const skillLevel = this.getAttribute("data-skill-level");

      // Önce ID'si "frmer" olan elementi bul
      let iconElement = this.querySelector("#frmer");

      // Eğer bulunamazsa, herhangi bir img elementini kullan
      if (!iconElement) {
        iconElement = this.querySelector("img");
      }

      const iconSrc = iconElement ? iconElement.src : "";

      // Tooltip içindeki ikonu güncelle
      const tooltipIcon = tooltip.querySelector(".tooltip-icon");
      tooltipIcon.src = iconSrc;

      // Eğer bu bir frmer ikonuysa, filtre stilini kopyala
      if (iconElement && iconElement.id === "frmer") {
        tooltipIcon.style.filter = window.getComputedStyle(iconElement).filter;
        tooltipIcon.style.transition = "filter 0.3s ease-in-out";
      } else {
        tooltipIcon.style.filter = "";
        tooltipIcon.style.transition = "";
      }

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
