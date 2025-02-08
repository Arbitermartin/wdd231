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
  


// JSON STYLE
 // Function to handle visit tracking and display appropriate message
 function handleVisitTracking() {
    // Get current date and time
    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    // Retrieve the last visit time from localStorage
    const lastVisitTime = localStorage.getItem('lastVisit');

    // Display message based on last visit
    const visitMessageElement = document.getElementById('visit-message');

    if (lastVisitTime) {
        const timeDifference = currentTime - lastVisitTime;
        const daysSinceVisit = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert ms to days

        // Show appropriate message based on the time difference
        if (daysSinceVisit === 0) {
            visitMessageElement.innerText = 'Back so soon! Awesome!';
        } else if (daysSinceVisit === 1) {
            visitMessageElement.innerText = `You last visited 1 day ago.`;
        } else {
            visitMessageElement.innerText = `You last visited ${daysSinceVisit} days ago.`;
        }
    } else {
        // First visit message
        visitMessageElement.innerText = 'Welcome! Let us know if you have any questions.';
    }

    // Store the current visit date
    localStorage.setItem('lastVisit', currentTime);
}

// Run the visit tracking function when the page loads
handleVisitTracking();

// Fetch the attraction data from the places.json file
fetch('./data/places.json')
    .then(response => response.json())
    .then(data => {
        // Dynamically populate the cards with the attraction data from JSON
        const mainContainer = document.querySelector("main");
        data.places.forEach((attraction, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.gridArea = `card${index + 1}`;
            
            card.innerHTML = `
                <h2>${attraction.name}</h2>
                <figure>
                    <img src="${attraction.image}" alt="${attraction.name}">
                </figure>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button>Learn More</button>
            `;
            mainContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching the attractions data:", error);
    });

// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;