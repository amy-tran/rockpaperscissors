let randomNumber = 0;

$(".play").click(function() {
  randomNumber = Math.random() * 3;
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  randomNumber = Math.ceil(randomNumber);
  if (randomNumber == 3) {
    $(".computerChoice").text("Rock");
  } else if (randomNumber == 2) {
    $(".computerChoice").text("Paper");
  } else {
    $(".computerChoice").text("Scissors");
  }
});

// $(".play").click(function() {
//   randomNumber = Math.random() * 3;
//   let userInput = $(".input").val();
//   $(".userChoice").text(userInput);
//   randomNumber = Math.ceil(randomNumber);
//   if (userInput == ("Rock" || "Paper" || "Scissors") && randomNumber == 3) {
//     $(".computerChoice").text("Rock");
//   } else if (
//     userInput == ("Rock" || "Paper" || "Scissors") &&
//     randomNumber == 2
//   ) {
//     $(".computerChoice").text("Paper");
//   } else if (
//     userInput == ("Rock" || "Paper" || "Scissors") &&
//     randomNumber == 1
//   ) {
//     $(".computerChoice").text("Scissors");
//   } else {
//     $(".computerChoice").text("That isn't an option I understand!");
//   }
// });
