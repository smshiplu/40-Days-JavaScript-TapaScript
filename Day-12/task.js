console.log(`1. What will be the output and why?\n`);
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); //not provided. Because undefined is a negative value. so when it check for user.age it get returned falsy value and that's why it's going to print "Not provided"
console.log(`\n`);

console.log(`2. What will happen if we try to modify a frozen object?\n`);
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1 . Because when Object.freeze() applied to an object, it it not possible to reassign or create new item to the object
console.log(`\n`);

console.log(`3. Given an object with deeply nested properties, extract name, company, and location.city using destructuring\n`);
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
const { name, company: {name: companyName, location: {city} } } = person;
console.log(name, companyName, city);  // Tapas tapaScript Bangalore
console.log(`\n`);

console.log(`4. Build a Student Management System\n`);
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade
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
console.log(`\n`);

console.log(`5. Book Store Inventory System\n`);
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
console.log(`\n`);

console.log(`6. What is the difference between Object.keys() and Object.entries()? Explain with examples\n`);
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
console.log(`\n`);

console.log(`7. How do you check if an object has a certain property?\n`);
const office = {
  employee: 20
}
console.log(Object.hasOwn(office, "employee")); //true
console.log(`\n`);

console.log(`8. What will be the output and why?\n`);
const anotherPerson = { name: "John" };
const newPerson = anotherPerson;
newPerson.name = "Doe";
console.log(anotherPerson.name); // Doe. Because newPerson is not a separate object. It is the reference of anotherPerson object, so anotherPerson and newPerson share the same memory location. When we change the value for newPerson.name, it also change the value for anotherPerson.name
console.log(`\n`);

console.log(`9. What’s the best way to deeply copy a nested object? Explain with examples\n`);
// The best way to deeply copy an object is to use a javaScript function structuredClone(). It copy an object with different memory reference. So it will not destroy the source object originality
const nestedObj = {
  a: 1,
  b: {c: 2}
}
const deepCopiedObj = structuredClone(nestedObj);
deepCopiedObj.b.c = 10;
console.log(nestedObj.b.c); // 2
console.log(deepCopiedObj.b.c); // 10
console.log(`\n`);

console.log(`10. Loop and print values using Object destructuring\n`);
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
for (const {name, address, age } of users) {
  console.log(`Name: ${name}, Address:${address}, Age:${age}`);
}
console.log(`\n`);


