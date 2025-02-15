
const choices = ["rock","paper","scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let playerScore = 0;
let computerScore = 0;




console.log(playerDisplay);

function playGame(playerChoice){

   const computerChoice = choices[Math.floor(Math.random()*3)];


   let result ="";

   if (playerChoice === computerChoice) {
      result = "IT'S A TIE!"
   } 
   else{
    switch (playerChoice ) {
      case "rock":
          result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
    
        case "scissors":
          result = (computerChoice === "paper") ? "YOU WIN!"  : "YOU LOSE!";
        break;

        case "paper":
         result = (computerChoice === "rock") ? "YOU WIN!"  : "YOU LOSE!";
        break;
    }
   }

   console.log(result);
   playerDisplay.textContent = `Player: ${playerChoice}`;
   computerDisplay.textContent = `Computer: ${computerChoice}`;
   resultDisplay.textContent = `${result}`;

   resultDisplay.classList.remove("green","red","yellow")

   switch (result) {
    case "YOU WIN!":

        resultDisplay.classList.add("green");
         playerScore++;
         playerScoreDisplay.textContent = playerScore;

      break;
   
      case "YOU LOSE!":
       resultDisplay.classList.add("red");
       computerScore++;
       ComputerScoreDisplay.textContent = computerScore;
      break;
    
      case "IT'S A TIE!":
      resultDisplay.classList.add("yellow");
      break;
   
   }
}