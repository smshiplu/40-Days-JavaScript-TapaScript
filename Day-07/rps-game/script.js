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

