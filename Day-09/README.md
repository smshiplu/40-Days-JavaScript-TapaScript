# Day 09 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Intro
- ✅ Misconception About Hoisting
- ✅ Variable Hoisting
- ✅ Hoisting and let and const
- ✅ Temporal Dead Zone(TDZ)
- ✅ Functional Hoisting
- ✅ Hoisting and Function As an Expression
- ✅ Task and What’s Next?

## 🫶 Support
Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

    > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work
I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Cofee](https://buymeacoffee.com/tapasadhikary)**.

## Video
Here is the video for you to go through and learn:

[![day-09](./banner.png)](https://youtu.be/OqMxh1QdYEg "Video")

## **👩‍💻 🧑‍💻 Assignment Tasks**

## ✅ 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

```js
{
  // Variable var:
  console.log("Name is: " + name);
  var name;
  name= "JS";

  // Explanations:
  //GEC
    //CP
      //name: undefined
    //EP
      //FEC for console.log(). at this point console.log("Name is: " + name) is executed and found the name variable as undefined. so no error occurred.
      //name: "JS"


  // Variable let:
  // console.log("Age is: " + age);
  // let age;
  // age = 40;
  // console.log("Age is: " + age);

  // Explanations:
  //GEC
    //CP
      //there is no existence of age variable. Because in case of "let" no memory gets assigned or created for age;
    //EP 
    //console.log() get executed here and a reference error occurred. Here temporal dead zone or TDZ is being happened. TDZ start from line 14 end at line 16. 


  // Variable const:
  // console.log("Salary: " + salary);
  // const salary = 10000
  // console.log("Salary: " + salary);

  //Explanations:
  //GEC
    //CP
      // salary:undefined
    //EP
      //salary = 10000
}
```


<br/><br/>

## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

>The source code gets scanned and allocate memory for the variables and function declarations through a process called Hoisting during the creation phase of global execution phase.
>Hoisting refers JavaScript giving higher priority to the declaration than initialization or invocation.

> #### VAR variable Hoisting  
> While allocating memory for the var variable during creation phase of execution context, the var variable is initialized with a default value `undefined`. That's why accessing var before its declaration doesn't causes any error, instead it returns `undefined`; 

> #### let variable Hoisting
> The let variable also set into memory but javascript engine doesn't assign any value for it, but kept into temporal dead zone. Accessing let variable before its declaration returns a ReferenceError.

> #### const variable Hoisting
> As let variable, Same thing happens for const variable also. But only difference is const needs to initialized with a value while defining it. and const can not be reassign.

> #### function Hoisting
> In the function Hoisting process, function set to memory with the function body or function object. That's why function doesn't have any TDZ. function can be accessed before they appear in the code or their definition. 

Please find the task assignments in the [Task File](./task.md).