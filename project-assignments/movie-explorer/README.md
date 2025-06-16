# Project Movie Explorer 

- Project assignment for the Day 24: Master JavaScript async/await & Simplify Promises Like a PRO

```js
async function movieExplorer (searchTerm) {
  try {
    hideResult();
    hideErrorMessage();
    showLoading();

    const response = await fetch(`http://www.omdbapi.com/?apikey=9a1d9a6a&s=${searchTerm}`);

    if (!response.ok) {
      hideResult();
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    
    if(data?.Response === "False") {
      hideResult();
      throw new Error(`⚠ ${data.Error}`);
    } 
    displayResult(data.Search, searchTerm);

  } catch (error) {
    console.error(error); 
    hideResult();
    showErrorMessage(error);

  } finally {
    hideLoading();
  }
}

function hideResult() {
  document.getElementById("resultFor").innerText = "";
  document.getElementById("result-cards").innerHTML = "";
}

function displayResult(data, searchTerm) {
  const resultCards = document.getElementById("result-cards");

  document.getElementById("resultFor").innerText = `Result For:'${searchTerm}'`

  data.forEach(async (movie) => {
    const response = await fetch(movie.Poster);
    
    resultCards.innerHTML += `
      <div class="card">
        <img src="${response.ok ? movie.Poster : './backup.jpg'}" alt="${movie.Title}">
        <div class="title-desc">
          <h2 class="title">${movie.Title}</h2>
          <div class="desc">
            <p><strong>Release:</strong> ${movie.Year}</p>
            <p><strong>Type:</strong> ${movie.Type}</p>
          </div>
        </div>
      </div> 
    `
  })
}

function  hideErrorMessage() {
  document.getElementById("errMsg").innerText = ``;
}

function  showErrorMessage(error) {
  document.getElementById("errMsg").innerText = `${error.message}`;
}

function hideLoading() {
  document.getElementById("loading").innerText = "";
}

function showLoading() {
  document.getElementById("loading").innerText = `⏳ Loading...`;
}

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const searchTerm = e.target.search.value.trim().toLowerCase();
  if(!searchTerm) return; 

  movieExplorer(searchTerm);
})
```