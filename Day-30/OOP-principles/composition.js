console.log(`\nComposition Example: \n`);

// Definition: Use of other classes to build the functionality.

console.log(`Use of other classes to build the functionality.\n`);

{
  class Engine {
    start() {
      console.log(`Engine started!...`);
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine(); 
    }

    carStart() {
     this.engine.start()
    }
  }

  const car = new Car();
  car.carStart()

}
