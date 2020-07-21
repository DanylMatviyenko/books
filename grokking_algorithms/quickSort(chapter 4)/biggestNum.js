function biggestNum(arr) {
	let max = -Infinity;
	for(let value of arr) {
		if(max < value) {
			max = value;
		}
	}
	return max;
}