console.log(`Day 23 - 40 Days of JavaScript - Async JavaScript - Promises\n`);

console.log(`✅ 1. Create Your First Promise
- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Promises!");
    }, 1000)
  });
  promise
    .then((response) => {
      console.log(response);
    })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Promises!");
    }, 1000)
  });
  promise
    .then((response) => {
      console.log(response);
    })
}
console.log(`\n`);

console.log(`✅ 2. Reject a Promise
- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
  promise.catch(error => {
    console.log(error);
  })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
  promise.catch(error => {
    console.log(error);
  })
}
console.log(`\n`);

console.log(`✅ 3. Simulate Coin Toss
-Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.
\n`);
console.log(`Ans:
  const options = ["Heads", "Tails"];
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options[Math.round(Math.random())]);
    }, 1000);
  });

  promise
    .then(result => {
      console.log(result);
    })
\n`);
{
  const options = ["Heads", "Tails"];
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options[Math.round(Math.random())]);
    }, 1000);
  });

  promise
    .then(result => {
      console.log(result);
    })
}
console.log(`\n`);

console.log(`✅ 4. Promise with Condition
- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.
\n`);
console.log(`Ans:
  function checkAge(age) {
    return new Promise((resolve, reject) => {
      if(age < 18 ) {
        throw new Error("Sorry you are not adult enough!");
      }
      resolve("You are eligible!") 
    })
  }
  checkAge(17)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
\n`);
{
  function checkAge(age) {
    return new Promise((resolve, reject) => {
      if(age < 18 ) {
        throw new Error("Sorry you are not adult enough!");
      }
      resolve("You are eligible!") 
    })
  }
  checkAge(17)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
}
console.log(`\n`);

console.log(`✅ 5. Chain Promises Sequentially
- Create three Promises that log:
  - "Step 1 done"
  - "Step 2 done"
  - "Step 3 done"
- Chain them using .then().
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    resolve("Step 1 done")
  });
  promise
    .then(result => {
      console.log(result);
      
      return new Promise((resolve, reject) => {
        resolve("Step 2 done")
      });
    })
    .then(result => {
      console.log(result);
      
      return new Promise((resolve, reject) => {
        resolve("Step 3 done")
      });
    })
    .then(result => {
      console.log(result);
    })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    resolve("Step 1 done")
  });
  promise
    .then(result => {
      console.log(result);
      
      return new Promise((resolve, reject) => {
        resolve("Step 2 done")
      });
    })
    .then(result => {
      console.log(result);

      return new Promise((resolve, reject) => {
        resolve("Step 3 done")
      });
    })
    .then(result => {
      console.log(result);
    })
}
console.log(`\n`);

console.log(`✅ 6. Value Transformation in Chain
- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    resolve(5);
  });
  promise
    .then(value => {
      value = value * 2;
      console.log(value); //10
      return value;
    })
    .then(value => {
      value = value ** 2;
      console.log(value); //100
    })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    resolve(5);
  });
  promise
    .then(value => {
      value = value * 2;
      console.log(value); //10
      return value;
    })
    .then(value => {
      value = value ** 2;
      console.log(value); //100
    })
}
console.log(`\n`);

console.log(`✅ 7. Chain with Random Rejection
- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully.
\n`);
console.log(`Ans:
  Promise.resolve("Start")
  .then(result => {
    console.log(result);
    throw new Error("Continue");
  })
  .catch(error => {
    console.error(error);
  })
\n`);
{
 Promise.resolve("Start")
  .then(result => {
    console.log(result);
    throw new Error("Continue");
  })
  .catch(error => {
    console.error(error);
  })
}
console.log(`\n`);

console.log(`✅ 8. Multiple then() calls on same Promise
- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently.
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    resolve(10);
  });

  // In the above examples promise resolved value 10 can not be total of 22. because each time attachment of then() method with the promise runs independently. Tha's why first time it returns 11 and second time returns 20. If we want expected result 22 then we need to attach each then() handler with a single promise
  
  promise
    .then(result => {
      result ++;
      console.log(result); // 11
      return result
    })
  
  promise
    .then(result => {
      result = result * 2;
      console.log(result); // 20
      return result;
    })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    resolve(10);
  });

  // In the above examples promise resolved value 10 can not be total of 22. because each time attachment of then() method with the promise runs independently. Tha's why first time it returns 11 and second time returns 20. If we want expected result 22 then we need to attach each then() handler with a single promise
  
  promise
    .then(result => {
      result ++;
      console.log(result); // 11
      return result
    })
  
  promise
    .then(result => {
      result = result * 2;
      console.log(result); // 20
      return result;
    })
}
console.log(`\n`);


console.log(`✅ 9.  Return New Promises in .then()
- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
  - “First”
  - “Second”
  - “Third”
\n`);
console.log(`Ans:
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First");
    }, 1000);
  });

  promise
    .then(result => {
      console.log(result); //First

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Second");
        }, 2000);
      })
    })
    .then(result => {
      console.log(result); //Second
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Third");
        }, 3000);
      })
    })
    .then(result => {
      console.log(result);
    })
\n`);
{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First");
    }, 1000);
  });

  promise
    .then(result => {
      console.log(result); //First

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Second");
        }, 2000);
      })
    })
    .then(result => {
      console.log(result); //Second
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Third");
        }, 3000);
      })
    })
    .then(result => {
      console.log(result);
    })
}
console.log(`\n`);


console.log(`✅ 10. Implement fakeDBQuery()
- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.
\n`);
console.log(`Ans:
\n`);
{
  const users = [
    {
      userId: 1,
      fname: "nasir",
      lname: "uddin",
      username: "smshiplu",
      email: "sm@mail.com",
      password: "sm@password"
    },
    {
      userId: 2,
      fname: "sheikh",
      lname: "azlan",
      username: "smazlan",
      email: "az@mail.com",
      password: "az@password"
    }
  ]
  const user_permissions = [
    {
      userId: 1,
      permissions: ["admin","db", "hr", "dev"]
    },
    {
      user_id: 2,
      permissions: ["db", "dev"]
    }
  ]

  function fakeDBQuery() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({user_id: 1 });
      }, 1000);
    })
  }

  function getUserInfo(user_id) {
    
    const userInfo = users.filter(user => user.userId === user_id);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(userInfo)
      }, 3000);
    })
  }

  function getUserPermission(user_id) {
    
    const permissions = user_permissions.filter(permission => permission.userId === user_id)
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(permissions)
      }, 3000);
    })
  }

  fakeDBQuery()
    .then(user => getUserInfo(user.user_id) )
    .then(userInfo => getUserPermission(userInfo[0].userId))
    .then(userPermission => console.log(userPermission[0].permissions))
  
}
console.log(`\n`);

