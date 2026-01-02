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
let slideInterval;

function showSlide(index) {

  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  slides.forEach(slide => {
    slide.classList.remove("opacity-100");
    slide.classList.add("opacity-0");
  });

  indicators.forEach(ind => {
    ind.classList.remove("bg-neutralcanvas-50");
    ind.classList.add("bg-neutralcanvas-50/40");
  });

  slides[currentSlide].classList.remove("opacity-0");
  slides[currentSlide].classList.add("opacity-100");

  if(indicators[currentSlide]) {
    indicators[currentSlide].classList.remove("bg-neutralcanvas-50/40");
    indicators[currentSlide].classList.add("bg-neutralcanvas-50");
  }
}


function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

if (btnNext) {
    btnNext.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      resetTimer();
    });
}

if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      resetTimer();
    });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
    resetTimer();
  });
});

resetTimer();

// Demo Mode: Unfinished Links Alert
const unfinishedLinks = document.querySelectorAll('a[href$=".html"]:not([href="index.html"])');

unfinishedLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the browser from going to a 404 page
        alert("Această secțiune va fi disponibilă după aprobarea proiectului."); 
        // (Translation: This section will be available after project approval)
    });
});