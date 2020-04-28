function foo() {
	console.log(a);
}
function boo() {
	var a = 3;
	foo();
}
var a = 2;
boo();