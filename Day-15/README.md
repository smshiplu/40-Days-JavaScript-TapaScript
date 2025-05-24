# Day 15 - 40 Days of JavaScript - JavaScript Array Master Course

## **👩‍💻 🧑‍💻 Assignment Tasks**

### ✅ T-001: Create an array of 5 elements using the Array Constructor.
```js
  const arr1 = new Array(1,2,3,4,5);
  console.log(arr1);//Output: [1, 2, 3, 4, 5]
```

### ✅ T-002: Create an array of 3 empty slots.
```js
  const emptySlotArr = new Array(3);
  console.log(emptySlotArr); //Output: [empty × 3]
```

### ✅ T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
```js
  const arrOfSixElem = [1,2,3,4,5,6,];
  console.log(arrOfSixElem[arrOfSixElem.length - 3]); // Output: 4
```

### ✅ T-004: Use the `for` loop on the above array to print elements in the odd index.
```js
  for (let index = 0; index < arrOfSixElem.length; index++) {
    const element = arrOfSixElem[index];
    if(element % 2 !== 0) {
      console.log(element); // Output: 1, 3 and 5
    }
  }
```

### ✅ T-005: Add one element at the front and the end of an array.
```js
  const arr = ["john", "bob", "robbie", "alex"]
  arr.unshift("Elem Added First");
  arr.push("Elem Added Last");
  console.log(arr); //Output:  ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last']
```

### ✅ T-006: Remove an element from the front and the end of an array.
```js
  const arr = ['Elem Added First', 'john', 'bob', 'robbie', 'alex', 'Elem Added Last'];
  arr.shift();
  arr.pop();
  console.log(arr); //Output:  ['john', 'bob', 'robbie', 'alex']
```

### ✅ T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
```js
  const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream", "Biriyani", "Beef", "Mutton", "Chicken", "Rice and Fish"];
  const [, , , , , biriayani, , , , ,] = favFoods;
  console.log(biriayani); // Output: Biriyani
```

### ✅ T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
```js
  const [, , ...rest] = favFoods;
  console.log(rest); //Output: ['Pastry', 'Cake', 'Ice cream', 'Biriyani', 'Beef', 'Mutton', 'Chicken', 'Rice and Fish']
```

### ✅ T-009: Clone an Array(Shallow cloning).
```js
  const arr = [1,2,3,4,5];
  const copyArr = [...arr];
  console.log(copyArr); //Output: [1,2,3,4,5]
  console.log(copyArr === arr); // Output: false
```

### ✅ T-010: Empty an array using its length property.
```js
  const arr = [1,2,3,4,5];
  arr.length = 0;
  console.log(arr); // Output: []
```

### ✅ T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
```js
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element === 5) {
      arr.length = 6;
    }
  }
  console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
```

### ✅ T-012: Create an Array of 10 elements. Use the 'splice()' method to empty the array.
```js
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.splice(0, arr.length);
  console.log(arr); // Output: []
```

### ✅ T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
- array.length = 0; this is the best commonly used convention to empty the array
- array.pop(); removing element from last item is lees efficient incase of larger array size
- array.shift(); removing element from first item is lees efficient incase of larger array size 
- array = []; it creates new memory allocation and creates a new empty array
- array.splice(); it copies all the elements from original array to emptying the array

```js
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.length = 0;
  console.log(arr) //Output: []
```

### ✅ T-014: What happens when you concatenate two empty arrays?
```js
console.log([].concat([])); // Output: []
```

### ✅ T-015: How can you check if a value is partially matching with any of the elements of an Array?
- several methods can be used to check if any value is partially matching or not of an array. Methods are like includes(), some(), find()

```js
  const favFoods = ["Burger", "Pizza", "Pastry", "Cake", "Ice cream"]; 
  // here we are gonna check if Pastry is exists or not
  //using includes()
  console.log(favFoods.includes("Pastry")); // true

  // using some()
  console.log(favFoods.some(food =>  food === "Pastry")); // true

  // using find()
  console.log(favFoods.find(food =>  food === "Pastry")); // Pastry
```

