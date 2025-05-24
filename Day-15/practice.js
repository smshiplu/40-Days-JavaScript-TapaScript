console.log(`Day 15: JavaScript Array Master Course - Beginner to PRO 🤩\n`);
console.log(`\n`);

console.log(`✅ 3.How to Create an Array in JavaScript?\n`);
console.log(`Ans:
Way-1. Square brackets [] 
Way-2. Array constructor (new Array())  
`);
console.log(`\n`);
console.log(`✅ 4.How to Get Elements from an Array in JS?\n`);
console.log(`Ans:
Way-1. By accessing index position
Way-2. Dynamically by iterating through loop
`);
console.log(`\n`);

console.log(`✅ 5.How to Add Elements to an Array in JS?\n`);
console.log(`Ans:
Method-1. Using push() method. Which will add element in an array at the end and it's a destructive method. After inserting the element the push() method returns the total number of items in array.

Method-2. Using unshift() method. Which will add element at the first position of an array and it's a destructive method. After unshift() operation it returns the total number of array elements.

Examples:
`);
const salad  = ['🍅','🍆', '🥔', '🥕', '🥒'];
console.log("Original array", salad);
const pushRet = salad.push('🍠');
console.log(`After applying push() method. 'Potato' added at the end and it returns ${pushRet} as the total number of array items`, salad);

const unshiftRet = salad.unshift("🥜");
console.log(`After applying unshift() method. 'Peanut' added at the first position of the array and it returns ${unshiftRet} as total elements of array after the unshift() operation done`, salad);
console.log(`\n`);

console.log(`✅ 6.How to Remove Elements from an Array in JS?\n`);
console.log(`Ans:
Method-1. To remove the single element from the array pop() method is used. It changes the original array and remove the last element from array. It returns the last element which has been removed.

Method-2. To remove the first element from an array shift() method is used. It's a destructive method and it returns elements which has been removed.

Examples:
`);
const popRet = salad.pop();
console.log(`After pop() operation the last element 'Potato' is removed and it returns ${popRet} last element which has been removed`, salad);

const shiftRet = salad.shift();
console.log(`After shift() operation the first element 'Peanut' is removed and it returns ${shiftRet} first element which has been removed`, salad);
console.log(`\n`);

console.log(`✅ 7.How to Copy and Clone an Array in JS?\n`);
console.log(`Ans:
Method-1. To copy or clone an array slice() method is used. It's an immutable method, means it doesn't change the original array and creates completely new array. With this method we can copy entire array or specific portion of an array.

Method-2. Spread operator(...).

Examples:
`);
const copySalad = salad.slice();
console.log(`After slice() operation new copy of array has been created and  means original array and copied array are completely tow different array`, "Original array:", salad, "Copied array:", copySalad, "Check equality:", salad === copySalad);
console.log(`\n`);

console.log(`✅ 8.How to Determine if a Value is an Array in JS?\n`);
console.log(`Ans:
To check if an value is an array a method isArray() on Array constructor is used (Array.isArray(value)). It returns true if a value is an array.

Examples:
console.log(Array.isArray(salad)); //true
console.log(Array.isArray("ABC")); // false
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
`);
console.log(Array.isArray(salad));
console.log(Array.isArray("ABC"));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(`\n`);

console.log(`✅ 9.Array Destructuring in JavaScript\n`);
console.log(`Ans:
1. To assign a default value to a variable while destructuring it has to added at the end of the destructuring.
2. To skip a value while destructuring a comma (,) should be used.

Examples:
const [tomato, , potato, carrot, cucumber, greenLeaf="🥬" ] = salad;
console.log(greenLeaf); //🥬
console.log(tomato); //🍅
console.log(potato); //🥔
`);
const [tomato, , potato, carrot, cucumber, greenLeaf="🥬" ] = salad;
console.log(greenLeaf);
console.log(tomato);
console.log(potato);
console.log(`\n`);

