console.log(`1. Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.\n`);

{
  console.log("Name is: " + name);
  var name;
  name= "JS";
  //GEC
    //CP
      //name: undefined
    //EP
      //FEC for console.log(). at this point console.log("Name is: " + name) is executed and found the name variable as undefined. so no error occurred.
      //name: "JS"

  // console.log("Age is: " + age);
  // let age;
  // age = 40;
  // console.log("Age is: " + age);
  //GEC
    //CP
      //there is no existence of age variable. Because in case of "let" no memory gets assigned or created for age;
    //EP 
    //console.log() get executed here and a reference error occurred. Here temporal dead zone or TDZ is being happened. TDZ start from line 14 end at line 16. 

  // console.log("Salary: " + salary);
  // const salary = 10000
  // console.log("Salary: " + salary);
  //GEC
    //CP
      // salary:undefined
    //EP
      //salary = 10000
}
