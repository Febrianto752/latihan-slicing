const navElem = document.querySelector("nav");
navElem.style.width = document.body.offsetWidth + "px";

window.addEventListener("resize", () => {
  navElem.style.width = document.body.offsetWidth + "px";
  if (window.innerWidth > 1084) {
    navElem.classList.remove("nav-collapse");
  }

  console.log(window.innerWidth);
});

const menuToggleElem = document.querySelector(".menu-toggle");

menuToggleElem.addEventListener("click", () => {
  const navElem = document.querySelector("nav");
  navElem.classList.toggle("nav-collapse");
});
