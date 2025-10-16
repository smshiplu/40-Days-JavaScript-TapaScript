# Day 10 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Intro
- ✅ Misconception About Hoisting
- ✅ Variable Hoisting
- ✅ Hoisting and let and const
- ✅ Temporal Dead Zone(TDZ)
- ✅ Functional Hoisting
- ✅ Hoisting and Function As an Expression
- ✅ Task and What’s Next?

<br/><br/>

## The Scope Table
## Comparison Table: `var` vs `let` vs `const`

| Feature               | `var`                         | `let`                         | `const`                       |
|-----------------------|-----------------------------|-----------------------------|-----------------------------|
| **Scope**            | Function scope               | Block scope `{}`             | Block scope `{}`             |
| **Hoisting**         | Hoisted & initialized as `undefined` | Hoisted but in **Temporal Dead Zone (TDZ)** | Hoisted but in **Temporal Dead Zone (TDZ)** |
| **Attached to `window`?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Re-declared?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Reassigned?** | ✅ Yes | ✅ Yes | ❌ No |
| **Initial Value Required?** | ❌ No | ❌ No | ✅ Yes (Must be initialized) |
| **Mutability** | Mutable | Mutable | Immutable (Can't be reassigned but mutable if it's an object or array) |
| **Use in Loops** | Allowed but not recommended (function scope issues) | ✅ Recommended | ❌ Not recommended for changing values |


## **👩‍💻 🧑‍💻 Assignment Tasks**

## ✅ 1. What will be the output of the following code and why?
```js
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
```

### ✔ Solutions:

```js
let user = "Alice";
function outer() {
    function inner() {
      console.log(user); //Bob
    }
    let user = "Bob";
    inner();
}
outer(); 

// Why?
// The output will be Bob. Because when inner function get executed, it finds the variable user inside it's scope. as soon as it doesn't find the variable user it looks for the user variable to it's immediate parent scope. And it's immediate parent scope is outer() and user is declared and assigned over there.
```

<br/><br/>

## ✅ 2. What is the mistake in the code below?
```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

### ✔ Solutions:

```js
let total = 0; // Global, bad practice
function add(num) {
  total += num;
}
add(5);
add(10);
console.log(total);
console.log(`\n`);
// GEC
  // CP
    // total

  // EP
    // FEC for add()
      // CP
        //arguments{0: 5}
        //num: 5
      // EP 
        // here it will assign total = 5
    // FEC for add()
      // CP
        // arguments {0: 10}
        //num: 10
      // EP
      // here it will assign total += 10. means previous total value was 5, and now 10 will be added. so output total will be 15 
    // FEC for console.log()
      //CP

      //EP
      // here output will be 15;
```

<br/><br/>

## 3. Create a function with a nested function and log a variable from the parent function.

### ✔ Solutions:

```js
function greeting() {
  const message = "Hello World!";
  function showGreeting() {
    console.log(message);
  }
  showGreeting();
}
greeting();
```

<br/><br/>

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

### ✔ Solutions:

```js
function count() {
  for (var index = 0; index < 5; index++) {}
  console.log(index);
}
count();

// // In case of using let it is not possible to access outside of loop, but in case of using var, it is accessible outside of loop. because let is only block scope but var is function scope.
```

<br/><br/>

## 5. Write a function that tries to access a variable declared inside another function.

### ✔ Solutions:

```js
function outer() {
  let message = "I declared inside outer()";

  function inner() {
    console.log(message + " but accessed from inner()");
  }
  inner()
}
outer();
```

<br/><br/>

## 6. What will be the output and why?
```js
console.log(a);
let a = 10;
```

### ✔ Solutions:

```js
// GEC
  //CP
    // a will set to memory with the no value and kept in the temporal dead zone
  //EP
    //here reference error will be occurred. because variable a has no existence in any scope.
```

<br/><br/>

## 7. Where is the `age` variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

Options:
- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

### ✔ Solutions:

- Option B. The age variable only accessible inside showAge(). Because let has only block scope. so outside of the scope age doesn't have any existence.

<br/><br/>

## 8. What will be the output and explain the output?

```js
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

### ✔ Solutions:

- The output will be Hi. because inside inner() there is no existence of message variable, so it goes to it's parent scope to find the message variable and there message = Hi.

<br/><br/>

## 9. What will be the output and why?

```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```

### ✔ Solutions:

- The output will be Inner. Because while executing inner(), variable a is already declared and assigned with Inner;

<br/><br/>

## 10. What will be the output and why?
```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
```

### ✔ Solutions:

```js
//GEC 
  //CP
    //counter: fn()
    //reduce

  //EP
    //FEC for counter()
      //CP
        //count
        //anonymous: fn()
      //EP
        //count = 0
        //FEC for anonymous fn()
          //CP
          //EP
            //count: -1
    //FEC for counter()
      //CP
      //EP
        //count: -2
```

Please find the task assignments in the [Task File](./task.md).