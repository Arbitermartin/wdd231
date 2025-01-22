// TOGGLE BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const navMenu = document.getElementById("navMenu");

    // Toggle the visibility of the nav menu
    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

// for my country weather
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "5b3291052d247203061e2d1a39639fb2"; // Your OpenWeatherMap API key
    const city = "Dar es Salaam"; // Target city
    const units = "metric"; // Use "metric" for Celsius

    const currentWeatherEl = document.getElementById("weather-details");
    const forecastEl = document.getElementById("forecast-details");

    // Fetch current weather
    async function fetchCurrentWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch current weather");
            }
            const data = await response.json();

            currentWeatherEl.innerHTML = `
                <p><strong>${Math.round(data.main.temp)}°C</strong></p>
                <p>${data.weather[0].description}</p>
                <p>High: ${Math.round(data.main.temp_max)}°C</p>
                <p>Low: ${Math.round(data.main.temp_min)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            `;
        } catch (error) {
            currentWeatherEl.innerHTML = `<p>Unable to fetch current weather data. Please try again later.</p>`;
            console.error(error);
        }
    }

    // Fetch weather forecast
    async function fetchWeatherForecast() {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch weather forecast");
            }
            const data = await response.json();

            const forecastHTML = data.list.slice(0, 3).map((item) => {
                const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                });
                return `
                    <p>${day}: <strong>${Math.round(item.main.temp)}°C</strong></p>
                `;
            }).join("");

            forecastEl.innerHTML = forecastHTML;
        } catch (error) {
            forecastEl.innerHTML = `<p>Unable to fetch weather forecast data. Please try again later.</p>`;
            console.error(error);
        }
    }

    // Call the functions
    fetchCurrentWeather();
    fetchWeatherForecast();
});

// member style
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");
  
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
          <p><strong>Website:</strong> <a href="https://${member.url}" target="_blank">${member.url}</a></p>
          <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;
        container.appendChild(memberDiv);
      });
    }
  
    // Toggle view
    gridViewBtn.addEventListener("click", () => {
      container.className = "grid-view";
    });
  
    listViewBtn.addEventListener("click", () => {
      container.className = "list-view";
    });
  
    fetchMembers();
  });
  
  document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");
  
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
                <img src="../chamber/images/${member.image}" alt="${member.name}" onerror="this.src='fallback-image.jpg'">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="https://${member.url}" target="_blank">${member.url}</a></p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            `;
            container.appendChild(memberDiv);
        });
    }

    // Display members as table
    function displayMembersAsTable(members) {
        container.className = "list-view";
        container.innerHTML = `
            <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Membership Level</th>
                    </tr>
                </thead>
                <tbody>
                    ${members
                        .map(
                            member => `
                            <tr>
                                <td><img src="../chamber/images/${member.image}" alt="${member.name}" style="width: 50px; height: 50px; object-fit: cover;" onerror="this.src='fallback-image.jpg'"></td>
                                <td>${member.name}</td>
                                <td>${member.address}</td>
                                <td>${member.phone}</td>
                                <td><a href="https://${member.url}" target="_blank">${member.url}</a></td>
                                <td>${member.membershipLevel}</td>
                            </tr>`
                        )
                        .join("")}
                </tbody>
            </table>
        `;
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

    listViewBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("./data/members.json");
            const members = await response.json();
            displayMembersAsTable(members);
        } catch (error) {
            console.error("Error switching to list view:", error);
        }
    });

    fetchMembers();
});


// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;