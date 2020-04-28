var myObj = {
	a:2,
	b:3,
	c:15
};

Object.defineProperty(
	myObj,
	Symbol.iterator,
	{
	writable: false,
	enumerable: false,
	configurable: false,
	value:
			function() {
				var obj = this;
				var index = 0;
				var key = Object.keys(myObj);
				return {
					next:
					function () {
						return {value: obj[key[index++]],
								done: (index > key.length)};
					
				}};
			}});


var it = myObj[Symbol.iterator]();
it.next(); //{value: 2, done: false}
it.next(); //{value: 3, done: false}
it.next(); //{value: 15, done: false}
it.next(); //{value: underfined, done: true}

for(var k of myObj) {
	console.log(k);
}

var randoms = {
	[Symbol.iterator]: function () {
		return {
			next: function () {
				return {value: Math.random()};
			}
		};
	}
};

var emptyArray = [];

for (var a of randoms) {
	emptyArray.push(a);
	console.log(a);
	if (emptyArray.length === 100) {break;
	}
}