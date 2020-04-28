const  reverseArrayInPlace = function(arr) {
	let old = Object.assign({}, arr);
	for(let i = 0; i < arr.length; i++) {
		arr[i] = old[arr.length - (i + 1)];
	}
	return arr;
};


/**function reverseArrayInPlacee(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}**/
