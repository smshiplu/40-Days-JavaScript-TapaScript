const formElem = document.querySelector("#searchForm");
let storageData = JSON.parse(localStorage.getItem("county-explorer-data")) || [];
let map;

formElem.addEventListener("submit", e => {
  e.preventDefault(); 

  const country = e.target.search.value.trim().toLowerCase();
  fetchCountry(country);
});

async function fetchCountry(name) {
  showHideError(false);
  showHideLoading(true);
  document.getElementById("content").classList.replace("block", "hidden");
  document.getElementById("map").classList.replace("block", "hidden");

  try {
    if(!name) {
      throw new Error("Enter a valid country name!");
    }

    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    
    if(!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    const country =  data[0];

    renderContent(country);
    
  } catch(err) {
    showHideError(true, err);
  } finally {
    showHideLoading(false);
  }

}

function renderContent(country) {
  document.getElementById("content").classList.replace("hidden", "block");
  generateTemplate(country);

  showActionBtn(country);
  document.getElementById("saveBtn").addEventListener("click", () => { saveCountry(country) });
  document.getElementById("removeBtn").addEventListener("click", () => { removeCountry(country) });

  updateTimeZones(country?.timezones);
  showMap(country?.latlng, country?.name?.official);
}

function generateTemplate(country) {
  document.getElementById("info").innerHTML = "";

  document.getElementById("info").innerHTML = `
    <img class="w-96 contain-content" src="${country?.flags?.svg}" alt="${country?.name?.official}">
    <h2 class="text-2xl font-extrabold my-4">${country?.name?.official}</h2>
    <p><b>Region:</b> ${country?.region}</p>
    <p><b>Capital:</b> ${country?.capital}</p>
    <p><b>Population:</b> ${country?.population.toLocaleString()}</p>
    <p><b>Language(s):</b> ${Object.values(country?.languages).join(", ")}</p>
    <p><b>Local Time(s):</b> 
      <ul id=timezoneList></ul>
    </p>
  `;
}

function showHideError(boolean, err) {
  const toastMessageElem = document.getElementById("toastMessage");
  const messageElem  = document.querySelector(".message");
  if(boolean) {
    toastMessageElem.classList.replace("hidden", "flex");
    err && err.message ?  messageElem.innerText = err.message : messageElem.innerText = "No country found!"
  } else {
    toastMessageElem.classList.replace("flex", "hidden");
    messageElem.innerText = ""
  }
}

function showHideLoading(boolean) {
  boolean ? document.getElementById("loading").classList.remove("hidden") : document.getElementById("loading").classList.add("hidden") 
}

function updateTimeZones(timezones){
  const timezoneListElem = document.getElementById("timezoneList");
  timezoneListElem.innerHTML = "";

  timezones.forEach(tz => {
    const li = document.createElement("li");
    const localTime = getTimeUsingIntl(tz);
    li.textContent = `${tz} - ${localTime}`;

    timezoneListElem.appendChild(li);
  });
}

function getTimeUsingIntl(tz) {
  try {
    const options = {
      timeZone: convertToIANA(tz),
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }
    return Intl.DateTimeFormat("en-US", options).format(new Date())
  } catch (err) {
    console.warn(`Timezone ${tz} not supported, falling back!`);
    return "Unsupported timezone";
  }
}

function convertToIANA(utcString) {
  // Basic support for known UTC formate
  if(utcString === "UTC") return "Etc/UTC";

  const match = utcString.match(/^UTC([+-]\d{2}):(\d{2})$/);
  if(match) {
    const [, hour, min] = match;
    // Convert UTC offset to Etc/GMT format (note reverse sign for IANA)
    const offset = parseInt(hour, 10);
    const sign = offset < 0 ? "+" : "-";
    return `Etc/GMT${sign}${Math.abs(offset)}`; // IANA flips signs
  }
}

function showMap(latlng, name) {
  document.getElementById("map").classList.replace("hidden", "block")
   const [lat, lng] = latlng;
  if(!map) {
    map = L.map('map').setView([lat, lng], 13);
  } else {
    map.setView([lat, lng], 13);
  }

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map).bindPopup(`<b>${name}</b>`).openPopup();
}

function showActionBtn(country) {
  const findObject = storageData.find(obj => obj.name.official === country.name.official);
  
  const shouldSave = !findObject ? true : false;
  
  if(shouldSave) {
    showSaveBtn();
  } else {
    showRemoveBtn();
  }
}

function showSaveBtn() {
  document.getElementById("removeBtn").classList.replace("flex", "hidden");
  document.getElementById("saveBtn").classList.replace("hidden", "flex");
}

function showRemoveBtn() {
  document.getElementById("saveBtn").classList.replace("flex", "hidden");
  document.getElementById("removeBtn").classList.replace("hidden", "flex");
}

function saveCountry(country) {  
  
  const findObject = storageData.find(obj => obj.name.official === country.name.official);
  if(findObject) return ;

  storageData.push(country);
  localStorage.setItem("county-explorer-data", JSON.stringify(storageData));
  showRemoveBtn();
}

function removeCountry(country) {
  const findObject = storageData.find(obj => obj.name.official === country.name.official);
  if(!findObject) return ;

  storageData.splice(storageData.indexOf(findObject), 1)
  localStorage.setItem("county-explorer-data", JSON.stringify(storageData));
  showSaveBtn();
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");

  const ulElem = document.getElementById("countryList");
  ulElem.innerHTML = "";

  if(!storageData || storageData.length < 1) {
    ulElem.innerHTML = `<li class="text-center">⚠ No saved country found!</li>`;

  } else {

    storageData.forEach((country) => {
      const li = document.createElement("li");
      li.setAttribute("class", "my-2 px-4 border rounded-sm dark:border-gray-600 border-gray-200 hover:bg-gray-800 hover:text-white");

      const btn = document.createElement("button");
      btn.textContent = country.name.official;
      btn.setAttribute("class", "py-2 cursor-pointer text-left w-full ");

      btn.onclick = () => {
        //Display by fetch (online);
        // fetchCountry(country?.name.common);

        //Display from Local Storage (offline);
        renderContent(country);
        
        closeModal();
      }

      li.appendChild(btn);
      ulElem.appendChild(li);
    });
  }

  
  
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function darkModeToggle() {
  const storageValue = JSON.parse(localStorage.getItem("country-explorer-dark"));
  
  if(storageValue) {    
    showMoon();
    document.documentElement.classList.remove("dark");
    localStorage.setItem("country-explorer-dark", JSON.stringify(false));

  } else {
    showSun();
    document.documentElement.classList.add("dark");
    localStorage.setItem("country-explorer-dark", JSON.stringify(true));
  }
}

function showMoon() {
  document.getElementById("moon").classList.replace("hidden", "inline-block");
  document.getElementById("sun").classList.replace("inline-block", "hidden");
}

function showSun() {
  document.getElementById("moon").classList.replace("inline-block", "hidden");
  document.getElementById("sun").classList.replace("hidden", "inline-block");
}


function initialDarkMode() {
  const storageValue = JSON.parse(localStorage.getItem("country-explorer-dark"));
  
  if(storageValue) {
    document.documentElement.classList.add("dark");
    showSun();
  } else {
    document.documentElement.classList.remove("dark");
    showMoon();
  }
}
initialDarkMode();
