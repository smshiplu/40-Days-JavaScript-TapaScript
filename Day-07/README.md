# Day 07 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Build the Project
- ✅ Give an Assignment Project to Build


## **👩‍💻 🧑‍💻 Assignment Tasks**


## ✅ 1. Change the RPS Project
Change the if-else to switch-case as asked in the video(at 15:42).

```html
<h1>Rock, Paper, Scissor Game</h1>
  <button id="start">Start Game</button>
  <br />
  <table>
    <tr>
      <td>
        <h4>User's Score</h4>
        <p id="userScore">0</p>
      </td>
      <td>
        <h4>Computer's Score</h4>
        <p id="computerScore">0</p>
      </td>
    </tr>
  </table>
```

```js
const startBtn = document.getElementById("start");
const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");
let userScore = 0;
let computerScore = 0;

startBtn.addEventListener("click", async e => {
  await rockPaperScissor();
})

async function rockPaperScissor() {
 
  let computerChoice; 
  const randomChoice = Math.floor(Math.random() * 3  + 1);
 
  const userChoice = prompt("Enter your choice. (Rock/Paper/Scissor)");

  switch (randomChoice) {
    case 1:
      computerChoice = "rock"
      break;
    case 2:
      computerChoice = "paper"
      break;
    case 3:
      computerChoice = "scissor"
      break;
    default:
      break;
  }

  if(
    userChoice && userChoice.toLowerCase() === "rock" && computerChoice === "scissor" ||
    userChoice && userChoice.toLowerCase() === "paper" && computerChoice === "rock" ||
    userChoice && userChoice.toLowerCase() === "scissor" && computerChoice === "paper"
  ) {
    userScore += 1;
    console.log(userScore);
    userScoreEl.innerText = userScore;
    console.log(`Computer's choice is ${computerChoice.toUpperCase()} and your choice is ${userChoice.toUpperCase()}. You Win!`);
  }
  else if(
    userChoice && userChoice.toLowerCase() === "rock" && computerChoice === "paper" ||
    userChoice && userChoice.toLowerCase() === "paper" && computerChoice === "scissor" ||
    userChoice && userChoice.toLowerCase() === "scissor" && computerChoice === "rock"
  ) {
    computerScore += 1;
    console.log(computerScore);
    
    computerScoreEl.innerText = computerScore;
    console.log(`Your choice is ${userChoice.toUpperCase()} and computer's choice is ${computerChoice.toUpperCase()}. Computer Win!`);
  }
  else if (userChoice && userChoice.toLowerCase() === computerChoice) {
    console.log(`Both choice is ${userChoice.toUpperCase()}. Game is a Tie`);
  }
  else if (
    userChoice && userChoice.toLowerCase() !== "rock" ||
    userChoice && userChoice.toLowerCase() !== "paper" ||
    userChoice && userChoice.toLowerCase() !== "scissor" ||
    !userChoice
  ) {
    console.log("Enter value Rock/Paper/Scissor");
  }
 

  if(userChoice !== null) {
    rockPaperScissor();
  } else {
    console.log("Thanks for playing!");
  }
  
}
```

<br/><br/>

## 2. Build the Secret Number Guessing Game
Create the project as explained in the video.

```html
  <button id="start">Start Game</button>
```

```js
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", e => {
  guessSecretNumber();
});

function guessSecretNumber() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let userGuess = prompt("Guess the secret number between 1 to 10");
  let attempt = 0;
  function checkMatch() {
    attempt += 1;
    if(parseInt(userGuess) > randomNumber) {
      console.log(`Attempt: ${attempt} - Number is too high!`);
      userGuess = prompt("Guess the secret number between 1 to 10");
      checkMatch();
    } else if(parseInt(userGuess) < randomNumber) {
      console.log(`Attempt: ${attempt} - Number is too low!`);
      userGuess = prompt("Guess the secret number between 1 to 10");
      checkMatch();
    } else if(parseInt(userGuess) === randomNumber) {
      console.log(`Attempt: ${attempt} - Hooray, Number Matched!`);
      confirm("Want to play again?") ? 
      guessSecretNumber() :
      console.log("Thanks for playing!");
    }
  }
  checkMatch();
}
```

Please find the task assignments in the [Task File](./task.md).