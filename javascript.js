function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let randInt = getRandomInt(3);
  switch (randInt) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
    case 2:
    return "Scissors";
  }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);
