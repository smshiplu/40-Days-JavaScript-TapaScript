
try {
  console.log("execution starts here");
  abc;
  console.log("execution ends here");
} catch (error) {
  console.error("An error has occurred");
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

function divideNumbers(a, b) {
  try {
    if(b === 0) {
      const err = new Error("Division cannot be done with 0");
      throw err;
    }
    const result = a/b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error(`Got a math error: ${error.message}`);
  }
}
divideNumbers(20, 5);
divideNumbers(20, 0);

const person = {
  name: "Azlaan",
  address: {
    city: "Munshigonj"
  }
}

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error("Error accessing property - ", error.message);
  }
}
getPostalCode(person);

function validateAge(age) {
  try {
    if(isNaN(age)) {
      throw new Error(`Age must be a number, but your input is: ${age}`);
    }
    console.log("Age is: ", age);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}
validateAge("Shiplu");

//Rethrowing error
function validateForm(formData) {
  try {
    if(!formData.userName) throw new Error("Username cannot be empty");
    if(!formData.email.includes("@")) throw new Error("Email formate in not valid");
  } catch (error) {
    console.error("Validation error: ", error.message);
    throw error; //rethrow
  }
}

try {
  validateForm({userName: "Shiplu", email: "example"})
} catch (error) {
  console.error("Another level of error throwing: ", error.message);
}

// Use of finally
function processInformation(info) {
  try {
    console.log("Processing Start...");
    if(!info) throw new Error("There is no information to process!");
    console.log("Processing Ends...");    
  } catch (error) {
    console.error("Processing error:", error.message);
  } finally {
    console.log("Cleaning up memory and DB connection is closed!");
  }
}
processInformation();


// Custom Error
function ValidationError(message) {
  this.name = "Validation Error";
  this.message = message;
  this.stack = new Error();
}

ValidationError.prototype = Object.create(Error.prototype);

function validateAge(age) {
  try {
    if(age < 60 ) throw new ValidationError("You are not a senior citizen.");
    console.log("You are a senior citizen");
  } catch (error) {
    console.error("Age validation error:", error.stack);
  }
}
validateAge(40);

