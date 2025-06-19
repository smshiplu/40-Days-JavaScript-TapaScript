# Day 27 - 40 Days of JavaScript - Event Loop

## **🎯 Goal of This Lesson**

- ✅ The Chef’s Story
- ✅ Functions and Call Stack
- ✅ Async Code
- ✅ Event Loop
- ✅ Callback Queue
- ✅ Job Queue
- ✅ Tasks and What’s Next?

<br/><br/>

## ✅ 2. What's the output of the code below?

```js
  function f1() {
    console.log('f1');
  }

  console.log("Let's do it!");

  setTimeout(function() {console.log('in settimeout');}, 0);

  f1();
  f1();
  f1();
  f1();
```

Options are,
- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

<br/>

> Output: Let's do it!, f1, f1, f1, f1, in settimeout

<br/>

> Explanations:
- console.log("Let's do it!") comes to Call Stack and gets executed
- setTimeout's anonymous fn() goes to Web API, waiting there for 0 ms goes to Call Stack
- f1() goes to Call Stack for 4 times executes for 4 times
- By this time Event Loop continuously checking if the Call Stack is empty or  not. Once it find the Call Stack empty the anonymous function moves to Call Stack form Callback Queue and gets executed  

<br/><br/>

## ✅ 3. Which statements are `true`? Select multiple

- [X] JavaScript is single-threaded
- [X] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

<br/>

- > [X] JavaScript is single-threaded
- > [X] By default, JavaScript is synchronous

<br/><br/>

## ✅ 4. Which statement is `true`? Select Only one

- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (X) The job queue gets higher priority than the callback queue.
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.

<br/>

- > (X) The job queue gets higher priority than the callback queue.

<br/><br/>

## ✅ 5. Guess the output

```js
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
```
Options are,

- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error

<br/>

> Output: Cartoon, Jerry, should it be right after Tom, before Jerry?, tom

<br/>

> Explanations:
- cartoon() moves to Call Stack, console.log() comes to Call Stack, prints "Cartoon" and gets out of the Stack.
- tom() inside setTimeout() moves to Web API and after 5000ms it moves to Callback Queue and await Call Stack becomes empty.
- anonymous() function of Promise() moves to Job Queue and waits for Call Stack become empty.
- jerry() moves to Call Stack, prints "Jerry" on the console. At this point jerry() gets out of Call Stack, cartoon() gets out of Call Stack
- Job queue's anonymous function moves to Call Stack, gets executed and gets out of the Call Stack
- tom() now moves to Call Stack form Callback Queue, gets executed and moves out ot Call Stack.


<br/><br/>

## ✅ 6. Guess the output

```js
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
```

Options are,
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

<br/>

> Output: Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom

<br/>

> Explanations:
- cartoon() gets into the CS logs Cartoon.
- tom() moves to Web API after waiting there specified time moves to CS and waits for the CS becomes empty to gets into the CS. Same things happens for doggy().
- Promise() anonymous function moves to Job Queue and keep waiting there for the CS gets empty. Same for the next Promise.
- jerry() gets into the CS and print 'Jerry' in the console.
- Now no more task is the cartoon(), So cartoon() gets out of the CS
- In the Job Queue anonymous() of first Promise moves to CS, gets executed and loge message in the console, and finally gets out of the Call Stack. Same things happens for next anonymous() of the next Promise.
- Now In the Callback Queue doggy() moves to Call Stack, gets executed (print Doggy in the console) and gets out of the Call Stack. though tom() was called first but doggy() has less time specified for being executed. So doggy() executes before tom()
-tom() comes to the Call Stack, gets executed(print Tom in the console) and gets out of the Call Stack.


<br/><br/>

## ✅ 7. Guess the output

```js
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, Boom, Sonic, Albert, f1, f3, f2
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3

<br/>

> Output: f4, Boom, Sonic, Albert, f1, f3, f2

<br/>

> Explanations: 
- f4() moves to Call Stack and gets executed
- f1() moves to Web Api then Callback Queue
- Promise's anonymous moves to Jbo Queue, and then Call Stack, gets executed and gets out of th Call Stack.
- f2() moves to Web APi then Callback Queue
- Promise's anonymous moves to Jbo Queue, and then Call Stack, gets executed and gets out of th Call Stack.
- f3() moves to Web APi then Callback Queue
- Promise's anonymous moves to Jbo Queue, and then Call Stack, gets executed and gets out of th Call Stack.


<br/><br/>

## ✅ 8. Guess the output

```js
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3
- f4, Albert, Sonic, f1, f2, f3

<br/>

> Output: f4, Sonic, Albert, f1, f2, f3

<br/>

> Explanations: 
- f4() moves to the Call Stack, gets executed(print f4 in the console), gets out of Call Stack.
- f1() moves to Web API and then Callback Queue
- First Promise's anonymous() moves to Job Queue and moves to Call Stack, gets executed(print Sonic in the console) and gets out of the Call Stack.
- f3() moves to Web API and then Callback Queue
- Last Promise's anonymous() moves to Job Queue and moves to Call Stack, gets executed(print Albert in the console) and gets out of the Call Stack.
- f1() moves to Call Stack, gets executed console.log along with f2(), prints f1 and f2, gets out of the Call Stack
- f3() moves to Call Stack, gets executed(prints f3) and gets out of the Call Stack