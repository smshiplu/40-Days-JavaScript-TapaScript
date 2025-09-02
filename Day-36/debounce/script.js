const data = Array.from({length: 10000}, (_,i) => `Item ${i + 1}`);

function debounce(fn, delay=100) {
  let timer;

  return function(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

function searchArray(query) {
  console.log("Search executed", performance.now());
  
  const resultBox = document.getElementById("result");

  const filteredData = data.filter(item => item.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  
  if(!query.trim()) {
    resultBox.innerHTML = "";
    return;
  }

  const limitedData = filteredData.slice(0, 20) // first 20 item form filteredData

  resultBox.innerHTML = `
    <strong>Showing ${limitedData.length} of ${filteredData.length} result(s)</strong>
    <br/>
    <ul>
      ${limitedData.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}


const doSearch = (e) => {
  const query = e.target.value;
  searchArray(query);
}

const debounceSearch = debounce((e) => {
  const query = e.target.value;
  searchArray(query);
}, 500)

// document.getElementById("search").addEventListener("input", doSearch); // no debounce performance optimization

document.getElementById("search").addEventListener("input", debounceSearch); // search with performance optimization