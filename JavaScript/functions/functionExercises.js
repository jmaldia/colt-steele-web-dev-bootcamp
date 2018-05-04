function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
}

function fact(num) {
	if (num === 0) { return 1; } 

	let product = 1;

	for (let x = num; x > 0; num--) {
		product *= x;
	}

	return product;
}

function kebabToSnake() {

}


console.log(isEven(23));
console.log(fact(3));