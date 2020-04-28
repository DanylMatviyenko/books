function bar() {
	console.log(this.a);		//implicit binding.
}
var object = {
	a: 15,
	//bar: bar
};

bar.call(object);					 //Reference to bar belong  "object"