console.log(`✅ 10.How to Use the Rest Parameter and Spread Operator in JS?\n`);
console.log(`Ans:
1.Rest Parameter: While destructuring array the rest parameter(...) is used to make a new array with the rest of the elements of array. Example bellow:

const [tomato, eggplant, ...rest] =  ['🍅','🍆', '🥔', '🥕', '🥒'];
console.log(rest) // ['🥔', '🥕', '🥒']

2.Spread Operator: The spread operator(...) is used to copy, clone of an array with ne reference. It also merge two operator together. Example below:

Copy Array:
const veg = ['🍅','🍆', '🥔', '🥕', '🥒'];
const newVeg = [...veg];
console.log(newVeg) // ['🍅','🍆', '🥔', '🥕', '🥒'];

Merge Array:
const fruits = ["🍇", "🍉", "🍌", "🍍"]
const fruitsVeg = [...veg, ...fruits];
console.log(fruitsVeg); //['🍅', '🍆', '🥔', '🥕', '🥒', '🍇', '🍉', '🍌', '🍍'];
`);
console.log(`\n`);

console.log(`✅ 11.How to Swap Values with Destructuring?\n`);
console.log(`Ans:
While destructuring  it is merely possible swap the value between variables. Example below:

let first = "😭";
let second = "😁";
[first, second] = [second, first];
console.log(first); //😁
console.log(second); //😭
`);
console.log(`\n`);

console.log(`✅ 12.The length property\n`);
console.log(`Ans:
Use case 1: To check length of an array

const emojis = ["😭", "😁"];
const anotherEmo = new Array(3);
console.log(emojis); // 2
console.log(anotherEmo); // 3

Use case 2: To increase the length of an array

const veges = ['🍅','🍆', '🥔',];
veges.length = 10;
console.log(veges.length); // 10

Use case 3: To empty an array

const anotherVeges = ['🍅','🍆', '🥔',];
veges.length = 0;
console.log(veges.length); // 0
`);
console.log(`\n`);

