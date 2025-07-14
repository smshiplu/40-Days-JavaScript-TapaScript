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