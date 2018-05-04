let myArray = [1,2,3,24];


function printReverse(array) {
	// console.log(array.reverse());
	for (let x = array.length - 1; x >= 0; x--) {
		console.log(array[x]);
	}
}

function isUniform(array) {
	for (let x = array.length - 1; x > 0 ; x--) {
		if (array[x] !== array[x - 1]) {
			 false;
		}
	}

	return true;
}

function sumArray(array) {
	let sum = 0;

	array.forEach(function(item) {
		sum += item;
	});

	return sum;
}

function max(array) {
	array.sort(function(num1, num2) {
		return num1 > num2 ? -1 : 1;
	})

	// Another way is to loop through and compare items
	return array[0];
}

// My For forEach
function myForEach(array, myfunction) {
	for (let x = 0; x < array.length; x++) {
		console.log(myfunction(array[x]));
	}
}

// Add to Array
Array.prototype.myForEach = function(myfunction) {
	for (let x = 0; x < this.length; x++) {
		console.log(myfunction(this[x]));
	}
}


printReverse(myArray);
console.log("----------");
console.log(isUniform(myArray) + "\n----------");
console.log(sumArray(myArray) + "\n----------");
console.log(max(myArray) + "\n----------");
myForEach(myArray, function(num) {
	return num * 2;
});
console.log("----------");
myArray.myForEach(function(num) {
	return num * 3;
});

console.log("----------");


Array.prototype.multiplyByFive = function() {
  for(let x = 0; x < this.length; x++) {
  	this[x] = this[x] * 5;
  }
}

// We can then call this method on an Array

let myNumbers = [1, 3, 5, 7, 9];

myNumbers.multiplyByFive();

console.log(myNumbers);


// function expression catSays
var catSays = function() {
  
  return "meow";
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));







