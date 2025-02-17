
// TOGGLE BUTTON
document.getElementById('toggleButton').addEventListener('click',function(){
    let navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('show')) {
        this.innerHTML = ' <i class="fa-light fa-bars"></i>';
    } else {
        this.innerHTML = '<i class="fa-duotone fa-regular fa-x"></i>';
    }
    navMenu.classList.toggle('show');
});
// Show preloader for 1 minute before showing the main website
setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
}, 4000); // 60 seconds





 
// menu style
    // Cart Storage
    let cart = [];

    function addToCart(item, price) {
        cart.push({ item, price });
        updateCart();
    }
    
    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let totalPrice = document.getElementById("total-price");
        cartList.innerHTML = "";
        let total = 0;
    
        cart.forEach((product, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${product.item} - $${product.price.toFixed(2)} 
                <button onclick="removeFromCart(${index})">X</button>`;
            cartList.appendChild(listItem);
            total += product.price;
        });
    
        totalPrice.innerText = total.toFixed(2);
    }
    
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }
    
    function placeOrder() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
    
        
        
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