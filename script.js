function getWeather() {
  const apiKey = "YOU KEY API";
  const city = document.getElementById("city").value;
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    });
}

function displayWeather(data) { 
let  card = document.querySelector('.card');
card.innerHTML='';

if (data.cod === "404" || data.cod === '400') {
  card.innerHTML = `<p class="city">${data.message}</p>`
} else {
  const cityName = data.name;
  const temperature = Math.round(data.main.temp - 273.15); //change to celsius
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  const min = Math.round(data.main.temp_min - 273.15); //change to celsius
  const max = Math.round(data.main.temp_max - 273.15); //change to celsius
  card.innerHTML=`
  <p class="city">${cityName}</p>
  <p class="weather">${description}</p>
  <img id="weather-icon" src="${iconUrl}" alt="${description}" />
  <p class="temp">${temperature}°C</p>
  <div class="minmaxContainer">
    <div class="min">
      <p class="minHeading">Min</p>
      <p class="minTemp">${min}°C</p>
    </div>
    <div class="max">
      <p class="maxHeading">Max</p>
      <p class="maxTemp">${max}°C</p>
    </div>
  </div>
  `
}
}