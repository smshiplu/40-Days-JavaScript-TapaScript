
function makeMultipliers() {
  const result = [];

  // In bellow example closure is being happened and while capturing the value, it's not getting the block scope. This is all unexpected result causing because of the var
  
  // for (var i = 1; i <= 3; i++) {

  //In the bellow example block scope is happening and every time variable i get created and initialized with the new value.
  
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Output: 2
console.log(triple(2));  // Output: 4
console.log(quadruple(2)); // Output: 6

