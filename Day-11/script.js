function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    "deposit": (amount) => {
      balance = balance + amount;
      console.log(`Deposited ${amount} Total ${balance}`);
    },
    "withdraw": (amount) => {
      if(amount > balance) {
        console.log("In sufficient balance ⚠");
      } else {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount} Total: ${balance}`);
      }
    },
    "checkBalance": () => console.log(`Total Balance: ${balance}`)

  }
}

const bankAccount = createBankAccount(100);
console.log(bankAccount.deposit(300));
console.log(bankAccount.deposit(200));
console.log(bankAccount.withdraw(100));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.withdraw(20));
console.log(`\n`);


console.log(`1. What will be the output of the following code and why?\n`);
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); //1
counter(); //2
console.log(`\n`);
//It's happening because of closure. when invoking inner function or closure function it remembers the outer scope value

console.log(`2. What will be the output and why?\n`);
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //100
console.log(`\n`);
// It means a function returns another function and that returned function is called immediately.

console.log(`3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.\n`);
function buttonEventClosure() {
  let clickCount = 0;
  const button = document.createElement("button");
  button.innerText = "Click Me";

  // Attach the click event handler using a closure
  button.addEventListener("click",  e => {
    clickCount++;
    console.log("Button Clicked:", clickCount, " Times");
  });

  return button;
}

const myBtn = buttonEventClosure();
document.body.appendChild(myBtn);

console.log(`\n`);

console.log(`4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.\n`);
function createMultiplier(multiplier) {
  return function (num) {
    console.log(`Multiplier:${multiplier}, Number:${num}, Result:${multiplier * num}`);
  }
}
// createMultiplier(3)(10)
const mulRes = createMultiplier(3);
mulRes(15); // Multiplier:3, Number:15, Result:45
mulRes(20); // Multiplier:3, Number:20, Result:60
mulRes(2); // Multiplier:3, Number:2, Result:6
console.log(`\n`);

console.log(`5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.\n`);

console.log(`2) The object remains in memory as long as the closure exists`);



console.log(`6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.\n`);
function incDecCounter() {
  let count = 0;
  return {
    "increment": () => {
      count++;
      console.log("Counter:" + count);
    },
    "decrement": () => {
      count--;
      console.log("Counter:" + count);
    },
    "reset": () => {
      count = 0;
      console.log("Counter:" + count);
    }
  }
}
const counterInstance = incDecCounter();
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.decrement());
console.log(counterInstance.reset());
console.log(counterInstance.increment());
