let humanScore = 0;
let computerScore = 0;

// Generates a random choice for the computer: "rock", "paper", or "scissors"
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

/*
// Gets the player's choice via prompt (no longer used in UI version)
function getHumanChoice() {
  const userInput = prompt("Enter rock, paper, or scissors:");
  return userInput;
}
*/

// Handles a single round of the game and updates the DOM with the result
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  const roundResult = document.getElementById("round-result");
  const scoreDisplay = document.getElementById("score");

  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a tie!";
  } else {
    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winConditions[humanChoice] === computerChoice) {
      humanScore++;
      roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  // Update score display
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Stop the game at 5 points
  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage =
      humanScore === 5
        ? "🏆 You won the game!"
        : "💻 Computer won the game!";
    roundResult.textContent = winnerMessage;

    // Disable all buttons
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

/*
// Old console-based game logic (disabled for UI version)
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);
    console.log("--------------");
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("🏆 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

playGame();
*/

// Button event listeners
document.getElementById("rock").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

document.getElementById("paper").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

document.getElementById("scissors").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
