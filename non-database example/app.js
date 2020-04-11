const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

var userScore = 0;
var computerScore = 0;

function randomComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
}

function tie(userChoice, computerChoice) {
  result_p.innerHTML = `${computerChoice} ties with ${userChoice}. Draw!`;
}

function game(choice) {
  const computerChoice = randomComputerChoice();
  console.log(choice + computerChoice);
  switch (choice + computerChoice) {
    case "RockRock":
      tie(choice, computerChoice);
      break;
    case "RockPaper":
      lose(choice, computerChoice);
      break;
    case "RockScissors":
      win(choice, computerChoice);
      break;
    case "PaperRock":
      win(choice, computerChoice);
      break;
    case "PaperPaper":
      tie(choice, computerChoice);
      break;
    case "PaperScissors":
      lose(choice, computerChoice);
      break;
    case "ScissorsRock":
      lose(choice, computerChoice);
      break;
    case "ScissorsPaper":
      win(choice, computerChoice);
      break;
    case "ScissorsScissors":
      tie(choice, computerChoice);
      break;
    default:
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("Rock");
  });

  paper_div.addEventListener("click", function() {
    game("Paper");
  });

  scissors_div.addEventListener("click", function() {
    game("Scissors");
  });
}

main();
