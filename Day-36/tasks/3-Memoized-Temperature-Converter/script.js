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