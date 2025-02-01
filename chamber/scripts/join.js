const openButton =document.querySelector(".openButton");
const dialogBox =document.querySelector(".dialogBox");
const closeButton =document.querySelector(".closeButton");

openButton.addEventListener("click",()=>{
    dialogBox.showModel();

});
// time
document.getElementById('timestamp').value = new Date().toISOString();
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
//  get page
const params = new URLSearchParams(window.location.search);
document.getElementById("first-name").textContent = params.get("first-name") || "N/A";
document.getElementById("last-name").textContent = params.get("last-name") || "N/A";
document.getElementById("email").textContent = params.get("email") || "N/A";
document.getElementById("phone").textContent = params.get("phone") || "N/A";
document.getElementById("organization").textContent = params.get("organization") || "N/A";
document.getElementById("membership").textContent = params.get("membership") || "N/A";
document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";