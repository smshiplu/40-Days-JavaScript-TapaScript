console.log(`\nAbstraction Example:\n`);

// Definition: Hiding internal complexity and only expose essential features.

console.log(`Definition: Hiding internal complexity and only expose essential features.\n`);


{
  class Car {
    startEngine() {
      // load fuel
      this.#injectFuel()
      // ignite 
      this.#ignite();
      console.log(`Engine started!`);
      
    }
    #injectFuel() {
      console.log(`Fuel injected...`);
    }
    #ignite() {
      console.log(`Ignition ON`);
    }
  }

  const car = new Car();
  car.startEngine();
}
