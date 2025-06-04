console.log(`Day 20 - 40 Days of JavaScript - Advanced DOM Tips and Tricks
\n`);

//Efficient DOM traversal
const parent = document.querySelector(".card");
const firstChild  = parent.firstElementChild;
console.log("First Child", firstChild);
const nextSibling = firstChild.nextElementSibling;
console.log("Next Sibling", nextSibling);
const lastChild = parent.lastElementChild;
console.log("Last Child", lastChild);

//Templates and cloning
const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "DOM Advance Topic";
clone.querySelector(".desc").textContent = "This is absolutely new thing to learn";

document.body.appendChild(clone);

//Document fragment
// - Not part of the main DOM tree until you insert it
// - Acts like a temporary container
// - Great for building chunk of DOM before adding them

const fragment = document.createDocumentFragment();
for (let index = 0; index < 3; index++) {
  const li = document.createElement("li");
  li.textContent = `Item ${index}`;
  fragment.appendChild(li);
}
document.getElementById("list").appendChild(fragment);

// Rang
const para = document.getElementById("para");

const rang = document.createRange();

rang.setStart(para.firstChild, 6); //After "Hello "
rang.setEnd(para.childNodes[2], 4);

const content = rang.cloneContents();
console.log(content);

//Shadow DOM
const shadowDOMHost = document.querySelector("#shadowDOMHost");
const shadow = shadowDOMHost.attachShadow({mode: "open"});
shadow.innerHTML = `<style>p {color: red}</style><p>This para is created using shadow DOM</p>`;

// Handling Large-Scale DOM Updates

function addItem(count) {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index++) {
    const div  = document.createElement("div");
    div.innerText = `Item ${index}`;
    fragment.appendChild(div)
  }
  document.body.appendChild(fragment);
}
addItem(1000);

//Mutation Observer
// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config)

const target = document.getElementById("watchMe");

const observer = new MutationObserver((mutationList, observer) => {
  
  for (const mutation of mutationList) {
    console.log(`Type of Mutation: ${mutation.type}`);

    if(mutation.type === "childList") {
      console.log(`A child node was added or removed`);
    }

    if(mutation.type === "attributes") {
      console.log(`A attribute ${mutation.attributeName} was changed`);
    }

    if(mutation.type === "characterData") {
      console.log(`Text content changed to: ${mutation.target.data}`);
    }
  }
});

const config = {
  subtree: true,
  childList: true,
  attributes: true,
  characterData: true
}
observer.observe(target, config);

function changeMe() {
  target.innerText = "I am changed para";
  target.setAttribute("data-id", "1");
}

