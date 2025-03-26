document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".about-language-progress");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width =
          entry.target.getAttribute("data-width") + "%";
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});
