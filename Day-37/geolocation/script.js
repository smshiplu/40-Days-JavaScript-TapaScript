const getLocation = document.getElementById("getLocation");
const output = document.getElementById("output");

getLocation.addEventListener("click", () => {

  if(!navigator.geolocation) {
    console.warn(`Geo location is not supported by your browser`);
    output.textContent = `Geo location is not supported by your browser`;
    return;
  }

  output.textContent = `📡 Location...`;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log( latitude, longitude );
      
      output.innerHTML = `
        Latitude: ${latitude.toFixed(5)} <br/>
        Longitude: ${longitude.toFixed(5)} <br/>

        <a href="https://google.com/maps?q=${latitude},${longitude}" target="_blank">Open Location in Google Map</a>
      `;
    },

    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          output.textContent = `Permission is denied!`;
          break;
        case error.POSITION_UNAVAILABLE:
          output.textContent = `Position is unavailable`;
          break;
        case error.TIMEOUT:
          output.textContent = `Request timed out!`;
          break;

        default:
          output.textContent = `Unknown error!`;
          break;
      }
    }
  );

})