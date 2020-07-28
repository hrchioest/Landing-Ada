const dropdown = document.querySelector(".js-dropdown");
const dropdownUno = document.querySelector(".js-dropdown-uno");
const dropdownDos = document.querySelector(".js-dropdown-dos");
const dropdownTres = document.querySelector(".js-dropdown-tres");
dropdown.addEventListener("click", (event) => {
  dropdownUno.classList.toggle("active");
});

dropdownDos.addEventListener("click", (event) => {
  dropdownTres.classList.toggle("active");
});
