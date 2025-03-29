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
calculator("/");
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
ticketPrice(18);
console.log(`\n`);

console.log(`** 5. Horoscope Sign Checker \n`);
function horoscopeSignChecker (month) {
  switch(month) {
    case "March" :
      console.log("Your Horoscope Sign is: Aries");
      break;
    case "April" :
      console.log("Your Horoscope Sign is: Taurus");
      break;
    case "May" :
      console.log("Your Horoscope Sign is: Gemini");
      break;
    case "June" :
      console.log("Your Horoscope Sign is: Cancer");
      break;
    case "July" :
      console.log("Your Horoscope Sign is: Leo");
      break;
    case "August" :
      console.log("Your Horoscope Sign is: Virgo");
      break;
    case "September" :
      console.log("Your Horoscope Sign is: Libra");
      break;
    case "October" :
      console.log("Your Horoscope Sign is: Scorpio");
      break;
    case "November" :
      console.log("Your Horoscope Sign is: Sagittarius");
      break;
    case "December" :
      console.log("Your Horoscope Sign is: Capricorn");
      break;
    case "January" :
      console.log("Your Horoscope Sign is: Aquarius");
      break;
    case "February" :
      console.log("Your Horoscope Sign is: Pisces");
      break;
    default:
      console.log("No valid month");
  }
}
horoscopeSignChecker("March");
console.log(`\n`);




