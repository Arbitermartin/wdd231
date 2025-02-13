
// Show preloader for 1 minute before showing the main website
setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
}, 4000); // 60 seconds




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
// Cart array to store items
// let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update cart display
function updateCart() {
    let cartList = document.getElementById("cart-list");
    let cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to place order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Hide cart and show thank you message
    document.querySelector(".cart-container").style.display = "none";
    document.getElementById("thank-you").classList.remove("hidden");

    // Show order details
    let orderDetails = document.getElementById("order-details");
    orderDetails.innerHTML = "";
    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderDetails.appendChild(li);
    });

    // Clear cart
    cart = [];
}


// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;