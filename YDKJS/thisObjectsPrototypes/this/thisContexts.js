function bar(el) {
	console.log(el, this.a);
}

var obj = {
	a: 5
};

[1, 2, 3].forEach( bar, obj ); // using context without call...
