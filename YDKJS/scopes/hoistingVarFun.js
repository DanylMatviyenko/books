console.log(a);           //underfined, engine sees var a;
var a = 5;
foo();					  //5, compiler rewrites reference to function
foo1();					  //engine can't run code 'var foo1; foo1();' -->type error
function foo() {
	console.log(3);
}
var foo1 = function () {
	console.log(1);
};
function foo() {
	console.log(5);
}