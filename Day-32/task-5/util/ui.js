
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