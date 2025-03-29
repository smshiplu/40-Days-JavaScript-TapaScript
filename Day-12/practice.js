console.log(`Day 12: Mastering JavaScript Objects With Real-World Examples 🤩`);
// Using special characters in key name and how to access and delete those keys
const user = {
  name: "Azlaan",
  age: 1.5,
  "is Baby": true
}
user["can walk"] = true;
console.log(user["can walk"]);
delete user["is Baby"];
console.log(user["is Baby"]); //undefined
console.log(user);

// Accessing key and retrieving the value using dynamic value
let someKey = "name";
console.log(user[someKey]); //print Azlaan

// Create key using dynamic value or variable
// const userInput = prompt("Enter a Car name");
let userInput = "BMW";
const car = {
  [userInput]: 5
}
console.log(car);

// Create object using constructor function
function Car(name, model) {
  this.name = name;
  this.model = model
}

const tesla = new Car("Tesla", "X1");
const BMW = new Car("BMW", "X1");
console.log(tesla);
console.log(BMW);

//Creating object using Javascript Object() constructor;
const person = new Object();
person.name = "Nihan";
person.age = 11;
console.log(person);

// Create Object using Factory Function
function createUser(name, password) {
  return {
    name,
    password,
    message(){
      console.log("hello " + this.name);
    }
  }
}
const user1 = createUser("Azlaan", "123");
console.log(user1); // {name: "Nihan", password: "abc", message: fn()}
user1.message(); // retrieving method/function from object
const user2 = createUser("Nihan", "abc");
console.log(user2);

// Nested Object
let profile = {
  name: "Nasir",
  company: "NoCompany",
  address: {
    thana: "Sirajdikhan",
    district: "Munshiganj",
    message: () => {
      console.log("Welcome to Munshiganj");
    }
  },
  salary: null
}
console.log(profile.address.thana); //Shirajdikhan
console.log(profile.address.message()); // Welcome to Munshiganj

// Checking a key for value
console.log("salary" in profile); //true

// Iterate through object using for in loop
for (const key in profile) {
  console.log(key);
  console.log(profile[key]);
}

// Object.keys() get all the key of an object as an array
const keys = Object.keys(profile);
console.log(keys);

// Object Reference
let fruit = {name: "mango"}
let oneMoreFruit = {mango: "mango"};
console.log(fruit === oneMoreFruit); // false, because fruit and oneMoreFruit is complexly different object.
fruit = oneMoreFruit;
console.log(fruit === oneMoreFruit); // true, now fruit holds the oneMoreFruit's memory reference

//Static Object
//Copying and marge object using Object.assign(). it will copy source to target. if there is commonality in key between two object, then source object will be copied to target object 
const target = {p: "1", a: "2"}
const source = {a: "3", b: "4"}
const returnedObj = Object.assign(target, source);
console.log(returnedObj);

// Copy with difference reference. But It's a shallow copy, nested object will not be copied.
const obj1 = {name: "Shiplu"};
const obj2 = Object.assign({}, obj1);
console.log(obj2);
console.log(obj1 === obj2);

// Object.assign() create a new object with different memory reference. but in case of nested object it copies the reference only

const obj3 = {
  a: 1,
  b:{c: 2}
}
const obj4 = Object.assign({}, obj3);
obj4.a = 100;
console.log(obj4.a); // 100 
console.log(obj3.a); // 1

// obj4.b.c = 3;
console.log(obj4.b.c); // 3
console.log(obj3.b.c); // expected 2 but giving the value 3. Because Object.assign() change the nested object's key value

// Avoiding Object.assign() issues it it recommended to use structuredClone to deep copy
const obj5 = structuredClone(obj3);
obj5.a = 300
console.log(obj5.a); // 300
console.log(obj3.a); // 1
obj5.b.c = 30
console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 3

// Object.entries() Create arrays on each key and value
const myObj = {
  a: "Shiplu",
  b: 32
}
const myObj2 = Object.entries(myObj);
console.log(myObj2); // ["a", "Shiplu"] [ "b": 32]

// Object.fromEntries() converts an array to object
const entries =  new Map([
  ["name", "shiplu"],
  ["age", 40]
]);

const entryObj = Object.fromEntries(entries);
console.log(entryObj);


// Object.freeze() to freeze or lock an object so that it never get changed. It helps to create an object immutable
const emp = {
  salary: 100 
}
Object.freeze(emp);
emp.name = "Shiplu";
emp.salary = 200;
console.log(emp);

//Object.isFrozen() Check is an object is frozen or not 
console.log(Object.isFrozen(emp));

// Object.seal() method helps to make an object immutable. keys can not be added, deleted but a key value can be updated

const department = {
  name: "finance"
}
Object.seal(department);
department.employee = 50;
delete department.name;
department.name = "accounts"
console.log(department);

// Object.hasOwn() method to check if an object has it''s specific property 
console.log(Object.hasOwn(department, "dept")); //false


//Destructuring 

const student = 	{
  "name": "Quin Valentine",
  "phone": "(719) 202-4795",
  "email": "fusce.dolor@aol.couk",
  "subject": ["Math", "English", "History"],
  "std": "5",
  "parents": {
    "father": "John Doe",
    "mother": "Sofia",
    "email": "parents@example.com"
  },
  "address": {
    "postalZip": "14186",
    "country": "United States",
    "street": "Ap #774-7705 Sagittis St."
  }
}

// destructuring keys as variable
const { name } = student;
console.log(name);

// adding new key value while destructuring
const { phone, meal="bread" } = student;
console.log(name, phone, meal);

// adding new key value dynamically while destructuring
const {subject, numOfSub = subject.length} = student;
console.log(subject, numOfSub);

// make alias of key name while destructuring. but after creating an alias of a key, it is not possible to use previous key name again 
const {std: standard} = student;
console.log(standard);
// console.log(std); // here it will create reference error


//destructuring nested object
const {address: {postalZip}} = student;
console.log(postalZip);

// destructuring as function's parameters
function sendEmail({parents: {email}}) {
  console.log(`Email sent to ${email}`);
}
sendEmail(student);

//destructure function returning object
function anotherStudent() {
  return {
    "name": "Quin Valentine",
    "phone": "(719) 202-4795",
    "email": "fusce.dolor@aol.couk",
    "subject": ["Math", "English", "History"],
    "std": "5",
    "parents": {
      "father": "John Doe",
      "mother": "Sofia",
      "email": "parents@example.com"
    },
    "address": {
      "postalZip": "14186",
      "country": "United States",
      "street": "Ap #774-7705 Sagittis St."
    }
  }
}
const {name: anotherName, subject: anotherSubject} = anotherStudent();
console.log(anotherName, anotherSubject);


// get object's value which is inside an array using for of loop
const students = [
  {
    name: "Alex",
    grade: "A"
  },
  {
    name: "John",
    grade: "A+"
  },
  {
    name: "Azlaan",
    grade: "B"
  },
]

for (const {name, grade} of students) {
  console.log(name, grade);
}

// Optional chaining
const employee = {
  salary: {
    basic: 100
  }
}
// now if want to get the value which is not inside object 
console.log(employee.salary);
console.log(employee.department); //undefined
// console.log(employee.department.name); //error
console.log(employee.department?.name); // if available return value or not it's undefined














