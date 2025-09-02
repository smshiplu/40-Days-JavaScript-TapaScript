console.log(`Debounced Live Character Counter
  Build a character counter for a \`<textarea>\` that updates the live character count only after the user pauses typing for 500ms.

- ✅ Use debounce
- ✅ UI should display: “Characters typed: X”
- ✅ Bonus: Warn if character count exceeds 200
\n`);
console.log(`Ans:`);

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

const doCount = (e) => {
  const query = e.target.value;
  countCharacter(query);
}

const debounceSearch = debounce((e) => {
  const query = e.target.value;
  countCharacter(query);
}, 500)

document.getElementById("textarea").addEventListener("input", debounceSearch);


