# Day 03 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- What are Operands, Operators, Expressions?
- What are difefrent types of Operators?
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Ternary Operator
- Bitwise Operator
- Relational Operator
- Grouping and Precedence
- typeof Operator
- instanceof Operator
- Tasks and Practices

## **👩‍💻 🧑‍💻 Assignment Tasks**

## ✅ ## 1. Odd or Even?
 - Take a number and find if the number is an odd or even number.
 - Print the number and result in the console.

```js
  const number = 10;
  console.log(number % 2 === 0 ? "Even" : "Odd"); //Even
```

<br/><br/>

## ✅ 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

- Manage `age` as a variable.
- Check if the age is elligible for a driving license and print it on the console accordingly.

```js
const age = 20;
console.log( age >= 18 ? "Eligible for license" : "Not eligible for license");
```

<br/><br/>

## ✅ 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

- You get 12,300 rupees as your monthly salary.
- You get a 20% bonus on your annual salary.
- How much money do you make per annum as a CTC?

```js
  const monthlySalary = 12300;
  const yearlySalary = monthlySalary * 12;
  const yearlyBonus = (yearlySalary * 20) / 100;
  const perAnnumCTC = yearlySalary + yearlyBonus;
  console.log("per annum as a CTC:" , perAnnumCTC); // per annum as a CTC: 177120
```

<br/><br/>

## ✅ 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

- Create a `color` variable.
- Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

```js
const trafficLight = (state) => {
  if(state === "red") {
    console.log("STOP");
  }
  else if (state === "green") {
    console.log("GO");
  } else {
    console.log("Give a value between red or green");
  }
} 
trafficLight("green"); // GO
```

<br/><br/>

## ✅ 5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

- Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

```js
  function electricityBillCalculator(perDayUnit, perUnitCost) {
    const perDayCost = perDayUnit * perUnitCost;
    const perMonthCost = perDayCost * 30;
    const yearlyCost = perMonthCost * 12;
    console.log(`Per month unit cost:` , perMonthCost);
    console.log(`Annual payment with 20 % discount: `, yearlyCost - ((yearlyCost * 20) / 100));
  }
  electricityBillCalculator(5, 150); //Per month unit cost: 22500 
                                    // Annual payment with 20 % discount:  216000
```

<br/><br/>

## ✅ 6. Leap Year Checker
Is 2025 a Leap Year?

- Take `year` as input.
- Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

```js
  const leapYearChecker = (year) => {
    const dt = new Date(year, 1, 1);
    const days = [];
    while(dt.getMonth() === 1) {
      days.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return days.length > 28 ? "This year has leap" : "This year has no leap";
  }
  console.log(leapYearChecker(1008)); // This year has leap
```

<br/><br/>

## ✅ 7. Max of Three Numbers
Find the max number from the lot.

- Take three numbers and assign them to variables p, q, and r.
- Now find the maximum of these three numbers using the comparison operators.

```js
  function maxNumber () {
    const p=100, q=55, r=30; 
    let result;
    if(p > q || p > r) {
      result = p
    } else if(q > p || q > r) {
      result = q;
    } else if (r > r || r > q) {
      result = r;
    }
    return result;
  }
  console.log(maxNumber()); // 100
```

<br/><br/>

## ✅ 8. Bitwise Doubling
A tricky one for you

- Create a variable `count` and assign  a value, say, 5.
- Now use the Bitwise shift operator to make the number double.
- Print it on the console.

```js
// 15 & 9 = 9
// 1111 & 1001 = 1001 = 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)

// 15 / 2 = 7 (1)
// 7 / 2 = 3 (1)
// 3 / 2 = 1 (1)
// console.log("15 Convert into binary:", 1111);

// 9 / 2 = 4 (1)
// 4 / 2 = 2 (0)
// 2 / 2 = 1 (0)
// console.log("9 Convert into binary:", 1001);

// 14 | 9 = 15
// console.log(1 * (2 ** 0) + 1 * (2 ** 1) + 1 * (2 ** 2) + 1 * (2 ** 3));

// 0111 | 1001 = 1111 = 1 * (2 ** 0) + 1 * (2 ** 1) + 1 * (2 ** 2) + 1 * (2 ** 3)

// 14 / 2 = 7 (0)
// 7 / 2 = 3 (1)
//3 / 2 = 1 (1)

// 9 / 2 = 4 (1)
// 4 / 2 = 2 (0)
// 2 / 2 = 1 (0)

// 9 << 2 = 9
// 1001 << 2 = 100100
// 00000000 00000000 00000000 00100100  -> 100100 = 1 * ( 2 ** 0) + 0 * ( 2 ** 1) + 0 * ( 2 ** 2) + 1 ( 2 ** 3)

// 5 << 1 = ?
//Let'converting decimal 5 to binary
// 101 << 1 = 1010
//  5 / 2 = 2 (1)
//  2 / 2 = 1 (0)
// 00000000 00000000 00000000 00000101 -> 1010 = 0 * (2 ** 0) + 1 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)
// console.log(0 * (2 ** 0) + 1 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3));
// console.log(5 << 1);
// 5 << 1 = 10
```



Please find the task assignments in the [Task File](./task.md).