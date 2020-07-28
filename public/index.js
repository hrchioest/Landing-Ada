const dropdown = document.querySelector(".js-dropdown");
const dropdownUno = document.querySelector(".js-dropdown-uno");
const dropdownDos = document.querySelector(".js-dropdown-dos");
const deepdown = document.querySelector(".js-deepdown");
dropdown.addEventListener("click", (event) => {
  dropdownUno.classList.toggle("active");
});

dropdownDos.addEventListener("click", (event) => {
  deepdown.classList.toggle("active");
});
