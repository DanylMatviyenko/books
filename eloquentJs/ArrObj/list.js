const arrayToList = function (arr) {
	let list = null;

	for(let i = 0; i < arr.length; i++) {
		list = {value: arr[i], rest: list};
	}

	return list;
};

const listToArray = function (list) {
	let arr = [];

	do {
		arr.unshift(list.value);
		list = list.rest;
	} while (list.rest);
	arr.unshift(list.value);

	return arr;
};

const prepend = function(value, list) {
	let newList = {value, rest: list};
	return newList;
};

const nth = function(list, position) {
	let arr = listToArray(list);
	return arr[position];
};



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20