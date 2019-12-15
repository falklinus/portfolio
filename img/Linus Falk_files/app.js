const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
        burger.classList.toggle("toggle");
      }
    });
  });
};

navSlide();
