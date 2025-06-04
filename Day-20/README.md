# Day 20 - 40 Days of JavaScript - Advanced DOM Tips and Tricks

## **🎯 Goal of This Lesson**

- ✅ Intro
- ✅ Efficient DOM Travarsal
- ✅ Template and Cloning
- ✅ Document Fragment
- ✅ Range
- ✅ Shadow DOM
- ✅ Advanced Class Manipulations
- ✅ Handling Large-Scale Updates
- ✅ Mutation Observer

## **👩‍💻 🧑‍💻 Assignment Tasks**

### ✅ 1. Traverse and Toggle Classes

Build a navigation menu. On click of a list item:

- Traverse up to parent `<ul>`
- Remove .active class from all `<li>`
- Add .active only to the clicked `<li>`

```js
    const liList = document.querySelectorAll("ul#navMenu li");
  
    liList.forEach(li => {
        li.addEventListener("click", e => {
        const parent = li.parentElement;
        console.log(parent);
        removeClassActive();
        li.classList.add("active");
        li.style.cssText = "font-weight:bold; color:red";
        })
    });

    function removeClassActive() {
        liList.forEach(li => {
        li.classList.remove("active");
        li.style.cssText = "font-weight:normal; color:#fff";
        })
    }
```


### ✅ 2. Highlight Text Using Range

 - Use the Range API to highlight a portion of a paragraph by wrapping it with a `<mark>` tag.

 ```js
    const target = document.getElementById("markMe");

    const range = document.createRange();
    range.setStart(target.firstChild, 9); //After "Goodbye, "
    range.setEnd(target.childNodes[2], 0);

    const content = range.cloneContents();
    console.log(content); //Output: <mark>Friends</mark>
 ```

 ### ✅ 3. Use DocumentFragment for Performance

Insert 100 list items into the DOM using:

- Plain DOM methods (one by one)
- DocumentFragment (all at once)

```js
    //Plain DOM methods (one by one)
    for (let index = 0; index < 100; index++) {
        const li = document.createElement("li");
        li.textContent = `Item ${index}`;
        document.getElementById("list1").appendChild(li);
    };

    //DocumentFragment (all at once)
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < 100; index++) {
        const li = document.createElement("li");
        li.innerText = `Item ${index}`;
        fragment.appendChild(li);
    }
    document.getElementById("list2").appendChild(fragment);
```

### ✅ 4. Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.

```js 
  const cloneBtn = document.getElementById("cloneBtn");
  function cloneNode(boolean, elemId) {
    const template = document.querySelector("#cards");
    const clone = template.content.cloneNode(boolean);
    console.log(clone);
    
    clone.querySelector(".para").textContent = "This is card text";
    clone.querySelector(".title").textContent = "Card Title";
    document.getElementById(elemId).appendChild(clone)
  }

  cloneBtn.addEventListener("click", (e) => { 
    cloneNode(true, "cloneNodeTrue");
  });

  cloneBtn.addEventListener("click", (e) => { 
    cloneNode(false, "cloneNodeFalse");
  });
```

### ✅ 5. MutationObserver Watcher

Create a div and use MutationObserver to log whenever:

- A new child is added
- The class attribute changes
- Text is modified

```js
const target = document.getElementById("watchMe");

  const observer = new MutationObserver((mutationList, observer) => {

    for (const mutation of mutationList) {
      console.log(`Mutation type: ${mutation.type}`);

      if(mutation.type === "childList") {
        console.log(`A child node was added or remove`);
      }

      if(mutation.type === "attributes") {
        console.log(`A attribute ${mutation.attributeName} was changed`);
      }

      if(mutation.type === "characterData") {
        console.log(`Text content changed to ${mutation.target.data}`);
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
    target.textContent = "Text has been changed!";
    target.setAttribute("data-id", "1");
  }
```


Please find the task assignments in the [Task File](./task.md).