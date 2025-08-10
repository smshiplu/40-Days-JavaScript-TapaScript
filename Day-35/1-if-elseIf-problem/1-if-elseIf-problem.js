function calculateDiscount(total) {

  let discount = 0;

  // in case of evaluating a value with the if elseIf, then we have to evaluate from the highest value to lowest value

  //Wrong approach

  // if(total >= 100) {
  //   discount = 0.10;
  // }
  // else if(total >= 300) {
  //   discount = 0.15;
  // }
  // else if(total >= 500) {
  //   discount = 0.20;
  // }

  //Right approach
  if(total >= 500) {
    discount = 0.20;
  }
  else if(total >= 300) {
    discount = 0.15;
  }
  else if(total >= 100) {
    discount = 0.10;
  }

  return total - total * discount;
}


// console.log(calculateDiscount(50)); // 50
// console.log(calculateDiscount(150)); // 135
// console.log(calculateDiscount(350)); // 297.5
console.log(calculateDiscount(600)); // 480

