const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
]

const searchFormEl = document.querySelector(".search-form");
const searchInput = document.querySelector("#search");
const clearBtn = document.querySelector("#clear-btn");
const accordionCardsEl = document.querySelector(".accordion-cards");
const warningEl = document.querySelector(".warning");

const previousSearch = localStorage.getItem("tapaScriptDay21ProjectRecipeFinderApp") || null;

function recipeFinder() {
  //prefill search input with localStorage value
  searchInput.value = previousSearch;

  //insert recipe from recipes array
  recipes.forEach(recipe => {
    accordionCardsEl.innerHTML += generateTemplate(recipe);
  });

  //accordion show/hide toggle
  const cardTitles = document.querySelectorAll(".card .title");
  cardTitles.forEach((title, index) => {
    index === 0 ? title.parentElement.classList.add("show") : title.parentElement.classList.remove("show");
    title.onclick = () => title.parentElement.classList.toggle("show");
  });

  //search recipe by keyup
  searchInput.addEventListener("keyup", e => {
    const searchTerm = e.target.value.toLowerCase();
    searchRecipe(searchTerm);
  });

  //search recipe by form submit with prefill value of search input
  searchFormEl.addEventListener("submit", e => {
    e.preventDefault();
    if(!e.target.search.value.trim()){
      e.target.search.focus = true;
      return;
    } 

    const searchTerm = e.target.search.value.toLowerCase();
    searchRecipe(searchTerm);
  });

}

function searchRecipe(searchTerm) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const titleText = card.firstElementChild.innerText.toLowerCase();
    
    if(titleText.includes(searchTerm)) {
      card.classList.add("found");
      card.style.display = "flex";

      //if search found items then store search terms in localStorage
      localStorage.setItem("tapaScriptDay21ProjectRecipeFinderApp", searchTerm)
    } else {
      card.style.display = "none";
      card.classList.remove("found");
    }
  });

  //if no recipe found show warning
  const cardFound = document.querySelectorAll(".card.found");
  if(cardFound.length < 1) {
    warningEl.innerText = `⚠ No Recipe Found !`;
  } else {
    warningEl.innerText = ""
  }

  // clear search
  clearBtn.addEventListener("click", e => {
    cards.forEach(card => {
      card.style.display = "flex";
      warningEl.innerText = "";
    })
  });
}

function generateTemplate(recipe) {
  return `
    <div class="card">
      <h2 class="title">${recipe.title}</h2>
      <div class="content">
        <dl class="ingredient">
          <dt>Ingredient:</dt>
          <dd>${recipe.ingredients.join(", ")}</dd>
        </dl>
        <dl class="instructions">
          <dt>Instructions:</dt>
          <dd>${recipe.instructions}</dd>
        </dl>
      </div>
    </div>
  `;
}

recipeFinder();
