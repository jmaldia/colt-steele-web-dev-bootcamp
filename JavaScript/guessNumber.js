var number = Number(Math.floor(Math.random() * 20));
alert(number);
var count = 0;
while (count < 3) {
	var guess = Number(prompt("Guess the number"));
	if (guess === number) {
		count = 3;
	}
	count++;
}

if (guess === number) {
	alert("You guessed it. The number is " + number + "!")
} else {
	alert("Too bad. You lost. The number is " + number + "!")
}
