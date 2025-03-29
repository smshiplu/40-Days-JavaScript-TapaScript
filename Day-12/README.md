# Day 12 - 40 Days of JavaScript

## **🎯 Learnings of This Lesson**


- ✅ Create Objects with Literal Syntax | This literal syntax {} creates an object in JavaScript.
- ✅ Accessing Object Properties 
- ✅ Adding New Property to Object
- ✅ Keys With Special Characters | If object key consists with special character like "is active", it need to be warped ith double quote. And while accessing this key wwe need to use ["is active"] subscript operator.
- ✅ Modifying Existing Property Value
- ✅ Deleting a Key From Object
- ✅ Accessing Dynamic Key Value | While accessing dynamic value, subscript operator [] is needed.
- ✅ Create Object With Dynamic Values | While creating object with dynamic value subscript operator [] is required like const obj = { [dynamicValue]: "value" }.
- ✅ Constructor Function To Create Objects | Creating an object with constructor function parameters need to assign with the this keyword like function (name) {this.name=name}.
- ✅ Using Object Constructor To Create Objects | With new Object() constructor an object can be created.
- ✅ Using Factory Function To Create Objects | Using factory function an object can be created. In this case if parameter name is equal to key name and value, we can omit the value. 
- ✅ Object Shorthand | if key and value is same then no need to write value explicitly like key: value.
- ✅ Object Methods | Various object method like Object.key() , Object.hasOwn(), Object.assign(), Object.entries(), Object.fromEntries(), Object.freeze(), Object.seal() etc.
- ✅ Nested Objects 
- ✅ The “in” operator | to check if any key exist or not. if exists but there is falsy value null or undefined, it will return true.
- ✅ The for…in loop | to iterate through object. Inside this loop object's key and value is accessible.
- ✅ Object.keys() method | returns an array with the object's keys.
- ✅ Object References
- ✅ Object.assign() | creates another copy of object with different memory reference. but in case of nested object it copies reference only.
- ✅ Shallow Copy vs. Deep Copy | Object.assign() does a shallow copy, but the structuredClone() function from JavaScript does a deep copy.
- ✅ Convert an Object to an Array | Object.entries() creates each arrays with the each key and value.
- ✅ Concert Map or Array to Object | new Map(["key1" : "value1"], ["key2": "value2]) will convert to an object like {"key1": "value1", "key2": "value2"} 
- ✅ Immutability with freeze() | Object.freeze() makes an object immutable. No key can be added, updated, or deleted.
- ✅ Immutability with seal() | Object.seal() makes object immutable too but, the key can be reassign.
- ✅ The hasOwn() Method | Object.hasOwn() to check if an object has a particular key.
- ✅ What is Object Destructuring? | Destructuring of an object is extracting the key as a variable. It gives the advantages of writing fast and efficient code. 
- ✅ Create a New Variable | While destructuring the array, a new variable can be created, which will be treated as object's key.
- ✅ Aliases | While destructuring an object, a variable naming conflict can happen. To avoid variable naming conflict, we can use our custom variable naming using alias.
- ✅ Nested Object Destructuring | Destructure nested level object like {location: {address : {city}}}.
- ✅ Destructuring to Function Parameter | object key can be destructured as a function parameter like function({address: {city}}){}. In this case, the object needs to be passed as an argument.
- ✅ Destructure a Function Return Value | When a function returns object it is possible to destructure object's key.
- ✅ Destructuring in Loops | When an array consists of objects, it is possible to destructure the object using a for-of loop. 
- ✅ Optional Chaining | When we want to access a key but we are not sure if this key exist or not in object that time we can use optional chaining like(?.). It will avoid runtime error.

## **👩‍💻 🧑‍💻 Assignment Tasks**

Please find the task assignments in the [Task File](./task.md).