### ✅ T-016: What is the difference between the slice() and splice() methods?
- The slice() method: This method is used to copy or clone the array and it's immutable method.
- The splice() method: This method is used to remove, add or update the array elements. It's a mutable method.

### ✅ T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

```js
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
```

### ✅ T-018: Can you give examples of sparse and dense arrays?
```js
  //1.Dense Array: The dense array is the normal and mostly used array. It's index is sequential and no gap between indexes. Example below:
  const denseArr = [1,2,3,4,5];
  console.log(denseArr); //Output: [1,2,3,4,5];
  
  //2.Sparse Array: The sparse array is the array where there are no indexes are sequential means there can gaps between indexes. It's length property doesn't give the proper length of the array. Example below
  const sparseArr = [];
  sparseArr[1] = "A";
  sparseArr[4] = "X";
  console.log(sparseArr); //Output: [empty, 'A', empty × 2, 'X']
```

### ✅ T-019: Give a practical usages of the .fill() method.
```js
  const colors = ["red", "green", ""]
  console.log(colors.fill("blue", 2, 3));  //Output: ['red', 'green', 'blue']
```

### ✅ T-020: How to convert an array to a string?
```js
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.join("")); //Output: 12345
```

### ✅ T-021: Can you filter employees who work in the "Engineering" department?
```js
  const deptObj = departments.find(department => {
    return department.name === "Engineering";
  });
  const employeesInEngDept = employees.filter(employee => {
    return employee.departmentId === deptObj.id
  });
  console.log(employeesInEngDept); //Output [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 9, name: 'Ian', departmentId: 2, salary: 4800}] 
```

### ✅ T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
```js
  const employeesNameDept = employees.map(employee => {
    const deptName = departments.find(department => {
      return employee.departmentId === department.id
    });
    return `${employee.name} (${deptName.name})`
  });
  console.log(employeesNameDept); //Output:  ['Alice (HR)', 'Bob (Engineering)', 'Charlie (Marketing)', 'Diana (HR)', 'Edward (Engineering)', 'Fiona (Sales)', 'George (Marketing)', 'Helen (Sales)', 'Ian (Engineering)', 'Jane (HR)']
```

### ✅ T-023: Find the highest salary among employees.
```js
const highestSalaries = employees.map(employee => {
  return employee.salary;
}).toSorted((a, b) => {
  return  a === b ? 0 : a > b ? -1 : 1;
})
console.log("Highest salary is BDT", highestSalaries[0]);
```

### ✅ T-024: Check if there is at least one employee in the "Sales" department.
```js
// first need to find sales dept ID
const salesDept = departments.find(department => department?.name === "Sales");
// use some() or find() to check
const IsEmpInSalesDept = employees.some(employee => {
  return employee.departmentId === salesDept.id
});
console.log("It there at least one employee n sales department? ", IsEmpInSalesDept);
```

### ✅ T-025: Write a function to filter employees earning more than 6000.
```js
  function empEarningsMoreThanSixThousand () {
    const earnings = employees.filter(employee => {
      return employee.salary > 6000;
    });
    console.log(earnings);//Output: [{id: 2, name: 'Bob', departmentId: 2, salary: 7000}, {id: 5, name: 'Edward', departmentId: 2, salary: 8000}, {id: 8, name: 'Helen', departmentId: 4, salary: 7200}]
  }
  empEarningsMoreThanSixThousand(); 
```

### ✅ T-026: Create an array of employee names only.
```js
  const employeeNames = employees.map(employee => {
    return employee.name;
  });
  console.log(employeeNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
```

### T-027: Calculate the total salary of all employees using.
```js
  const totalSalary = employees.map(employee => {
    return employee.salary;
  })
  .reduce((accumulator, amount) => {
    return accumulator = accumulator + amount; 
  }, 0);
  console.log("Total amount of salary: ", totalSalary); //Output: 58300
```

