
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

function handleScroll() {
  const scrollY = window.scrollY;
  document.getElementById("tracker").textContent = `Scroll Y: ${scrollY}`;
  console.log(`Scroll Event fired at ${new Date().toLocaleTimeString()}`);
}

const throttledScroll = throttle(handleScroll, 500);

// window.addEventListener("scroll", handleScroll) // non optimized scroll

window.addEventListener("scroll", throttledScroll) // optimized scroll with throttling technique