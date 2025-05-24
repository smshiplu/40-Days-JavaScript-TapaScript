console.log(`Day 15 - 40 Days of JavaScript - JavaScript Array Master Course\n\n`);

console.log(`✅ T-001: Create an array of 5 elements using the Array Constructor.\n`);
console.log(`Ans:
const arrOfFiveElem = new Array(1,2,3,4,5);
console.log(arrOfFiveElem); //Output: [1, 2, 3, 4, 5]
`);
{
const arrOfFiveElem = new Array(1,2,3,4,5);
console.log(arrOfFiveElem); //Output: [1, 2, 3, 4, 5]
}
console.log(`\n`);

console.log(`✅ T-002: Create an array of 3 empty slots.\n`);
console.log(`Ans:
const emptySlotArr = new Array(3);
console.log(emptySlotArr); //Output: [empty × 3]
`);
{
const emptySlotArr = new Array(3);
console.log(emptySlotArr); //Output: [empty × 3]
}
console.log(`\n`);

console.log(`✅ T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its 'length' property.\n`);
console.log(`Ans:
const arrOfSixElem = [1,2,3,4,5,6,];
console.log(arrOfSixElem[arrOfSixElem.length - 3]); // Output: 4
`);
{
const arrOfSixElem = [1,2,3,4,5,6,];
console.log(arrOfSixElem[arrOfSixElem.length - 3]); // Output: 4
}
console.log(`\n`);

console.log(`✅ T-004: Use the 'for' loop on the above array to print elements in the odd index.\n`);
console.log(`Ans:
  const arrOfSixElem = [1,2,3,4,5,6,];
  for (let index = 0; index < arrOfSixElem.length; index++) {
    const element = arrOfSixElem[index];
    if(element % 2 !== 0) {
      console.log(element); // Output: 1, 3 and 5
    }
  }
`);
{
  const arrOfSixElem = [1,2,3,4,5,6,];
  for (let index = 0; index < arrOfSixElem.length; index++) {
    const element = arrOfSixElem[index];
    if(element % 2 !== 0) {
      console.log(element); // Output: 1,3 and 5
    }
  }
}
console.log(`\n`);

console.log(`✅ T-005: Add one element at the front and the end of an array.\n`);
console.log(`Ans:
const arr = ["john", "bob", "robbie", "alex"]
arr.unshift("Elem Added First");
arr.push("Elem Added Last");
console.log(arr); //Output:  ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last']
`);
{
const arr = ["john", "bob", "robbie", "alex"]
arr.unshift("Elem Added First");
arr.push("Elem Added Last");
console.log(arr); //Output:  ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last']

}
console.log(`\n`);

console.log(`✅ T-006: Remove an element from the front and the end of an array.\n`);
console.log(`Ans:
const arr = ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last'];
arr.shift();
arr.pop();
console.log(arr); //Output:  ['john', 'bob', 'robbie', 'alex']
`);
{
  const arr = ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last'];
  arr.shift();
  arr.pop();
  console.log(arr); //Output:  ['john', 'bob', 'robbie', 'alex']
}
console.log(`\n`);

console.log(`✅ T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.\n`);
console.log(`Ans:
const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream", "Biriyani", "Beef", "Mutton", "Chicken", "Rice and Fish"];
const [, , , , , biriayani, , , , ,] = favFoods;
console.log(biriayani); // Output: Biriyani
`);
{
  const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream", "Biriyani", "Beef", "Mutton", "Chicken", "Rice and Fish"];
  const [, , , , , biriayani, , , , ,] = favFoods;
  console.log(biriayani); // Output: Biriyani
}
console.log(`\n`);

console.log(`✅ T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.\n`);
console.log(`Ans:
const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream", "Biriyani", "Beef", "Mutton", "Chicken", "Rice and Fish"];
const [, , ...rest] = favFoods;
console.log(rest); //Output: ['Pastry', 'Cake', 'Ice cream', 'Biriyani', 'Beef', 'Mutton', 'Chicken', 'Rice and Fish']
`);
{
  const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream", "Biriyani", "Beef", "Mutton", "Chicken", "Rice and Fish"];
  const [, , ...rest] = favFoods;
  console.log(rest); //Output: ['Pastry', 'Cake', 'Ice cream', 'Biriyani', 'Beef', 'Mutton', 'Chicken', 'Rice and Fish']
}
console.log(`\n`);

console.log(`✅ T-009: Clone an Array(Shallow cloning).\n`);
console.log(`Ans:
const arr = [1,2,3,4,5];
const copyArr = [...arr];
console.log(copyArr); //Output: [1,2,3,4,5]
console.log(copyArr === arr); // Output: false
`);
{
  const arr = [1,2,3,4,5];
  const copyArr = [...arr];
  console.log(copyArr); //Output: [1,2,3,4,5]
  console.log(copyArr === arr); // Output: false
}
console.log(`\n`);

console.log(`✅ T-010: Empty an array using its length property.\n`);
console.log(`Ans:
const arr = [1,2,3,4,5];
arr.length = 0;
console.log(arr); // Output: []
`);
{
  const arr = [1,2,3,4,5];
  arr.length = 0;
  console.log(arr); // Output: []
}
console.log(`\n`);

console.log(`✅ T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use 'for-loop'.\n`);
console.log(`Ans:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(element === 5) {
    arr.length = 6;
  }
}
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
`);
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element === 5) {
      arr.length = 6;
    }
  }
  console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
}
console.log(`\n`);

console.log(`✅ T-012: Create an Array of 10 elements. Use the 'splice()' method to empty the array.\n`);
console.log(`Ans:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(0, arr.length);
console.log(arr); // Output: []
`);
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.splice(0, arr.length);
  console.log(arr); // Output: []
}
console.log(`\n`);

console.log(`✅ T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the 'length' property, using the 'pop()' method, using the 'shift()' method, setting the array with '[]', or the 'splice()' method. Which among these methods are most efficient and why?\n`);
console.log(`Ans:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.length = 0; // this is the best commonly used convention to empty the array
// arr.pop() // removing element from last item is lees efficient incase of larger array size 
// arr.shift() // removing element from first item is lees efficient incase of larger array size 
// arr = [] // It creates new memory allocation and create empty array
// arr.splice(0, arr.length) // It copies all the elements from original array to emptying the array
console.log(arr) //Output: []

`);
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.length = 0; // this is the best commonly used convention to empty the array
  // arr.pop() // removing element from last item is lees efficient incase of larger array size 
  // arr.shift() // removing element from first item is lees efficient incase of larger array size 
  // arr = [] // It creates new memory allocation and create empty array
  // arr.splice(0, arr.length) // It copies all the elements from original array to emptying the array
  console.log(arr) //Output: []
}
console.log(`\n`);

