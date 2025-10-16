# Day 11 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Day 11
- ✅ What is Closure in JavaScript?
- ✅ Understanding Closure With Lexical Scope
- ✅ Closure Memorizing Outer Values
- ✅ Closure Real World Use Case
- ✅ Function Factory With Closure
- ✅ Closure & Memory Leak
- ✅ Advantages of Closure
- ✅ Closure & Event Handlers

## 🫶 Support

Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

    > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work

I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Cofee](https://buymeacoffee.com/tapasadhikary)**.

## Video

Here is the video for you to go through and learn:

[![day-11](./banner.png)](https://youtu.be/lA7CGz3iHyI "Video")

## **👩‍💻 🧑‍💻 Assignment Tasks**

## 1. What will be the output of the following code and why?
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
```

### Solutions ✔

```js
//It's happening because of closure. when invoking inner function or closure function it remembers the outer scope value
```

<br/><br/>

## 2. What will be the output and why?
```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
```

### Solutions ✔

```js
// It means a function returns another function and that returned function is called immediately.
```

<br/><br/>

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

### Solutions ✔

```js
function buttonEventClosure() {
  let clickCount = 0;
  const button = document.createElement("button");
  button.innerText = "Click Me";

  // Attach the click event handler using a closure
  button.addEventListener("click",  e => {
    clickCount++;
    console.log("Button Clicked:", clickCount, " Times");
  });

  return button;
}

const myBtn = buttonEventClosure();
document.body.appendChild(myBtn);
```

<br/><br/>

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

### Solutions ✔

```js
function createMultiplier(multiplier) {
  return function (num) {
    console.log(`Multiplier:${multiplier}, Number:${num}, Result:${multiplier * num}`);
  }
}
// createMultiplier(3)(10)
const mulRes = createMultiplier(3);
mulRes(15); // Multiplier:3, Number:15, Result:45
mulRes(20); // Multiplier:3, Number:20, Result:60
mulRes(2); // Multiplier:3, Number:2, Result:6
```

<br/><br/>

## 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.

### Solutions ✔

- Option 2. The object remains in memory as long as the closure exists

<br/><br/>

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

### Solutions ✔

```js
function incDecCounter() {
  let count = 0;
  return {
    "increment": () => {
      count++;
      console.log("Counter:" + count);
    },
    "decrement": () => {
      count--;
      console.log("Counter:" + count);
    },
    "reset": () => {
      count = 0;
      console.log("Counter:" + count);
    }
  }
}
const counterInstance = incDecCounter();
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.reset());
console.log(counterInstance.increment());
```



Please find the task assignments in the [Task File](./task.md).