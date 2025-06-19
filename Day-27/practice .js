// Example: 1
// function f1() {
//   console.log("f1");
// }
// function f2() {
//   console.log("f2");
// }
// function main() {
//   console.log("main");
//   setTimeout(f1, 0);
//   f2()
// }
// main();
//Output: main
        // f2
        // f1


// Example: 2
// function f1() {
//   console.log("f1");
// }
// function f2() {
//   console.log("f2");
// }
// function main() {
//   console.log("main");
//   setTimeout(f1, 0);
//   new Promise((resolve, reject) => {
//     resolve("I am a Promise")
//   }).then(resolve => console.log(resolve));
//   f2()
// }
// main(); //Output: main
                  // f2
                  // I an a Promise
                  // f1


// Example: 3 

function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
function f3() {
  console.log("f3");
}

function main() {
  console.log("main");

  setTimeout(f1, 50);
  setTimeout(f3, 30);

  new Promise((resolve, reject) => {
    resolve("I am Promise after f1 and f3, Really?")
  }).then(resolve => console.log(resolve));

  new Promise((resolve, reject) => {
    resolve("I am a Promise after Promise")
  }).then(resolve => console.log(resolve));

  f2();
}
main();