console.log(`✅ T-014: What happens when you concatenate two empty arrays?\n`);
console.log(`Ans:
When contacting two empty array it returns an empty array.
console.log([].concat([])); // Output: []
`);
{
console.log([].concat([])); // Output: []
}
console.log(`\n`);

console.log(`✅ T-015: How can you check if a value is partially matching with any of the elements of an Array?\n`);
console.log(`Ans:
several methods can be used to check if any value is partially matching or not of an array. Methods are like includes(), some(), find()
`);
{
  const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream"]; 
  // here we are gonna check if Pastry is exists or not
  //using includes()
  console.log(favFoods.includes("Pastry")); // true

  // using some()
  console.log(favFoods.some(food =>  food === "Pastry")); // true

  // using find()
  console.log(favFoods.find(food =>  food === "Pastry")); // Pastry
}
console.log(`\n`);

console.log(`✅ T-016: What is the difference between the slice() and splice() methods?\n`);
console.log(`
The slice() method: This method is used to copy or clone the array and it's immutable method.

The splice() method: This method is used to remove, add or update the array elements. It's a mutable method. 
`);
console.log(`\n`);

console.log(`✅ T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.\n`);
console.log(`Ans:
const names = ["deepak", "eti", "chandan", "belal", "azlan", "chitra"];
// ascending sort
const ascSort = names.toSorted((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1
});
// descending sort
const descSort = names.toSorted((a, b) => {
  return a === b ? 0 : a > b ? -1 : 1
});
console.log("Ascending sort ", ascSort); // Output:  ['azlan', 'belal', 'chandan', 'chitra', 'deepak', 'eti']
console.log("Descending sort ", descSort); //Output: ['eti', 'deepak', 'chitra', 'chandan', 'belal', 'azlan']
console.log("Original array ", names); // Output: ["deepak", "eti", "chandan", "belal", "azlan", "chitra"];
`);
{
  const names = ["deepak", "eti", "chandan", "belal", "azlan", "chitra"];
  // ascending sort
  const ascSort = names.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1
  });
  // descending sort
  const descSort = names.toSorted((a, b) => {
    return a === b ? 0 : a > b ? -1 : 1
  });
  console.log("Ascending sort ", ascSort); // Output:  ['azlan', 'belal', 'chandan', 'chitra', 'deepak', 'eti']
  console.log("Descending sort ", descSort); //Output: ['eti', 'deepak', 'chitra', 'chandan', 'belal', 'azlan']
  console.log("Original array ", names); // Output: ["deepak", "eti", "chandan", "belal", "azlan", "chitra"];
}
console.log(`\n`);

console.log(`✅ T-018: Can you give examples of sparse and dense arrays?\n`);
console.log(`Ans:
1. Dense Array: The dense array is the normal and mostly used array. It's index is sequential and no gap between indexes. Example below:
const denseArr = [1,2,3,4,5];
console.log(denseArr); //Output: [1,2,3,4,5];

2. Sparse Array: The sparse array is the array where there are no indexes are sequential means there can gaps between indexes. It's length property doesn't give the proper length of the array. Example below
const sparseArr = [];
sparseArr[1] = "A";
sparseArr[4] = "X";
console.log(sparseArr); //Output: [empty, 'A', empty × 2, 'X']
`);
{
  //1.Dense Array: The dense array is the normal and mostly used array. It's index is sequential and no gap between indexes. Example below:
  const denseArr = [1,2,3,4,5];
  console.log(denseArr); //Output: [1,2,3,4,5];
  
  //2.Sparse Array: The sparse array is the array where there are no indexes are sequential means there can gaps between indexes. It's length property doesn't give the proper length of the array. Example below
  const sparseArr = [];
  sparseArr[1] = "A";
  sparseArr[4] = "X";
  console.log(sparseArr); //Output: [empty, 'A', empty × 2, 'X']
}
console.log(`\n`);

console.log(`✅ T-019: Give a practical usages of the .fill() method.\n`);
console.log(`Ans:
const colors = ["red", "green", ""]
console.log(colors.fill("blue", 2, 3)); //Output: ['red', 'green', 'blue']
`);
{
  const colors = ["red", "green", ""]
  console.log(colors.fill("blue", 2, 3)); //Output: ['red', 'green', 'blue']
}
console.log(`\n`);

console.log(`✅ T-012: How to convert an array to a string?\n`);
console.log(`Ans:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join("")); //Output: 12345
`);
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.join("")); //Output: 12345
}
console.log(`\n`);

console.log(`
  const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
  ];

  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];
\n`);

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

console.log(`✅ T-021: Can you filter employees who work in the "Engineering" department?\n`);
console.log(`Ans:
  const deptObj = departments.find(department => {
    return department.name === "Engineering";
  })
  const employeesInEngDept = employees.filter(employee => {
    return employee.departmentId === deptObj.id
  });
  console.log(employeesInEngDept); //Output [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 9, name: 'Ian', departmentId: 2, salary: 4800}]
`);
{
  const deptObj = departments.find(department => {
    return department.name === "Engineering";
  });
  const employeesInEngDept = employees.filter(employee => {
    return employee.departmentId === deptObj.id
  });
  console.log(employeesInEngDept); //Output [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 9, name: 'Ian', departmentId: 2, salary: 4800}] 
}
console.log(`\n`);

console.log(`✅ T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".\n`);
console.log(`Ans:
const employeesNameDept = employees.map(employee => {
const deptName = departments.find(department => {
  return employee.departmentId === department.id
});
return employee.name + " " + deptName.name;
})
console.log(employeesNameDept); //Output:  ['Alice (HR)', 'Bob (Engineering)', 'Charlie (Marketing)', 'Diana (HR)', 'Edward (Engineering)', 'Fiona (Sales)', 'George (Marketing)', 'Helen (Sales)', 'Ian (Engineering)', 'Jane (HR)']
`);
{
  const employeesNameDept = employees.map(employee => {
    const deptName = departments.find(department => {
      return employee.departmentId === department.id
    });
    return `${employee.name} (${deptName.name})`
  })
  console.log(employeesNameDept); //Output:  ['Alice (HR)', 'Bob (Engineering)', 'Charlie (Marketing)', 'Diana (HR)', 'Edward (Engineering)', 'Fiona (Sales)', 'George (Marketing)', 'Helen (Sales)', 'Ian (Engineering)', 'Jane (HR)']
}
console.log(`\n`);

