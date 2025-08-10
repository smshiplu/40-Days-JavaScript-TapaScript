
// for (let i = 0; i <= 3; i++) {
//   setTimeout(function () {
//     console.log("Count:", i);
//   }, 1000);
// }

for (var i = 0; i <= 3; i++) {
  (function(j){

    setTimeout(function () {
      console.log("Count:", j);
    }, 1000);

  }) (i);
}
//Output:
/*
Count: 0
2-async-bug-with0-setTimeout-in-loop.js:12 Count: 1
2-async-bug-with0-setTimeout-in-loop.js:12 Count: 2
2-async-bug-with0-setTimeout-in-loop.js:12 Count: 3
*/
// Explanation: Here closure is being happened. The inner function remember it's outer for loop variable and as soon as the inner function setTimeout's callback get executed the variable i is 4. It log into the console unexpectedly. So to avoid the problems setTimeout should wrapped inside a immediately invoked function. It captures the current value of i in j for each iteration and print the output as expected.

