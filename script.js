"use strict";
/*
document.querySelector(".message").textContent = "Correct number 😘";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore;
function ChangeMessageBoxText(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".again").addEventListener("click", function () {
  if (highscore != null) {
    document.querySelector(".highscore").textContent = highscore;
  }
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  ChangeMessageBoxText("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(!guess, typeof guess);
  if (!guess) {
    ChangeMessageBoxText("No Number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    ChangeMessageBoxText("Correct number 😘");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (highscore == null) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      ChangeMessageBoxText("GGs, you've lost");
    } else {
      ChangeMessageBoxText(guess > secretNumber ? "To high" : "To low");
    }
  }
});
