let randomNumber = 0;

$(".play").click(function() {
  randomNumber = Math.random() * 3;
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  randomNumber = Math.ceil(randomNumber);
  if (randomNumber === 3) {
    $(".computerChoice").text("Rock");
    let computerChoice = "Rock";
  } else if (randomNumber === 2) {
    $(".computerChoice").text("Paper");
    let computerChoice = "Paper";
  } else {
    $(".computerChoice").text("Scissors");
    let computerChoice = "Scissors";
  }
});