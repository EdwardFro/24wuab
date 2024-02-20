// Update the existing JavaScript code with the following

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("white"); // Toggle burger color
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s `;
        }
      });
  
      // Toggle link color
      navLinks.forEach(link => {
        link.classList.toggle("white");
      });
  
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  