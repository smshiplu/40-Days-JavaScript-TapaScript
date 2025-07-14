# Day 32 - 40 Days of JavaScript - Modules

## **🎯 Goal of This Lesson**

- ✅ What are Modules in JavaScript, and Why to Use?
- ✅ What are Exports and Imports in JavaScript Module?
- ✅ What are Exports and Imports in JavaScript Module?
- ✅ What are Default and Named Module Exports in JavaScript?
- ✅ What are Aliases in JavaScript Module Import?
- ✅ What are Namespaces in JavaScript Module?
- ✅ What is Combined Export in JavaScript Module?
- ✅ What is Dynamic Import in JavaScript Module?
- ✅ How to Handle Multiple Imports Using JavaScript Promise APIs?
- ✅ What is Tree Shaking & How Does It Help?

<br/>

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>

## ✅ 1. Split a Utility Library

Create a small utility library (e.g., math functions like add, subtract, multiply, divide) in separate module files and import them into a main index.js file to perform operations.

<br/>

> There are utility functions like add, subtract, multiply, divide in side the folder called util. All of the functions export from the file combine.js and imported in the main.js

### 📝combine.js
```js
export  { add } from "./add.js";
export  { subtract } from "./subtract.js";
export  { multiply } from "./multiply.js";
export  { divide } from "./divide.js";
```

### 📝main.js
```js
import * as combine from "./util/combine.js";

console.log(combine.add(3, 2)); // Output: 5 
console.log(combine.subtract(10, 5)); // Output: 5 
console.log(combine.multiply(9, 6)); // Output: 54
console.log(combine.divide(6, 2)); // Output: 3
```

<br/><br/>

## ✅ 2. Create a Feature-Based Module Structure

Create a small blog app where:

- post.js handles posts
- user.js handles user info
- main.js brings it together via import

<br/>

### 📝post.js

```js
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 2,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 2,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 3,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
]

export default posts;
```
<br/>

### 📝user.js

```js
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  }
]

export default users;
```
<br/>

### 📝main.js

```js
import { default as postList } from "./util/post.js";
import userList from "./util/user.js";

function postByUser() {
  const newPostList = postList.map((post) => {
    const username = userList.map(user => {
      return user.id === post.userId ? user.name : ""
    }).filter(name => name !== "" && name.length > 1);
    
    post.postBy = username;
    return post;
  });

  newPostList.forEach(post => {
    console.log(`\n
      Post Title: ${post.title} \n
      Post Body: ${post.body} \n
      - by ${post.postBy}
    \n`);
  });

  userList.filter(user => {
    user.userInfo()
  })
  
}
postByUser();
```

<br/><br/>

## ✅ 3. Use Named vs Default Exports

Create modules with both named and default exports, and demonstrate:

- How to import them correctly
- How to rename named exports during import

<br/>

>There are two modules, printUserName.js and greetings.js, inside the util folder, which are imported into main.js. The printUserName.js contains a function, printUserName(), with the default export. And greetings.js contains two functions, namely hi() and hola(), which are named exports.

<br/>

### 📝 printUserName.js

```js
export default function printUserName(username) {
  console.log(`Hello, ${username}!`);
}
```
<br/>

### 📝 greetings.js

```js
function hi() {
  console.log(`Hi...!`);  
}
function hola() {
  console.log(`Holla...!`);  
}

export { hi, hola };
```
<br/>

### 📝 main.js

```js
//default import
import {default as userName} from "./util/printUserName.js";

//named import
import { hi, hola } from "./util/greetings.js";

userName("John");
hi();
hola();
```

<br/><br/>

## ✅ 4. Mock an API Module

Create api.js that exports functions like fetchUsers, createUser, etc.

- Simulate network delays using setTimeout
- Use these in a frontend to display mock data

<br/>

### 📝 api.js

```js
export {fetchUser} from "./fetchUser.js";
export {createUser} from "./createUser.js";
```
<br/>

### 📝 fetchUsers.js

```js
export function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(async () =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      
        if(!response.ok) {
          reject(`HTTP Error: ${response.status}`);
        }

        const data = await response.json()
        resolve(data);

      } catch (error) {
        throw Error(error);
      }
    }, 1000)
  })
}
```
<br/>

### 📝 createUser.js

```js
export function createUser(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(async () =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            userData
          })
        });

        if(!response.ok) {
          reject(`HTTP Error: ${response.status}`);
        }

        const data = await response.json()
        resolve(data);

      } catch (error) {
        throw Error(error);
      }
    } , 1000)
  });
}
```
<br/>

