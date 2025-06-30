console.log(`\nPolymorphism Example: \n`);

// Definition: Method behaves differently based on object type or context. The polymorphism always related to inheritance.

console.log(`Definition: Method behaves differently based on object type or context. The polymorphism always related to inheritance.\n`);


{
  class Car {
    drive() {
      console.log(`Drive on fuel!...`);
    }
  }

  class ElectricCar extends Car {
    drive() {
      console.log(`Drive on electricity!...`);
    }
  }

  const cars = [new Car(), new ElectricCar()];
  
  cars.forEach(car => {
    car.drive();
  })
  
}