console.log(`✅ T-023: Find the highest salary among employees.\n`);
console.log(`Ans
const highestSalaries = employees.map(employee => {
  return employee.salary;
}).toSorted((a, b) => {
  return  a === b ? 0 : a > b ? -1 : 1;
})
console.log("Highest salary is BDT", highestSalaries[0]);
`);
{
const highestSalaries = employees.map(employee => {
  return employee.salary;
}).toSorted((a, b) => {
  return  a === b ? 0 : a > b ? -1 : 1;
})
console.log("Highest salary is BDT", highestSalaries[0]);
}
console.log(`\n`);

console.log(`✅ T-024: Check if there is at least one employee in the "Sales" department.\n`);
console.log(`Ans:
// first need sales dept ID
const salesDept = departments.find(department => department?.name === "Sales");
// use some() or find() to check
const IsEmpInSalesDept = employees.some(employee => {
return employee.departmentId === salesDept.id
});
console.log("It there at least one employee n sales department? ", IsEmpInSalesDept);
`);
{
// first need sales dept ID
const salesDept = departments.find(department => department?.name === "Sales");
// use some() or find() to check
const IsEmpInSalesDept = employees.some(employee => {
  return employee.departmentId === salesDept.id
});
console.log("It there at least one employee n sales department? ", IsEmpInSalesDept);
}
console.log(`\n`);

console.log(`✅ T-025: Write a function to filter employees earning more than 6000.\n`);
console.log(`Ans:
function empEarningsMoreThanSixThousand () {
  const earnings = employees.filter(employee => {
    return employee.salary > 6000;
  });
  console.log(earnings);//Output: [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 8, name: 'Helen', departmentId: 4, salary: 7200}]
}
empEarningsMoreThanSixThousand(); 
`);
{
  function empEarningsMoreThanSixThousand () {
    const earnings = employees.filter(employee => {
      return employee.salary > 6000;
    });
    console.log(earnings);//Output: [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 8, name: 'Helen', departmentId: 4, salary: 7200}]
  }
  empEarningsMoreThanSixThousand(); 
}
console.log(`\n`);

