// TOGGLE BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const navMenu = document.getElementById("navMenu");

    // Toggle the visibility of the nav menu
    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});



// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;