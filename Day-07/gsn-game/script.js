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
