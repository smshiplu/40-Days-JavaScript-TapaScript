console.log(`Day 32 - 40 Days of JavaScript - Modules\n`);

console.log(`✅ 1. Split a Utility Library

Create a small utility library (e.g., math functions like add, subtract, multiply, divide) in separate module files and import them into a main index.js file to perform operations.
\n`);

console.log(`Ans:
  import { add } from "./util/add.js";
  import { subtract } from "./util/subtract.js";
  import { multiply } from "./util/multiply.js";
  import { divide } from "./util/divide.js";

  console.log(add(3, 2));
  console.log(subtract(10, 5));
  console.log(multiply(9, 6));
  console.log(divide(6, 2));
\n`);

import * as combine from "./util/combine.js";

console.log(combine.add(3, 2)); // Output: 5 
console.log(combine.subtract(10, 5)); // Output: 5 
console.log(combine.multiply(9, 6)); // Output: 54
console.log(combine.divide(6, 2)); // Output: 3