### ✅ T-028: Is there any employee earning less than 5000?
```js
  const employeeEarningsLessThanFiveThousand = employees.find(employee => {
    return employee.salary < 5000
  });
  console.log(employeeEarningsLessThanFiveThousand); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
```

### ✅ T-029: Find the first employee who earns exactly 5100.
```js
  const employeeEarns5100 = employees.find(employee => employee.salary === 5100);
  console.log(employeeEarns5100); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
```

### T-030: Find the last employee in the "HR" department.
```js
  const hrDeptId = departments.find(department => {
    return department.name === "HR"
  });
  const lastEmpInHrDept = employees.findLast(employee => employee.departmentId === hrDeptId.id);
  console.log("Last employee in the HR department", lastEmpInHrDept); //Output: {id: 10, name: 'Jane', departmentId: 1, salary: 5100}
```

### ✅ T-031: Find the first employee in the "Marketing" department.
```js
  const marketingDeptId = departments.find(department => {
    return department.name === "Marketing"
  });
  const firstEmpInMarketingDept = employees.find(employee => employee.departmentId === marketingDeptId.id);
  console.log("First employee in the Marketing department: ", firstEmpInMarketingDept); //Output: {id: 3, name: 'Charlie', departmentId: 3, salary: 4500}
```

### ✅ T-032: Check if all employees earn more than 4000.
```js
  const allEmployeesEarnings = employees.map(employee => employee.salary).reduce((accumulator, amount) => {
    return accumulator = accumulator + amount;
  }, 0);
  console.log("Is all employees earn more than 4000? ", allEmployeesEarnings > 4000 ? true : false); //Output: true
```

###  T-033: Find the first employee in the "Sales" and "HR" department.
```js
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
```

### T-034: Verify if all employees belong to a department listed in the departments array.
```js
  const deptIds = departments.map(department => {
    return department.id;
  });
  const IsAllEmpBelongToADepartment = employees.every(employee => {
    return deptIds.includes(employee.departmentId)
  })
  console.log("Is all employees belong to a department listed in the departments array? ", IsAllEmpBelongToADepartment); //Output : true;
```

### ✅ T-035: Log each employee's name and department name to the console.
```js
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
```

### ✅ T-036: Extract all employee names into a single array.
```js
  const empNames = employees.map(employee => {
    return employee.name
  });
  console.log(empNames); //Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Jane']
```

### ✅ T-037: Increment each employee's salary by 10%.
```js
  const empArray = employees.map(employee => {
    const newSalary = ((employee.salary * 10) / 100) + employee.salary;
    employee["salary"] = newSalary;
    return employee;
  });
  console.log("Each employee's salary incremented by 10%", empArray); //Output: [ {id: 1, name: 'Alice', departmentId: 1, salary: 5500}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600}, {id: 7, name: 'George', departmentId: 3, salary: 5720}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610}]
```

✅ T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
```js
  const flattenedSkillArray = employees.flatMap(employee => {
    return {...employee, skills:["Excel", "Management", ["Word", "Photoshop"]].flat(Infinity) }
  });
  console.log("Flatten array of employee skills", flattenedSkillArray); //Output: [{id: 1, name: 'Alice', departmentId: 1, salary: 5500, skills: Array(4)}, {id: 2, name: 'Bob', departmentId: 2, salary: 7700, skills: Array(4)}, {id: 3, name: 'Charlie', departmentId: 3, salary: 4950, skills: Array(4)}, {id: 4, name: 'Diana', departmentId: 1, salary: 6050, skills: Array(4)}, {id: 5, name: 'Edward', departmentId: 2, salary: 8800, skills: Array(4)}, {id: 6, name: 'Fiona', departmentId: 4, salary: 6600, skills: Array(4)}, {id: 7, name: 'George', departmentId: 3, salary: 5720, skills: Array(4)}, {id: 8, name: 'Helen', departmentId: 4, salary: 7920, skills: Array(4)}, {id: 9, name: 'Ian', departmentId: 2, salary: 5280, skills: Array(4)}, {id: 10, name: 'Jane', departmentId: 1, salary: 5610, skills: Array(4)}]
```