console.log(`✅ T-026: Create an array of employee names only.\n`);
console.log(`Ans:
const employeeNames = employees.map(employee => {
return employee.name;
});
console.log(employeeNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
`);
{
  const employeeNames = employees.map(employee => {
    return employee.name;
  });
  console.log(employeeNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
}
console.log(`\n`);

console.log(`✅ T-027: Calculate the total salary of all employees using.\n`);
console.log(`Ans:
const totalSalary = employees.map(employee => {
  return employee.salary;
})
.reduce((accumulator, amount) => {
  return accumulator = accumulator + amount; 
}, 0);
console.log("Total amount of salary: ", totalSalary); //Output: 58300
`);
{
  const totalSalary = employees.map(employee => {
    return employee.salary;
  })
  .reduce((accumulator, amount) => {
    return accumulator = accumulator + amount; 
  }, 0);
  console.log("Total amount of salary: ", totalSalary); //Output: 58300
}
console.log(`\n`);

console.log(`✅ T-028: Is there any employee earning less than 5000?\n`);
console.log(`Ans:
const employeeEarningsLessThanFiveThousand = employees.find(employee => {
  return employee.salary < 5000
});
console.log(employeeEarningsLessThanFiveThousand); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
`);
{
  const employeeEarningsLessThanFiveThousand = employees.find(employee => {
    return employee.salary < 5000
  });
  console.log(employeeEarningsLessThanFiveThousand); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
}
console.log(`\n`);

console.log(`✅ T-029: Find the first employee who earns exactly 5100.\n`);
console.log(`Ans:
const employeeEarns5100 = employees.find(employee => employee.salary === 5100);
console.log(employeeEarns5100); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
`);
{
  const employeeEarns5100 = employees.find(employee => employee.salary === 5100);
  console.log(employeeEarns5100); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
}
console.log(`\n`);

console.log(`✅ T-030: Find the last employee in the "HR" department.\n`);
console.log(`Ans:
const hrDeptId = departments.find(department => {
  return department.name === "HR"
});
const lastEmpInHrDept = employees.findLast(employee => employee.departmentId === hrDeptId.id);
console.log("Last employee in the HR department", lastEmpInHrDept); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
`);
{
  const hrDeptId = departments.find(department => {
    return department.name === "HR"
  });
  const lastEmpInHrDept = employees.findLast(employee => employee.departmentId === hrDeptId.id);
  console.log("Last employee in the HR department", lastEmpInHrDept); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
}
console.log(`\n`);

console.log(`✅ T-031: Find the first employee in the "Marketing" department.\n`);
console.log(`Ans:
const marketingDeptId = departments.find(department => {
  return department.name === "Marketing"
});
const firstEmpInMarketingDept = employees.find(employee => employee.departmentId === marketingDeptId.id);
console.log("First employee in the Marketing department: ", firstEmpInMarketingDept); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
`);
{
  const marketingDeptId = departments.find(department => {
    return department.name === "Marketing"
  });
  const firstEmpInMarketingDept = employees.find(employee => employee.departmentId === marketingDeptId.id);
  console.log("First employee in the Marketing department: ", firstEmpInMarketingDept); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
}
console.log(`\n`);

console.log(`✅ T-032: Check if all employees earn more than 4000.\n`);
console.log(`Ans:
const allEmployeesEarnings = employees.map(employee => employee.salary).reduce((accumulator, amount) => {
  return accumulator = accumulator + amount;
}, 0);
console.log("Is all employees earn more than 4000? ", allEmployeesEarnings > 4000 ? true : false); //Output: true
`);
{
  const allEmployeesEarnings = employees.map(employee => employee.salary).reduce((accumulator, amount) => {
    return accumulator = accumulator + amount;
  }, 0);
  console.log("Is all employees earn more than 4000? ", allEmployeesEarnings > 4000 ? true : false); //Output: true
}
console.log(`\n`);

console.log(`✅ T-033: Find the first employee in the "Sales" and "HR" department.\n`);
console.log(`Ans:
const deptIds = departments.filter(department => {
  return department.name === "Sales" ||  department.name === "HR"
});
const employeeInSales = employees.find(employee => {
  return employee.departmentId === deptIds[1].id;
});
const employeeInHr = employees.find(employee => {
  return employee.departmentId === deptIds[0].id;
});
console.log('The first employee in the "Sales" and "HR" department: ', employeeInSales, employeeInHr);
`);
{
  const deptIds = departments.filter(department => {
    return department.name === "Sales" ||  department.name === "HR"
  });
  const employeeInSales = employees.find(employee => {
    return employee.departmentId === deptIds[1].id;
  });
  const employeeInHr = employees.find(employee => {
    return employee.departmentId === deptIds[0].id;
  });
  console.log('The first employee in the "Sales" and "HR" department: ', employeeInSales, employeeInHr); //Output: {id: 6, name: 'Fiona', departmentId: 4, salary: 6000} {id: 1, name: 'Alice', departmentId: 1, salary: 5000}
} 
console.log(`\n`);

console.log(`✅ T-034: Verify if all employees belong to a department listed in the departments array.\n`);
console.log(`Ans:
const deptIds = departments.map(department => {
  return department.id;
});
const IsAllEmpBelongToADepartment = employees.every(employee => {
  return deptIds.includes(employee.departmentId)
})
console.log("Is all employees belong to a department listed in the departments array? ", IsAllEmpBelongToADepartment); //Output : true;
`);
{
  const deptIds = departments.map(department => {
    return department.id;
  });
  const IsAllEmpBelongToADepartment = employees.every(employee => {
    return deptIds.includes(employee.departmentId)
  })
  console.log("Is all employees belong to a department listed in the departments array? ", IsAllEmpBelongToADepartment); //Output : true;
}
console.log(`\n`);

console.log(`✅ T-035: Log each employee's name and department name to the console.\n`);
console.log(`Ans:
const empNameDept = employees.map(employee => {
  const deptName = departments.find(department => {
    return employee.departmentId === department.id
  });
  return employee.name + " " + deptName.name;
});

empNameDept.forEach(element => {
  console.log(element); //Output: Alice HR
  //  Bob Engineering
  // Charlie Marketing 
  // Diana HR 
  // Edward Engineering 
  // Fiona Sales 
  // George Marketing
  // Helen Sales
  // Ian Engineering
  // Jane HR
});
`);
{
  const empNameDept = employees.map(employee => {
    const deptName = departments.find(department => {
      return employee.departmentId === department.id
    });
    return `${employee.name} ${deptName.name}`;
  });
  
  empNameDept.forEach(element => {
    console.log(element); //Output: Alice HR
    //  Bob Engineering
    // Charlie Marketing 
    // Diana HR 
    // Edward Engineering 
    // Fiona Sales 
    // George Marketing
    // Helen Sales
    // Ian Engineering
    // Jane HR
  });
  
}
console.log(`\n`);

console.log(`✅ T-036: Extract all employee names into a single array.\n`);
console.log(`Ans:
const empNames = employees.map(employee => {
  return employee.name
});
console.log(empNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
`); 
{
  const empNames = employees.map(employee => {
    return employee.name
  });
  console.log(empNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
}
console.log(`\n`);

console.log(`✅ T-037: Increment each employee's salary by 10%.\n`);
console.log(`Ans:
const empArray = employees.map(employee => {
  const newSalary = ((employee.salary * 10) / 100) + employee.salary;
  employee["salary"] = newSalary;
  return employee;
});
console.log("Each employee's salary incremented by 10%", empArray); //Output: [ {id: 1, name: 'Alice', departmentId: 1, salary: 5500}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600}, {id: 7, name: 'George', departmentId: 3, salary: 5720}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610}]
`);
{
  const empArray = employees.map(employee => {
    const newSalary = ((employee.salary * 10) / 100) + employee.salary;
    // employee["salary"] = newSalary;
    // return employee;
    return {...employee, salary: newSalary}
  });
  console.log("Each employee's salary incremented by 10%", empArray); //Output: [ {id: 1, name: 'Alice', departmentId: 1, salary: 5500}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600}, {id: 7, name: 'George', departmentId: 3, salary: 5720}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610}]
}
console.log(`\n`);

console.log(`✅ T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].\n`);
console.log(`Ans:
const flattenedSkillArray = employees.flatMap(employee => {
  return {...employee, skills:["Excel", "Management", ["Word", "Photoshop"]].flat(Infinity) }
});
console.log("Flatten array of employee skills", flattenedSkillArray); //Output: [{id: 1, name: 'Alice', departmentId: 1, salary: 5500, skills: Array(4)}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700, skills: Array(4)}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950, skills: Array(4)}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050, skills: Array(4)}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800, skills: Array(4)}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600, skills: Array(4)}, {id: 7, name: 'George', departmentId: 3, salary: 5720, skills: Array(4)}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920, skills: Array(4)}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280, skills: Array(4)}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610, skills: Array(4)}]
`);
{
  const flattenedSkillArray = employees.flatMap(employee => {
    return {...employee, skills:["Excel", "Management", ["Word", "Photoshop"]].flat(Infinity) }
  });
  console.log("Flatten array of employee skills", flattenedSkillArray); //Output: [{id: 1, name: 'Alice', departmentId: 1, salary: 5500, skills: Array(4)}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700, skills: Array(4)}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950, skills: Array(4)}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050, skills: Array(4)}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800, skills: Array(4)}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600, skills: Array(4)}, {id: 7, name: 'George', departmentId: 3, salary: 5720, skills: Array(4)}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920, skills: Array(4)}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280, skills: Array(4)}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610, skills: Array(4)}]
}
console.log(`\n`);

console.log(`✅ T-039: Find the total salary of all employees working in the "Engineering" department.\n`);
console.log(`Ans:
const engDeptObj = departments.find(department => department.name === "Engineering");
const engDeptEmpSalary = employees.filter(employee => {
  return employee.departmentId === engDeptObj.id;
}).map(employee => {
  return employee.salary;
}).reduce((accumulator, amount) => {
  return accumulator = accumulator + amount;
});

console.log('Total salary of all employees working in the "Engineering" department', engDeptEmpSalary); //Output: 19800
`);
{
  const engDeptObj = departments.find(department => department.name === "Engineering");
  const engDeptEmpSalary = employees.filter(employee => {
    return employee.departmentId === engDeptObj.id;
  }).map(employee => {
    return employee.salary;
  }).reduce((accumulator, amount) => {
    return accumulator = accumulator + amount;
  });

  console.log('Total salary of all employees working in the "Engineering" department', engDeptEmpSalary); //Output: 19800
}
console.log(`\n`);

console.log(`✅ T-040: Check if there is any department where all employees earn more than 5000.\n`);
console.log(`Ans:
const groupedByDept = Object.groupBy(employees, ({departmentId}) => departmentId);
let allEmpSalaryMoreThanFiveKInADept;
for(const key in groupedByDept){
  // console.log(groupedByDept[key]);
  const groupedBySalaryMoreThanFiveKWithKeyTrueFalse = Object.groupBy(groupedByDept[key], ({salary}) => {
    return salary > 5000; // It returns objects sorted by true and false based on whether a particular department's employee has a salary of more than 5000. If in a particular department someone has more than 5000 and someone has less than 5000, more than 5000 will be a true key's array and less than 5000 will be a false key's array.
  });

  //  This fn() checks if the object has only one true key. That means all employees of a particular department have a salary more than 5000, and then it returns true; otherwise, it returns false.
  function checkIfAllEmpInADeptSalaryMoreThanFiveK() {
    return Object.keys(groupedBySalaryMoreThanFiveKWithKeyTrueFalse).length === 1 && groupedBySalaryMoreThanFiveKWithKeyTrueFalse.true ? true : false;
  }
  allEmpSalaryMoreThanFiveKInADept = checkIfAllEmpInADeptSalaryMoreThanFiveK();
}
console.log(allEmpSalaryMoreThanFiveKInADept); //Output: true
`);
{
  const groupedByDept = Object.groupBy(employees, ({departmentId}) => departmentId);
  let allEmpSalaryMoreThanFiveKInADept;
  for(const key in groupedByDept){
    const groupedBySalaryMoreThanFiveKWithKeyTrueFalse = Object.groupBy(groupedByDept[key], ({salary}) => {
      return salary > 5000; // It returns objects sorted by true and false based on whether a particular department's employee has a salary of more than 5000. If in a particular department someone has more than 5000 and someone has less than 5000, more than 5000 will be a true key's array and less than 5000 will be a false key's array.
    });

    //  This fn() checks if the object has only one true key. That means all employees of a particular department have a salary more than 5000, and then it returns true; otherwise, it returns false.
    function checkIfAllEmpInADeptSalaryMoreThanFiveK() {
      return Object.keys(groupedBySalaryMoreThanFiveKWithKeyTrueFalse).length === 1 && groupedBySalaryMoreThanFiveKWithKeyTrueFalse.true ? true : false;
    }
    allEmpSalaryMoreThanFiveKInADept = checkIfAllEmpInADeptSalaryMoreThanFiveK();
  }
  console.log(allEmpSalaryMoreThanFiveKInADept); //Output: true; Because the sales department has two employees and their salary is more than 5000k.
}
console.log(`\n`);

console.log(`✅ T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.\n`);
console.log(`Ans:
// Generate random project name
function generateRandomProjectName(length) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += "Projects" + letters[Math.floor(Math.random() * letters.length)]};
  }
  return result;
}

// Generate random array with the project name
function generateArrayOfRandomProjects(arrayLength) {
  const randomProjectsArray = [];
  for (let i = 0; i < arrayLength; i++) {
    randomProjectsArray.push(generateRandomProjectName(1));
  }
  return randomProjectsArray;
}

// Add project key to the employee objects
const empWithProjects = employees.map(employee => {
  employee["projects"] = generateArrayOfRandomProjects(2);
  return  employee;
});
console.log(empWithProjects);

const projectsFromAllEmp = empWithProjects.flatMap(employee => {
  return employee.projects;
}).filter((item, index, selfArr) => selfArr.indexOf(item) === index)
console.log(projectsFromAllEmp); //Output:  ['Projects I', 'Projects E', 'Projects L', 'Projects M', 'Projects P', 'Projects Q', 'Projects H', 'Projects D', 'Projects O', 'Projects Y', 'Projects J', 'Projects B', 'Projects G', 'Projects Z', 'Projects T']
`);
{
  // Generate random project name
  function generateRandomProjectName(length) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += `Projects ${letters[Math.floor(Math.random() * letters.length)]}`;
    }
    return result;
  }

  // Generate random array with the project name
  function generateArrayOfRandomProjects(arrayLength) {
    const randomProjectsArray = [];
    for (let i = 0; i < arrayLength; i++) {
      randomProjectsArray.push(generateRandomProjectName(1));
    }
    return randomProjectsArray;
  }

  // Add project key to the employee objects
  const empWithProjects = employees.map(employee => {
    employee["projects"] = generateArrayOfRandomProjects(2);
    return  employee;
  });
  console.log(empWithProjects);
  
  const projectsFromAllEmp = empWithProjects.flatMap(employee => {
    return employee.projects;
  }).filter((item, index, selfArr) => selfArr.indexOf(item) === index)
  console.log(projectsFromAllEmp); //Output:  ['Projects I', 'Projects E', 'Projects L', 'Projects M', 'Projects P', 'Projects Q', 'Projects H', 'Projects D', 'Projects O', 'Projects Y', 'Projects J', 'Projects B', 'Projects G', 'Projects Z', 'Projects T']
}
console.log(`\n`);

