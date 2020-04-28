const countChar = function (str, char) {
	let chars = 0;
	for(let i = 0; i < str.length; i++) {
		if (str[i] === char) { 
			chars++;
		} 
	}
	return chars;
};
