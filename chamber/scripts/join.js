
// dialog button 
document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".openButton, .openButton_1, .openButton_2, .openButton_3");
    const closeButtons = document.querySelectorAll(".closeButton, .closeButton_1, .closeButton_2, .closeButton_3");
    const modals = document.querySelectorAll(".dialogBox");

    openButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            modals[index].style.display = "block";
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            modals[index].style.display = "none";
        });
    });
});