console.log(`✅ 13.JavaScript Array Methods. How to Create, Remove, Update, and Access Arrays in JavaScript?\n`);
console.log(`Ans:
👉 1.The concat() array method: This method merges arrays together. It doesn't change the original arrays and it merges as many arrays as we want. It doesn't change the source array.

Examples:
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const mergedArr = arr1.concat(arr2, arr3);
console.log(mergedArr) //[1, 2, 3, 4, 5, 6, 7, 8, 9];

👉 2.The join() array method: join() method joins all the elements together using a separator. The default separator is comma(,) and it returns string. It doesn't change the source array.

Example 1:
const snacks = ["🍕","🍔","🍩","🍪"];
const joinedSnacks = snacks.join();
console.log(joinedSnacks); //🍕,🍔,🍩,🍪

Example 2:
const snacks = ["🍕","🍔","🍩","🍪"];
const joinedSnacks = snacks.join("<=>");
console.log(joinedSnacks); //🍕<=>🍔<=>🍩<=>🍪

Example 3:
const joinedArr = [].join();
console.log(joinedArr); // ""

👉 3.The fill() array method: fill() method is used to fill the array elements with a particular value. It's an destructive method. It takes three arguments. The first parameter that we want fill the element with, second parameter is the index number that where from we want to fill and the third parameter is the length number of the element that where till we want to fill with pink value

Example 1:
const colors = ["red", "green", "blue"];
colors.fill("pink");
console.log(colors); //['pink', 'pink', 'pink']

Example 2:
const colors = ["red", "green", "blue"];
colors.fill("pink", 1, 3);
console.log(colors); //['red', 'pink', 'pink']

👉 4.The includes() array method: includes() method is used to check if any particular element is exist or not inside an array. It's a non destructive and case sensitive method.

Examples:
const names = ["Azlan", "Nihan", "Shiplu"];
console.log(names.includes("Nihan")) // true
console.log(names.includes("nihan")) // false 
console.log(names.includes("Mita")) // false

👉 5.The indexOf()/lastIndexOf() array method: indexOf() method is used to find the index number of an particular element in an array. if the element is exist it returns the index number of that element otherwise it returns negative number (-1). If there are more elements with the same value in the array then there is a method lastIndexOf(), which will return the index number of the last element among the same elements. In terms of searching a string value index it is case sensitive.

Example:
const names = ["Azlan", "Nihan", "Shiplu", "Azlan"];
console.log(names.indexOf("Nihan")) // 1
console.log(names.indexOf("John")) // -1
console.log(names.indexOf("Azlan")) // 0
console.log(names.lastIndexOf("Azlan")) // 3

👉 6.The reverse() array method: As the name suggests, reverse() method reverse all the elements of an array. It's a destructive method.

Example:
const names = ["first", "second", "third"];
console.log(names.reverse());

👉 7.The sort() array method: sort() method is used ot sorting the elements. It converts the elements into strings. It's default sorting order is ascending and it changes the original array.

Example: 1
const names = ["chandan", "eti", "belal", "azlan", "deepak" ];
console.log(names.sort()) // ['azlan', 'belal', 'chandan', 'deepak', 'eti']

Example: 2
const names = ["chandan", "eti", "belal", "choitee", "azlan", "deepak" ];
console.log(names.sort((a, b) => {
  return a===b ? 0 : a > b ? -1 : 1
})) // ['eti', 'deepak', 'choitee', 'chandan', 'belal', 'azlan']

Example 3: 
const ages = [2, 1000, 10, 3, 23, 12, 21];
console.log(ages.sort((a,b) => {
  return a === b ? 0 : a < b ? -1 : 1
})); //[2, 3, 10, 12, 21, 23, 1000]


👉 8.The splice() array method: splice() method is a super hero method in js. It is used to remove, add and update element. It's a mutable method. When it removes the element(s), it returns those element as an array.
slice(start, deleteCount, itemToAddOrReplace)

Example 1:
const names = ['azlan', 'belal', 'chandan', 'deepak', 'eti'];
const removedName = names.splice(1, 2, x, y);
console.log(removedName); //['belal', 'chandan']
console.log(names); //['azlan', 'x', 'y', 'deepak', 'eti'];

Example 2:
const names = ['azlan', 'belal', 'chandan', 'deepak', 'eti'];
const removedName = names.splice(2, 0, "x", "y");
console.log(removedName); // []
console.log(names); // ['azlan', 'belal', 'x', 'y', 'chandan', 'deepak', 'eti'];

👉 9.The at() Method: at() method is the new addition in js. it is used to access the element from backward to forward using negative (-) value. The last element's index of the array is -1 and it goes so on.

Examples:
const junkFood = ["🍕","🍔","🍩","🍪"];
console.log(junkFood.at(-1)) //🍪
console.log(junkFood.at(-2)) //🍩
console.log(junkFood.at(-3)) //🍔

👉 10.The copyWithin() Method: copyWithin() method is used to copy the array elements within the array. (target, start, end). target is the index number that where the copied elements will be paste, start is the index number that where from the copy will begin and end is the element's length that where till the elements will be copied.

Example 1:
const numberArr = [1,2,3,4,5,6];
console.log(numberArr.copyWithin(0, 3, 6)) //  [4,5,6,4,5,6]

Example 2:
const numberArr = [1,2,3,4,5,6];
console.log(numberArr.copyWithin(0, 2)) //  [3, 4, 5, 6, 5, 6]; go till the length of the array

👉 11.The flat() Method: flat() method flatten the multidimensional array. If any argument is not specified, it will flatten only one level multidimensional array. 

Example 1:
const numberArr = 1,2,[3,4]];
console.log(numberArr.flat()) // [1,2,3,4]

Example 2:
const numberArr = [1,2,[3,4,[5,6,[7,8]]]];
console.log(numberArr.flat(2)) // [1,2,3,4,5,6,[7,8]];

Example 3:
const numberArr = [1,2,[3,4,[5,6,[7,8]]]];
console.log(numberArr.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8]

👉 12.Grouping elements in Array: Object.groupBy() method is very useful to group the objects by ist's keys. It returns the objects and items are grouped by the given parameters inside arrays. 

Example 1: 
const employees = [
{name: "alex", dept: "engineering", salary: 5000},
{name: "john", dept: "marketing", salary: 4000},
{name: "bob", dept: "engineering", salary: 3000},
{name: "rob", dept: "marketing", salary: 7000},
{name: "diana", dept: "hr", salary: 6000},
{name: "jean", dept: "sales", salary: 5000}
]

const groupedBtDept = Object.groupBy(employees, ({dept}) => dept);
console.log(groupedBtDept); // {engineering: Array(2), marketing: Array(2), hr: Array(1), sales: Array(1)}

Example 2: 
const employees = [
{name: "alex", dept: "engineering", salary: 5000},
{name: "john", dept: "marketing", salary: 4000},
{name: "bob", dept: "engineering", salary: 3000},
{name: "rob", dept: "marketing", salary: 7000},
{name: "diana", dept: "hr", salary: 6000},
{name: "jean", dept: "sales", salary: 5000}
]

const groupedBySalary = Object.groupBy(employees, ({salary}) => {
  return salary >= 5000 ? "Salary is 5k+" : "Salary is below 5K";
});
console.log(groupedBySalary); // {Salary is 5k+: Array(4), Salary is below 5K: Array(2)}
`);
console.log(`\n`);

