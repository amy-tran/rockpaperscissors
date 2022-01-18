let userWins = 0;
let computerWins = 0;
$(".container").hide();

$(".play").click(function getRandomComputerChoice() {
  let randomNumber = 0;
  let userInput = $(".input").val();
  if (
    userInput !== "Rock" &&
    userInput !== "Scissors" &&
    userInput !== "Paper"
  ) {
    $(".userChoice").text("Not valid input");
    $(".computerChoice").text("");
    $(".result").text("");
    $(".container").hide();
  } else {
    let computerOutput;
    randomNumber = Math.random() * 3;
    $(".userChoice").text(userInput);
    randomNumber = Math.ceil(randomNumber);
    if (randomNumber === 3) {
      computerOutput = "Rock";
    } else if (randomNumber === 2) {
      computerOutput = "Paper";
    } else if (randomNumber === 1) {
      computerOutput = "Scissors";
    }
    $(".computerChoice").text(computerOutput);
    chooseWinner(userInput, computerOutput);
    // winsTracker();
  }
});

function chooseWinner(userInput, computerOutput) {
  if (
    (userInput === "Rock" && computerOutput === "Scissors") ||
    (userInput === "Paper" && computerOutput === "Rock") ||
    (userInput === "Scissors" && computerOutput === "Paper")
  ) {
    $(".result").text("User wins!");
    userWins = userWins + 1;
    $(".userCounter").text("User Wins: " + userWins);
    $(".container").show();
  } else if (
    (userInput === "Scissors" && computerOutput === "Rock") ||
    (userInput === "Paper" && computerOutput === "Scissors") ||
    (userInput === "Rock" && computerOutput === "Paper")
  ) {
    $(".result").text("Computer wins!");
    computerWins = computerWins + 1;
    $(".computerCounter").text("Computer Wins: " + computerWins);
    $(".container").hide();
  } else if (
    (userInput === "Scissors" && computerOutput === "Scissors") ||
    (userInput === "Rock" && computerOutput == "Rock") ||
    (userInput === "Paper" && computerOutput === "Paper")
  ) {
    $(".result").text("No one wins!");
    $(".container").hide();
  }
}

// function clearInput() {
//   $(".input").text("");
//   $(".userChoice").text("");
//   $(".computerChoice").text("");
//   $(".result").text("");
// }

