console.log(`Day 30 - 40 Days of JavaScript - Classes and OOP\n`);

{
  class Car {
    constructor(name) {
      this.name = name
    }
    printThis() {
      console.log(this);
    }
  }

  const car = new Car("BMW");
  console.log(car); // Car {name: 'BMW'}
  car.printThis() // Car {name: 'BMW'}
}

// upfront properties
{
  class Phone {
    brand = "apple";
    
    viewBrand() {
      console.log(this.brand);
    }
  }
  const ph = new Phone();
  console.log(ph); //Phone {brand: 'apple'}
  ph.viewBrand();
}

//Getters and Setters
{
  class Animal {
    constructor(name) {
      this.name = name;
    }

    printName() {
      console.log(`The original property of the object is: ${this.name}`); //The original property of the object is: Get the animal name Tiger
    }

    get name () {
      if(!this._name) {
        console.warn(`No valid animal name found!`);
        return;
      }
      return `Get the animal name ${this._name}`;
    }

    set name (value) {
      if(!value || value.length < 2) {
        console.warn(`The name property cannot be empty or less than 2 characters!`);
        return;
      }
      if(value === "Cat") 
      this._name = "Tiger";
    }
  }

  const animal = new Animal("Cat");
  animal.printName();
  console.log(animal.name); // Get the animal name Tiger
}

//Static Property

{
  class MyClass {
    static staticMethod() {
      console.log(this); // this returns the hole class itself
    }
  }
  MyClass.staticMethod();

  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email
    }

    greet() {
      console.log(`Hi I am ${this.name}`);
    }

    static isValidEmail(email) {
      return email.includes("@") && email.includes(".");
    }

    static createGuest() {
      return new User("Guest", "guest@emal.com")
    }

  }

  const user = new User("Shiplu", "shiplu@email.com");
  user.greet(); // Hi I am Shiplu

  const isValidEmail = User.isValidEmail("test@test.com");
  console.log(isValidEmail); // true
  
  const guestUser = User.createGuest(); 
  console.log(guestUser); // User {name: 'Guest', email: 'guest@emal.com'}
  guestUser.greet(); // Hi I am Guest
  
}

// Public/Private

{
  // Abstraction principle

  class WashingMachine {
    // public fields
    brand;

    // private fields
    #powerStatus = false;
    #currentCycle = null;
    
    constructor(brand) {
      this.brand = brand;
    }

    start(cycle) {
      if(!this.#powerStatus) {
        this.#turnOn();
      }
      this.#currentCycle = cycle;
      console.log(`Current Cycle: ${this.#currentCycle}`);

      //spin
      this.#spin();

      //drain
      this.#drain();

      //stop
      this.stop();
    }

    stop() {
      // turn Off
      this.#turnOff();
      console.log(`Washing machine is turned Off`);
    }

    #turnOn() {
      this.#powerStatus = true;
      console.log(`Power is ON`);
    }

    #turnOff() {
      this.#powerStatus = false;
      console.log(`Power is OFF`);
    }

    #spin() {
      console.log(`Spinning...`);
    }

    #drain() {
      console.log(`Draining...`);
    }
  }

  const lgWasher = new WashingMachine("LG");
  lgWasher.start("Quick Wash");
  
}

// Extends
{
  // inheritance and polymorphism

  class Human {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    introduce() {
      console.log(`Hey I am ${this.name} my age is ${this.age}`);
    }

    sleep() {
      console.log(`${this.name} is sleeping!`);
    }
  }

  class Student extends Human {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }

    // Polymorphism (Overriding parents method)
    introduce() {
      console.log(`Hey I am ${this.name} my age is ${this.age} and I study in grade ${this.grade}`);
    }

    study() {
      console.log(`I am studying at grade ${this.grade}`);
    }
  }

  
  class Teacher extends Human {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }

    // Polymorphism (Overriding parents method)
    introduce() {
      console.log(`Hey I am ${this.name} my age is ${this.age} and I teach ${this.subject}`);
    }

    teach() {
      console.log(`I am teach ${this.subject}`);
    }
  }

  const bob = new Student("Bob", 25, 12)
  bob.introduce();
  bob.sleep();

  const alex = new Teacher("Alex", 35, "English");
  alex.introduce();
  alex.sleep();
}
