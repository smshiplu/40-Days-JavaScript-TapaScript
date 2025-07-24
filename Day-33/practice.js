console.log(`Day 33 - 40 Days of JavaScript - Map, Set, WekaMap, WeakSet\n`);

// creating a map with default value initialization
{
  const map = new Map([
    ["name", "Shiplu"],
    ["email", "shiplu@email.com"]
  ]);
  console.log(map);
}

// creating map and adding values to map using set() method
{
  const map = new Map();
  map.set("name", "shiplu");
  map.set("email", "shiplu@email.com");
  console.log(map);

  // getting value from map using get() method

  console.log("Email is:", map.get("email"));
}

// map keys
{
  const funMap = new Map();
  funMap.set(101, "My house number");
  funMap.set(true, "I need a job");

  const obj = {name: "azlan"};
  funMap.set(obj, true);

  console.log(funMap);

  // map properties and methods

  //size
  console.log(funMap.size); // 3
  
  // has() to check an item has a specific key
  console.log(funMap.has(101)); // true
  console.log(funMap.has("101")); // false
  
  //delete
  funMap.delete(101);
  console.log(funMap);

  //clear
  funMap.clear();
  console.log(funMap);
}

// MapIterators
{
  const ageMap = new Map([
    ["Sam", 34],
    ["Alex", 40],
    ["john", 43]
  ]);

  // Map.key()
  const keyMapIterator = ageMap.keys();
  console.log(keyMapIterator);
  
  keyMapIterator.forEach(key => {
    console.log(key);
  });


  // Map.values()
  const valueMapIterator = ageMap.values();
  console.log(valueMapIterator);

  // Map.entries()
  const entriesMapIterator = ageMap.entries();
  console.log(entriesMapIterator);
  
  entriesMapIterator.forEach((entryArr, idx)  => {
    entryArr.forEach((item) => {
      console.log(item);
    })
  });

  // direct get keys and values from Map()
  ageMap.forEach((value, key) => {
    console.log(`${key} age is ${value}`);
  });


  //alternatively we can achive this using for of method

  for (const [key, value] of ageMap) {
    console.log(`${key} is ${value} years old`);
  }
}

//Conversion
{
  // Convert object into a map

  const address = {
    "alex": "UAS",
    "azlan": "Bangladesh",
    "nihan": "UK"
  }

  // const addEntries = Object.entries(address);
  const addressToMap = new Map(Object.entries(address))
  console.log(addressToMap);
  

  // Convert a map into an object
  const mapToObject = Object.fromEntries(addressToMap);
  console.log(mapToObject);


  // Convert map into an array
  const productPrice = new Map([
    ["Milk", 300],
    ["Bread", 340],
    ["Butter", 400],
  ]);

  const mapToArray = Array.from(productPrice);
  console.log(mapToArray);

  //alternative way using spread operator
  console.log([...productPrice]);  
}


// Set in javascript: set is the built in object in javascript which contains unique elements
{
  // creating set with array
  const fruitSet = new Set(["🍍", "🍌", "🍉", "🍇", "🥭"]);
  console.log(fruitSet);
  
  // adding items to the set object using add() method
  const saladSet = new Set();
  saladSet.add("🍅");
  saladSet.add("🥒");
  saladSet.add("🥕");
  saladSet.add("🥕"); //duplicate item won't be added

  console.log(saladSet);

  console.log(`Does the salad has The Cucumber? `, saladSet.has("🥒")); //true
  
 

  // delete() method
  saladSet.delete("🥕")
  console.log(saladSet);

  // clear() method to empty a set
  // saladSet.clear();
  // console.log(saladSet);


  // Set Iterator with keys()
  const keysOfSet = saladSet.keys();
  keysOfSet.forEach(key => {
    console.log(key);
  });

  // Set Iterator with values()
  const valuesOfSet = saladSet.values();
  console.log(valuesOfSet);

  // Set Iterator with entries() 
  console.log(saladSet.entries());
}

