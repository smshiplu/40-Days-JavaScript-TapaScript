// "use strict"

console.log(`2. What is the problem here? Fix it to log the correct name and explain the fix\n`);
// Here it will print undefined because arrow function doesn't have any this. It goes out of the parent's lexical scope and get window object but window object has no name property. To fix this we can either use standard function method or keep the arrow function inside a regular function method.
const user = {
  name: "tapaScript",
  /*greet: () => {
    console.log(`Hello, ${this.name}!`);
  },*/
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },
};
user.greet(); // Hello tapaScript
console.log(`\n`);

console.log(`3. Can you explain what is the problem here and fix the issue to log the correct name?\n`);
// greetFn doesn't have any relation with the obj object, that's why using call() method of explicit binding we can fix this. 
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
const greetFn = obj.greet;
greetFn.call(obj); // Hello Tom
console.log(`\n`);

console.log(`4. What is the problem with the following code? Why isn't it logging the name correctly?\n`);
const user2 = {
  name: "Alex",
  greet: function () {
    function inner() {      
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};
user2.greet(); //undefined. Because inner() is not a method of user2 object. It's just a standalone function inside greet method, so here this keyword is returning window object in non strict mode and undefined in strict mode
console.log(`\n`);

console.log(`5. Create a 'Sports' constructor function that takes 'name' and 'number of players' as arguments and assigns them using 'this' keyword. Then, create two sports instances and log their details`);
const Sports = function(name, numOfPlayer) {
  this.name = name;
  this.numOfPlayer = numOfPlayer;
  this.log = function() {
    console.log(`There are ${this.numOfPlayer} players in a ${this.name} team`);
  }
}
const footBall = new Sports("Football", 11);
footBall.log(); //There are 11 players in a Football team
const basketBall = new Sports("Basketball", 5);
basketBall.log(); // There are 5 players in a Basketball team
console.log(`\n`);

console.log(`6. Can you attach the car1's 'describe()' method to car2 object? Give all possible solutions that you can think of`);
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};
const car2 = {
  brand: "BMW",
  model: "X1",
};
const carFn = car1.describe;
// Solution 1
carFn.call(car2);
// Solution 2
carFn.apply(car2);
// Solution 3
const anotherCarFn = car1.describe.bind(car2);
anotherCarFn();
console.log(`\n`);

console.log(`7. What will be the output of the following code and why?\n`);
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};
person.sayHello(); // Charlie. Inside sayHello() method this is pointing to the person object because of implicit binding
person.sayHelloArrow(); // undefined. this keyword inside sayHelloArrow() method has no effect. It goes up of parent's lexical scope and returns undefined in non strict mode and window object in strict mode
console.log(`\n`);



