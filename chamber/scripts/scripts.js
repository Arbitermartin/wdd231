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
// document.addEventListener("DOMContentLoaded", () => {
//     const apiKey = "5b3291052d247203061e2d1a39639fb2"; // Your OpenWeatherMap API key
//     const city = "Dar es Salaam"; // Target city
//     const units = "metric"; // Use "metric" for Celsius

//     const currentWeatherEl = document.getElementById("weather-details");
//     const forecastEl = document.getElementById("forecast-details");

//     // Fetch current weather
//     async function fetchCurrentWeather() {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch current weather");
//             }
//             const data = await response.json();

//             currentWeatherEl.innerHTML = `
//                 <p><strong>${Math.round(data.main.temp)}°C</strong></p>
//                 <p>${data.weather[0].description}</p>
//                 <p>High: ${Math.round(data.main.temp_max)}°C</p>
//                 <p>Low: ${Math.round(data.main.temp_min)}°C</p>
//                 <p>Humidity: ${data.main.humidity}%</p>
//                 <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
//                 <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
//             `;
//         } catch (error) {
//             currentWeatherEl.innerHTML = `<p>Unable to fetch current weather data. Please try again later.</p>`;
//             console.error(error);
//         }
//     }

//     // Fetch weather forecast
//     async function fetchWeatherForecast() {
//         const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch weather forecast");
//             }
//             const data = await response.json();

//             const forecastHTML = data.list.slice(0, 3).map((item) => {
//                 const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
//                     weekday: "long",
//                 });
//                 return `
//                     <p>${day}: <strong>${Math.round(item.main.temp)}°C</strong></p>
//                 `;
//             }).join("");

//             forecastEl.innerHTML = forecastHTML;
//         } catch (error) {
//             forecastEl.innerHTML = `<p>Unable to fetch weather forecast data. Please try again later.</p>`;
//             console.error(error);
//         }
//     }

//     // Call the functions
//     fetchCurrentWeather();
//     fetchWeatherForecast();
// });



// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;