console.log(`Day 30 - 40 Days of JavaScript - Classes and OOP\n`);

console.log(`✅ 1. Create a Book Class

- Create a Book class with properties: title, author, pages.
- Add a method describe() that logs:
    "Title: [title], Author: [author], Pages: [pages]"
- Create at least two book objects and call the describe() method.\n`);
console.log(`Ans:
\n`);
{
  class Books {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }

    describe() {
      console.log(`Title: ${this.title} Author: ${this.author} Pages: ${this.pages}`);
    }
  }

  const  harryPotter = new Books("Harry Potter and the Philosopher's Stone", "JK Rowling", 333)
  harryPotter.describe();

  const aroundTheWorldInEightyDays = new Books("Around the World in Eighty Days", "Jules Vern", 240);
  aroundTheWorldInEightyDays.describe();
}
console.log(`\n`);


console.log(`## ✅ 2. Use Getters and Setters with a Temperature Class

- Create a Temperature class with a private field _celsius.
- Add a getter to return Fahrenheit value.
- Add a setter to set Celsius temperature.
- Test setting temperature and logging Fahrenheit.

  this._celsius * 1.8 + 32;
\n`);
console.log(`Ans:
\n`);
{
  class Temperature {

    #_celsius;
    
    loggingTemperature() {
      console.log(`Temperature is ${this.temperature}°F`);
    }

    get temperature() {
      return this.#_celsius = (this.#_celsius * 1.8) + 32;
    }

    set temperature(value) {
      this.#_celsius = value;
    }

  }

  const temp = new Temperature();
  temp.temperature = 33; // setting temperature celsius value
  console.log(temp.temperature); // Output: 91.4 //getting temperature fahrenheit value;
  temp.loggingTemperature(); // Output: Temperature is 196.52°F
  
}
console.log(`\n`);

console.log(`✅ 3. Build a User Class with Public & Private Fields

- Fields: name, \`#password\`
- Add a method checkPassword(pw) that checks if it matches #password.
- Show how private fields can’t be accessed directly outside the class.\n`);
console.log(`Ans:
\n`);
{
  class User {
    name = "Azlan";
    #password = "random";
    
    checkPassword(pw) {
      if(pw !== this.#password) {
        console.error(`Incorrect password!`);
      } else {
        console.log(`Correct password!`);
      }
    }
  }

  const user = new User();

  user.checkPassword("random") // Output: Correct password!

  // console.log(user.#password); // #password is a private property and cannot be accessed from the outside of the class
}
console.log(`\n`);

console.log(`✅ 4. Inheritance — Vehicle and Car

- Vehicle class has fields: make, model, and method start()
- Car extends Vehicle, adds fuelType
- Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"\n`);
console.log(`Ans:
\n`);
{
  class Vehicle {
    constructor(make, model,) {
      this.make = make;
      this.model = model;
    }

    start() {
      console.log(`Car started!...`);
    }
  }

  class Car extends Vehicle {
    constructor(make, model, fuelType) {
      super(make, model);
      this.fuelType = fuelType;
    }

    start() {
      console.log(`Starting ${this.fuelType} car: ${this.make} ${this.model}`);
    }
  }

  const tesla = new Car("Tesla", "model X", "battery");
  tesla.start(); // Output: Starting battery car: Tesla model X
  
}
console.log(`\n`);

console.log(`✅ 5. Use a Static Method

- Create a class MathUtils with static methods:
    add(a, b), subtract(a, b), randomInt(min, max)
- Call the methods without creating an object.\n`);
console.log(`Ans:
\n`);
{
  class MathUtils {
    
    static add(a, b) {
      return a + b;
    }

    static subtract(a, b) {
      return a - b;
    }

    static randomInt(min, max) {
      min = Math.ceil(parseInt(min));
      max = Math.floor(parseInt(max));
      return Math.floor(Math.random() * (max - min ) ) + min;
    }
  }

  console.log(MathUtils.add(10, 5)); // Output: 15
  console.log(MathUtils.subtract(10, 5)); // Output: 10
  console.log(MathUtils.randomInt(6, 0)); // Output: random number between 6 and 0

}
console.log(`\n`);


console.log(`✅ 6. Smart Light Bulb Class with Access Control

- Create a SmartLightBulb class:
  - Public method: turnOn(), turnOff()
  - Private method: #connectToWiFi()
  - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
  - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
- Try accessing the private method directly and observe the error.s\n`);
console.log(`Ans:
\n`);
{
  class SmartLightBulb {

    #wifiState = false;

    turnOn() {
      this.#connectToWiFi();
      console.log(`Light is ON`);
    }

    turnOff() {
     this.#disConnectTOWiFi();
     console.log("Light is OFF");
    }

    #connectToWiFi() {
      this.#wifiState = true;
      console.log(`Connected to WiFi!...`);
    }

    #disConnectTOWiFi() {
      this.#wifiState = false;
      console.log(`Disconnected to WiFi!...`);
    }

    static info() {
      console.log("SmartLightBulb v1.0 supports remote control and scheduling.");
    }
  }

  const smartLightBulb = new SmartLightBulb();
  smartLightBulb.turnOn();
  SmartLightBulb.info();
  smartLightBulb.turnOff();
  // console.log(smartLightBulb.#disConnectTOWiFis); // Uncaught SyntaxError: Private field '#disConnectTOWiFis' must be declared in an enclosing class
  
}
console.log(`\n`);

console.log(`✅ 7. Animal Class and Subclasses

- Base Class: Animal(name, sound)
  - Method: makeSound() logs: "The [name] says [sound]"
- Subclass 1: Dog(name) — inherits from Animal
  - Overrides makeSound() → "The Dog [name] barks!"
- Subclass 2: Cat(name)
  — overrides makeSound() → "The Cat [name] meows!"
- Call super() inside each subclass constructor
- Add a shared method sleep() in Animal and test with both Dog and Cat instances.\n`);
console.log(`Ans:
\n`);
{
  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`); 
    }

    sleep() {
      console.log(`${this.name} is sleeping...`);
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name);
    }

    makeSound() {
      console.log(`The Dog ${this.name} barks!`);
    }
  }

  class Cat extends Animal {
    constructor(name) {
      super(name);
    }

    makeSound() {
      console.log(`The Cat ${this.name} meows!`);
    }
  }

  const animal = new Animal("Tiger", "Roaring");
  animal.makeSound();

  const spike = new Dog("Spike");
  spike.makeSound();
  spike.sleep();

  const tom = new Cat("Tom");
  tom.makeSound();
  tom.sleep();
}
console.log(`\n`);