// Set and Array
{
  // Convert  a set into an array
  const setToArr = [...new Set(["🍍", "🍌", "🍉", "🍇", "🥭", "🍍"])];
  console.log(setToArr);

  // Convert an array into set
  const fruits = ["🍍", "🍌", "🍉", "🍇", "🍌", "🥭", "🍍"]
  const arrToSet = new Set(fruits);

  console.log(arrToSet);
}


// Set and Object
{
  let person = {
    name: "alex",
    age: 42
  }

  const objToSet = new Set();
  objToSet.add(person);

  console.log(objToSet);

  objToSet.name = "bob"; // changing the value of the object

  console.log(objToSet); 

  person = {}; // here person is complexly different reference(empty object created in a different memory location) form previous reference, thats why new object will get added as to the Set

  objToSet.add(person);

  console.log(objToSet);
}

// Set theories
{ 
  // Union: A new set with the uniq value from two sets
  const first = new Set([1, 2, 3]);
  const second = new Set([3, 4, 5]);
  console.log(first.union(second)); // Set(5) {1, 2, 3, 4, 5}

  // alternative way of doing union
  console.log(new Set([...first, ...second]));
  


  // Intersection: A new set with the common value from the two sets
  console.log(first.intersection(second)); // Set(1) {3}

  // alternative way of doing intersection
  console.log(new Set([...first].filter(item => second.has(item))));
  
  
  //Difference: A new set with the values which are not common in two sets and values are not in the second set
  console.log(first.difference(second)); // Set(2) {1, 2}

  // alternative way of doing difference
  console.log(new Set([...first].filter(item => !second.has(item))));
  

  // Superset/Subset: A new set with the combination of two set one is super set and another is subset. The super set contains all the elements form sub set along with it's own elements. Here number is the superset of subset

  const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
  const the4Table = new Set([4, 8, 12, 16, 20]);

  console.log(numbers.isSupersetOf(the4Table));
  
  // alternative way of check isSupersetOf
  function isSupersetOf(superSet, subSet) {
    const boolArr = [];
    subSet.forEach(item => {
      boolArr.push(superSet.has(item));
    });

    return boolArr.includes(false) ? false : true;
  }
  console.log(isSupersetOf(numbers, the4Table)); //Output: false
}

// WeakMap: The WeakMap() Object is the same as Map() but the WeakMap() is used to properly free up memories which has been used as a reference. In case of garbage collection the WeakMap() guarantee that when the object has no existence in the memory, the the reference of that object it must be cleaned up from the memory. In the Map() the key can be any valid data types but in the WeakMap() the key must be an object type.
// Supported methods: set(), get(), has(), delete(),

{
  let user = {
    name: "Alex",
    age: 36
  }

  const uMAp = new Map();
  uMAp.set(user, true);
  
  user = null;
  console.log(uMAp); // though user is null, but user is still in the map
}

{
  // We can solve the above problem using WeakMap()

  let person = {
    name: "Bob",
    age: 40
  }

  const wMap = new WeakMap();
  wMap.set(person, true);

  console.log(wMap.has(person));
  person = null;

  console.log(wMap.has(person)); // As soon as person is null, the wMap doesn't contain the person 
  

  // A real life example of WeakMap()

  const metadata = new WeakMap();

  function setMetadata(el, info) {
    metadata.set(el, info)
  }

  function getMetadata(el) {
    return metadata.get(el)
  }

  const div = document.createElement("div");
  setMetadata(div, {visible: true});
  
  console.log(getMetadata(div));
}


//WeakSet(): The WeakSet() sam as Set() but the WeakSet() data structure is used for automatic garbage collection
// Supported methods: set(), get(), has(), delete()

{
  let user1 = {name: "Alex"}
  let user2 = {name: "Bob"}

  const onlineUsers = new WeakSet();
  onlineUsers.add(user1);
  onlineUsers.add(user2);

  console.log(onlineUsers.has(user1));
  
  user1 = null;

  console.log(onlineUsers.has(user1));
}
