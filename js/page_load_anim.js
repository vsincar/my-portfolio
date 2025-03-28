document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(
    ".item, .about-personal-info, .button-anim, .portfolio-card, .about-languages-section, .scroller, .app-scroller, .title-box, .contact-mf, .about-me, .lead, #h2a, .cert_item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    observer.observe(item);
  });
});

// Add this CSS to your stylesheet or in a <style> tag in your HTML
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .item, .about-personal-info, .button-anim, .portfolio-card, .about-languages-section, .scroller, .app-scroller, .timeline-container, .title-box, .contact-mf, .about-me, .lead, #h2a, .cert_item {
    opacity: 0;
    transform: translateY(20px);
  }
`;
document.head.appendChild(style);
