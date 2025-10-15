console.log(`** 1. What will be the output of this code snippet and why? \n`);
console.log(`
  let day = "Monday";

  switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
  }
  \n`);
  console.log(`
The Output will be "It's the start of the week". Because as soon as the switch case find the case as monday, it will print "It's the start of the week" in console and break the loop. So it won't go for default case;
\n`);

console.log(`** 2. Build an ATM Cash Withdrawal System \n`);
function cashWithdrawal(amount) {
  if(amount <= (100 * 10))
    console.log("Withdrawal successful");
  else 
    console.log("Invalid amount");
}
cashWithdrawal(1000);
console.log(`\n`);

console.log(`** 3. Build a Calculator with switch-case \n`);
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
console.log(`\n`);

console.log(`** 4. Pay for your movie ticket \n`);
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
console.log(`\n`);

console.log(`** 5. Horoscope Sign Checker \n`);
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
console.log(`\n`);

console.log(`** 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, \`Equilateral Triangle\`.
- Two sides equal is called, \`Isosceles Triangle\`.
- All sides different is called, \`Scalene Triangle\`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.\n`);

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





