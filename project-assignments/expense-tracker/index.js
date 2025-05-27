const expenses = [
  {id: 231, amount: 100, category: "food", description: "Lunch"},
  {id: 532, amount: 300, category: "shopping", description: "New Shoes"},
  {id: 990, amount: 1000, category: 'tour trip', description: 'Entertainment'},
  {id: 571, amount: 200, category: 'shopping', description: 'Shirt'},
  {id: 211, amount: 300, category: 'rent', description: 'Office rent'},
  {id: 915, amount: 500, category: 'rent', description: 'House rent'}
];

function CreateExpenseTracker(userInfo) {
  function validation() {
    if(userInfo.initialBudget < 500 ) {
      console.log(`Required minimum budget of 500\n`);
      return
    }
    if(!userInfo.email) {
      console.log(`User must required an email address\n`);
      return
    }
  }
  validation();

  function createUser() {
    return {
      fname: userInfo.fname,
      lname: userInfo.lname,
      email: userInfo.email,
      budget: userInfo.initialBudget
    }
  }
  // this.user = createUser();

  // making user property private
  let user = createUser();
  function getUser() {
    return user;
  }
  
  function checkUserCreatedOrNot(user) {
    if(!user) {
      console.log(`Create user first to use expanse tracker!\n`);
      return;
    } else {
      console.log(`User has been created. Expense Tracker is ready to use.\n`);
    }
  }
  checkUserCreatedOrNot(getUser());


  //generate random ID for expense generation
  function generateRandomId() {
    return Math.floor(Math.random() * 1000);
  }
  
  //add expense
  this.addExpense = function (amount, category, description) {
    if(amount > getUser().budget) {
      console.log(`Amount is exceeding your budget to add expense\n`);
      return;
    }
    
    const obj = {
      id: generateRandomId(),
      amount,
      category,
      description
    };
    expenses.push(obj);
    console.log(`\n`);
    console.log(`Expense successfully added - ${JSON.stringify(obj)}\n`);
  }

  //remove expense
  this.removeExpense = function(id) {
    const expenseObj = expenses.find((expense) => {
      return expense.id === id;
    });
    if(!expenseObj) {
      console.log(`ID didn't match to remove expense. Please try with correct ID\n`);
      return;
    }
    const expenseIndex = expenses.indexOf(expenseObj)
    expenses.splice(expenseIndex, 1);
    console.log(`\n`);
    console.log(`Expense successfully removed - ${JSON.stringify(expenseObj)}\n`);
  }

  //update expense
  this.updateExpense = function (expenseToUpdate) {
    const expenseFound = expenses.find(expense => expense.id === expenseToUpdate.id);
    
    if(!expenseFound) {
      console.log(`Expense didn't found to update\n`);
      return;
    }
    
    if(expenseToUpdate.amount > remainingBudget(getUser()) ) {
      console.log(`Amount is exceeding your budget to update expense\n`);
      return;
    } 

    const expenseIndex = expenses.indexOf(expenseFound);
    expenses.splice(expenseIndex, 1, expenseToUpdate);
    console.log(`\n`);
    console.log(`Expense successfully updated - ${JSON.stringify(expenseToUpdate)}\n`);
  }

  //get expenses by category
  this.expenseByCategory = function (categoryName) {
    const expensesByCat = expenses.filter(expense => {
      return expense.category === categoryName
    });
    console.log(`\n`);
    console.log(`Get expense by category (${categoryName}) -`, expensesByCat);
  }

  //highest expense
  this.highestExpense = function () {
    const highestExpense = expenses.map(expense => {
      return expense.amount;
    }).reduce((accumulator, currentAmount) => {
      return currentAmount > accumulator ? currentAmount : accumulator
    }, 0);
    console.log(`\n`);
    console.log("Height expense amount - ", highestExpense);
  }

  //lowest expense
  this.lowestExpense = function () {
    const allExpenses = expenses.map(expense => {
      return expense.amount;
    });
    const lowestExpense = Math.min(...allExpenses);
    console.log(`\n`);
    console.log("Lowest expense amount - ", lowestExpense);
  }

  //get user info
  this.getUserInfo = function() {
    console.log(`\n`);
    arguments.length > 0 ? console.log("Updated user info - "): console.log("User info - ");
    console.log(`Name: ${getUser().fname.toUpperCase()} ${getUser().lname.toUpperCase()}, Email: ${getUser().email}, Remaining deposit ${remainingBudget(getUser())} of total ${getUser().budget}`);
  }

  //show all expenses
  this.showAllExpenses = function () {
    console.log(`\n`);
    console.log("All expenses - ");
    expenses.forEach(expense => {
      console.log(`${expense.category}: `, expense.amount);
    });
  }

  //update user data
  this.updateUserData = function (userObj) {
    if(getUser().email !== userObj.email) {
      console.log(`\nUser email didn't match. Please provide correct user email to update user info`);
      return ;
    }

    user = {...getUser(), ...userObj}
    this.getUserInfo("");
  }

  function totalExpense() {
    const total = expenses
    .map(expense => expense.amount)
    .reduce((accumulator, currentAmount) => {
      return accumulator = accumulator + currentAmount;
    }, 0);
    return total;
  }

  function remainingBudget(user) {
    const total = user.budget - totalExpense();
    return total;
  }

} //CreateExpenseTracker


const userInfo = {
  fname: "sm",
  lname: "shiplu",
  email: "user@example.com",
  initialBudget: 5000
}
const expenseTracker = new CreateExpenseTracker(userInfo);
expenseTracker.addExpense(60, "food", "Dinner");
expenseTracker.removeExpense(915);
expenseTracker.updateExpense({id: 990, amount: 1100, category: 'tour trip', description: 'Entertainment'});
expenseTracker.expenseByCategory("food");
expenseTracker.highestExpense();
expenseTracker.lowestExpense();
expenseTracker.getUserInfo();
expenseTracker.showAllExpenses();

const userData = {
  email: "user@example.com",
  lname: "Azlan"
}
expenseTracker.updateUserData(userData);
console.log(`\nExpenses - `, expenses, `\n`);
