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

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```

### Solutions ✔

```js
//not provided. Because undefined is a negative value. so when it check for user.age it get returned falsy value and that's why it's going to print "Not provided"
```

<br/><br/>

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

### Solutions ✔

```js
// 1,  Because when Object.freeze() applied to an object, it it not possible to reassign or create new item to the object
```

<br/><br/>

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```

### Solutions ✔

```js
const { name, company: {name: companyName, location: {city} } } = person;
console.log(name, companyName, city);  // Tapas tapaScript Bangalore
```

<br/><br/>

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

### Solutions ✔

```js
const students = {
  name: "Azlaan",
  age: 1.5,
  grades: [80, 57, 96, 82, 91, 87, 70],
  averageGrade: function() {
    const totalMarks = this.grades.reduce((a, b) => a + b, 0);
    const averageMarks =  Math.floor(totalMarks / this.grades.length);
    if(averageMarks >= 80) {
      console.log("Average Grade: A+");
    } 
  }
}
students.averageGrade(); // Average Grade: A+
```

<br/><br/>

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

### Solutions ✔

```js
const books = {
  "Three Musketeer": {
    availability: true,
    rating: 4.5,
    stock: 4
  },
  "Crime and Punishment": { 
    availability: false,
    rating: 4,
    stock: 0
  },
  checkAvailableBook: function() {
    for(let key in this) {
      if(!this[key].availability) {
        this[key].stock = 10;
      }
    }
  }
}
books.checkAvailableBook(); // it will check if any book is available or not. if not then add restock = 10
console.log(books["Crime and Punishment"].stock); // 10
```

<br/><br/>

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

### Solutions ✔

```js
// Object.keys() creates an array with the each key of profile object
let profile = {
  name: "Nasir",
  phone: "01234567890",
  email: "email@email.com"
}
const profileKeysArr = Object.keys(profile); 
console.log(profileKeysArr); // ["name", "phone", "email"]

// Object.entries() creates arrays with the each key and value of object 
const emp = {
  firstName: "Nasir Uddin",
  lastName: "Shiplu"
}
const empArr = Object.entries(emp);
console.log(empArr); // ["firstName", "Nasir Uddin"] ["lastName", "Shiplu"]
```

<br/><br/>

## 7. How do you check if an object has a certain property?

### Solutions ✔

```js
const office = {
  employee: 20
}
console.log(Object.hasOwn(office, "employee")); //true
```

<br/><br/>

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

### Solutions ✔

```js
const anotherPerson = { name: "John" };
const newPerson = anotherPerson;
newPerson.name = "Doe";
console.log(anotherPerson.name); // Doe. Because newPerson is not a separate object. It is the reference of anotherPerson object, so anotherPerson and newPerson share the same memory location. When we change the value for newPerson.name, it also change the value for anotherPerson.name
```

<br/><br/>

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

### Solutions ✔

```js
// The best way to deeply copy an object is to use a javaScript function structuredClone(). It copy an object with different memory reference. So it will not destroy the source object originality
const nestedObj = {
  a: 1,
  b: {c: 2}
}
const deepCopiedObj = structuredClone(nestedObj);
deepCopiedObj.b.c = 10;
console.log(nestedObj.b.c); // 2
console.log(deepCopiedObj.b.c); // 10
```

<br/><br/>

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
```

### Solutions ✔

```js
for (const {name, address, age } of users) {
  console.log(`Name: ${name}, Address:${address}, Age:${age}`);
}
```

Please find the task assignments in the [Task File](./task.md).