console.log(`✅ T-042: For each employee, find their department name and return an array of employee names with their department names.\n`);
console.log(`Ans:
const employeeNameAndDepartment = employees.flatMap(employee => {
  const deptObj = departments.find(department => {
    return department.id === employee.departmentId;
  });
  return [{name: employee.name, departmentName: deptObj.name}];
});
console.log(employeeNameAndDepartment); //Output: [{name: 'Alice', departmentName: 'HR'}, {name: 'Bob', departmentName: 'Engineering'}, {name: 'Charlie', departmentName: 'Marketing'}, {name: 'Diana', departmentName: 'HR'}, {name: 'Edward', departmentName: 'Engineering'}, {name: 'Fiona', departmentName: 'Sales'}, {name: 'George', departmentName: 'Marketing'}, {name: 'Helen', departmentName: 'Sales'}, {name: 'Ian', departmentName: 'Engineering'}, {name: 'Jane', departmentName: 'HR'}]
`);
{
  const employeeNameAndDepartment = employees.flatMap(employee => {
    const deptObj = departments.find(department => {
      return department.id === employee.departmentId;
    });
    return [{name: employee.name, departmentName: deptObj.name}];
  });
  console.log(employeeNameAndDepartment); //Output: [{name: 'Alice', departmentName: 'HR'}, {name: 'Bob', departmentName: 'Engineering'}, {name: 'Charlie', departmentName: 'Marketing'}, {name: 'Diana', departmentName: 'HR'}, {name: 'Edward', departmentName: 'Engineering'}, {name: 'Fiona', departmentName: 'Sales'}, {name: 'George', departmentName: 'Marketing'}, {name: 'Helen', departmentName: 'Sales'}, {name: 'Ian', departmentName: 'Engineering'}, {name: 'Jane', departmentName: 'HR'}]
}
console.log(`\n`);

