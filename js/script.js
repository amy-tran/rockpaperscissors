let randomNumber = 0;

$(".play").click(function() {
  randomNumber = Math.random() * 3;
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  randomNumber = Math.ceil(randomNumber);
  $(".computerChoice").text(randomNumber);
});

// Day 3
// if (randomNumber == 3) {
//   $(".computerChoice").text("Rock");
// } else if (randomNumber == 2) {
//   $(".computerChoice").text("Paper");
// } else {
//   $(".computerChoice").text("Scissors");
// }
