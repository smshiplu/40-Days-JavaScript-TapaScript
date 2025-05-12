# Day 14 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Why Error Handling
- ✅ What Will We Learn?
- ✅ Errors in JavaScript
- ✅ Handling Errors With try and catch
- ✅ The Error Object
- ✅ Real World Use Cases
- ✅ Throwing Error
- ✅ A Few More Error Cases
- ✅ Rethrowing Error
- ✅ The finally
- ✅ Custom Errors
- ✅ The Self Assignment Operator(dream so far!)
- ✅ Task and What’s Next?

## **👩‍💻 🧑‍💻 Assignment Tasks**

### 1. What will be the output of the following code?
```JS
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name); // reference error
}
```

### 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
```js
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
```

### 3. Implement a custom error handling system for an e-commerce website that categorizes errors as 
- UserError
- PaymentError
- ServerError
- EmailError

```js
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
validateUser(); //UserError :  User info cannot be empty!

function validatePayment(amount) {
  try {
    if(amount < 0 ) throw new eCommerceErrorSystem("PaymentError", "Payment cannot be a negative number");
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
validatePayment(-100); //PaymentError :  Payment cannot be a negative number

function serverConnection(ip) {
  try {
    if(ip !== "127.0.0.1" ) throw new eCommerceErrorSystem("ServerError",`${ip} is not a valid IP`);
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
serverConnection("192.1688.0.1"); //task.js:55 ServerError :  192.1688.0.1 is not a valid IP

function validateEmail(email) {
  try {
    if(!email.includes("@")) throw new eCommerceErrorSystem("EmailError", "Enter a a valid email!");
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}
validateEmail("email"); //EmailError :  Enter a a valid email!
```

### 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch
```js
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
```

### 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```

```js
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
validateForm({userName: "", age: -2}); //ValidationError:  Username cannot be empty
```

### 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.
```js
function readFile(filePath) {
  try {
    if(!filePath) throw new Error("File not found");
  } catch (error) {
    console.error("Invalid file path error: ", error.message);
  } finally {
    console.log("IO resources released!");
  }
}
readFile(); //Invalid file path error:  File not found. 
//IO resources released!
```

### 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"
```js
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
```

### 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually
- It prints an error message

- ✅It stops the execution of a program and creates a new error manually.

### 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not
- Stops the execution of the script

- ✅Runs regardless of whether an error occurs or not

### 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
| Try | Catch | Throw | Rethrow | Error Object |
| --- | --- | --- | --- | --- |
| Try block executes the code. If any error occurs, stop code executions and throw error to the catch block | Catch block receive the error which is thrown from the try block | Throw is a keyword which is used to create new errors and it stops executions of program | Rethrow can be used to throw the error to another level of programs to catch and handle the error efficiently. Inside the catch block rethrow can be thrown again | Error object contains several things like name, message, stack etc. JavaScript has it's own error object but user also can create custom error object using constructor function |


Please find the task assignments in the [task.js File](./task.js).