console.log(`✅ T-043: Get a list of names of employees earning more than 6000.\n`);
console.log(`Ans:
  const empNameWhoEarnMoreThan6K = employees.filter(employee => {
    return employee.salary > 6000;
  }).map(employee => {
    return employee.name;
  })
  console.log(empNameWhoEarnMoreThan6K); //Output: ['Bob', 'Edward', 'Helen']
`);
{
  const empNameWhoEarnMoreThan6K = employees.filter(employee => {
    return employee.salary > 6000;
  }).map(employee => {
    return employee.name;
  })
  console.log(empNameWhoEarnMoreThan6K); //Output: ['Bob', 'Edward', 'Helen']
}
console.log(`\n`);

console.log(`✅ T-044: Write a for-of loop to print the names of all employees from the employees array.\n`);
console.log(`Ans:
 function printAllEmployeeName() {
    for (const element of employees) {
      console.log(element.name);
    }
  }
  printAllEmployeeName(); // Output:
                        // Alice
                        // Bob
                        // Charlie
                        // Diana
                        // Edward
                        // Fiona
                        // George
                        // Helen
                        // Ian
                        // Jane
`);
{
  function printAllEmployeeName() {
    for (const element of employees) {
      console.log(element.name);
    }
  }
  printAllEmployeeName(); // Output:
                        // Alice
                        // Bob
                        // Charlie
                        // Diana
                        // Edward
                        // Fiona
                        // George
                        // Helen
                        // Ian
                        // Jane
}
console.log(`\n`);

console.log(`✅ T-045: Using a for-of loop, print the names of employees earning more than 5000.\n`);
console.log(`Ans:
  function printEmpNameWhoEarnMoreThan5K() {
     for (const element of employees) {
      if(element.salary > 5000) {
        console.log(element.name);
      } else {
        continue;
      }
    }
  }
  printEmpNameWhoEarnMoreThan5K() //Output: 
                                  // Bob
                                  // Diana
                                  // Edward
                                  // Fiona
                                  // George
                                  // Helen
                                  // Jane
`);
{
  function printEmpNameWhoEarnMoreThan5K() {
     for (const element of employees) {
      if(element.salary > 5000) {
        console.log(element.name);
      } else {
        continue;
      }
    }
  }
  printEmpNameWhoEarnMoreThan5K() //Output: 
                                  // Bob
                                  // Diana
                                  // Edward
                                  // Fiona
                                  // George
                                  // Helen
                                  // Jane
}
console.log(`\n`);

console.log(`✅ T-046: Modify the for-of loop to destructure each employee object and log their name and salary.\n`);
console.log(`Ans:
  for (const element of employees) {
    const { name, salary } = element;
    console.log(name, salary); //Output: 
    // Alice 5000
    // Bob 7000
    // Charlie 4500
    // Diana 5500
    // Edward 8000
    // Fiona 6000
    // George 5200
    // Helen 7200
    // Ian 4800
    // Jane 5100
  }
`);
{
  for (const element of employees) {
    const { name, salary } = element;
    console.log(name, salary); //Output: 
    // Alice 5000
    // Bob 7000
    // Charlie 4500
    // Diana 5500
    // Edward 8000
    // Fiona 6000
    // George 5200
    // Helen 7200
    // Ian 4800
    // Jane 5100
  }
}
console.log(`\n`);

console.log(`✅ T-047: Write a for-of loop to match employees with their departments and print the results.\n`);
console.log(`Ans:
  for (const employee of employees) {
    const empDeptObj = departments.find(department => {
      return employee.departmentId === department.id;
    });
    console.log(employee.name, empDeptObj.name); //Output: 
    // Alice HR
    // Bob Engineering
    // Charlie Marketing
    // Diana HR
    // Edward Engineering
    // Fiona Sales
    // George Marketing
    // Helen Sales
    // Ian Engineering
    // Jane HR
  }
`);
{
  for (const employee of employees) {
    const empDeptObj = departments.find(department => {
      return employee.departmentId === department.id;
    });
    console.log(employee.name, empDeptObj.name); //Output: 
    // Alice HR
    // Bob Engineering
    // Charlie Marketing
    // Diana HR
    // Edward Engineering
    // Fiona Sales
    // George Marketing
    // Helen Sales
    // Ian Engineering
    // Jane HR
  }
}
console.log(`\n`);

console.log(`✅ T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.\n`);
console.log(`Ans:
const arrIterator = employees.entries();
  for (const [index, employee] of arrIterator) {
    console.log(index, employee.name); //Output:
      // 0 'Alice'
      // 1 'Bob'
      // 2 'Charlie'
      // 3 'Diana'
      // 4 'Edward'
      // 5 'Fiona'
      // 6 'George'
      // 7 'Helen'
      // 8 'Ian'
      // 9 'Jane'
  }
`);
{
  const arrIterator = employees.entries();
  for (const [index, employee] of arrIterator) {
    console.log(index, employee.name); //Output:
      // 0 'Alice'
      // 1 'Bob'
      // 2 'Charlie'
      // 3 'Diana'
      // 4 'Edward'
      // 5 'Fiona'
      // 6 'George'
      // 7 'Helen'
      // 8 'Ian'
      // 9 'Jane'
  }
}
console.log(`\n`);

console.log(`✅ T-049:  Given the array-like object below, access the second element and log it:
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
\n`);
console.log(`Ans:
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  const arrayLikeToArray = Array.from(arrayLike);
  console.log(arrayLikeToArray[1]); //Output: Second
`);
{ 
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  const arrayLikeToArray = Array.from(arrayLike);
  console.log(arrayLikeToArray[1]); //Output: Second
}
console.log(`\n`);

