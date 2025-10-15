# Day 02 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- What is Variable?
- How to visialize variables?
- How Variables get stored?
- JavaScript Data Types
- How JavaScript sees code?


## **👩‍💻 🧑‍💻 Assignment Tasks**

- ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

```js
  const name = "Alice";
  const age = 35;
  let isStudent = false;
  const favProLan = "JavaScript";
```

<br/><br/>

- ✅ Task 2: Print the values to the console.
```js
  console.log(name);
  console.log(age);
  console.log(isStudent);
  console.log(favProLan);
```

<br/><br/>

- ✅ Task 3: Try reassigning values to let and const variables and observe errors.
```js
  // name = "Bob"; // Cannot be reassigned a const variable. It causes error TypeError
  
  // const name  = "Charlie" // Cannot be redeclared a const variable. It occurs a SyntaxError

  isStudent = true; // Reassigning to let variable is allowed

  // let isStudent = true; // Redeclaring is not allowed for let variable. It throws a SyntaxError
```



- ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
```js
  // name = "Bob"; // Cannot be reassigned a const variable. It causes error TypeError
  // const name  = "Charlie" // Cannot be redeclared a const variable. It occurs a SyntaxError

  isStudent = true; // Reassigning to let variable is allowed

  // let isStudent = true; // Redeclaring is not allowed for let variable. It throws a SyntaxError


  console.log(`✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.\n`);

  const obj = {
    name: "Alice",
    age: 22,
    isStudent: true
  }

  const obj2 = obj; 
  obj2.isStudent = false; // it will also change the original object obj. Because when we assign obj to obj2, it doesn't create a new memory location or reference but same memory reference to the different variables, So the key isStudent's value will be changed into false for both obj obj2 
```