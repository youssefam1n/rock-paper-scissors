const prompt = require('prompt-sync')();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let randInt = getRandomInt(3);
  switch (randInt) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("1:Rock 2:Paper 3:Scissors ");
  switch (+userChoice) {
    case 1: return "Rock";
    case 2: return "Paper";
    case 3: return "Scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let humanCHlower = humanChoice.toLowerCase();
    let computerCHlower = computerChoice.toLowerCase();
    if (humanCHlower == computerCHlower) {
      console.log("It's a tie!")
    } else if (humanCHlower == "rock" && computerCHlower == "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
    } else if (humanCHlower == "paper" && computerCHlower == "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanCHlower == "scissors" && computerCHlower == "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
    } else {
      computerScore++;
      console.log("Computer wins!");
    }
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
  }

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Current Score => You: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!")
  } else if (humanScore < computerScore) {
    console.log("The computer won the game!")
  } else {
    console.log("It's a tie!");
  }
}

playGame();
