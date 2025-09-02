console.log(`7. Performance Race: Debounce vs Throttle vs Memoization

Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).

✅ Compare:

- Number of function calls
- Time taken
- Smoothness of UI

✅ Display performance metrics live\n`);

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
