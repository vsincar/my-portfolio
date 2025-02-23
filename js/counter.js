// GSAP ve ScrollTrigger'ı kaydet
gsap.registerPlugin(ScrollTrigger);

// Tüm sayaçları seç
gsap.utils.toArray(".number").forEach((counter) => {
  gsap.fromTo(
    counter,
    { textContent: 0 },
    {
      textContent: counter.getAttribute("data-target"),
      duration: 2,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
      },
    }
  );
});
