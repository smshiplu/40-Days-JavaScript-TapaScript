console.log(`\nInheritance Example: \n`);

// Definition: The class that has it's own properties and methods and also inherit properties and methods from parent class.
console.log(`Definition: The class that has it's own properties and methods and also inherit properties and methods from parent class.\n`);

{
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    drive() {
      console.log(`Car is driving on fuel!`);
    }
  }

  class ElectricCar extends Car {
    constructor(make, model, batteryLevel) {
      super(make, model);
      this.batteryLevel = batteryLevel;
    }

    charge() {
      console.log(`Battery is charging...`);
    }
  }

  const tesla = new ElectricCar("Tesla", "Model S", 90);
  tesla.charge();
  tesla.drive();

}