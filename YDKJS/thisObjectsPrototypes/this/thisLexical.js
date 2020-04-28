function foo() {
	//or var self = this;
	setTimeout ( () => {			//creating lexical this. 
		console.log(this.a);	//self.a
}, 100);
}

var obj = {
	a: 5
};

foo.call(obj);
