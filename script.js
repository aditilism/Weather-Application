const apiKey = '199437d7d1e98e368021b99af74d71de';  // Replace with your OpenWeatherMap API key

async function getWeather() {
    const location = document.getElementById('location').value;
    const weatherInfoDiv = document.getElementById('weather-info');
    
    if (!location) {
        weatherInfoDiv.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            weatherInfoDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        weatherInfoDiv.innerHTML = `<p>Failed to fetch weather data</p>`;
    }
}
