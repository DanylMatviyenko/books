function every(array, test) {
	for(let i = 0; i < array.length; i++) {
		if (!test(array[i])) {
			return false;
		}
	}
	return true;
}

function everySome(array, test) {
	return !array.some(element => !test(element));
}

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));