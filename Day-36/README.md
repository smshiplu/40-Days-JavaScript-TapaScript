# Day 36 - JavaScript Performance Optimization Techniques

## **🎯 Goal of This Lesson**

- ✅ Important Updates
- ✅ What is Performance?
- ✅ Debouncing in JavaScript
- ✅ Throttling in JavaScript
- ✅ Memoization in JavaScript
- ✅ Memory Leak in JavaScript
- ✅ DOM Performance
- ✅ Over Optimization
- ✅ Before We End

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>


## ✅ 1. Debounced Live Character Counter

Build a character counter for a `<textarea>` that updates the live character count only after the user pauses typing for 500ms.

- ✅ Use debounce
- ✅ UI should display: “Characters typed: X”
- ✅ Bonus: Warn if character count exceeds 200

<br/>

### ✔ Solutions

#### 📝 HTML
```html
  <p id="showCount">Characters typed: X</p>
  <textarea id="textarea" cols="50" rows="10"></textarea>
```

#### 📝 JS
```js
function debounce(fn, delay=500) {
  let timer; 
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

function countCharacter(query) {
  if (!query.trim()) return;

  const showCountEl = document.getElementById("showCount");
  showCountEl.innerText = `
    Characters typed: ${query.length}
    ${query.length > 200 ? "Exceeded character limit: 200" : ""}
  `;
}

const debounceSearch = debounce((e) => {
  const query = e.target.value;
  countCharacter(query);
}, 500)

document.getElementById("textarea").addEventListener("input", debounceSearch);
```

<br/><br/>

## ✅ 2. Throttled Window Resize Logger

Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.

- ✅ Use throttle
- ✅ Show current width × height on screen
- ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)

<br/>

### ✔ Solutions

#### 📝 HTML
```html
<div id="showResult">Window Size: </div>
```

#### 📝 JS
```js
function throttle(fn, interval=500){
  let lastCall = 0;

  return function(...args) {
    const now  = Date.now();

    if(now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  }
}

const throttleReResize = throttle((e) => {
  const height = e.target.innerHeight;
  const width = e.target.innerWidth;

  const showResultEl = document.getElementById("showResult");

  showResultEl.innerText = `
    Window Size:${width} X ${height}
    ${width >= 1366 ? "Desktop screen width" : (width >= 768 && width <= 1024) ? "Tablet screen width" : (width >= 360 && width <= 412) ? "Mobile screen width": "" }
  `;
}, 250)

window.addEventListener("resize", throttleReResize);
```


<br/><br/>


## ✅ 3. Memoized Temperature Converter

Write a function to convert Celsius to Fahrenheit and vice versa.
Use memoization to cache previous conversions.

- ✅ Use memoize() wrapper
- ✅ Bonus: Add a counter to show how many times the real function runs

<br/>

### ✔ Solutions

#### 📝 HTML
```html
<div>
    <input type="number" id="celsiusValue" min="1" max="50" placeholder="Enter Celsius Temperature">
    <button id="convertCToF">Convert</button> = 
    <span id="showResult"> <strong>0°F</strong></span>
</div>
```

#### 📝 JS
```js
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}

function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    
    if(key in cache) {
      console.log(`Cached hit: ${key}`);
      return cache[key];
    } else {
      console.log(`Cache miss: ${key}`);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  }
}

const memoCelsiusToFahrenheit = memoize((celsius) => {
  const fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
})

function convertTemp() {
  const celsius = parseInt(document.getElementById("celsiusValue").value);
  
  const showResultEl = document.getElementById("showResult");

  const start = Date.now();
  console.log(start);

  const result = memoCelsiusToFahrenheit(celsius);
  console.log(result);
  
  const end = Date.now();
  console.log(end);

  showResultEl.innerHTML = `
    <strong>${result}°F 
    (⏰Time: ${(end - start)}ms) </strong>
  `;
}

document.getElementById("convertCToF").addEventListener("click", convertTemp)
```

<br/><br/>

## ✅ 4. Debounced API Search Simulation

Simulate a fetch to search GitHub users using a mock API.
Fire the search only when the user pauses typing for 600ms.

- ✅ Use debounce()
- ✅ Simulate delay with setTimeout()
- ✅ Bonus: Show loading spinner during wait

<br/>

### ✔ Solutions

