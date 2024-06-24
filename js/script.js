document.addEventListener("scroll", (e) => {
  if (window.scrollY === 0) {
    document.querySelector(".header").classList.remove("header-efecto");
  } else {
    document.querySelector(".header").classList.add("header-efecto");
  }
});

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
  document.getElementById("nav-list").classList.toggle("mostrar-list");
  hamburger.classList.toggle("bxs-x-square");
});

const sr = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data");

sr.reveal(".home-dish", {
  delay: 500,
  distance: "100px",
  origin: "bottom",
});

sr.reveal(".home-burger", {
  origin: "rigth",
  delay: 1200,
  distance: "200px",
  duration: 1500,
});

sr.reveal(".ingredient", {
  origin: "top",
  delay: 1600,
  interval: 200,
  distance: "500px",
});

sr.reveal(".recipe__img", {
  origin: "left",
});

sr.reveal(".recipe__description ", {
  origin: "rigth",
});
