document.addEventListener("DOMContentLoaded", function () {
  // Portfolio data - You can replace this with dynamic data from API if needed
  const portfolioItems = [
    {
      title: "PeakBuy E-commerce Website UI",
      description: "JavaScript, HTML, CSS",
      link: "https://vsincar.github.io/peak-buy",
      date: "11 Sep. 2024",
      type: "image",
      media: "img/peakbuy/Screenshot.png",
      slideshow: false,
    },
    {
      title: "Hadatha - Job Search Web Project - Basic UI",
      description: "Figma",
      link: "https://www.figma.com/proto/3i8orrCJ4SIHF2udFpzJZy/Hadatha-Web?node-id=0-1&t=uiplQAAhBhXjpgAF-1",
      date: "25 Aug. 2024",
      type: "slideshow",
      media: [
        "img/hadatha/LandingPage.png",
        "img/hadatha/About.png",
        "img/hadatha/Contact.png",
        "img/hadatha/OurBrands.png",
        "img/hadatha/Careers.png",
      ],
      slideshow: true,
      slideshowClass: "slideshow-5",
    },
    {
      title: "Filmofy - Basic Movie Social Media",
      description: "Bootstrap, JavaScript, HTML, CSS",
      link: "https://vsincar.github.io/filmofy",
      date: "20 Jul. 2024",
      type: "slideshow",
      media: [
        "img/filmofy-web-project/1.png",
        "img/filmofy-web-project/2.png",
        "img/filmofy-web-project/3.png",
      ],
      slideshow: true,
      slideshowClass: "slideshow-3",
    },
    {
      title: "3D video modelled and made by me",
      description: "Cinema4D",
      link: "https://www.youtube.com/watch?v=0OnZD106FNU",
      date: "25 Nov. 2016",
      type: "video",
      media: "https://www.youtube.com/embed/0OnZD106FNU?si=UE7vmUVhRWaLvzM5",
    },
    {
      title: "Intro Animations - Mixup of old intros of my youtube channel",
      description: "Cinema4D",
      link: "https://www.youtube.com/watch?v=MKfJgzklfwQ",
      date: "19 Dec. 2016",
      type: "video",
      media: "https://www.youtube.com/embed/MKfJgzklfwQ?si=Rmm9sNLh7tWIYEBr",
    },
    {
      title: "Intro Video",
      description: "Cinema4D",
      link: "https://www.youtube.com/watch?v=68RBqhZlWJo",
      date: "20 Nov. 2016",
      type: "video",
      media: "https://www.youtube.com/embed/68RBqhZlWJo?si=-Zeng5JFWdbogyUv",
    },
    // Add more items here if needed
    // They will automatically be paginated
  ];

  // Pagination variables
  const itemsPerPage = 6;
  let currentPage = 1;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const portfolioContainer = document.getElementById("portfolioContainer");
  const paginationNav = document.getElementById("paginationNav");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");

  // Initialize portfolio
  renderPortfolioItems();
  renderPagination();

  // Show pagination only if needed
  if (portfolioItems.length > itemsPerPage) {
    paginationNav.style.display = "block";
  }

  // Render portfolio items for current page
  function renderPortfolioItems() {
    portfolioContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, portfolioItems.length);

    for (let i = startIndex; i < endIndex; i++) {
      const item = portfolioItems[i];
      const colDiv = document.createElement("div");
      colDiv.className = "col-lg-4 col-md-6 portfolio-item";

      let mediaContent = "";
      if (item.type === "image") {
        mediaContent = `<img src="${item.media}" class="img-fluid" alt="${item.title}">`;
      } else if (item.type === "video") {
        mediaContent = `
          <iframe src="${item.media}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        `;
      } else if (item.type === "slideshow" && item.slideshow) {
        mediaContent = `
          <div class="portfolio-slideshow ${item.slideshowClass}">
            ${item.media
              .map(
                (img) =>
                  `<img src="${img}" class="img-fluid" alt="${item.title}">`
              )
              .join("")}
          </div>
        `;
      }

      colDiv.innerHTML = `
        <div class="portfolio-card">
          ${
            item.type === "video"
              ? `<div class="portfolio-video">${mediaContent}</div>`
              : mediaContent
          }
          <div class="portfolio-info">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <div class="portfolio-links">
              <a href="${item.link}" target="_blank" title="${
        item.type === "video" ? "Watch Video" : "View Project"
      }">
                <i class="bi ${
                  item.type === "video" ? "bi-play-circle" : "bi-link-45deg"
                }"></i>
              </a>
              <span class="portfolio-date">${item.date}</span>
            </div>
          </div>
        </div>
      `;

      portfolioContainer.appendChild(colDiv);
    }
  }

  // Render pagination controls
  function renderPagination() {
    const paginationList = document.querySelector(".pagination");
    const pageNumbers = document.createElement("li");
    pageNumbers.className = "page-numbers";

    // Clear existing page numbers (except prev/next)
    const existingPages = document.querySelectorAll(".page-numbers");
    existingPages.forEach((el) => el.remove());

    // Add page numbers
    let pageHtml = "";
    for (let i = 1; i <= totalPages; i++) {
      pageHtml += `
        <li class="page-item page-numbers ${i === currentPage ? "active" : ""}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }

    pageNumbers.innerHTML = pageHtml;
    prevPageBtn.insertAdjacentElement("afterend", pageNumbers);

    // Update prev/next button states
    prevPageBtn.classList.toggle("disabled", currentPage === 1);
    nextPageBtn.classList.toggle("disabled", currentPage === totalPages);

    // Add event listeners to page numbers
    document.querySelectorAll(".page-link[data-page]").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = parseInt(this.getAttribute("data-page"));
        renderPortfolioItems();
        renderPagination();
        window.scrollTo({
          top: portfolioContainer.offsetTop - 100,
          behavior: "smooth",
        });
      });
    });
  }

  // Previous page button event
  prevPageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderPortfolioItems();
      renderPagination();
      window.scrollTo({
        top: portfolioContainer.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });

  // Next page button event
  nextPageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderPortfolioItems();
      renderPagination();
      window.scrollTo({
        top: portfolioContainer.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});
