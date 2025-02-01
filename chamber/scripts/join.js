
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
// it direct thank you page for user input
const params = new URLSearchParams(window.location.search);
document.getElementById("first-name").textContent = params.get("first-name") || "N/A";
document.getElementById("last-name").textContent = params.get("last-name") || "N/A";
document.getElementById("email").textContent = params.get("email") || "N/A";
document.getElementById("phone").textContent = params.get("phone") || "N/A";
document.getElementById("organization").textContent = params.get("organization") || "N/A";
document.getElementById("membership").textContent = params.get("membership") || "N/A";
document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";

// timestamp page
document.getElementById('timestamp').value = new Date().toISOString();
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}