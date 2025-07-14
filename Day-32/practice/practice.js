console.log(`Day 32 - 40 Days of JavaScript - Modules\n`);

// Named module import
import { add, sub } from "./calculate.js";
// Named module import with alias
import { add as sum, sub as minus } from "./calculate.js";
// namespace import
import * as calc from "./calculate.js";

// import default
// import {default as greet}  from "./sayHello.js";
import greet  from "./sayHello.js";

// combined export 
import * as combine from "./combined.js";

console.log("Named module import", add(2, 3));
console.log("Named module import", sub(10, 5));

console.log("Named module import with alias",sum(2, 3));
console.log("Named module import with alias", minus(10, 5));

console.log("Namespace module import with alias", calc.add(2, 3));
console.log("Namespace module import with alias", calc.sub(10, 5));

greet();

// accessing functions from combined exports
console.log(combine.calc.add(10, 5));
console.log(combine.calc.sub(10, 5));
combine.hello();


{
  // Dynamic import
  const { add , sub } = await import( "./calculate.js");


  // Dynamic import of multiple modules
  const promise = Promise.all(
    [
      await import("./calculate.js"),
      await import("./greetings.js")
    ]
  );

  promise.then(result => {
    const calc = result[0];
    const greet = result[1];

    console.log(calc.add(5, 5));
    console.log(calc.sub(10, 5));
    
    greet.sayHi();
    greet.sayHola();
  });
  
}

