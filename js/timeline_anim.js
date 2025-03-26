document.addEventListener("DOMContentLoaded", function () {
  const experiences = document.querySelectorAll(".experience");

  // Intersection Observer oluştur
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const experience = entry.target;

          // Sadece "show" class'ını ekleyelim, CSS'teki animasyonlar bu class ile kontrol ediliyor
          experience.classList.add("show");

          // Direkt style atamalarını kaldıralım, bunlar CSS'te zaten tanımlı
          // experience.style.opacity = "1";
          // experience.style.transform = "translateX(0)";

          observer.unobserve(experience);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px", // Alt kısımdan 50px erken tetikleme
    }
  );

  // Elementleri gözle
  experiences.forEach((experience) => {
    // Başlangıç stilini CSS'te tanımladığımız için burada tekrar set etmeye gerek yok
    observer.observe(experience);
  });
});
