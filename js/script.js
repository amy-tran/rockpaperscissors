let randomNumber = 0;
let computerOutput;
let userInput = $(".input").val();

function determineWinner(){
    // User chooses Rock
  if (userInput === "Rock" && computerOutput === "Rock") {
    $(".result").text("Tie");
  } else if (userInput === "Rock" && computerOutput === "Paper") {
    $(".result").text("Computer Wins");
  } else if (userInput === "Rock" && computerOutput === "Scissors") {
    $(".result").text("User Wins");
  // User chooses Paper
  } else if (userInput === "Paper" && computerOutput === "Rock") {
    $(".result").text("User Wins");
  } else if (userInput === "Paper" && computerOutput === "Paper") {
    $(".result").text("Tie");
  } else if (userInput === "Paper" && computerOutput === "Scissors") {
    $(".result").text("Computer Wins");
  // User chooses Scissors
  } else if (userInput === "Scissors" && computerOutput === "Rock") {
    $(".result").text("Computer Wins");
  } else if (userInput === "Scissors" && computerOutput === "Paper") {
    $(".result").text("User Wins");
  } else if (userInput === "Scissors" && computerOutput === "Scissors") {
    $(".result").text("Tie");
  }
  
}

$(".play").click(function () {
  randomNumber = Math.random() * 3;
  $(".userChoice").text(userInput);
  randomNumber = Math.ceil(randomNumber);
  if (randomNumber === 3) {
    $(".computerChoice").text("Rock");
    let computerOutput = "Rock";
  }
  if (randomNumber === 2) {
    $(".computerChoice").text("Paper");
    let computerOutput = "Paper";
  }
  if (randomNumber === 1) {
    $(".computerChoice").text("Scissors");
    let computerOutput = "Scissors";
  }
});

let result0 = determineWinner();
     $(".result").text(result0);

function getRandomComputerChoice(){
  
}