console.log(`Throttled Window Resize Logger
  Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.

- ✅ Use throttle
- ✅ Show current width × height on screen
- ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)
\n`);

console.log(`Ans:`);

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

/*const doResize = (e) => {
  const height = e.target.innerHeight;
  const width = e.target.innerWidth;

  const showResultEl = document.getElementById("showResult");

  showResultEl.innerText = `
    Window Size:${width} X ${height}
    ${width >= 1366 ? "Desktop screen width" : (width >= 768 && width <= 1024) ? "Tablet screen width" : (width >= 360 && width <= 412) ? "Mobile screen width": "" }
  `;
}*/

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