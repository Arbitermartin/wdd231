
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

// welcome message and local storage.
  // Get the message div
  const messageDiv = document.getElementById("visit-message");

  // Retrieve last visit from localStorage
  let lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
      // Convert timestamp to a readable format
      let lastVisitDate = new Date(parseInt(lastVisit)).toLocaleString();
      messageDiv.innerHTML = `<h2>Welcome back!</h2><p>Your last visit was on: ${lastVisitDate}</p>`;
  } else {
      messageDiv.innerHTML = `<h2>Welcome to our site!</h2><p>This is your first visit.</p>`;
  }

  // Update localStorage with the current visit timestamp
  localStorage.setItem("lastVisit", Date.now());
//   end of this fetch

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
// member style
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
  
    // Fetch and display members
    async function fetchMembers() {
      try {
        const response = await fetch("./data/members.json");
        const members = await response.json();
  
        displayMembers(members);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    }
  
    // Display members
    function displayMembers(members) {
      container.innerHTML = ""; // Clear container
      members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member-card");
        memberDiv.innerHTML = `
          <img src="../chamber/images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
        `;
        container.appendChild(memberDiv);
      });
    }
  
    // Toggle view
    gridViewBtn.addEventListener("click", () => {
      container.className = "grid-view";
    });
    fetchMembers();
  });
  
  document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
    
  
    // Fetch and display members
    async function fetchMembers() {
        try {
            const response = await fetch("./data/members.json");
            const members = await response.json();
            displayMembersAsGrid(members); // Default to grid view
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }
  
    // Display members as grid
    function displayMembersAsGrid(members) {
        container.className = "grid-view";
        container.innerHTML = ""; // Clear container
        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member-card");
            memberDiv.innerHTML = `
                <img src="../project/images/${member.image}" alt="${member.name}" onerror="this.src='fallback-image.jpg'">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
            `;
            container.appendChild(memberDiv);
        });
    }
    // Toggle view
    gridViewBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("./data/members.json");
            const members = await response.json();
            displayMembersAsGrid(members);
        } catch (error) {
            console.error("Error switching to grid view:", error);
        }
    });

});
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

// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;