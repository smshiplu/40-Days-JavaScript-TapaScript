const queryWeather = async (city) => {
  try {
    hideError();
    showLoading();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb46adf4cc74baff64aecc1760101824&units=metric`);

    if(!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    displayWeather(data);
    
  } catch (error) {
    console.log(error);
    showError(error);

  } finally {
    hideLoading();
  }
}
queryWeather("Dhaka");
document.querySelector(".search-form").addEventListener("submit", e => {
  e.preventDefault();
  const cityName = e.target.cityName.value.trim();
  queryWeather(cityName)
})

function showLoading() {
  document.querySelector(".loading").innerText = "⌛ Loading..."
}

function hideLoading() {
  document.querySelector(".loading").innerText = ""
}

function displayWeather(data) {  
  document.querySelector(".result").innerHTML = `
    <div class="location-time">
        <h2><span class="icon">📍</span> ${data.name}</h2>
        <p class="date-time">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
      </div>
      <div class="weather">
        <div class="temperature">
          <div class="img-temp">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
            <p class="temp">${data.main.temp}<sup class="unit-large">°C</sup></p>
          </div>
          <p class="feels-like">Feels like ${data.main.feels_like}<sup class="unit-small">°C</sup></p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Condition</td>
              <td>:</td>
              <td>${data.weather[0].description}</td>
            </tr>
            <tr>
              <td>Minimum</td>
              <td>:</td>
              <td>${data.main.temp_min}<sup class="unit-small">°C</sup></td>
            </tr>
            <tr>
              <td>Maximum</td>
              <td>:</td>
              <td>${data.main.temp_max}<sup class="unit-small">°C</sup></td>
            </tr>
          </tbody>
        </table>
    </div>
  `;
}

function showError(error) {
  document.querySelector(".result").innerHTML = `<p style="color:red; text-align:center">${error.message}</p>`
}

function hideError() {
  document.querySelector(".result").innerHTML = "";
}