### ✅ T-039: Find the total salary of all employees working in the "Engineering" department.
```js
  const engDeptObj = departments.find(department => department.name === "Engineering");
  const engDeptEmpSalary = employees.filter(employee => {
    return employee.departmentId === engDeptObj.id;
  }).map(employee => {
    return employee.salary;
  }).reduce((accumulator, amount) => {
    return accumulator = accumulator + amount;
  });

  console.log('Total salary of all employees working in the "Engineering" department', engDeptEmpSalary); //Output: 19800
```

### ✅ T-040: Check if there is any department where all employees earn more than 5000.
```js
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
```

### T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
```js
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
```

### ✅ T-042: For each employee, find their department name and return an array of employee names with their department names.

```js
  const employeeNameAndDepartment = employees.flatMap(employee => {
    const deptObj = departments.find(department => {
      return department.id === employee.departmentId;
    });
    return [{name: employee.name, departmentName: deptObj.name}];
  });
  console.log(employeeNameAndDepartment); //Output: [{name: 'Alice', departmentName: 'HR'}, {name: 'Bob', departmentName: 'Engineering'}, {name: 'Charlie', departmentName: 'Marketing'}, {name: 'Diana', departmentName: 'HR'}, {name: 'Edward', departmentName: 'Engineering'}, {name: 'Fiona', departmentName: 'Sales'}, {name: 'George', departmentName: 'Marketing'}, {name: 'Helen', departmentName: 'Sales'}, {name: 'Ian', departmentName: 'Engineering'}, {name: 'Jane', departmentName: 'HR'}]
```

### ✅ T-043: Get a list of names of employees earning more than 6000.
```js
const empNameWhoEarnMoreThan6K = employees.filter(employee => {
    return employee.salary > 6000;
  }).map(employee => {
    return employee.name;
  })
  console.log(empNameWhoEarnMoreThan6K); //Output: ['Bob', 'Edward', 'Helen']
```

### T-044: Write a for-of loop to print the names of all employees from the employees array.
```js
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
```

### ✅ T-045: Using a for-of loop, print the names of employees earning more than 5000.
```js
  function printEmpNameWhoEarnMoreThan5K() {
     for (const element of employees) {
      if(element.salary > 5000) {
        console.log(element.name);
      } else {
        continue;
      }
    }
  }
  printEmpNameWhoEarnMoreThan5K(); //Output: 
                                  // Bob
                                  // Diana
                                  // Edward
                                  // Fiona
                                  // George
                                  // Helen
                                  // Jane
```

### ✅ T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
```js
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
```

### ✅ T-047: Write a for-of loop to match employees with their departments and print the results.
```js
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
```

### ✅ T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
```js
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
```

### ✅ T-049:  Given the array-like object below, access the second element and log it:
        ```js
        const arrayLike = { 0: "First", 1: "Second", length: 2 };
        ```
```js
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  const arrayLikeToArray = Array.from(arrayLike);
  console.log(arrayLikeToArray[1]); //Output: Second
```

### ✅ T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
```js
  function convertArgsIntoArray() {
    const realArr = Array.from(arguments)
    console.log(realArr); // Output: [1, 10]
  }
  convertArgsIntoArray(1, 10);
```

### ✅ T-051:  Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
```js
  const allDivArr = Array.from(document.querySelectorAll("div"));
  console.log(allDivArr); //Output: [div, div, div, div, div]
```

### ✅ T-052:  Merge these two arrays into a single array:
      ```js
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      ```
```js
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const mergedArr = arr1.concat(arr2);
  console.log(mergedArr); //Output: [1,2,3,4]
```

