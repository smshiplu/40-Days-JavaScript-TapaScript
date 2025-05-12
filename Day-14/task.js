console.log(`## 1. What will be the output of the following code?\n`);
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name); // reference error
}
console.log(`\n`);

console.log(`## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors\n`);
function processPayment(amount) {
  try {
    let balance = 1000;
    if(amount < 0 ) throw new Error(`Please enter a positive number amount. you've entered ${amount}`);
    if(amount > balance ) throw new Error(`Payment amount cannot be exceed the Balance`);
  } catch (error) {
    console.error("Payment process error: ", error.message);
  }
}
processPayment(-100);
processPayment(10000);
console.log(`\n`);

console.log(`## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as UserError, PaymentError, ServerError and EmailError`);
function eCommerceErrorSystem(errName, message) {
  this.name = errName;
  this.message = message; 
  this.stack = new Error();
}
eCommerceErrorSystem.prototype = Object.create(Error.prototype);

function validateUser(userInfo) {
  try {
    if(!userInfo) throw new eCommerceErrorSystem("UserError","User info cannot be empty!")
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
validateUser();

function validatePayment(amount) {
  try {
    if(amount < 0 ) throw new eCommerceErrorSystem("PaymentError", "Payment cannot be a negative number");
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
validatePayment(-100);

function serverConnection(ip) {
  try {
    if(ip !== "127.0.0.1" ) throw new eCommerceErrorSystem("ServerError",`${ip} is not a valid IP`);
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
serverConnection("192.1688.0.1");

function validateEmail(email) {
  try {
    if(!email.includes("@")) throw new eCommerceErrorSystem("EmailError", "Enter a a valid email!");
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
validateEmail("email");
console.log(`\n`);

console.log(`## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch\n`);
async function fetchData(url) {
  try {
    const urlObj = URL.parse(url);    
    if(urlObj.protocol !== "https:") throw new Error("Url must contain https protocol");
    const response = await fetch(url);
    if(response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Fail to fetch data")
    }
  } catch (error) {
    console.error("URL Error:", error.message);
  }
}
fetchData("http://httpbin.org/get");
console.log(`\n`);

console.log(`## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors\n`);
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error();
}
ValidationError.prototype = Object.create(Error.prototype);

function validateForm(formData) {
  try {
    if(!formData.userName) throw new ValidationError("Username cannot be empty");
    if(formData.age < 0 ) throw new ValidationError("Age must be a positive number");
  } catch (error) {
    console.error("ValidationError: ", error.message);
  }
}
validateForm({userName: "", age: -2})
console.log(`\n`);

console.log(`## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources\n`);
function readFile(filePath) {
  try {
    if(!filePath) throw new Error("File not found");
  } catch (error) {
    console.error("Invalid file path error: ", error.message);
  } finally {
    console.log("IO resources released!");
  }
}
readFile();
console.log(`\n`);

console.log(`## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"\n`);
function parseJson(str) {
  try {
    let parsedData = JSON.parse(str);
    console.log(parsedData);
  } catch (error) {
    // console.error(error.message);
    throw new Error("Invalid JSON");
  }
}
parseJson('{"name": "Azlan"}'); // {name: "Azlan"}
parseJson("random");// Uncaught Error: Invalid JSON
console.log(`\n`);

console.log(`## 8. What is the purpose of throw in JavaScript?\n`);
console.log("It creates a new error manually");
console.log(`\n`);

console.log(`## 9. What does the finally block do in a try...catch statement?\n`);
console.log("Runs regardless of whether an error occurs or not");
console.log(`\n`);

console.log(`## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object\n`);
console.log("Table submitted to the discord");
console.log(`\n`);