#### 📝 HTML
```html
  <input type="search" id="search" placeholder="Search Github User...">
  <div class="output" id="output"></div>
  <pre>Search among these names  Bret, Antonette, Samantha, Karianne, Kamren, Leopoldo_Corkery, Elwyn.Skiles to get fulfilled response.</pre>
```

#### 📝JS
```js
async function fetchUser(query) {
  try {
    if(!query.trim()) return;
    
    const letters = query.split("")
    const [first, ...rest] = letters;
    const capitalizeName = first.toUpperCase() +  rest.join("");
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${capitalizeName}`);

    if(!response.ok) {
      throw new Error(`Error: No name found - ${response.status}`);
    }

    const users = await response.json();

    document.getElementById("output").innerHTML = "";
    users.forEach(async user => {
      console.log(`🔍 Found ${users.length} users for query "${query}":
      - ${user.username} (${user.name})`);
      
      document.getElementById("output").innerHTML = `
        <h3>🔍 Found ${users.length} users for query "${query}":</h3>
        <p><strong>- ${user.username} (${user.name})</strong></p>
      `;
    });
    
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}

function debounce(fn, delay=500) {
  let timer; 

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

const debounceSearchUser = debounce((e) => {
  const query = e.target.value;
  fetchUser(query);
}, 600);

document.getElementById("search").addEventListener("input", debounceSearchUser);
```

<br/><br/>

## ✅ 5. Cleanup Forgotten Event Listeners

Create a modal popup that registers keyboard events (Esc to close)
Ensure those listeners are properly cleaned up when the modal closes.

- ✅ Prevent memory leaks
- ✅ Bonus: Log to console when cleanup happens

<br/>

### ✔ Solutions

#### 📝 HTML
```html
<button id="openModal" onclick="openModal()">Open Modal</button>

<div class="modal-overlay hidden" id="modalOverlay">
    <div class="modal-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim officia rem laboriosam nemo autem voluptatibus quam explicabo. Excepturi sed rerum ipsum delectus unde adipisci cumque sapiente, provident possimus eos qui!</p>
        <button id="modalClose" onclick="closeModal()">Close</button>
    </div>
</div>
```

#### 📝JS
```js
const modalOverlay = document.getElementById("modalOverlay");

function handleKeydown(e) {
  if(e.key === "Escape") {
    closeModal();
  }
}

function handleOverlayClick(e) {
   if (e.target.classList.contains("modal-overlay")) {
    closeModal();
  }
}

function openModal() {
  modalOverlay.classList.remove("hidden");
  document.addEventListener("keydown", handleKeydown);
  modalOverlay.addEventListener("click", handleOverlayClick);
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalOverlay.removeEventListener("click", handleOverlayClick);
  document.removeEventListener('keydown', handleKeydown);
  console.log(`Modal overlay "click" and Escape "keydown" events are removed!`);
}
```

<br/><br/>

## ✅ 6. Profile and Optimize List Rendering

Render a list of 1,000 items with buttons to sort, filter, and shuffle.
Measure and optimize for performance.

- ✅ Use performance.now() or console.time()
- ✅ Use batching or virtual DOM-like diffing
- ✅ Bonus: Only update DOM for changed rows

<br/>

### ✔ Solutions

#### 📝 HTML
```html
<div>
    <button id="sortBtn" onclick="sortList(this)">Sort (Higher to Lower)</button>
    <button id="filterBtn" onclick="filterList(this)">Filter (Even)</button>
    <button id="shuffleBtn" onclick="shuffleList()">Shuffle</button>
    <button id="resetBtn" onclick="resetList()">Reset</button>
</div>

<p id="time"></p>

<ul id="listContainer"></ul>
```

#### 📝 JS
```js
const fullData = Array.from({length: 1000}, (_, i) => i + 1);
const listContainerEl = document.querySelector("#listContainer");
const timeEl = document.querySelector("#time");

let currentData = [...fullData];

let sortToggle = false;
let oddEvenToggle = false;

function sortList(e) {

  if(!sortToggle) {
    currentData = oddEvenToggle ?  currentData.filter(x => x % 2 === 0).sort( (a, b) => b - a) :currentData.filter(x => x % 2 !== 0).sort( (a, b) => b - a)

    renderList(currentData);
    sortToggle = true;
    e.innerText = "Sort (Lower to Higher)";

  } else {

    currentData = oddEvenToggle ?  currentData.filter(x => x % 2 === 0).sort((a, b) => a - b): currentData.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    renderList(currentData);
    sortToggle = false;
    e.innerText = "Sort (Higher to Lower)";
  }
}

function filterList(e) {
  currentData = [...fullData];

  if(!oddEvenToggle) {
    currentData = sortToggle ? 
      currentData.filter(item => item % 2 === 0).sort((a, b) => b - a) : 
      currentData.filter(item => item % 2 === 0).sort((a, b) => a -  b);
    renderList(currentData);
    e.innerText = `Filter (Odd)`;
    oddEvenToggle = true;
  } 
  
  else {
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
```


<br/><br/>


## ✅ 7. Performance Race: Debounce vs Throttle vs Memoization

Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).

✅ Compare:

- Number of function calls
- Time taken
- Smoothness of UI

✅ Display performance metrics live

### ✔ Solutions

#### 📝 HTML
```html
<select id="strategyChange" onchange="handleStrategyChange(this)">
    <option value="debounce">Debounce</option>
    <option value="throttle">Throttle</option>
    <option value="memoize">Memoize</option>
</select>

<input type="search" id="search" placeholder="Search Products..">

<div id="performanceMetrics"></div>

<ul id="displayProducts"></ul>
```

#### 📝 JS
```js
const strategyChange = document.querySelector("#strategyChange");
const searchEl = document.querySelector("#search");
const performanceMetrics = document.querySelector("#performanceMetrics");
const displayProductsEl = document.querySelector("#displayProducts");

const productList = Array.from({length: 10000}, (_,i) => `Product ${i +1}`);

const metrics = {
  strategy: "",
  calls: 0,
  startTime: 0,
  endTime: 0,
};

let strategy;

const searchProduct = (query) => {
  if(!query.trim()) return;

  const foundProducts = productList.filter(p => p.toLocaleLowerCase().includes(query));

  const fragment = document.createDocumentFragment();

  const p = document.createElement("p");
  p.innerText = `Showing result ${foundProducts.length} of ${productList.length}`;
  fragment.appendChild(p);
  
  foundProducts.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product;
    fragment.appendChild(li);
  });

  displayProductsEl.innerHTML = "";
  displayProductsEl.appendChild(fragment);
  displayPerformance()
}


// Strategy Implementations
// Debounce
function debounce(fn, delay=500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

//throttle
function throttle(fn, interval) {

  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if(now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  }
}

//memoize
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if(key in cache) {
      return cache[key]
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  }
}

function trackPerformance(fn) {
  metrics.calls = 0;
  return function (...args) {
    metrics.calls++;
    metrics.startTime = performance.now();
    fn.apply(this, args);
    metrics.endTime = performance.now();
  };
}

const displayPerformance = () => {
  performanceMetrics.innerHTML = "";
  performanceMetrics.innerHTML = `
    <p>Strategy: ${metrics.strategy}</p>
    <p>🔃Function call: ${metrics.calls}</p>
    <p>⌚Time Taken: ${(metrics.endTime - metrics.startTime).toFixed(2)}ms</p>
  `;
}

function handleStrategyChange(param) {
  strategy = arguments[0] !== null ?  param.value : param

  metrics.strategy = !strategy ? "DEBOUNCE" : strategy.toUpperCase();
  
  const debounceSearch = trackPerformance(debounce((event) => {
    const query = event.target.value;
    searchProduct(query);
  }, 500));

  const throttleSearch = trackPerformance(throttle((event) => {
    const query = event.target.value;
    searchProduct(query);
  }, 500));

  const memoSearch = trackPerformance(memoize((event) => {
    const query = event.target.value;
    searchProduct(query);
  }))

  if(strategy === "debounce" || "undefined") {
    searchEl.addEventListener("input", debounceSearch);
  } 
  else if(strategy === "throttle") {
    searchEl.addEventListener("input", throttleSearch);
  }
  else if(strategy === "memoize") {
    searchEl.addEventListener("input", memoSearch);
  }
  else {
    searchEl.addEventListener("input", debounceSearch);
  }
}
handleStrategyChange("debounce");
```

Please find the task assignments in the [Task File](./task.md).