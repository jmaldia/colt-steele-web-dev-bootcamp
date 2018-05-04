
console.log("-----\nNumbers between 10 & 19\n-----");
let x = 10;

while (x < 20) {
	console.log(x);
	x++;
}


console.log("-----\nEven numbers between 10 & 40\n-----");
x = 10;

while (x <= 41) {
	console.log(x);
	x += 2;
}


console.log("-----\nOdd numbers between 300 & 333\n-----");
x = 301;

while (x <= 333) {
	console.log(x);
	x += 2;
}


console.log("-----\nNumbers divisible by 5 and 3 between 5 & 50\n-----");
x = 5;

while (x <= 50) {
	if (x % 3 === 0 && x % 5 === 0) {
		console.log(x);
	}
	x++;
}