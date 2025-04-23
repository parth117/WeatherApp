const apiKey = "b8a66250ad57ec873872a86717f03d4c";

document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherDetails").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherDetails").innerHTML = `<p>City not found!</p>`;
        });
});