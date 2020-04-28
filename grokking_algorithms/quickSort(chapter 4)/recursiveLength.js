function length(arr)  {
	if(arr.length === 0) {
		return 0;
	}
		return 1 + length(arr.slice(1));
}

console.log(length([1,2,3]));