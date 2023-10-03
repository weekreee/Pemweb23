document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "296fd23b688b0cd1dc5366ee4f03ea1d"; // Your OpenWeatherMap API key
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("city");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    searchBtn.addEventListener("click", function () {
        const city = cityInput.value.trim();
        if (city === "") {
            alert("Please enter a city name.");
            return;
        }


        fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = `Temperature: ${data.main.temp}°C`;
                    description.textContent = `Description: ${data.weather[0].description}`;
                } else {
                    alert("City not found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });
});
