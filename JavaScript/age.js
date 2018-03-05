let age = -2;

if (age < 0) {
	console.log("That is not an age! C'mon now!");
} else if (age === 21) {
	console.log("Happy birthday bro! Drink up!");
} else if (age % 2 === 1) {
	console.log("You got an odd age.");
} else if (Math.sqrt(age) * 2 === age) {
	console.log("Perfect Square!");
} else {
	console.log("Your age is not special.");
}