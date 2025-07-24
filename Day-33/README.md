# Day 33 - 40 Days of JavaScript - Map, Set, WekaMap, WeakSet

## **🎯 Goal of This Lesson**

- ✅ Intro & Topics to Learn
- ✅ Objects and Arrays
- ✅ Object & Array Shortcomings
- ✅ Map
- ✅ Create & Initialize Map
- ✅ Adding Map Entries
- ✅ How to Get Map Value?
- ✅ Map Keys
- ✅ Map Properties & Methods
- ✅ MapIterators
- ✅ Convert Object to Map
- ✅ Convert Map to Object
- ✅ Convert Map to Array
- ✅ Map vs Object
- ✅ Set
- ✅ Create & Initialize Set
- ✅ Set Properties & Methods
- ✅ SetIterator
- ✅ Set and Array
- ✅ Set and Objects
- ✅ Set Theories
- ✅ WeakMap
- ✅ WeakSet
- ✅ Tasks

## **👩‍💻 🧑‍💻 Assignment Tasks**

Please find the task assignments in the [Task File](./task.md).

<br/>

## ✅ 1. Create a Map of Student IDs and Names
- Add at least 5 students.
- Retrieve a name using a student ID.
- Delete one entry and print the Map.

<br/>

### ✔ Anser
```js
  const studentIdAndName = new Map();

  // Add at least 5 students.
  studentIdAndName.set(1, "Alex");
  studentIdAndName.set(2, "Bob");
  studentIdAndName.set(3, "Simon");
  studentIdAndName.set(4, "John");
  studentIdAndName.set(5, "Denver");


  // Retrieve a name using a student ID.
  console.log(studentIdAndName.get(5));

  // Delete one entry and print the Map.
  studentIdAndName.delete(1);
  console.log(studentIdAndName);
```

<br/><br/>

## ✅ 2. Create a Set of Programming Languages

- Add duplicate languages to test uniqueness.
- Iterate and print all unique entries.

<br/>

### ✔ Anser
```js
  const programmingLanguages = new Set(["JavaScript", "Python", "Java", "C++", "C#", "Python"]);
  
  // Add duplicate languages to test uniqueness.

  programmingLanguages.add("Java"); // trying to add duplicate item to the set
  console.log(programmingLanguages); // but set size is still 5 and no duplicate value "Java" added to the set

  //Iterate and print all unique entries.

  programmingLanguages.forEach(item => {
    console.log(item);
  });
```

<br/><br/>

## ✅ 3. Compare Object vs Map for Key-Value Storage

- Store the same data in both.
- Compare insertion order and key types (e.g., object keys).

<br/>

### ✔ Anser
```js
  // Object
    // key: In the object key can only be string data type and value can be any valid JS data type 
    // Insertion order: There is no guarantee that an object will maintain its original order

  const obj = {
    "101": "Road number",
    101: "House number",
    "true": "I need a job at any coast",
    true: "TapaScript is the best YT chanel to learn JS",
  }
  
  // If we take above object as case study, the keys 101 and "101", true and "true" are the same string data types, so we will see there is only one item and last item inserted into the object. Because according to object rules, the last item will be added when it comes to the same key name. In this case the 101: "House number" and true: "TapaScript is the best YT chanel to learn JS" items added to the object

  // Though in plain eyes, we can see 101 is the number type and the true is the boolean type, but ia an objects all the keys are string data types

  console.log(typeof obj[101]); //string
  console.log(typeof obj.true); //string

  console.log(obj); //{101: 'House number', true: 'TapaScript is the best YT chanel to learn JS'}


  //Map
    //key: In Map, key can be any valid JS data type
    // Insertion order: The items of a map maintains its original insertion order

  const map = new Map([
    [101, "House number"],
    ["101", "Road number"],
    ["true", "I need a job at any coast"],
    [true,  "TapaScript is the best YT chanel to learn JS"]
  ]);

  // In the above Map() every key is the valid key. Here 101 and "101" are thw two different data types one is a number and another is string. same for the true and "true", here one is boolean and another is the string

  for (const [key, value] of map) {
    console.log(`${key}: Type of ${typeof key}`); 
    //Output: 
    // 101: Type of number
    // 101: Type of string
    // true: Type of string
    // true: Type of boolean
  }
```

<br/><br/>

## ✅ 4. Build a Contact List Using Map

- Use phone numbers as keys and names as values.
- Add, update, delete contacts.
- Search for a contact by number.

<br/>

