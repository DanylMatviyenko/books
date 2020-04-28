function foo(smth) {
	console.log(this.a, smth);
	return this.a + smth;
}

var obj = {
	a: 2
};

function bind(fn, obj) {
	return function () {					//Return function which explicitly binding 'this' to the obj.
		return fn.apply(obj, arguments);
	};
}

//or var binded = foo.bind(obj);			//Default js function


var binded = bind(foo, obj);

var news = binded(3);

console.log(news);


