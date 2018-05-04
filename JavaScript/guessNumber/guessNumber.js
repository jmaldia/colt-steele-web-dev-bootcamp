var number = Number(Math.floor(Math.random() * 10));
var count = 3;
while (count > 0) {
	var guess = Number(prompt("Guess the number between 1 and 10.\nYou have " + count + " more chances"));
	if (guess > number) {
		alert("Your number is higher.");
	} else if (guess < number) {
		alert("Your number is lower.")
	} else {
		count = 0;
	}
	count--;
}

if (guess === number) {
	alert("You guessed it. The number is " + number + "!")
} else {
	alert("Too bad. You lost. The number is " + number + "!")
}
