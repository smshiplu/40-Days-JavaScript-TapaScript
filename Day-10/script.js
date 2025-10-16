console.log(`1. What will be the output of the following code and why?\n`);

let user = "Alice";
function outer() {
  function inner() {
    console.log(user); //Bob
  }
  let user = "Bob";
  inner();
}
outer();
console.log(`\n`);
//The output will be Bob. Because when inner function get executed, it finds the variable user inside it's scope. as soon as it doesn't find the variable user it looks for the user variable to it's immediate parent scope. And it's immediate parent scope is outer() and user is declared and assigned over there.

console.log(`2. What is the mistake in the code below?\n`);
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

console.log(`3. Create a function with a nested function and log a variable from the parent function.\n`);

function greeting() {
  const message = "Hello World!";
  function showGreeting() {
    console.log(message);
  }
  showGreeting();
}
greeting();
console.log(`\n`);

console.log(`4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?\n`);

function count() {
  for (var index = 0; index < 5; index++) {}
  console.log(index);
}
count();
console.log(`\n`);
// In case of using let it is not possible to access outside of loop, but in case of using var, it is accessible outside of loop. because let is only block scope but var is function scope.

console.log(`5. Write a function that tries to access a variable declared inside another function.\n`);
function outer() {
  let message = "I declared inside outer()";

  function inner() {
    console.log(message + " but accessed from inner()");
  }
  inner()
}
outer();
console.log(`\n`);

console.log(`6. What will be the output and why?\n`);
console.log(`
console.log(a);
let a = 10;
\n`);
// console.log(a);
// let a = 10
//GEC
  //CP
    // a will set to memory with the no value and kept in the temporal dead zone
  //EP
    //here reference error will be occurred. because variable a has no existence in any scope.

console.log(`7. Where is the age variable accessible?\n`);
console.log(`
function showAge() {
  let age = 25;
  console.log(age);
}
console.log(age);
`);
function showAge() {
  let age = 25;
  console.log(age);
}
// console.log(age);
console.log(`\n`);
// age variable only accessible inside showAge(). Because let has only block scope. so outside of the scope age doesn't have any existence.

console.log(`8. What will be the output and explain the output?\n`);
let message = "Hello";
function outer() {
    let message = "Hi";

    function inner() {
      console.log(message);
    }

    inner();
}
outer();
console.log(`\n`);
// The output will be Hi. because inside inner() there is no existence of message variable, so it goes to it's parent scope to find the message variable and there message = Hi. 

console.log(`9. What will be the output and why?\n`);
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
console.log(`\n`);
// The output will be Inner. Because while executing inner(), variable a is already declared and assigned with Inner;

console.log(`10. What will be the output and why?\n`);

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