console.log(`✅ 14.Immutability\n`);
console.log(`Ans:
👉 1.The toReversed() method: toReversed() method's operation is as same as reverse() method. But toReversed() method is immutable.

Example: 
const numbers = [1,2,3,4,5];
console.log(numbers.toReversed()); //[5, 4, 3, 2, 1]
console.log(numbers); //[1,2,3,4,5];

👉 2.The toSorted() method: toSorted() method is as same as sort() method, but toSorted() method is immutable.

Example 1:
const names = ["chandan", "eti", "belal", "azlan", "deepak" ];
console.log(names.toSorted()); //['azlan', 'belal', 'chandan', 'deepak', 'eti']
console.log(names); //['chandan', 'eti', 'belal', 'azlan', 'deepak']

Example 2: 
const names = ["chandan", "eti", "belal", "azlan", "deepak" ];
console.log(names.toSorted((a, b) => {
  return a === b ? 0 : a > b ? -1 : 1;
})); // ['eti', 'deepak', 'chandan', 'belal', 'azlan'];
console.log(names) // ["chandan", "eti", "belal", "azlan", "deepak" ];

👉 3.The toSpliced() method: toSpliced() is as same as splice() method, ut it isn't mutable. (start, deleteCount, itemsToAdd)

Example 1: 
const names = ["chandan", "eti", "belal", "azlan", "deepak" ];
console.log(names.toSpliced(0, 1, "X")) //['X', 'eti', 'belal', 'azlan', 'deepak']
console.log(names); //["chandan", "eti", "belal", "azlan", "deepak" ];

Example 2:
const names = ["chandan", "eti", "belal", "azlan", "deepak" ];
console.log(names.toSpliced(1, 0, "X")) // ["chandan", "X", "eti", "belal", "azlan", "deepak" ];
console.log(names); // ["chandan", "eti", "belal", "azlan", "deepak" ];

👉 4.The with() method: with() method is used to replace the value of an array. It doesn't mute the original array and returns new array. It also works from the reverse element. to access elements from the backward index the negative (-1) index number will be used.

Example 1: 
const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.with(2, 1000);
console.log(newArr); //  [1, 2, 1000, 4, 5];
console.log(numbers); //  [1, 2, 3, 4, 5];

Example 2: 
const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.with(-1, 5000);
console.log(newArr) //[1, 2, 3, 4, 5000];
`);
console.log(`\n`);

