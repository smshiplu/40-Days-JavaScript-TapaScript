# Day 21 - 40 Days of JavaScript - Build a Quiz Game using DOM

## **🎯 Goal of This Lesson**

- ✅ Complete the design of a Quiz App.
- ✅ Develop the Quiz App with the following features:
  - ✅ Show Random Questions for the Quiz.
  - ✅ Start a timer for the X(say 15) seconds for user to answer a question.
  - ✅ After 15 seconds a Next button should appear to navigate to the next question.
  - ✅ If user is not selecting an answer within the 15 seconds, the right answer should be selected by default.
  - ✅ When user selects a wrong answer, the right answer should be shown.
  - ✅ A result should be shown at the end of all the questions.
  - ✅ The result should also store the highest scorer and show that.
  - ✅ There shold be a way to restart the game at the end.
- ✅ Non Functional Requirements:
  - ✅ Good Look and Feel.
  - ✅ Optimal usages of the timer.
  - ✅ Clean code.


## **👩‍💻 🧑‍💻 Assignment Project**

### Quiz Game

```js
const quizData = [
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

const timerEl = document.querySelector(".timer");
const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const resultEl = document.querySelector(".result");

const quizList = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft; 

function loadQuiz() {
  nextBtn.style.display = "none";
  nextBtn.style.opacity = 0;

  clearInterval(timer);
  timeLeft = 15;
  updateTimer();
  timer = setInterval(countDown, 1000);

  resultEl.innerHTML = ""; //there is no html when quiz is reloaded
  resultEl.style.display = "none"; // so that css style can be hidden

  const quiz = quizList[currentQuestion];
  questionEl.innerText = `Q${currentQuestion + 1}: ${quiz.question}`;
  
  optionsEl.innerHTML = "";
  quiz.answers.forEach((answer, index) => {
    optionsEl.innerHTML += `<button class="option-btn" onclick="selectAnswer(${index}, ${true})">${answer}</button>`
  });
}

function countDown() {
  timeLeft --;
  updateTimer();
  if(timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(quizList[currentQuestion].correct, false)
  }
}

function updateTimer() {
 timerEl.innerHTML = `<span class="clock">⏰</span> <span>${timeLeft}</span> `;
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);

  const quiz = quizList[currentQuestion];

  const buttons = document.querySelectorAll(".option-btn");

  if(index === quiz.correct) {
    buttons[index].classList.add("correct");
    shouldScore && score++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[quiz.correct].classList.add("correct");
  }

  buttons.forEach(button => button.disabled = true);

  nextBtn.style.display = "flex";
  nextBtn.style.opacity = 1;
}

nextBtn.addEventListener("click", () => {
  currentQuestion ++;
  if(currentQuestion < quizList.length) {
    loadQuiz();
  } else {
    showResult()
  }
});

function showResult() {
  //hide next button
  nextBtn.style.display = "none";
  nextBtn.style.opacity = 0;

  currentQuestion = 0;
  const highScore = localStorage.getItem("tapaScriptQuizScore") || 0;
  
  let isNewHighScore = score >= highScore;

  if(isNewHighScore) {
    localStorage.setItem("tapaScriptQuizScore", score);
  }
  //show result div and it's content
  resultEl.style.display = "flex";
  resultEl.innerHTML = `
    <h2>Result</h2>

    <p>Your score is ${score} out of ${quizList.length} questions</p>
    ${isNewHighScore ? `<p>You've set new highest score: ${Math.max(score, highScore)}</p>` : `<p>Highest Score is: ${Math.max(score, highScore)}</p>`}
  `;

  score = 0;
  const button = document.createElement("button");
  button.innerText = "Retake Quiz";
  button.classList.add("retake-btn");
  resultEl.appendChild(button);

  button.onclick = loadQuiz;//reload quiz
}
loadQuiz();
```