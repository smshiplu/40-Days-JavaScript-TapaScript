console.log(`6. Profile and Optimize List Rendering

Render a list of 1,000 items with buttons to sort, filter, and shuffle.
Measure and optimize for performance.

- ✅ Use performance.now() or console.time()
- ✅ Use batching or virtual DOM-like diffing
- ✅ Bonus: Only update DOM for changed rows
\n`);

// const fullData = Array.from({length: 1000}, (_, i) => `${(i + 1)}`);
const fullData = Array.from({length: 1000}, (_, i) => i + 1);
const listContainerEl = document.querySelector("#listContainer");
const timeEl = document.querySelector("#time");

let currentData = [...fullData];

let sortToggle = false;
let oddEvenToggle = false;

function sortList(e) {

  if(!sortToggle) {
    // currentData.sort( (a, b) => b.localeCompare(a));
    // currentData.sort( (a, b) => b - a);
    currentData = oddEvenToggle ?  currentData.filter(x => x % 2 === 0).sort( (a, b) => b - a) :currentData.filter(x => x % 2 !== 0).sort( (a, b) => b - a)

    renderList(currentData);
    sortToggle = true;
    e.innerText = "Sort (Lower to Higher)";

  } else {

    // currentData.sort((a, b) => a.localeCompare(b));
    // currentData.sort((a, b) => a - b);
    currentData = oddEvenToggle ?  currentData.filter(x => x % 2 === 0).sort((a, b) => a - b): currentData.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    renderList(currentData);
    sortToggle = false;
    e.innerText = "Sort (Higher to Lower)";
  }
}

function filterList(e) {
  currentData = [...fullData];

  if(!oddEvenToggle) {
    // currentData = currentData.filter(item => item % 2 === 0);
    currentData = sortToggle ? 
      currentData.filter(item => item % 2 === 0).sort((a, b) => b - a) : 
      currentData.filter(item => item % 2 === 0).sort((a, b) => a -  b);
    renderList(currentData);
    e.innerText = `Filter (Odd)`;
    oddEvenToggle = true;
  } 
  
  else {
    // currentData = currentData.filter(item => item % 2 !== 0);
    currentData = sortToggle ? 
      currentData.filter(item => item % 2 !== 0).sort((a, b) => b - a) : 
      currentData.filter(item => item % 2 !== 0).sort((a, b) => a - b);
    renderList(currentData);
    e.innerText = `Filter (Even)`;
    oddEvenToggle = false;
  }
}

function shuffleList() {
  let currentIndex = currentData.length;
  let randomIndex;

  while(currentIndex !== 0) {
    currentIndex --;
    randomIndex = Math.floor(Math.random() * currentIndex);

    [currentData[currentIndex], currentData[randomIndex]] =  [ currentData[randomIndex], currentData[currentIndex]] 
  }
  renderList(currentData);
}

function resetList() {
  currentData = [...fullData];
  renderList(fullData);
  document.getElementById("sortBtn").innerText = `Sort (Higher to Lower)`;
  document.getElementById("filterBtn").innerText = `Filter (Even)`;
}

function renderList(data) {
  const start = performance.now();

  const fragment = document.createDocumentFragment();

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `Item ${item}`;
    fragment.appendChild(li);
  });

  listContainerEl.innerHTML = "";
  listContainerEl.appendChild(fragment);

  const end = performance.now();
  timeEl.innerText = `⌚ Rendered in ${(end - start).toFixed(2)} ms`;
}

renderList(fullData)
