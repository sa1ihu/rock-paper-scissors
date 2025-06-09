let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
  const randomNum = Math.random();
  
  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  const userInput = prompt("Enter rock, paper, or scissors:");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  // Convert humanChoice to lowercase to make it case-insensitive
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);
