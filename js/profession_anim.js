document.addEventListener("DOMContentLoaded", function () {
  const professions = [
    "Web Designer",
    "Frontend Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Product Designer",
    "Logo Designer",
  ];
  const professionSpan = document.querySelector(".professions-anim");
  let currentIndex = 0;

  function typeAndErase() {
    if (currentIndex >= professions.length) {
      currentIndex = 0;
    }

    const profession = professions[currentIndex];
    let charIndex = 0;

    function typeChar() {
      if (charIndex <= profession.length) {
        professionSpan.innerHTML =
          profession.substring(0, charIndex) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeChar, 100);
      } else {
        setTimeout(eraseChar, 2000);
      }
    }

    function eraseChar() {
      if (charIndex > 0) {
        charIndex--;
        professionSpan.innerHTML =
          profession.substring(0, charIndex) + '<span class="cursor">|</span>';
        setTimeout(eraseChar, 50);
      } else {
        currentIndex++;
        setTimeout(typeAndErase, 500);
      }
    }

    typeChar();
  }

  typeAndErase();

  // Add CSS for cursor blink animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
    .cursor {
      animation: blink 0.7s infinite;
    }
  `;
  document.head.appendChild(style);
});
