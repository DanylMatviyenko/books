function test() {
	var col = 5;
	return function f() {
		return col;
	};
	col = 10;
}

var base = test();

alert(col());

