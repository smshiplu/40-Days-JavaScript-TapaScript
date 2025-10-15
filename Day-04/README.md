# Day 04 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- What is Control Flow and Branching
- Understanding if-else all possible scenarios
- Undersatanding switch-case all possible scenarios
- Comparioson study between if-else and switch-case
- Test and Assignments

## **👩‍💻 🧑‍💻 Assignment Tasks**


## ✅ 1. What will be the output of this code snippet and why?

```js
  let day = "Monday";

  switch (day) {
    case "monday":
      console.log("It's the start of the week.");
      break;
    default:
      console.log("It's a normal day.");
  }

  // The Output will be "It's the start of the week". Because as soon as the switch case find the case as monday, it will print "It's the start of the week" in console and break the loop. So it won't go for default case;
```

<br/><br/>

## ✅ 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

```js
function cashWithdrawal(amount) {
  if(amount <= (100 * 10))
    console.log("Withdrawal successful");
  else 
    console.log("Invalid amount");
}
cashWithdrawal(1000); // Withdrawal successful
```

<br/><br/>

## ✅ 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

```js
  function calculator (operator) {
    switch(operator) {
      case "+":
        console.log(100 + 10);
        break;
      case "-":
        console.log(100 - 10);
        break;
      case "*":
        console.log(100 * 10);
        break;
      case "/":
        console.log(100 / 10);
        break;
      default:
        console.log("No operator found");
    }
  }
  calculator("+"); // 110
  calculator("-"); // 90
  calculator("*"); // 1000
  calculator("/"); // 10
```

<br/><br/>

## ✅ 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.

```js
  function ticketPrice(age) {
    if(age >= 18 && age <= 60) {
      console.log("Ticket price: $10");
    }
    else if (age > 60) {
      console.log("Ticket price: $8");
    }
    else {
      console.log("Ticket price: $3");
    }
  }
  ticketPrice(18); // Ticket price: $10
```

<br/><br/>

## 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

```js
function horoscopeSignChecker (month) {
  switch(month) {
    case "March" :
    case "April" :
      console.log("Your Horoscope Sign is: Aries or Taurus");
      break;

    case "May" :
    case "June" :
      console.log("Your Horoscope Sign is: Gemini or Cancer");
      break;

    case "July" :
    case "August" :
      console.log("Your Horoscope Sign is: Leo or Virgo");
      break;

    case "September" :
    case "October" :
      console.log("Your Horoscope Sign is: Libra Scorpio");
      break;

    case "November" :
    case "December" :
      console.log("Your Horoscope Sign is: Sagittarius or Capricorn");
      break;

    case "January" :
    case "February" :
      console.log("Your Horoscope Sign is: Aquarius or Pisces");
      break;

    default:
      console.log("No valid month");
  }
}
horoscopeSignChecker("March"); // Your Horoscope Sign is: Aries or Taurus
```

<br/><br/>

## 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

```js
function triangleType(a, b, c) {
  if( a === b && b == c) {
    console.log("All sides equal Triangle (Equilateral Triangle)");
  } else if( a===b || b===c || a === c ) {
    console.log("Two sides equal Triangle (Isosceles Triangle)");
  } else if(  a !== b && c!== b) {
    console.log("All sides different Triangle (Isosceles Triangle)");
  } else {
    console.log("Provide three arguments for the Triangle");
  }
}

triangleType( 10, 10, 1) //Two sides equal Triangle (Isosceles Triangle)
```

Please find the task assignments in the [Task File](./task.md).