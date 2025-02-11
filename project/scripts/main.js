// TOGGLE BUTTON
document.getElementById('toggleButton').addEventListener('click',function(){
    let navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('show')) {
        this.innerHTML = '<i class="bi bi-list"></i>';
    } else {
        this.innerHTML = '<i class="bi bi-x"></i>';
    }
    navMenu.classList.toggle('show');
});
// menu style
let cart = [];
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach(({ item, price }) => {
        let li = document.createElement("li");
        li.textContent = `${item} - $${price.toFixed(2)}`;
        cartList.appendChild(li);
        total += price;
    });
    totalElement.textContent = total.toFixed(2);
}

// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;