console.log(`✅ T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.\n`);
console.log(`Ans:
  function convertArgsIntoArray() {
    const realArr = Array.from(arguments)
    console.log(realArr); // Output: [1, 10]
  }
  convertArgsIntoArray(1, 10);
`);
{
  function convertArgsIntoArray() {
    const realArr = Array.from(arguments)
    console.log(realArr); // Output: [1, 10]
  }
  convertArgsIntoArray(1, 10);
}
console.log(`\n`);

console.log(`✅ T-051:  Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.\n`);
console.log(`Ans:
  const allDivArr = Array.from(document.querySelectorAll("div"));
  console.log(allDivArr); //Output: [div, div, div, div, div]
`);
{
  const allDivArr = Array.from(document.querySelectorAll("div"));
  console.log(allDivArr); //Output: [div, div, div, div, div]
}
console.log(`\n`);

console.log(`✅ T-052:  Merge these two arrays into a single array:
      const arr1 = [1, 2];
      const arr2 = [3, 4];
\n`);
console.log(`Ans:
`);
{
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const mergedArr = arr1.concat(arr2);
  console.log(mergedArr); //Output: [1,2,3,4]
}
console.log(`\n`);

console.log(`✅ T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]\n`);
console.log(`Ans:
  const arr = Array.from("AAAAA");
  console.log(arr); //Output:  ['A', 'A', 'A', 'A', 'A']
`);
{
  const arr = Array.from("AAAAA");
  console.log(arr); //Output:  ['A', 'A', 'A', 'A', 'A']
}
console.log(`\n`);

console.log(`✅ T-054: Use Array.from to convert a string like "Hello" into an array of characters.\n`);
console.log(`Ans:
  const arr = Array.from("Hello");
  console.log(arr); //Output:  ['H', 'e', 'l', 'l', 'o']
`);
{
  const arr = Array.from("Hello");
  console.log(arr); //Output:  ['H', 'e', 'l', 'l', 'o']
}
console.log(`\n`);

console.log(`✅ T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().\n`);
console.log(`Ans:
  const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
  const fruitsGroupedArr = Object.groupBy(fruits, ([fruit]) => fruit);
  console.log(fruitsGroupedArr); //Output: { a: ['apple', 'apricot'], b:  ['banana', 'blueberry'], m: ['mango'] }
`);
{
  const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
  const fruitsGroupedArr = Object.groupBy(fruits, ([fruit]) => fruit);
  console.log(fruitsGroupedArr); //Output: { a: ['apple', 'apricot'], b:  ['banana', 'blueberry'], m: ['mango'] }
}
console.log(`\n`);

console.log(`✅ T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.\n`);
console.log(`Ans:
  const arr = [3, 7, 3, 2, 3, 8, 7, 7];
  //filters only repeated numbers
  const mostRepeatedNumbers =  arr.filter((item, index, selfArr) => {
    return selfArr.indexOf(item) !== index;
  })
  //filters remove duplicate numbers
  .filter((item, index, selfArr) => {
    return selfArr.indexOf(item) === index;
  })
  console.log("The most repeated numbers are ", mostRepeatedNumbers.join(" and ")); //Output: 3 and 7
`);
{
  const arr = [3, 7, 3, 2, 3, 8, 7, 7];
  //filters only repeated numbers
  const mostRepeatedNumbers =  arr.filter((item, index, selfArr) => {
    return selfArr.indexOf(item) !== index;
  })
  //filters remove duplicate numbers
  .filter((item, index, selfArr) => {
    return selfArr.indexOf(item) === index;
  })
  console.log("The most repeated numbers are ", mostRepeatedNumbers.join(" and ")); //Output: 3 and 7
}
console.log(`\n`);

console.log(`✅ T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].\n`);
console.log(`Ans:
  function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => {
      return a === b ? 0 : a > b ? 1 : -1;
    });
    
    //check if array length is odd or even number
    if(sortedArr.length % 2 === 0) {
      // array length is even 
      // from an even length of array, the median would be the average of the middle two numbers
      const midNum1 = sortedArr[sortedArr.length / 2 - 1];
      const midNum2 = sortedArr[sortedArr.length / 2];
      const average = (midNum1 + midNum2) / 2;
      return average;
    } else {
      // array length is odd
      // In case of odd number of array length the median would be the middle number of the array, sot to get the middle element we need to access index array[array.length / 2]. here array.length / 2 will return a decimal value so Math.floor is needed to be used
      return sortedArr[Math.floor(sortedArr.length / 2)]; 
    }
  }

  const oddLengthArray = [5, 2, 9, 1, 3, 6, 8];
  console.log(findMedian(oddLengthArray)); //Output: 5

  const evenLengthArray = [5, 2, 9, 4, 1, 3, 6, 8];
  console.log(findMedian(evenLengthArray)); //Output: 4.5
`);
{
  function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => {
      return a === b ? 0 : a > b ? 1 : -1;
    });
    
    //check if array length is odd or even number
    if(sortedArr.length % 2 === 0) {
      // array length is even 
      // from an even length of array, the median would be the average of the middle two numbers
      const midNum1 = sortedArr[sortedArr.length / 2 - 1];
      const midNum2 = sortedArr[sortedArr.length / 2];
      const average = (midNum1 + midNum2) / 2;
      return average;
    } else {
      // array length is odd
      // In case of odd number of array length the median would be the middle number of the array, sot to get the middle element we need to access index array[array.length / 2]. here array.length / 2 will return a decimal value so Math.floor is needed to be used
      return sortedArr[Math.floor(sortedArr.length / 2)]; 
    }
  }

const oddLengthArray = [5, 2, 9, 1, 3, 6, 8];
console.log(findMedian(oddLengthArray)); //Output: 5

const evenLengthArray = [5, 2, 9, 4, 1, 3, 6, 8];
console.log(findMedian(evenLengthArray)); //Output: 4.5
}
console.log(`\n`);

console.log(`✅ T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).\n`);
console.log(`Ans:
  //Approach 1:
  const nestedArr = [['a', 1], ['b', 2], ['c', 3]];
  const arrToObj = Object.fromEntries(nestedArr);
  console.log(arrToObj); //Output: {a: 1, b: 2, c: 3}

  //Approach 2:
  const obj = {}
  for (const [key, value] of nestedArr) {
    obj[key] = value;
  }
  console.log(obj); //Output: {a: 1, b: 2, c: 3} 
`);
{
  //Approach 1:
  const nestedArr = [['a', 1], ['b', 2], ['c', 3]];
  const arrToObj = Object.fromEntries(nestedArr);
  console.log(arrToObj); //Output: {a: 1, b: 2, c: 3}

  //Approach 2:
  const obj = {}
  for (const [key, value] of nestedArr) {
    obj[key] = value;
  }
  console.log(obj); //Output: {a: 1, b: 2, c: 3}
}
console.log(`\n`);

