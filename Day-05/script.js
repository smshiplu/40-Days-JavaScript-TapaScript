console.log(`**1. Generate a Pyramid Pattern using Nested Loop \n`);
console.log(`
function pyramidPattern() {
  let output = "";
  for (let index = 1; index <= 5; index++) {
    for(let i = 1; i <= index; i++) {
      output += "*";
    }
    console.log(output);
    output = "";
  }
}
pyramidPattern();
\n`);

function pyramidPattern() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
      output += "*";
    }
    console.log(output);
    output = "";
  }
}
pyramidPattern();
console.log(`\n`);

console.log(`**2. Create Multiplication Table (Using for loop)\n`);
console.log(`
function multiplicationTable(num) {
  for (let index = 1; index <= 10; index++) {
    console.log(\u0060\u0024\u007B num \u007D  X \u0024\u007B index \u007D  =\u0060, num * index);
  }
}
multiplicationTable(3);
\n`);

function multiplicationTable(num) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} X ${index} = `, num * index);
  }
}
multiplicationTable(3);
console.log(`\n`);

console.log(`** 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.\n`);
console.log(`
function oddNumbers() {
  let total = 0;
  for (let index = 1; index <= 500; index++) {
    if(index % 2 === 0) {
      continue;
    }
    total += index;
    console.log(total);
  }
}
oddNumbers();
\n`);

function oddNumbers() {
  let total = 0;
  for (let index = 1; index <= 500; index++) {
    if(index % 2 === 0) {
      continue;
    }
    total += index;
    console.log(total);
  }
}
oddNumbers();
console.log(`\n`);

console.log(`** 4. Skipping Multiples of 3 \n`);
console.log(`
function skippingMultiples() {
  for (let index = 0; index <= 20; index++) {
   if (index % 3 === 0) {
    continue;
   }
   console.log(index);
  }
}
skippingMultiples();
\n`);
function skippingMultiples() {
  for (let index = 0; index <= 20; index++) {
   if (index % 3 === 0) {
    continue;
   }
   console.log(index);
  }
}
skippingMultiples();
console.log(`\n`);

console.log(`** 5. Reverse Digits of a Number (Using while loop)\n`);
console.log(`
  function reverseDigits(params) {
    const temp = String(params).split("");
    const tempTwo = [];
    let i = 0;
    while (i < temp.length) {
      tempTwo.push(temp[i]);
      i++;
    }
    console.log(Number(tempTwo.reverse().join("")));
  }
  reverseDigits(6789);
\n`);

function reverseDigits(params) {
  const temp = String(params).split("");
  const tempTwo = [];
  let i = 0;
  while (i < temp.length) {
    tempTwo.push(temp[i]);
    i++;
  }
  console.log(Number(tempTwo.reverse().join("")));
}
reverseDigits(6789);

