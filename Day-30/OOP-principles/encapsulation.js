console.log(`\nEncapsulation Example: \n`);

// Definition: Hide or protect internal data from direct access, but only can be accessible via methods.

console.log(`Definition: Hide or protect internal data from direct access, but only can be accessible via methods\n`);


{
  class Car {
    #speed = 0;

    accelerate() {
      this.#speed += 10;
      console.log(`Speed accelerated by ${this.#speed}`);
    }

    getSpeed() {
      return this.#speed;
    }
  }

  const car = new Car();
  car.accelerate();
  const speed = car.getSpeed();
  console.log(speed);
  
}

