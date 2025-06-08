# Day 22 - 40 Days of JavaScript - Async JavaScript - Callbacks

## **🎯 Goal of This Lesson**

- ✅ Synchronous vs Asynchronous
- ✅ JavaScript is Synchronous
- ✅ Asynchronous JavaScript
- ✅ Callback Functions
- ✅ Dealing With APIs
- ✅ APIs and Callback
- ✅ The Pizza Order App
- ✅ Callback Hell or Callback Pyramid
- ✅ Debugging
- ✅ What’s Next


## **👩‍💻 🧑‍💻 Assignment Tasks**

### ✅ 1. Pass a function to greet a user and then thank them

```js
    function greetUser(username, callback) {
        console.log(`Hello, ${username}!`);
        callback();
    }

    function thanks() {
        console.log(`Thank you to visit the store.\n`);
    }
    greetUser("Azlan", thanks); //Output: Hello, Azlan! Thank you to visit the store.
```


### ✅ 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract, multiplication, division

```js
    function calculator(a, b, operationCallback) {
        const result = operationCallback(a, b);
        console.log(result);
    }

    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function mul(x, y) {
        return x * y;
    }
    function div(x, y) {
        return x / y;
    }

    calculator(5, 3, add); //Output: 8
    calculator(5, 3, sub); //Output: 2 
    calculator(5, 3, mul); //Output: 15 
    calculator(5, 3, div); //Output: 1.6666666666666667
```


### ✅ 3. Create a delayedMessage function that prints a message after a delay using setTimeout

```js
    function delayedMessage(message, delay, callback) {
        setTimeout(() => {
            console.log(message);
            callback();
        }, delay);
    }
    delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));//Output: Task complete Callback Fired!
```


### ✅ 4. Implement a function that filters numbers in an array based on a condition provided via callback.

- Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]


```js
  function filterNumbers(arr, conditionCallback) {
    // Use loop and callback to return filtered array
    let retArr = []
    arr.forEach(item => {
     retArr.push(conditionCallback(item));
    });
    return retArr.filter(item => item !== false);
  }
  function callback(item) {
    return item > 2 && item;
  }
  console.log(filterNumbers([1, 2, 3, 4], callback)); //Output: [3, 4]
```


### ✅ 5. Execute a sequence of tasks one after another using callbacks

- Call them in sequence using nested callbacks

```js
    function task1(callback) {
        console.log("Task 1 done");
        callback();
    }

    function task2(callback) {
        console.log("Task 2 done");
        callback();
    }

    function task3() {
        console.log("Task 3 done");
    }

    task1( () => { task2(task3) }) //Output: Task 1 done Task 2 done Task 3 done
```

Please find the task assignments in the [Task File](./task.md).