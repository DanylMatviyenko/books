const range = function (start, end, step) {
	let arr = [];
	for(let i = 0; start !== end; i++) {
		arr[i] = start;
		start = start + step || ++start; 
	}
	arr.push(end);
	return arr;
};

const sum = function (arr) {
	let resultOfSum = 0;
	for(let i = 0; i < arr.length; i++) {
		resultOfSum += arr[i];
	}
	return resultOfSum;
};

/**function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}**/