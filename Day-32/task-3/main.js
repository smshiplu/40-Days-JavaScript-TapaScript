console.log(`Day 32 - 40 Days of JavaScript - Modules\n`);

console.log(`✅ 3. Use Named vs Default Exports

Create modules with both named and default exports, and demonstrate:

- How to import them correctly
- How to rename named exports during import\n`);
console.log(`And:\n`);

//default import
import {default as userName} from "./util/printUserName.js";
//named import
import { hi, hola } from "./util/greetings.js";

userName("John");
hi();
hola();

