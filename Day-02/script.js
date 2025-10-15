console.log(`✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
\n`);

const name = "Alice";
const age = 35;
let isStudent = false;
const favProLan = "JavaScript";

console.log(`✅ Task 2: Print the values to the console.\n`);

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favProLan);


console.log(`✅ Task 3: Try reassigning values to let and const variables and observe errors.\n`);

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

console.log(obj); // {name: 'Alice', age: 22, isStudent: false}
console.log(obj2); // {name: 'Alice', age: 22, isStudent: false}

const arr = [1, 2, true, {"four": ""}];

const arr2 = arr;

arr[2] = false; // changing arr2 index value will also occurs the changes to arr. Because assigning arr into arr2, doesn't change the memory reference. Means it shares the same memory location for both variable's value

console.log(arr); //  [1, 2, false, {…}]
console.log(arr2); //  [1, 2, false, {…}]




