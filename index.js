// Generate Random Numbers
var randomNumber1 = Math.floor((1 + Math.random() * 5));
var randomNumber2 = Math.floor((1 + Math.random() * 5));

// Find the new images to be used based on the number
var imgSrc1 = "images/dice" + randomNumber1 + ".png";
var imgSrc2 = "images/dice" + randomNumber2 + ".png";

// Get the image objects currently being used
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// Set the images based on dice outcomce
img1.setAttribute("src", imgSrc1);
img2.setAttribute("src", imgSrc2);

// Get the text Object
var textObject = document.querySelector("h1");

// Set the text Object
if (randomNumber1 > randomNumber2) {
  textObject.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  textObject.textContent = "Player 2 Wins!";
} else {
  textObject.textContent = "Draw!";
}