### 📝 main.js
```js

const promise = Promise.all(
  [
    await import ("./util/api.js")
  ]
);

promise.then(  data => {
  
  async function displayUserData() {    
    try {
      const userData = await data[0].fetchUser();

      document.getElementById("fetchedUser").innerHTML = "";
      userData.forEach(user => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerHTML = `<span>User's Name: ${user.name} - Email: ${user.email}</span>`
        ul.appendChild(li);
        document.getElementById("fetchedUser").appendChild(ul);    
      });
    } catch (error) {
      console.error(error);
    }
  }
  displayUserData();


  async function addUser() {
    try {
      const userData = {
        name: "Sheikh Azlan",
        username: "azlan",
        email: "azlan@email.com"
      }
      const newUserData = await data[0].createUser(userData);

      document.getElementById("newUser").innerHTML = `
        <p>${newUserData.userData.name}</p> 
        <p>${newUserData.userData.email}</p> 
      `;

    } catch (error) {
      console.error(error);
    }
  }
  addUser();
});
```

<br/><br/>

## ✅ 5. Quiz App Modularized

Modularize a quiz app:

- questions.js: array of questions
- quizLogic.js: handles quiz flow
- ui.js: handles DOM updates
- main.js: runs everything

<br/>

### 📝 questions.js

```js
const  quizData = [
  {
    "id": 1,
    "question": "Which keyword is used to declare a constant variable in JavaScript?",
    "answers": ["var", "let", "const", "static"],
    "correct": 2
  },
  {
    "id": 2,
    "question": "What will `typeof null` return in JavaScript?",
    "answers": ["null", "undefined", "object", "string"],
    "correct": 2
  },
  {
    "id": 3,
    "question": "Which method is used to remove the last element from an array?",
    "answers": ["pop()", "shift()", "splice()", "slice()"],
    "correct": 0
  },
  {
    "id": 4,
    "question": "How can you create a new object in JavaScript?",
    "answers": ["new Object()", "Object.create()", "{} (object literal)", "All of the above"],
    "correct": 3
  },
  {
    "id": 5,
    "question": "Which event is fired when an HTML element loses focus?",
    "answers": ["click", "blur", "focus", "change"],
    "correct": 1
  }
]

export default quizData;
```
<br/>

### 📝 quizLogic.js

```js
import quizData from "./questions.js";
import * as ui from "./ui.js";

const nextBtn = document.querySelector(".next-btn");

let currentQuestion = 0;
let timeLeft;
let timer;
let score = 0;
const quizList = [...quizData].sort(() => Math.random() - 0.5);

export default function loadQuiz() {

  ui.hideNextBtn();
  ui.hideResultDiv();

  timeLeft = 15;
  clearInterval(timer);
  ui.updateTimer(timeLeft);
  timer = setInterval(countDown, 1000);

  const quiz = quizList[currentQuestion];

  ui.renderQuestion(currentQuestion, quiz.question);
  ui.renderOptions(quiz.answers, selectAnswer);
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const quiz = quizList[currentQuestion];
  console.log(shouldScore, score);
  
  score  = ui.updateButtons(quiz, index, shouldScore, score);
}

nextBtn.addEventListener("click", () => {
  currentQuestion ++;
  console.log(score);
  
  if(currentQuestion < quizList.length) {
    loadQuiz();
  } else {
    showResult()
  }
});

function countDown() {
  timeLeft --;
  ui.updateTimer(timeLeft);
  if(timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(quizList[currentQuestion].correct, false)
  }
}


function showResult() {
  //hide next button
  ui.hideNextBtn();

  currentQuestion = 0;
  const highScore = localStorage.getItem("tapaScriptQuizScore") || 0;
  
  let isNewHighScore = score >= highScore;

  if(isNewHighScore) {
    localStorage.setItem("tapaScriptQuizScore", score);
  }

  //show result div and it's content
  ui.renderResult(score, quizList, highScore, isNewHighScore, loadQuiz);
  score = 0;
}
```
<br/>

### 📝 ui.js

```js
const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const timerEl = document.querySelector(".timer");
const resultEl = document.querySelector(".result");

function renderQuestion(currentQuestion, question) {
  questionEl.innerHTML = `Q${currentQuestion + 1}: ${question}`;
}

function renderOptions(answers, selectAnswer) {
  optionsEl.innerHTML = "";
  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.innerText = answer;
    button.onclick = () => selectAnswer(index, true)
    optionsEl.appendChild(button);
  });
}

function updateButtons(quiz, index, shouldScore, score) {

  const optionBtns = document.querySelectorAll(".option-btn");

  if(index === quiz.correct) {
    optionBtns[index].classList.add("correct");
    shouldScore && score ++;
  } else {
    optionBtns[index].classList.add("wrong");
    optionBtns[quiz.correct].classList.add("correct");
  }
  
  optionBtns.forEach(button => button.disabled = true);

  showNextBtn();
  return score;
}

function updateTimer(timeLeft) {
  timerEl.innerHTML = `<span class="clock">⏰</span> <span>${timeLeft}</span>`;
}

function renderResult(score, quizList, highScore, isNewHighScore, loadQuiz) {

  showResultDiv();

  resultEl.innerHTML = `
    <h2>Result</h2>

    <p>Your score is ${score} out of ${quizList.length} questions</p>
    ${isNewHighScore ? `<p>You've set new highest score: ${Math.max(score, highScore)}</p>` : `<p>Highest Score is: ${Math.max(score, highScore)}</p>`}
  `;

  const button = document.createElement("button");
  button.innerText = "Retake Quiz";
  button.classList.add("retake-btn");
  resultEl.appendChild(button);

  button.onclick = loadQuiz;
}

function showResultDiv() {
  resultEl.style.display = "flex";
}

function hideResultDiv() {
  resultEl.innerHTML = ""; 
  resultEl.style.display = "none"; 
}

function showNextBtn() {
  nextBtn.style.display = "flex";
  nextBtn.style.opacity = 1;
}

function hideNextBtn() {
  nextBtn.style.display = "none";
  nextBtn.style.opacity = 0;
}

export { 
  renderQuestion,
  renderOptions,
  updateTimer,
  updateButtons,
  renderResult,
  hideResultDiv,
  hideNextBtn,
  showNextBtn
};
```
<br/>

### 📝 main.js
```js
import quiz from "./util/quizLogic.js";

quiz();
```

<br/>

Please find the task assignments in the [Task File](./task.md).