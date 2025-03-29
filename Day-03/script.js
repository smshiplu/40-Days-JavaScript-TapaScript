console.log("** 1. Odd or Even? **");

console.log(10 % 2 === 0 ? "Even" : "Odd");
console.log(`\n`);

console.log("** 2. Do you have a Driving License? **");
const age = 20;
console.log( age >= 18 ? "Eligible for license" : "Not eligible for license");
console.log(`\n`);

console.log("** 3. Calculate CTC with a Bonus **");
const monthlySalary = 12300;
const yearlySalary = monthlySalary * 12;
const yearlyBonus = (yearlySalary * 20) / 100;
const perAnnumCTC = yearlySalary + yearlyBonus;
console.log("per annum as a CTC:" , perAnnumCTC);
console.log(`\n`);

console.log("** 4. Write a program for the Traffic Light Simulation **");
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
trafficLight("green");
console.log(`\n`);


console.log("** 5. Create an Electricity Bill Calculator **");
const perDayUnit = 5;
const perUnitCost = 150;
const perDayCost = perDayUnit * perUnitCost;
const perMonthCost = perDayCost * 30;
const yearlyCost = perMonthCost * 12;
console.log(`Per month unit cost:` , perMonthCost);
console.log(`Annual payment with 20 % discount: `, yearlyCost - ((yearlyCost * 20) / 100));
console.log(`\n`);


console.log("** 6. Leap Year Checker **");
const leapYearChecker = (year) => {
  const dt = new Date(year, 1, 1);
  const days = [];
  while(dt.getMonth() === 1) {
    days.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return days.length > 28 ? "This year has leap" : "This year has no leap";
}
console.log(leapYearChecker(1008));
console.log(`\n`);


console.log("**7. Max of Three Numbers**");
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
console.log(maxNumber());
console.log(`\n`);


console.log("** 8. Bitwise Doubling **");
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

console.log(`\n`);