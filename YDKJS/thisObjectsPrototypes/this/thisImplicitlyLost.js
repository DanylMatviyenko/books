function bar() {
	console.log(this.a);
}

var object = {
	a: 2,
	bar: bar
};

function processor(fun) {
	fun();
}

var a = "global";				
processor(object.bar);			//After declaring "global" 'this' become the reference to the global variable/
