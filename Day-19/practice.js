console.log(`Day 19 - 40 Days of JavaScript - JavaScript Events\n`);

//event form button element's onclick attribute 
function onclickAttribute(args) {
  console.log(`Event occurs from onclick attribute and it passes the argument: ${args} `);
}

//property type onclick event has a drawback, can not be redeclared with different handler function
const btn2Elem = document.getElementById("btn2");
btn2Elem.onclick = function() {
  console.log("Btn 2 clicked");  
}
btn2Elem.onclick = function() {
  console.log("Btn 2 clicked again");  
}

//in case of attache a different handller function rather than anonymous function
const btn3Elem = document.getElementById("btn3");
btn3Elem.onclick = () => onclickAttribute('hola');

//addEventListener event
const countBtn = document.getElementById("countBtn");
let count = 0;

const handleCount = () => {
  console.log(`Counter Incremented: ${count}`);
  count++;
}

const greetMe = () => {
  console.log("Greet me!");
}

//rather than anonymous function separate function has been attached so that removeEventListener gets the function identical to work

countBtn.addEventListener("click", handleCount);

//adding another function to the same event
countBtn.addEventListener("click", greetMe);

//removeEventListener will not execute handleCount simultaneously
countBtn.removeEventListener("click", handleCount);

// Event bubbling : event flow goes form bottom to top or child to parent
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", e => {
  console.log("Grand parent event occur");
});
parent.addEventListener("click", e => {
  console.log("Parent event occur");
});
child.addEventListener("click", e => {
  console.log("Child event occur");
});

//Event capturing: event flows from top to bottom or parent to child. By default event capturing is disabled. it can be enabled by giving third parameter in addEventListener method.

grandParent.addEventListener("click", e => {
  console.log("Grand parent event occur");
}, true);
parent.addEventListener("click", e => {
  console.log("Parent event occur");
}, true);
child.addEventListener("click", e => {
  console.log("Child event occur");
}, true);

//Event propagation: 
document.getElementById("anotherParent").addEventListener("click", e => {
  console.log("Another parent");
});

document.getElementById("anotherChild").addEventListener("click", e => {
  e.stopPropagation();
  console.log("Another child");
});

//Event delegation:
document.getElementById("myList").addEventListener("click", e => {
  if(e.target.tagName = "LI") {
    console.log(e.target.innerText);
  }
})

// DOM content loaded: this event occur when the page is being loaded.
document.addEventListener("DOMContentLoaded", e => {
  console.log("DOM content loaded", e.target);
});

//Custom event: 

//Step 1: Create a custom event
const myEvent = new CustomEvent("isLoggedIn", {
  detail: {
    name: "Azlan",
    age: 2
  }
});

//Step 2: Listen to the custom event 
document.addEventListener("isLoggedIn", e => {
  console.log(e.detail);
});

//Step 3: Dispatch the event
document.dispatchEvent(myEvent);


function getUser(username) {
  
  const event = new CustomEvent("userLoggedIn", {
    detail: {
      username,
      role: "admin"
    }
  });
  document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
  document.getElementById("welcome-message").innerText = `Welcome ${e.detail.username}!` ;
});




