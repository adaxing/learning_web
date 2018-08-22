var guessNum = prompt("Guess a number!");
var correctNum = 7;

if (guessNum < correctNum) {
	alert("Too low. Try again");
}

else if (guessNum > correctNum) {
	alert("Too high. Try again");
}

else {
	alert("You guessed it");
}
