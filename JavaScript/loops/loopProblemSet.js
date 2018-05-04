console.log("------------------------\nNumbers between 10 and 19\n------------------------");

for (let i = 10; i < 20; i++){
	console.log(i);
}

console.log("------------------------\nEven numbers between 10 and 40\n------------------------");

for (let j = 10; j < 41; j += 2){
	console.log(j);
}

console.log("------------------------\nOdd Numbers between 300 and 333\n------------------------");

for (let x = 301; x < 334; x += 2){
	console.log(x);
}

console.log("------------------------\nNumbers divisible by 5 and 3 between 5 and 50\n------------------------");

for (let y = 5; y < 50; y++){
	if (y % 3 === 0 && y % 5 === 0) {
		console.log(y);
	}
}