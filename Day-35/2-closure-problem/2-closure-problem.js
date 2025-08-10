function createButton() {
  const buttons = [];
  // Whenever you are dealing with the closure inside a loop, make sure that the variable you are using inside the closure capturing the value, it has block scope. If you don't do that, if you relying on the function scope you might end up getting a wrong value 

  // so avoid var in loop, instead use let for block scope

  // for (var index = 1; index <= 3; index++) {

  for (let index = 1; index <= 3; index++) {

    buttons.push(function() {
      console.log(`Button ${index} is clicked`);
    });
  }

  return buttons;
}

const [btn1, btn2, btn3] = createButton();
btn1(); // Button 1 is clicked
btn2(); // Button 2 is clicked
btn3(); // Button 3 is clicked