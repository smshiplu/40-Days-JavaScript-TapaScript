console.log(`** 1. Write a Function to Convert Celsius to Fahrenheit
\n`);
function celsiusToFahrenheit(params) {
  const fahrenheit = (params * 9/5) + 32;
  console.log(`${params} Celsius = ${fahrenheit} Fahrenheit`);
}
celsiusToFahrenheit(31);
console.log(`\n`);

console.log(`** 2. Create a Function to Find the Maximum of Two Numbers\n`);
function maxNumber(num1, num2) {
  num1 > num2 ? console.log(`${num1} is max number`) : console.log(`${num2} is max number`);
}
maxNumber(-10, -99);
console.log(`\n`);

console.log(`** 3. Function to Check if a String is a Palindrome\n`);
function checkPalindrome(word) {
  let isPalindrome;
  const reversedWord = word.split("").reverse();  
  for (let i = 0; i < reversedWord.length; i++) {
    word[i] === reversedWord[i] ? isPalindrome = true :  isPalindrome = false;
  }
  console.log(isPalindrome);
}
checkPalindrome("abcdcba"); //Output: true
console.log(`\n`);

console.log(`** 4. Write a Function to Find Factorial of a Number\n`);
function findFactorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  }
  return n * findFactorial(n - 1);
}
console.log(findFactorial(5));
console.log(`\n`);

console.log(`** 5. Write a function to Count Vowels in a String\n`);
function countVowels(str) {
  const vowels = str.split("").filter(letter => ["a", "e", "i", "o", "u"].includes(letter));
  const counts = {};
  vowels.forEach(vowel => {
    counts[vowel] = (counts[vowel] || 0) + 1;
  });
  console.log(counts);
}
countVowels("abcdea");
console.log(`\n`);

console.log(`** 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence\n`);
function capitalize(sentence) {
  const wordArr = sentence.split(" ");
  const capitalizeWord = [];
  wordArr.forEach(word => {
    capitalizeWord.push(word[0].toUpperCase() + word.substr(1));
  });
  console.log(capitalizeWord.join(" "));
}
capitalize("lorem ipsum dolor sit.");
console.log(`\n`);

console.log(`** 7. Use an IIFE to Print “Hello, JavaScript!”`);
(function(param) {
  console.log(`Hello, ${param}`);
})("JavaScript!");
console.log(`\n`);

console.log(`** 8. Create a Simple Callback Function\n`);
function callCallBack(func) {
  const greeting = func();
  console.log(greeting + " John!");
}
callCallBack(function() {
  return "Hello";
})