console.log(`✅ 15.Static Array Methods in JavaScript\n`);
console.log(`Ans:
👉 1. The Array-Like and Array.from(): There are many prototypes which are not array but the have some features like array. HTMLCollection, arguments inside a function are examples of that. It's possible to convert that array like things to an array with the Array.from() method.

Examples 1:
const lis = document.getElementsByTagName("li");
console.log(lis); // HTMLCollection(10) [li, li, li, li, li, li, li, li, li, li]
Array.from(lis).forEach((element, index) => {
  console.log(element, index);
});

Example 2:
function checkArrayLike() {
  console.log(arguments);
  console.log(Array.from(arguments));
  Array.from(arguments).forEach(item => {
    console.log(item);
  })
}
checkArrayLike(1, 10);

👉 2.The Array.fromAsync() array method: Array.fromAsync() method is used to create array from array like.It works same as Array.from() but it returns Promise. To get the actual array Promise need to be resolved.

Example 1: 
const promiseList = Array.fromAsync(document.getElementsByTagName("li"));
console.log(promiseList);
promiseList.then(list => console.log(list)); //[li, li, li, li, li, li, li, li, li, li]

Example 2:
const ret = Array.fromAsync({
  0:Promise.resolve("smshiplu"),
  1:Promise.resolve("apple"),
  2:Promise.resolve("microsoft"),
  length: 3
}).then(data => console.log(data))
console.log(ret);

👉 3.The Array.of() array method: Array.of() method is used to create array using Array instance with any number of arguments, and arguments can be any type.

Example: 
const a = new Array(1,2,3); //[1,2,3]
const b = [4,5,6] // [4,5,6]
const c = Array.of(1,true, "str", {a:1}, [1,2,3]) // [1,true, "str", {a:1}, [1,2,3]]
`);
console.log(`\n`);