### ✔ Anser
```js
  const contactList = new Map([
    ["1-770-736-8031 x56442", "Leanne Graham"],
    ["010-692-6593 x09125", "Ervin Howell"]
  ]);
  
  function addContact(phone, name) {
    contactList.set(phone, name);
  }

  function updateContact(existingPhone, newName) {
    contactList.set(existingPhone, newName)
  }

  function deleteContact(key) {
    contactList.delete(key);
  }

  addContact("1-463-123-4447", "Clementine Bauch");
  updateContact("010-692-6593 x09125", "John Doe");
  deleteContact("1-770-736-8031 x56442")

  console.log(contactList);
```

<br/><br/>

## ✅ 5. Remove Duplicates from Array Using Set

```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
```

Convert to a Set and back to an array with only unique values.

<br/>

### ✔ Anser
```js
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

  const arrToSet = new Set(fruits); // convert to a set
  const setToUniqArr = [...arrToSet]; //convert to a uniq array

  console.log(setToUniqArr); // Output: ['apple', 'banana', 'orange']

  // One liner
  console.log([...new Set(fruits)]);
```

<br/><br/>

## ✅ 6. Track User Logins with Set

- Add user IDs when users log in.
- Remove them on logout.
- Check if a specific user is currently logged in.

<br/>

### ✔ Anser
```js
  const userLoggedIn = new Set([1, 2, 3]);

  // Add user IDs when users log in
  function login(id) {
    userLoggedIn.add(id);
  }

  function logout(id) {
    userLoggedIn.delete(id);
  }

  function isUserLoggedIn(id) {
    return userLoggedIn.has(id);
  }

  login(4); // add 4 ID 4 from the set
  logout(1); // remove ID 1 from the set

  console.log(isUserLoggedIn(1)); // Output: false

  console.log(userLoggedIn); // Output: Set(3) {2, 3, 4}
```

<br/><br/>

## ✅ 7. Create a Map of Book Titles and Authors

- Add at least 5 entries.
- Update an author.
- Count the number of books.

<br/>

### ✔ Anser
```js
  const books = new Map();
 
  // Add at least 5 entries
  books.set("A Game of Thrones", "George R.R. Martin");
  books.set("The Hobbit", "J.R.R. Tolkien");
  books.set("The Lord of the Rings", "J.R.R. Tolkien");
  books.set("The Chronicles of Narnia", "C.S. Lewis");
  books.set("Mistborn: The Final Empire", "Brandon Sanderson");

  console.log(books);
 

  // Update an author
  books.set("The Hobbit", "Tolkien");

  // Count the number of books
  console.log(books.size);
```

<br/><br/>

## ✅ 8. Associate Metadata with DOM Elements Using WeakMap

- Create fake DOM elements (objects).
- Store related metadata in a WeakMap.
- Demonstrate benefits for garbage collection.

<br/>

### ✔ Anser
```js
  const metadata = new WeakMap();

  function setMetadata(el, info) {
    metadata.set(el, info);
  }

  function getMetadata(el) {
    return metadata.get(el);
  }

  function deleteMetadata(el) {
    metadata.delete(el)
  }

  const div = document.createElement("div");

  // Create fake DOM elements (objects).
  setMetadata(div, {visible: true});

  console.log(metadata); // Output: WeakMap {div => {…}}

  console.log(getMetadata(div)); // Output: {visible: true}

  console.log(metadata.has(div)); // Output: true
  
  deleteMetadata(div); // delete metadata

  console.log(metadata.has(div)); // Output: false

  console.log(metadata); // Output: WeakMap {} 
  // Because as soon as metadata(object) is deleted, the object is no longer in the WeakMap(). The garbage collector automatically cleaned up the memory.
```

<br/><br/>

## ✅ 9. Track Instances of a Class with WeakSet

- Define a `Session` class.
- Add each instance to a WeakSet when created.
- Discuss how it avoids memory leaks.

<br/>

### ✔ Anser
```js
  const sessionInstances = new WeakSet();

  class Session {
    constructor(id) {
      this.id = id;
      sessionInstances.add(this);
    }
  }

  const s1 = new Session(101);
  const s2 = new Session(102);

 console.log(sessionInstances.has(s1));
 console.log(sessionInstances.has(s2));

 // - A WeakSet holds objects without preventing garbage collection. Once no other references to a Session instance exist, it can be cleaned up by the garbage collector automatically.
```

<br/><br/>

## ✅ 10. Build a Shopping Cart Using Map

- Product IDs as keys and quantity as values.
- Add, remove, and update quantities.
- Calculate total items in the cart.

<br/>

