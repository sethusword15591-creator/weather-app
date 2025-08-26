  function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "da36977bbb5d200a0cd01f223ba7c120";
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${city}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200) {
            const name = data.name;
            const temp = data.main.temp;
            const condition = data.weather[0].description;

            document.getElementById("weatherresult").innerHTML = `
              <h3>${name}</h3>
              <p>🌡️ Temperature: ${temp}°C</p>
              <p>☁️ Condition: ${condition}</p>
            `;
          } else {
            document.getElementById("weatherResult").innerHTML = "❌ City not found.";
          }
        })
        .catch(error => {
          document.getElementById("weatherResult").innerHTML = "⚠️ Error fetching data.";
        });
    }