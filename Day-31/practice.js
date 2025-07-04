console.log(`Day 31 - 40 Days of JavaScript - Prototype & Prototype Chain\n`);

//Prototype example with constructor function (putting method numberOfWheels() to prototype property so that teslaCar and bmwCar can inherit it)
{
  function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }

  Car.prototype.numberOfWheels = () => 4;

  const bmwCar = new Car("BMW", 2024, "black");
  console.log(bmwCar.numberOfWheels());

  const teslaCar = new Car("tesla", 2025, "gray");
  console.log(teslaCar.numberOfWheels());

  console.log(teslaCar);
  

}



// Prototype example in class (in class we don't need to explicitly mention the method numberOfWheels() by Car.prototype.numberOfWheels = () => {} like Car constructor function)
{

  class Vehicle {
    constructor(name, model, color) {
      this.name = name;
      this.model = model;
      this.color = color
    }

    numberOfWheels() {
      return 4;
    }
  }

  const toyotaCar = new Vehicle("Toyota", 2020, "white");
  console.log(toyotaCar);


  class Car extends Vehicle {
    constructor(name) {
      super(name)
    }
  }

  const bmwCar = new Car("BMW");
  console.log(bmwCar);
  

}

// Using Object.create() we can also inherit features of an object to other object like class 
{
  const vehicle = {
    isLuxury: false,
    hasFourWheel: false,
    info: function () {
      console.log(`The car ${this.name} has color ${this.color}. Is this luxury car?  ${this.isLuxury}. Is this car has four wheel? ${this.hasFourWheel}`);
    }
  }

  const car = Object.create(vehicle);
  car.name = "BMW";
  car.color = "Blue";
  car.isLuxury = true;
  car. hasFourWheel = true;
  car.info()
}

// To know or get the prototype of an object
{
    function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  const bmwCar = new Car("BMW", 2000, "red")
  console.log(Object.getPrototypeOf(bmwCar));
  
  //Set prototype
  Object.setPrototypeOf(bmwCar, {});
  console.log(Object.getPrototypeOf(bmwCar));
  
}






