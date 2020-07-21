const isEven = function(n) {
	if(n == 0) {
		return true;
	}

	else if(n == 1) {
		return false;
	}

	else if (n < 0) {return "???";}

	else {
		return isEven(n - 2);
	}
};

console.log(isEven());