### ✅ T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
```js
  const arr = Array.from("AAAAA");
  console.log(arr); //Output:  ['A', 'A', 'A', 'A', 'A']
```

### ✅ T-054: Use Array.from to convert a string like "Hello" into an array of characters.
```js
  const arr = Array.from("Hello");
  console.log(arr); //Output:  ['H', 'e', 'l', 'l', 'o']
```

### ✅ T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
```js
  const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
  const fruitsGroupedArr = Object.groupBy(fruits, ([fruit]) => fruit);
  console.log(fruitsGroupedArr); //Output: { a: ['apple', 'apricot'], b:  ['banana', 'blueberry'], m: ['mango'] }
```

### ✅ T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
```js
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
```

### ✅ T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].
```js
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
```

### ✅ T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
```js
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
```

### T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
```js
  const arr = [['a', 'b'], ['c', 'd']];
  const upperCaseArr = arr.flatMap(items => {
    const [ arr1Items, arr2Items ] = items; 
    return [arr1Items.toUpperCase(), arr2Items.toUpperCase()];
  });
  console.log(upperCaseArr); //Output: ['A', 'B', 'C', 'D']
```

### ✅ T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'].
```js 
const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
  const groupedObj = Object.groupBy(fruits, ([fruit]) => fruit);
  
  const occurrenceCount = [];
  for (const key in groupedObj) {
    occurrenceCount.push(groupedObj[key][0] + " count : " + groupedObj[key].length);
  }
  console.log(occurrenceCount); //Output: ['apple count : 2', 'banana count : 3', 'mango count : 1']
```

### ✅ T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e'].
```js
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const extractArr = arr.slice(1, 4);
  console.log(extractArr); //Output: ['b', 'c', 'd']
```

### ✅ T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted().
```js
  const array = [9, 3, 1, 6, 8];
  const sortedArr = array.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1: -1;
  })
  console.log(sortedArr); //Output: [1, 3, 6, 8, 9]
```

### ✅ T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse().
```js
  const arr = [1, 2, 3, 4, 5];
  const toReversedArr = arr.toReversed();
  console.log(toReversedArr); //Output: [5, 4, 3, 2, 1], toReversed() method reverses an array without changing the original array.
  console.log(arr); //Output: [1, 2, 3, 4, 5], because toReversedArr() method didn't muted this array.

  console.log(arr.reverse()); //Output: [5, 4, 3, 2, 1], reverse() method operation muted the original array
  console.log(arr); //Output: [5, 4, 3, 2, 1]
```

### ✅ T-065: Group the follwing array elements based on age(Adult vs Non-Adult):
      ```js
      const users = [
        { name: 'Alice', age: 55 },
        { name: 'Bob', age: 3 },
        { name: 'Charlie', age: 25 },
      ];
      ```
```js
  const users = [
    { name: 'Alice', age: 55 },
    { name: 'Bob', age: 3 },
    { name: 'Charlie', age: 25 },
  ];
  const temp = Object.groupBy(users, ({age}) => age);
  console.log(temp); //Output: {3:[{name: 'Bob', age: 3}], 25:[{name: 'Charlie', age: 25}], 55:[{name: 'Alice', age: 55}]}
```

### ✅ T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
```js
  const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
  const words = sentence.split(" ");
  const highestLengthOfWord = words
  .map(word => word.length)
  .reduce((largest, current) => {
    return current > largest ? current : largest;
  }, 0);
 
  const longestWords = words.filter(word => word.length === highestLengthOfWord)
  console.log(longestWords); //['JavaScript', 'tapaScript', 'initiative']
```

### ✅ T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6].
```js
  const arr1 = [1, 2, 3, 4];
  const arr2 =  [3, 4, 5, 6];
  const commonElements =  arr1.filter(item => arr2.includes(item));
  console.log(commonElements); //Output: [3, 4]
```