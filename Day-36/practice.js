console.log(`Day 36 - JavaScript Performance Optimization Techniques\n`);


// Debouncing: The programming technique that limits the rate of a function execution and ensures the function is called or executed after a certain delay has passed since the last time the function was called

function debounce(fn, delay = 500) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}


// Throttling: Throttling is another performance optimization technique. It limits that how often a function is executed/called over a time or a specified time

function throttling(fn, interval) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if(now - lastTime >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  }
}

// Memoization
  // caching
  // cache the result of an expensive or heavy operation and return the cached result when the same input is given in the future

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

function squareNumber(number) {
  console.log(`Computing square of ${number}`);
  return number * number;
}

const memoizedSquareNumber = memoize(squareNumber);

memoizedSquareNumber(5); // cache miss
memoizedSquareNumber(5); // cache hit
memoizedSquareNumber(6); // cache miss
memoizedSquareNumber(5); // cache hit



// Memory leakL: JS retains memory that's no longer needed
