const toggleBtn = document.getElementById("toggleBtn");
const themeStatus = document.getElementById("themeStatus");

const savedTheme = localStorage.getItem("theme") || "light";

document.body.className = savedTheme;
themeStatus.innerText = `Current Theme: ${capitalize(savedTheme)}`;

toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.className === "light" ? "dark" : "light";

  localStorage.setItem("theme", newTheme);
  document.body.className = newTheme;
  themeStatus.innerText = `Current Theme: ${capitalize(newTheme)}`;
})


function capitalize(str) {
  const [firstLetter, ...rest] = str.split("");
  return firstLetter.toUpperCase() + rest.join("");
}
