# Expense Tracker Project

You have just finished the module 2. You have learned many important concepts till the session(day) 16. It is time to put everything together and do a project.

## Project Requirements

Create a simple expense tracker where user can add, remove, edit, and categorize expenses.

> Please Note: This will be a console-based project (no DOM), focusing only on JavaScript logic.

### Features to Implement

Create a `createExpenseTracker()` function that takes a username and an initial budget to expose the following functioanlities:

- Adding Expense
- Removing Expense
- Updating Expense
- Getting total expenses done by the user
- Getting expense by category
- Get the Highest Expense
- Get the Lowest Expense
- Get the user info
- Show all the expenses
- Update User data

Please make use of the factory function, closure to keep data private and return only the required features/methods.

## Sample User Data Structure

```js
 user: {
    name: "Tapas",
    budget: 5000,
  },
```

## Sample Expense Data Structure

```js
expenses: [
    { id: 1, amount: 200, category: "Food", description: "Lunch" },
    { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
],
```

## Project - Expense Tracker

```js
const expenses = [
  {id: 231, amount: 100, category: "food", description: "Lunch"},
  {id: 532, amount: 300, category: "shopping", description: "New Shoes"},
  {id: 990, amount: 1000, category: 'tour trip', description: 'Entertainment'},
  {id: 571, amount: 200, category: 'shopping', description: 'Shirt'},
  {id: 211, amount: 300, category: 'rent', description: 'Office rent'},
  {id: 915, amount: 500, category: 'rent', description: 'House rent'}
];

console.log(`\n
  Functions:
  1. addingExpense(amount, category, description)
  2. removingExpense(id)
  3. updatingExpense(expenseObj)
\n`);

function createExpenseTracker(userInfo) {
  if(userInfo.initialBudget < 500 ) {
    console.log(`Required minimum budget of 500`);
    return
  }
  if(!userInfo.email) {
    console.log(`User must required an email address`);
    return
  }

  function createUser() {
    return {
      fname: userInfo.fname,
      lname: userInfo.lname,
      email: userInfo.email,
      budget: userInfo.initialBudget
    }
  }
  let user = createUser(userInfo);

  if(!user) {
    console.log(`Create user first to use expanse tracker!`);
    return
  }

  function generateRandomId() {
    return Math.floor(Math.random() * 1000);
  }

  //add expense
  function addingExpense(amount, category, description) {
    if(amount > user.budget) {
      console.log(`Amount is exceeding your budget to add expense`);
      return;
    }
    
    const obj = {
      id: generateRandomId(),
      amount,
      category,
      description
    };
    expenses.push(obj);
  }
  
  addingExpense(80, "food", "Breakfast");
  addingExpense(60, "food", "Dinner");
  addingExpense(150, "papers", "Office expense");

  //remove expense
  function removingExpense(id) {
    const expenseObj = expenses.find((expense) => {
      return expense.id === id;
    });
    if(!expenseObj) {
      console.log("ID didn't match to remove expense. Please try with correct ID");
      return;
    }
    const expenseIndex = expenses.indexOf(expenseObj)
    expenses.splice(expenseIndex, 1);
  }
  // removingExpense(915);

  //Update expense
  function updatingExpense(expenseToUpdate) {
    const expenseFound = expenses.find(expense => expense.id === expenseToUpdate.id);
    
    if(!expenseFound) {
      console.log("Expense didn't found to update.");
      return;
    }
    
    if(expenseToUpdate.amount > remainingBudget() ) {
      console.log(`Amount is exceeding your budget to update expense.`);
      return;
    } 

    const expenseIndex = expenses.indexOf(expenseFound);
    expenses.splice(expenseIndex, 1, expenseToUpdate); 
  }

  updatingExpense({id: 990, amount: 700, category: 'tour trip', description: 'Entertainment'});
  updatingExpense({id: 211, amount: 300, category: 'rent', description: 'Office Rent'});

  function expenseByCategory(categoryName) {
    const expensesByCat = expenses.filter(expense => {
      return expense.category === categoryName
    });
    console.log(`\n`);
    console.log("Getting expense by category:", expensesByCat);
  }
  expenseByCategory("food"); 

  function highestExpense() {
    const hightExpense = expenses.map(expense => {
      return expense.amount;
    }).reduce((accumulator, currentAmount) => {
      return currentAmount > accumulator ? currentAmount : accumulator
    }, 0);
    console.log(`\n`);
    console.log("Height Expense Amount:", hightExpense);
  }
  highestExpense();

  function lowestExpense() {
    const allExpenses = expenses.map(expense => {
      return expense.amount;
    });
    const lowestExpense = Math.min(...allExpenses);
    console.log(`\n`);
    console.log("Lowest Expense Amount:", lowestExpense);
  }
  lowestExpense();

  function getUserInfo() {
    console.log(`\n`);
    arguments.length > 0 ? console.log("UPDATED USER INFO:"): console.log("USER INFO:");
    console.log(`Name: ${user.fname.toUpperCase()} ${user.lname.toUpperCase()}, Email: ${user.email}, Remaining deposit ${remainingBudget()} of total ${user.budget}`);
  }
  getUserInfo();

  function showAllExpenses() {
    console.log(`\n`);
    console.log("All EXPENSE: ");
    expenses.forEach(expense => {
      console.log(`${expense.category}: `, expense.amount);
    });
  }
  showAllExpenses();

  function updateUserData(userObj) {
    if(user.email !== userObj.email) {
      console.log(`User email didn't match. Please provide correct user email`);
      return ;
    }

    user = {...user, ...userObj}
    getUserInfo("");
  }
  const userObj = {
    email: "user@example.com",
    lname: "Azlan"
  }
  updateUserData(userObj);

  function totalExpense() {
    const total = expenses
    .map(expense => expense.amount)
    .reduce((accumulator, currentAmount) => {
      return accumulator = accumulator + currentAmount;
    }, 0);
    return total;
  }

  function remainingBudget() {
    const total = user.budget - totalExpense();
    return total;
  }

  function statLog() {
    console.log(`\n` );
    console.log("STAT LOGS:");
    console.log("Expenses Array:", expenses);
    console.log("Total Expense:", totalExpense());
    console.log("Remaining Budget:", remainingBudget());
  }
  statLog();

} // createExpenseTracker()


const userInfo = {
  fname: "sm",
  lname: "shiplu",
  email: "user@example.com",
  initialBudget: 5000
}
createExpenseTracker(userInfo)
```