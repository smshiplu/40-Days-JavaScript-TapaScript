console.log(`Day 23 - 40 Days of JavaScript - Async JavaScript - Promises\n`);

//How to Create Promises?
{
  new Promise((resolve, reject) => {});
}

//How promises are resolved and rejected
{
  const promise1 = new Promise((resolve, reject) => {
    resolve("Hey I am Done!");
  });

  const promise2 = new Promise((resolve, reject) => {
    // reject("Something is not right!")
  });

}

//Handling promise
{
  let isLoading = false;
  const promise = new Promise((resolve, reject) => {
    // Make an network call or an API call or I/O operation
    isLoading = true;
    resolve("Hey, I am resolved!...");
    // reject("Hey, I am rejected!...");
  });

  // .then()
  // .catch()
  // .finally()

  promise.then(
    (result) => { console.log( result) },
    // (error) => { console.log(error) }
  ).catch((error) => {
    console.error(error);
  }).finally(() => {
    isLoading = false;
  });
}

//Promise chain

// Rule 1: Every promise gives a .then() handler. Every resolved promised gives only .then() handler, it doesn't gives .catch() handler. In case of every rejected promise it gives .catch() handler, it doesn't gives .then() handler method 

// Rule 2: There are three tasks we can accomplish within a .then() method.
  // 1. We can return another promise for a async operation. 
  // 2. We can return any value for a synchronous. 
  // 3. We can throw an error.

// Rule 3: An error can be rethrown from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler

// Rule 4: Unlike .then() and .catch() .finally() handler doesn't process the result value or error. It just passes teh result as it is to the next handler

// Rule 5: Calling a .than() multiple times on a single promise is not a chain

{
  const getUser = new Promise((resolve, reject) => {
    const user = {
      name: 'Azlan',
      email: "az@mail.com",
      password: "az.password",
      permissions: ["hr", "dev"]
    }
    resolve(user);
  });

  // .then() returns another promise (rule 2)
  getUser
    .then((user) => {
      console.log(`User name is: ${user.name}`);
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Bangladesh")
        }, 2000);
      });
    })
    .then( address => {
      console.log(`User country is: ${address}`);
    })

  // .then() returns a value (rule 2)
  getUser
    .then(user => {
      return user.email;
    })
    .then(email => {
      console.log(`User email is: ${email}`);
    })
  
  // .then() throw error (rule 2)
  getUser
    .then(user => {
      if (!user.permissions.includes("admin")) {
        throw new Error("User is not allowed to access the Admin features");
        return user.password;
      }
    })
    .then(pass => {
      console.log(`User password is: ${pass}`);
    })
    .catch(error => {
      console.error(`Thrown ${error}`);
    })
  
  // Rethrow error (rule 3)
  const error404 = new Promise((resolve, reject) => {
    reject(404);
  })
  error404.
    catch(error => {
      console.log(`Rethrowing ${error}`);
      throw error;
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(`Rethrown error handled here ${error}`);
    })

  // .finally() passes the passes the result to the next control (rule 4)

  const testFinally = new Promise((resolve, reject) => {
    resolve("Testing finally!");
  });

  testFinally
    .finally(() => {
      console.log("Log from finally block");
    })
    .then((result) => {
      console.log(result);
    });

  //Calling a .than() multiple times on a single promise is not a chain
  const checkChain = new Promise((resolve, reject) => {
    resolve(10);
  });

  checkChain
    .then(result => {
      result ++;
      console.log(result);
      return result;
    })
    .then(result => {
      result = result + 10;
      console.log(result);
      return result;
    })
    .then(result => {
      result = result + 20;
      console.log(result);
      return result;
    });
  
  //Handling Multiple Promises

  const JOKE_API = "https://official-joke-api.appspot.com/random_joke";
  const CAT_API = "https://catfact.ninja/fact"

  const promise_1 =  getPromise(JOKE_API);
  const promise_2 =  getPromise(CAT_API);
  
  //Promise.all(): if any of the promise fails to resolve, Promise.all() method returns reject. that means all the promises should be fulfilled of resolved
  Promise.all([promise_1, promise_2])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })


  //Promise.any(): if any of the promise is fulfilled or resolved among promises given in an array then it returns that promise immediately as a value but not array unlike Promise.all()
  Promise.any([promise_1, promise_2])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })

  //Promise.allsettled(): this method waits for the all promises to be settled(resolved or rejected). whether it is fulfilled or whether it is rejected it gives the output of everything. in case of fulfilled it gives the status and value object and in case of rejection it gives the reason and says why it is rejected
  Promise.allSettled([promise_1, promise_2])
    .then((result) => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  
  //Promise.race(): this method returns the fastest and quickest result which has been fulfilled of resolved
  Promise.race([promise_1, promise_2])
  .then(result => {
    console.log(result);
    // console.log(JSON.parse(result));
  })
  .catch(error => {
    console.log(error);
  })

  
  //helper function to make promise from API
  function getPromise(API_URL) {
    return fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
  }


}


