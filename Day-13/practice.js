"use strict"

console.log("At the Global level In browser environment 'this' will refer to window object ",  this); //but in nodeJS environment it will return Global object

// Binding
// When dealing with this keyword e have to keep in mind that where the particular this keyword is used, either it is inside an object or a function

//Inside of an object
const employee = {
  id: 1234,
  firstName: "SM",
  lastName: "Shiplu",
  returnThis: function() {
    return this;
  },
  getFullName: function() {
    return `The constructed fullname using this keyword ${this.firstName} ${this.lastName}`
  }
}
console.log("This inside the employee object",  employee.returnThis()); // here hole employee object will be returned and 'this' keyword is pointing to employee object and binding on returnThis() method and this is called implicit binding.
console.log(employee.getFullName());

//Another example
const tom = {
  name: "Tom",
  age: 7
}
const jerry = {
  name: "Jerry",
  age: 4
}

function greetMe(obj) {
  obj.message = function() {
    console.log(`${this.name} is ${this.age} years old`);
    console.log(obj);
  }
}
greetMe(tom);
console.log(tom.message());
greetMe(jerry);
console.log(jerry.message());

// Inside standard function
function sayHello() {
  console.log("this keyword is declared inside a function", this);
}
sayHello(); // here this will go to outer scope and return Window object without strict mode, but with the strict mode it will return undefined

function outer(a) {
  console.log("This is an outer function", this);
  return function inner(b) {
    console.log("This is an inner function", this);
  }
}
const outerResult = outer(5); // here this will go to outer scope and return Window object without strict mode, but with the strict mode it will return undefined
console.log(outerResult(10)); /// here this will go to outer scope and return Window object without strict mode, but with the strict mode it will return undefined


//Inside the arrow function
const getThis = () => this;
console.log("this keyword inside an arrow function with strict mode", getThis());

const fruit = {
  name: "mango",
  color: "yellow",
  // getDesc: () => `${this.name} is ${this.color}` // here output will be undefined. because this keyword is pointing to window object and and window doesn't have property name and color
  /*getDesc: function() {
    return `${this.name} is ${this.color}` // here it will return mango is yellow, because this keyword inside function with strict mode works one parent level up 
  }*/
  
  getDesc: function () {
    return () => `${this.name} is ${this.color}` 
  }
}
// console.log(fruit.getDesc());
const descFunc = fruit.getDesc();
console.log(descFunc()); // mango is yellow


// Explicit binding
// when two different execution context need to be bind together we can use explicit binding
// Explicit binding has three method - call/apply/bind

function greeting() {
  console.log(`Hello ${this.name} resides at ${this.address}`);
}
const emp = {
  name: "Shiplu",
  address: "No where in the world"
}
// Here we can bind greeting() to emp object using call explicit binding method
greeting.call(emp); 

//while using call() explicit binding method we can also pass arguments
function likes(hobby1, hobby2) {
  console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
}

const person = {
  name: "Shiplu"
}
// call()
likes.call(person, "coding", "reading");

// In above call() method there is a problem. Suppose, in the likes function there are too many parameter and we have to pass too many arguments in call() method. To solve this problem we can use apply() method instead.

// apply() 
const argsToApply = ["dancing", "singing"];
likes.apply(person, argsToApply);

// bind() 
// In bind method we cannot directly invoke the likes.bind(). First it needs to hold in it's return in a variable and the we can invoke that variable
function newHobbies(hobby1, hobby2) {
  console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
}
const newFn = newHobbies.bind(person, "Writing", "Blogging"); // here it will return the entire function and then we need to invoke the function newFn()
console.log(newFn());

const Cartoon = function(name, animal) {
  this.name = name;
  this.animal = animal
  this.log = function () {
    console.log(`${this.name} is a ${this.animal}`);
  }
}

const tomCartoon = new Cartoon("Tom", "Cat");
const jerryCartoon = new Cartoon("Jerry", "Mouse");
tomCartoon.log(); // Tom is a Cat
jerryCartoon.log(); // Jerry is a Mouse

const user = {
  name: "Shiplu",
  greet: function() {
    function inner() {
      // console.log(this); // undefined
      console.log(`Hello ${this.name}!`);
    }
    // inner(); // In strict mode it will return TypeError and without strict mood it will return undefined. But we can fix this using arrow function
    const anotherInner = () => {
      console.log(`Hello ${this.name}!`);
    }
    anotherInner(); // Hello shiplu
  }
}
user.greet();

// last example

const student = {
  name: "Azlaan",
  greet: function() {
    console.log("Hello", this.name);
  }
}
const stuGreet = student.greet; // didn't invoke, just assign to a variable
// stuGreet(); // here it will return undefined, it has been invoking inside global an it gets executed immediately, so it couldn't find any reference to the student object. so it has to be declared with explicit binding
stuGreet.call(student);










