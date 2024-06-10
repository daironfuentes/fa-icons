

// console.log("length => ", data.length);
const themeLight = document.body.querySelector(".theme-light");
const themeDark = document.body.querySelector(".theme-dark");

themeLight.addEventListener("click", () => {
    document.body.setAttribute("data-bs-theme", "dark");
    themeLight.classList.toggle("d-none");
    themeDark.classList.toggle("d-none");
})
themeDark.addEventListener("click", () => {
    document.body.setAttribute("data-bs-theme", "light");
    themeLight.classList.toggle("d-none");
    themeDark.classList.toggle("d-none");
})
