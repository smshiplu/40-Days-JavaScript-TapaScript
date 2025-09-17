console.log(`## 3. DOM Leak Detection and Fix

Learn how DOM elements and closures can create memory leaks.

- Create a button using JavaScript
- Add an event listener that references a variable outside the listener
- Remove the button from the DOM, but not the event listener

Identify the leak & fix it.\n`);

const createBtn = document.getElementById("createBtn");
const container = document.getElementById("container");

const outsideData = {message: "Hello World!"}

createBtn.addEventListener("click", () => {
  
  const btn = document.createElement("button");
  btn.innerText = "Click me";
  container.appendChild(btn);

  // event listener referencing outside variable
  function handleClick() {
    console.log(outsideData.message);
  }

  btn.addEventListener("click", handleClick);

  // Simulate removal from DOM without removing listener
  setTimeout(() => {
    // Event listener still exists in memory due to closure over outsideData
    container.removeChild(btn);
    console.log("Button removed from DOM. Event listener still exists in memory due to closure over outsideData");

    setTimeout(() => {
      btn.removeEventListener("click", handleClick);
      console.log("Eventlistener Removed");
    }, 3000)
  }, 3000);
})