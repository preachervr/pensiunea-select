// Active States

const links = document.querySelectorAll(".navLinks a");
const currentPath = window.location.pathname;

links.forEach((link) => {
  if (
    link.pathname === currentPath || 
    (currentPath === "/" && link.pathname.endsWith("index.html")) ||
    (currentPath.endsWith("/") && link.pathname.endsWith("index.html"))
  ) {
    link.classList.add("scale-102", "text-mellowcream-300");
  }
});

// Hamburger Menu Toggle

document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("btnMenu");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = mobileMenu.querySelectorAll("a");

    function openMenu() {
      mobileMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
      mobileMenu.classList.add("translate-x-0", "opacity-100", "pointer-events-auto");
      document.body.style.overflow = "hidden";
    }

    function closeMenuFunc() {
      mobileMenu.classList.remove("translate-x-0", "opacity-100", "pointer-events-auto");
      mobileMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    }

    if (btnMenu) btnMenu.addEventListener("click", openMenu);
    if (closeMenu) closeMenu.addEventListener("click", closeMenuFunc);

    menuLinks.forEach(link => {
      link.addEventListener("click", closeMenuFunc);
    });
});

// Hero Photo Slider

const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("opacity-100"));
  slides.forEach(slide => slide.classList.add("opacity-0"));

  indicators.forEach(ind => {
    ind.classList.remove("bg-neutralcanvas-50");
    ind.classList.add("bg-neutralcanvas-50/40");
  });

  slides[index].classList.remove("opacity-0");
  slides[index].classList.add("opacity-100");

  if(indicators[index]) {
    indicators[index].classList.remove("bg-neutralcanvas-50/40");
    indicators[index].classList.add("bg-neutralcanvas-50");
  }
}

btnNext.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

btnPrev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});