console.log(`✅ 15.Array Iterator Methods in JavaScript\n`);
console.log(`Ans:
const customerList = [
  { 
    "id": "001",
    "fname": "Emily",
    "lname": "Johnson",
    "age": 28,
    "gender": "f",
    "married": false,
    "expense_amount": 245.50,
    "product_purchased": ["Wireless Earbuds", "Smart Watch", "Phone Case"]
  },
  {
    "id": "002",
    "fname": "Michael",
    "lname": "Chen",
    "age": 42,
    "gender": "m",
    "married": true,
    "expense_amount": 899.99,
    "product_purchased": ["4K Television", "Soundbar", "HDMI Cable", "Book"]
  },
  {
    "id": "003",
    "fname": "Sarah",
    "lname": "Williams",
    "age": 35,
    "gender": "f",
    "married": true,
    "expense_amount": 156.75,
    "product_purchased": ["Yoga Mat", "Resistance Bands", "Water Bottle", "Book"]
  },
  {
    "id": "004",
    "fname": "David",
    "lname": "Rodriguez",
    "age": 31,
    "gender": "m",
    "married": false,
    "expense_amount": 524.30,
    "product_purchased": ["Gaming Mouse", "Mechanical Keyboard", "Mouse Pad", "Book"]
  },
  {
    "id": "005",
    "fname": "Jessica",
    "lname": "Kim",
    "age": 26,
    "gender": "f",
    "married": false,
    "expense_amount": 78.20,
    "product_purchased": ["Lipstick", "Mascara", "Makeup Brushes"]
  }
]

👉 1.The filter() array method: filter() method takes the test function and this function iterating on every elements on array and it checks the certain conditions to filtering out and returns the elements if condition is true.

Example:
const middleAgedCustomers = customers.filter(customer => {
  return customer.age >= 40;
})
console.log(middleAgedCustomers);

👉 2.The map() array method: map() method is is a immutable method and it takes the call back function as an arguments which transforms the elements and returns the newly transformed array.

Example: 
const customerWithFullname = customerList.map(customer => {
  let title;
  if(customer.gender === "m") {
    title = "Mr.";
  } else if(customer.gender === "f" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss."
  }
  customer["fullname"] = title + " " + customer.fname + " " + customer.lname;
  return customer;
});
console.log(customerWithFullname); // returns transformed array with the new key fullname

👉 3.The reduce() array method: reduce() method takes a reduce function and it returns the total accumulated value. It takes four parameters as arguments like accumulator, currentValue, index and array but we are interested in accumulator and currentValue. It also takes a initial value as a parameter which value is initiated for the accumulator. In every iteration of the array elements which is current value will be added to the accumulator value and  total summation will be returned. In every iteration the total returned value will be considered as accumulator value.

Example 1:
const numbers = [1,2,3,4,5];
const total = numbers.reducer((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 
console.log(total); // 15

Example 2:
Find the average age of the customer who buy books

let count = 0;
const total = customerList.reduce((accumulator, customer) => {
  if(customer.product_purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);
console.log("The average age of customer is ", Math.floor(total / count)); // 36

👉 4. The reduceRight() array method: reduceRight() method same as reduce() method but it iterates form the right most elements to the left. When it comes to subtraction, it differs from the reduce() method.

Example:
const numbers = [100, 40, 15];
const subs = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator = accumulator - currentValue;
});
console.log(subs); // 125

👉 5.The some() array method: some() method takes a test call back function as an arguments. This function iterates through the elements and checks if at least one condition is true. if it's true then it stops iteration and return true or any condition is not matched then it returns false.

Example:
let count = 0;
const youngCustomer = customerList.some((customer) => {
  count++; 
  return customer.age < 30;
});
console.log(count); // 1 because as soon as it find a customer whose age is below 30 it stops iteration and returns true. But in the customerList object array there are many ages below 30
console.log(youngCustomer) // true

👉 5.The every() array method: every() method also takes test function and it iterates every elements and checks if the condition is true on every elements, the it returns true otherwise false.

Example: 
const isEveryCustomerMarried = customerList.every(customer => {
  return customer.married === true;
});
console.log("Is every customer married? ", isEveryCustomerMarried); // false, Because in our customer list every customer is no married

👉 6. The find() array method: find() method accepts a function which is a test function and it returns the very first element if condition is matched and stops iteration, otherwise it returns undefined.

Example: 
const findYoungestCustomer = customerList.find(customer => {
  return customer.age < 30;
});
console.log(findYoungestCustomer); // {id: '001', fname: 'Emily', lname: 'Johnson', age: 28, gender: 'f', …}  There are more than one customer whose age is below 30 but it returns this object because it was found in very first iteration

👉 7.The findIndex() array method: As the name suggest, findIndex() method finds and returns the index of a specific element. It also take a test function as an argument.

Example:
const findYoungestCustomerIndex = customerList.findIndex(customer => {
  return customer.age < 30;
});
console.log(findYoungestCustomerIndex); // 0, Because in the customer list the very first younger customer object's index is 0

👉 8.The findLast() array method: findLast() method find the element from the right side to the left side of an array and as soon as it find the first match based on a condition, it returns that element otherwise returns undefined.

Example: 
const findYoungestCustomer = customerList.findLast(customer => {
  return customer.age < 30;
});
console.log(findYoungestCustomer); // {id: '005', fname: 'Jessica', lname: 'Kim', age: 26, gender: 'f', …}

👉 9. The findLastIndex() array method: findLastIndex() method finds the index number of an element from the right side of an array. As soon as it finds the match based on a condition it stops iteration and return the index number.

Example: 
const findYoungestCustomerIndexFromRightSide = customerList.findLastIndex(customer => {
  return customer.age < 30;
});
console.log(findYoungestCustomerIndexFromRightSide); //4

👉 10.Array method Chaining

Find the total expenses of married customer.
Solution steps:
1. get all married customers using filter() method
2. get expenses list using map() method
3. get total expenses using reduce() method
4. finally chain all method together

const marriedCustomersTotalExpense = customerList.filter(customer => {
  return customer.married;
}).map((customer) => {
  return customer.expense_amount;
}).reduce((accumulator, amount) => {
  return accumulator = accumulator + amount;
}, 0);
console.log("Married customer total expense: ", marriedCustomersTotalExpense); //1056.74

👉 11.The forEach() array method: forEach() method is used to loop through the array elements. It doesn't change original array and return anything.

👉 12.The entries() array method: entries() method returns Array Iterator object and on that, next() method and value property can be applied to get the index and it's value accordingly as an array like (arr.entries().next().value). But this is the manual operations, we can accomplish this task using for of loop.

Example 1:
const arr = [1,2,3,4,5];
const arrIterator = arr.entries();
console.log(arrIterator); //Array Iterator {}
console.log("Array Iterator ", arr.entries().next().value); //[0, 1] - 0 is index and 1 is it's value 
console.log("Array Iterator ", arrIterator.next().value); //[1, 2] - 1 is index and 2 is it's value

Example 1:
const arr = [1,2,3,4,5];
const arrIterator = arr.entries();
for(const [index, value] of arrIterator) {
  console.log(index, value)
}

👉 13.The values() array method: values() method woks as like as entries method, It returns Array Iterator object too. After applying for of loop on that iterator, it returns only value, where entries() returns index and it's value accordingly.

Example:
const arr = [1,2,3,4,5];
const arrIterator = arr.values();
console.log(arrIterator) //Array Iterator {}
for( const value of arrIterator) {
  console.log(value);
}

👉 14.The flatMap() array method: flatMap() method is the combination of map() and flat() method. After transforming an array using map() method we can create nested array and then we can flatten the nested array using flat method. 

Example 1:
const arr = [1,2,3,4,5];
console.log("Simple map():", arr.map(item => item * 2)); // [2, 4, 6, 8, 10]
console.log("Simple flatMap():", arr.flatMap(item => item * 2)); // [2, 4, 6, 8, 10]

console.log("Complex map", arr.map(item => [item * 2])); // [[2], [4], [6], [10]];
console.log("Complex flatMap", arr.flatMap(item => [item * 2])); //  [2, 4, 6, 8, 10];

console.log("Complex map", arr.map(item => [[item * 2]])); // [Array(1), Array(1), Array(1), Array(1), Array(1)]
console.log("Complex flatMap", arr.flatMap(item => [[item * 2]].flat(Infinity) )); // [2, 4, 6, 8, 10]
`);
console.log(`\n`);


