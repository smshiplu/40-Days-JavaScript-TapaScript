# Day 38 - JavaScript Memory Management and GC

## **🎯 Goal of This Lesson**

- ✅ What are We Learning?
- ✅ Stack and Heap
- ✅ Reachability
- ✅ Reachability Tree
- ✅ With Simple Objects
- ✅ Cyclic Reference
- ✅ Double reference
- ✅ Mark & Sweep
- ✅ Task and Wrap Up

<br/>

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>

## ✅ 1. Identify Reachable vs Unreachable Objects

Write a small program where:

- You create an object user
- Create a second object profile that references user
- Then set user = null

Is the original user object still reachable? Why or why not?

<br/>

### ✔ Solutions:

```js
let user = {
  id: 1,
  name: "shiplu",
}

const profile = user;

user = null;

console.log(profile); // {id: 1, name: 'shiplu'}

// Explanations: Although the user variable is set to null, the variable profile still has the reference in the memory of that particular object. As long as the data has a reference to the variable, the garbage collector doesn't clear that data from the memory. That is something called "Reachable Theory." 
```

<br/><br/>

## ✅ 2. Simulate and Break a Cyclic Reference

Observe how cyclic references can cause memory retention.

- Create two objects a and b
- Make them reference each other (a.ref = b and b.ref = a)
- Nullify external references to both

Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps

<br/>

### ✔ Solutions:

```js
const a = {salary: 100}
const b = {salary: 200}

a.ref = b;
b.ref = a;

console.log(a); // cycling value occurs

a.ref = null;

console.log(a); // {salary: 100, ref: null}

// Explanation: This is the classic example of cyclic reference of memory. When variable a is called, it keeps cycling through its values. Of course, it retains the memory and causes a memory leak, but as soon as the variable a.ref is assigned to null (a.ref = null), at that time the reference is disconnected and the cycling reference no longer occurs.
```

<br/><br/>

## 3. DOM Leak Detection and Fix

Learn how DOM elements and closures can create memory leaks.

- Create a button using JavaScript
- Add an event listener that references a variable outside the listener
- Remove the button from the DOM, but not the event listener

Identify the leak & fix it.

<br/><br/>

### ✔ Solutions:

**HTML**
```html
  <button id="createBtn">Create Button</button>
  <div id="container"></div>
```

**JS**
```js
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

    // to fix this memory leak by removing memory leak
    setTimeout(() => {
      btn.removeEventListener("click", handleClick);
      console.log("Event Listener Removed");
    }, 1000);

  }, 3000);
})
```

<br/>

Please find the task assignments in the [Task File](./task.md).