### ✔ Anser
```js
  const shoppingCart = new Map([
    ["milk", "1000 ml"],
    ["bread", "250 pound"],
  ]);

  function addProduct(id, quantity) {
    shoppingCart.set(id, quantity);
  }

  function updateProduct(id, newQuantity) {
    const isValid = validation(id);

    if(isValid) {
      shoppingCart.set(id, newQuantity);
    }
  }

  function removeProduct(id) {
    const isValid = validation(id);

    if(isValid) {
      shoppingCart.delete(id);
    }
  }

  function validation(id) {
    let isValid = true;
    const checkIdExists = [...shoppingCart.keys()];

    if(!id) {
      console.warn(`id cannot be empty!`);
      isValid = false;
      return;
    }

    if(!checkIdExists.includes(id)) {
      console.warn(`${id} doesn't exist!`);
      isValid = false;
      return;
    }

    return isValid;
  }

  addProduct("butter", "250 grams")
  updateProduct("milk", "500 ml.");
  removeProduct("bread")

  console.log(shoppingCart);
```

<br/><br/>

## ✅ 11. Anagram Checker with Set

- Write a function that checks if two strings are anagrams.
- Use Sets to compare character presence.

<br/>

### ✔ Anser
```js
  function anagramsChecker(str1, str2) {
    const strSet1 = new Set(str1);
    const strSet2 = new Set(str2);

    let isAnagram;
    
    if(strSet1.size !== strSet2.size) {
      isAnagram = false;
      return;
    } 

    for (const letter of strSet1) {
      if(!strSet2.has(letter)) {
        isAnagram = false;
        break;
      } else {
        isAnagram = true;
      }
    }

    return isAnagram;
  }

  // cork and rock
  // lamp and palm
  console.log(anagramsChecker("lamp", "palm")); //Output: true
```

<br/><br/>

## ✅ 12. First Non-Repeating Character with Map

- Count character frequencies in a string using a Map.
- Return the first character with count 1.

<br/>

### ✔ Anser
```js
  function firstNonRepeatingCharacter(string) {
    const letterMap = new Map();
    
    for (const letter of string) {
      letterMap.set(letter, (letterMap.get(letter) ? 1 : 0) + 1);
    }

    for (const [key, value] of letterMap) {
      if(value === 1) {
        return key;
      }
    }
    return null;
  }

  console.log(firstNonRepeatingCharacter("oops")); //Output: p 
```

<br/><br/>

## ✅ 13. Measure Performance: Object vs Map

- Insert 100,000 key-value pairs into both.
- Use `console.time()` to benchmark speed.

<br/>

### ✔ Anser
```js
  // Checking performance for object insertion
  console.time();
    const object = {}
    for (let index = 0; index < 1000000; index++) {
      object[index] = index; 
    }
  console.timeEnd();


  // Checking performance for map insertion
  console.time();
    const map = new Map();
    for (let index = 0; index < 1000000; index++) {
      map.set(index, index)
    }
  console.timeEnd();
```

<br/><br/>

## ✅ 14. Voting App with Set to Prevent Duplicate Votes

- Track user IDs in a Set.
- Allow each ID to vote only once.

<br/>

### ✔ Anser
```js
  const voterSet = new Set();

  function votingApp(voter) {
    
    if(voterSet.has(voter)) {
      console.warn(`${voter} voted already! cannot vote again.`);
      return;
    }

    voterSet.add(voter);

    console.log(voterSet);
  }

  votingApp("Nasir"); // Output: Set(1) {'Nasir'}
  votingApp("Shiplu"); // Output: Set(2) {'Nasir', 'Shiplu'}
  votingApp("Azlan"); // Output: Set(3) {'Nasir', 'Shiplu', 'Azlan'}
  votingApp("Nasir"); // Output: Nasir voted already! cannot vote again.
```

<br/><br/>

## ✅ 15. Employee Registry Using Object Keys in Map

- Use employee objects as keys.
- Add and retrieve job-related info.
- Show that Object keys don't work similarly in plain objects.

<br/>

### ✔ Anser
```js
  const employee = new Map();

  function registerEmployee(emp) {    

    const addEmployee = () => {
      employee.set(emp, true);
    }
    addEmployee();

    const employeeInfo = () => {
      for (const [key, value] of employee) {
        console.log(`\n
          Employee Info\n
          Name: ${key.name}
          Email: ${key.email}
          Department: ${key.department}
        \n`);
      }
    }
    employeeInfo();
  }


  const empObj1 = {
    name: "John",
    email: "john@email.com",
    department: "Development"
  }
  registerEmployee(empObj1);  //Output:  
                                // Employee Info
                                // Name: Denver
                                // Email: denver@email.com
                                // Department: Design

                                
  const empObj2 = {
    name: "Denver",
    email: "denver@email.com",
    department: "Design"
  }
  registerEmployee(empObj2);  // Output:  
                                // Employee Info
                                // Name: Denver
                                // Email: denver@email.com
                                // Department: Design
```