console.log(`✅ T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].\n`);
console.log(`Ans:
  const arr = [['a', 'b'], ['c', 'd']];
  const upperCaseArr = arr.flatMap(items => {
    const [ arr1Items, arr2Items ] = items; 
    return [arr1Items.toUpperCase(), arr2Items.toUpperCase()];
  });
  console.log(upperCaseArr); //Output: ['A', 'B', 'C', 'D']
`);
{
  const arr = [['a', 'b'], ['c', 'd']];
  const upperCaseArr = arr.flatMap(items => {
    const [ arr1Items, arr2Items ] = items; 
    return [arr1Items.toUpperCase(), arr2Items.toUpperCase()];
  });
  console.log(upperCaseArr); //Output: ['A', 'B', 'C', 'D']
}
console.log(`\n`);

console.log(`✅ T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'].\n`);
console.log(`Ans:
  const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
  const groupedObj = Object.groupBy(fruits, ([fruit]) => fruit);
  
  const occurrenceCount = [];
  for (const key in groupedObj) {
    occurrenceCount.push(groupedObj[key][0] + " count : " + groupedObj[key].length);
  }
  
  console.log(occurrenceCount); //Output: ['apple count : 2', 'banana count : 3', 'mango count : 1']
`);
{
  const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
  const groupedObj = Object.groupBy(fruits, ([fruit]) => fruit);
  
  const occurrenceCount = [];
  for (const key in groupedObj) {
    occurrenceCount.push(groupedObj[key][0] + " count : " + groupedObj[key].length);
  }

  console.log(occurrenceCount); //Output: ['apple count : 2', 'banana count : 3', 'mango count : 1']
}
console.log(`\n`);

console.log(`✅ T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e'].\n`);
console.log(`Ans:
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const extractArr = arr.slice(1, 4);
  console.log(extractArr); //Output: ['b', 'c', 'd']
`);
{
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const extractArr = arr.slice(1, 4);
  console.log(extractArr); //Output: ['b', 'c', 'd']
}
console.log(`\n`);

console.log(`✅ T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted().\n`);
console.log(`Ans:
  const array = [9, 3, 1, 6, 8];
  const sortedArr = array.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1: -1;
  })
  console.log(sortedArr); //Output: [1, 3, 6, 8, 9]
`);
{
  const array = [9, 3, 1, 6, 8];
  const sortedArr = array.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1: -1;
  })
  console.log(sortedArr); //Output: [1, 3, 6, 8, 9]
}
console.log(`\n`);

console.log(`✅ T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse().\n`);
console.log(`Ans:
  const arr = [1, 2, 3, 4, 5];
  const toReversedArr = arr.toReversed();
  console.log(toReversedArr); //Output: [5, 4, 3, 2, 1], toReversed() method reverses an array without changing the original array.
  console.log(arr); //Output: [1, 2, 3, 4, 5], because toReversedArr() method didn't muted this array.

  console.log(arr.reverse()); //Output: [5, 4, 3, 2, 1], reverse() method operation muted the original array
  console.log(arr); //Output: [5, 4, 3, 2, 1]
`);
{
  const arr = [1, 2, 3, 4, 5];
  const toReversedArr = arr.toReversed();
  console.log(toReversedArr); //Output: [5, 4, 3, 2, 1], toReversed() method reverses an array without changing the original array.
  console.log(arr); //Output: [1, 2, 3, 4, 5], because toReversedArr() method didn't muted this array.

  console.log(arr.reverse()); //Output: [5, 4, 3, 2, 1], reverse() method operation muted the original array
  console.log(arr); //Output: [5, 4, 3, 2, 1]
}
console.log(`\n`);

console.log(`✅ T-065: Group the follwing array elements based on age(Adult vs Non-Adult):
      const users = [
        { name: 'Alice', age: 55 },
        { name: 'Bob', age: 3 },
        { name: 'Charlie', age: 25 },
      ];
\n`);
console.log(`Ans:
  const users = [
    { name: 'Alice', age: 55 },
    { name: 'Bob', age: 3 },
    { name: 'Charlie', age: 25 },
  ];
  const temp = Object.groupBy(users, ({age}) => age);
  console.log(temp); //Output: {3:[{name: 'Bob', age: 3}], 25:[{name: 'Charlie', age: 25}], 55:[{name: 'Alice', age: 55}]}
`);
{
  const users = [
    { name: 'Alice', age: 55 },
    { name: 'Bob', age: 3 },
    { name: 'Charlie', age: 25 },
  ];
  const temp = Object.groupBy(users, ({age}) => age);
  console.log(temp); //Output: {3:[{name: 'Bob', age: 3}], 25:[{name: 'Charlie', age: 25}], 55:[{name: 'Alice', age: 55}]}
}
console.log(`\n`);

console.log(`✅ T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".\n`);
console.log(`Ans:
  const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
  const words = sentence.split(" ");
  const highestLengthOfWord = words
  .map(word => word.length)
  .reduce((largest, current) => {
    return current > largest ? current : largest;
  }, 0);
 
  const longestWords = words.filter(word => word.length === highestLengthOfWord)
  console.log(longestWords); //['JavaScript', 'tapaScript', 'initiative']
`);
{
  const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
  const words = sentence.split(" ");
  const highestLengthOfWord = words
  .map(word => word.length)
  .reduce((largest, current) => {
    return current > largest ? current : largest;
  }, 0);
 
  const longestWords = words.filter(word => word.length === highestLengthOfWord)
  console.log(longestWords); //['JavaScript', 'tapaScript', 'initiative']
}
console.log(`\n`);

console.log(`✅ T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6].\n`); 
console.log(`Ans:
  const arr1 = [1, 2, 3, 4];
  const arr2 =  [3, 4, 5, 6];
  const commonElements =  arr1.filter(item => arr2.includes(item));
  console.log(commonElements); //Output: [3, 4]
`);
{
  const arr1 = [1, 2, 3, 4];
  const arr2 =  [3, 4, 5, 6];
  const commonElements =  arr1.filter(item => arr2.includes(item));
  console.log(commonElements); //Output: [3, 4]
}
console.log(`\n`);