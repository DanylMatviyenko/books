function gl(a) {     // Function 'increase()' must be nested in  'gl()' scope
	increase(a);
	b = a + increase(a);
	console.log(b);
}
function increase(x) {  // bad design! I create global function, but these function can be useful only for 'gl()'.
	return x + 1;
}
var b;
gl(2);
