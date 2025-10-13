import { Expense } from "../models/expense";

export class ExpenseService {
  constructor(UserService) {
    this.expenses = [];
    this.userService = UserService;
  }

  addExpense(paidBy, amount, description) {
    if(!this.userService.hasUser(paidBy)) {
      throw new Error("User does not exists!");
    }
    const expense = new Expense(paidBy, amount, description);
    this.expenses.push(expense);
    return expense;
  }

  getAllExpenses() {
    return [...this.expenses];
  }

  getExpensesByUser(userName) {
    return this.expenses.filter(expense => expense.paidBy === userName);
  }

  clear() {
    this.expenses = [];
  }

  simplifyExpenses() {
    // Step 1: Calculate What Each Person Should Pay
        // Total Expense => 900
        // Number of Users => 3
        // Share per User => totalExpense/numOfUser (900/3 = 300)

    // Step 2: Figure Out Who Owes Money and Who Should Receive Money
        // Alice => 300 => Balance is 0
        // Bob => 150 => Owes 300 - 150 = 150
        // Charlie => 450 => Receive 450 - 300 = 150

    // Step 3:  Match People Who Owe Money with People Who Should Receive Money
        // Result: ["Bob Owes Charlie $150"]

    const userCount = this.userService.getUserCount();

    if(userCount === 0) {
      throw new Error("Nothing to seattle!");
      // return [];
    }

    const net = {};
    const userNames = this.userService.getAllUserNames();

    userNames.forEach(name => {
      net[name] = 0;
    });

    this.expenses.forEach(expense => {
      const share = expense.amount/userCount;

      userNames.forEach(name => {
        if(name === expense.paidBy) {
          net[name] += (expense.amount - share);
        } else {
          net[name] -= share;
        }
      })
    })

    return this.calculateSettlements(net);
  }

  calculateSettlements(net) {
    const results = [];

    // Step 1: Filter Out Balanced People
    const names = Object.keys(net).filter( name => Math.abs(net[name]) > 0.01)
    
    // Step 2: Sort by Balance
    names.sort((a, b) => net[a] - net[b]); 

    //Step 3: Two-Pointer Technique
    let i = 0; // Points to person who owes most money
    let j = names.length - 1; // Points to person who is owed most money

    while(i < j) {
      const creditor = names[j]; // Person who should receive money
      const debtor = names[i]; // Person who owes money

      const settlement = Math.min(-net[debtor], net[creditor]);

      if(settlement > 0.01) {
        net[debtor] += settlement; // Reduce debtor's debt
        net[creditor] -= settlement; //Reduce creditor's credit
        results.push(
          `${debtor} owes ${creditor} $${settlement.toFixed(2)}`
        );

        if(Math.abs(net[debtor]) < 0.01) i++; // Debtor is settled, move to next
        if(Math.abs(net[creditor]) < 0.01) j--; //Creditor is settled, and move to previous
      }
      return results;
    }
  }
}