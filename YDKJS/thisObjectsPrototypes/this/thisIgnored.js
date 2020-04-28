function foo() {
	console.log(this.a);
}

var a = 15;

foo.call();				//'this' ignores 'call' and becomes reference to the global variable 

var emptyObject = Object.create(null); //better than null

function bar(arg1, arg2) {
	console.log("argum1:" + arg1, "argum2:" + arg2);
}

bar.apply(null, [10, 15]);  

bar(...[10, 15]);           //spread operator, same as text above


