# Day 05 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Logic Building and DSA
- ✅ Loops in JavaScript
- ✅ The for Loop
- ✅ The for Loop Flow Chart
- ✅ for Loop Examples
- ✅ Nested Loop
- ✅ The break and continue
- ✅ Handling Multiple Counters
- ✅ The while Loop
- ✅ The do-while Loop
- ✅ Infinite Loop
- ✅ Task and Wrap Up

## **👩‍💻 🧑‍💻 Assignment Tasks**

## ✅ 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
```

```js
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
```

<br/><br/>

## ✅ 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
```

```js
function multiplicationTable(num) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} X ${index} = `, num * index);
  }
}
multiplicationTable(3);
/*
3 X 1 =  3
3 X 2 =  6
3 X 3 =  9
3 X 4 =  12
3 X 5 =  15
3 X 6 =  18
3 X 7 =  21
3 X 8 =  24
3 X 9 =  27
3 X 10 =  30
*/
```

<br/><br/>

## ✅ 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

```js
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
```

<br/><br/>

## ✅ 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

```js
function skippingMultiples() {
  for (let index = 0; index <= 20; index++) {
   if (index % 3 === 0) {
    continue;
   }
   console.log(index);
  }
}
skippingMultiples();

/*
4
5
7
8
10
11
13
14
16
17
19
20
*/
```

<br/><br/>

## ✅ 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

```bash
Input: 6789
Output: 9876
```

```js
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
reverseDigits(6789); // 9876
```

Please find the task assignments in the [Task File](./task.md).