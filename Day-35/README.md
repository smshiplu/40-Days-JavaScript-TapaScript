# Day 35 - 40 Days of JavaScript - Fix the Broken Code Challenge

## **🎯 Goal of This Lesson**

- ✅ Debugging
- ✅ Modules 5 and 6
- ✅ Calculate Discount Problem
- ✅ Closure Confusion Problem
- ✅ Unhappy Button Problem
- ✅ Payment Process Problem
- ✅ Tracking Order Problem
- ✅ What’s Next

<br/>

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>

## ✅ 1. Closure Confusion
```js
function makeMultipliers() {
  const result = [];
  for (var i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
```

<br/>

### ✔ Answer
>**Explanations:**
>- In the task's example the var i has the function scope and the variable i inside callback function of push method remember it's previous value, that's why the program is resulting unexpectedly.
>- But as soon as we change the variable from var to let, get the expected result. Because the let variable has a block scope and each iteration of the loop let i gets assign with the new value 

```js
    function makeMultipliers() {
    const result = [];
    
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
```


<br/><br/>



## ✅ 2. Async Bug with setTimeout in Loop

```js
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
```

- Goal: This actually works fine because of let. But refactor it to use var instead, and now fix the broken version with var.

<br/>

### ✔ Answer

>**Explanation:** Here closure is being happened. The inner function remember it's outer for loop variable and as soon as the inner function setTimeout's callback get executed the variable i is 4. It log into the console unexpectedly. So to avoid the problems setTimeout should wrapped inside a immediately invoked function. It captures the current value of i in j for each iteration and print the output as expected.

```js
    for (var i = 0; i <= 3; i++) {
        (function(j){

            setTimeout(function () {
            console.log("Count:", j);
            }, 1000);
        }) (i);
    }

    //Output:
    /*
        Count: 0
        Count: 1
        Count: 2
        Count: 3
    */
```

<br/><br/>

## ✅ 3. Object Mutation Trap

```js
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config = { ...config, ...newConfig };
}

updateConfig({ version: "2.0" });
```

- Error: Assignment to constant variable.
- Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.

<br/>

### ✔ Answer
```js
  // Fixing error without changing const to let
  const config = {
    appName: "CoolApp",
    version: "1.0",
  };

  function updateConfig(newConfig) {
    Object.assign(config, newConfig);
  }

  updateConfig({ version: "2.0" });

  console.log(config);
  // Output: 
    /*
        {
            appName: "CoolApp",
            version: "2.0"
        }
   * /
```
<br/>

```js
    // Fix and update nested config

    function deepMerge(target, source) {
        for (const key in source) {
        if (
            source[key] &&
            typeof source[key] === "object" &&
            !Array.isArray(source[key])
        ) {
            if (!target[key]) target[key] = {};
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
        }
    }

    const config = {
        appName: "CoolApp",
        version: "1.0",
        settings: {
        theme: "light",
        notifications: true,
        },
    };

    function updateConfig(newConfig) {
        deepMerge(config, newConfig);
    }

    updateConfig({
        version: "2.0",
        settings: {
        theme: "dark",
        },
    });

    console.log(config);
    // Output: 
    /*
        {
            appName: "CoolApp",
            version: "2.0",
            settings: {
                theme: "dark",
                notifications: true
            }
        }
    */
```

<br/><br/>

## ✅ 4. Promise Chain Gone Wrong

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  const data = fetchData()
    .then(res => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

  console.log("Data:", await data);
}

start();
```

- Issue: Error isn’t caught properly. Unhandled rejection occurs.
- Goal: Catch the error properly using try/catch with await pattern.

<br/>

### ✔ Answer
```js
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data received");
                // reject("Data cannot be received!")
            }, 1000);
        });
    }

    async function start() {
        try {
            const data = fetchData()
            .then(res => {
                console.log("Then block:", res); // Then block: Data received
                throw new Error("Something went wrong!");
            });

            console.log("Data:", await data); // as soon as error is thrown  this line of code never be executed

        } catch (error) {
            console.error("Error:", error instanceof Error ? error.message : error); //Error: Something went wrong!
        }
    }
    start();
```

<br/>

Please find the task assignments in the [Task File](./task.md).