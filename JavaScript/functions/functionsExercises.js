function isEven(num) {
	return num % 2 === 0;
}

function fact(num) {
	let prod = 1;

	for (let x = num; x > 1; x--) {
		prod *= x;
	}

	return prod;
}

function kebabToSnake(string) {
	// return string.split('-').join('_');
	return string.replace(/-/g, '_');
}


console.log(isEven(23));
console.log(fact(1));
console.log(kebabToSnake("my-string-yo"));