// const customerList = [
//   { 
//     "id": "001",
//     "fname": "Emily",
//     "lname": "Johnson",
//     "age": 28,
//     "gender": "f",
//     "married": false,
//     "expense_amount": 245.50,
//     "product_purchased": ["Wireless Earbuds", "Smart Watch", "Phone Case"]
//   },
//   {
//     "id": "002",
//     "fname": "Michael",
//     "lname": "Chen",
//     "age": 42,
//     "gender": "m",
//     "married": true,
//     "expense_amount": 899.99,
//     "product_purchased": ["4K Television", "Soundbar", "HDMI Cable", "Book"]
//   },
//   {
//     "id": "003",
//     "fname": "Sarah",
//     "lname": "Williams",
//     "age": 35,
//     "gender": "f",
//     "married": true,
//     "expense_amount": 156.75,
//     "product_purchased": ["Yoga Mat", "Resistance Bands", "Water Bottle", "Book"]
//   },
//   {
//     "id": "004",
//     "fname": "David",
//     "lname": "Rodriguez",
//     "age": 31,
//     "gender": "m",
//     "married": false,
//     "expense_amount": 524.30,
//     "product_purchased": ["Gaming Mouse", "Mechanical Keyboard", "Mouse Pad", "Book"]
//   },
//   {
//     "id": "005",
//     "fname": "Jessica",
//     "lname": "Kim",
//     "age": 26,
//     "gender": "f",
//     "married": false,
//     "expense_amount": 78.20,
//     "product_purchased": ["Lipstick", "Mascara", "Makeup Brushes"]
//   }
// ]

// ['🍅','🍆', '🥔', '🥕', '🥒'];
// ['🍇', '🍉', '🍌', '🍍']
// ["😭", "😁"]
// ["🍕","🍔","🍩","🍪"] 
// 👉

