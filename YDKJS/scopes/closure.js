function brr() {
	var a = 3;
	return function foo() {   //foo makes clousure of brr, so 'var a' is not the garbage for engine
		console.log(a);
	};
}
var out = brr();
out();