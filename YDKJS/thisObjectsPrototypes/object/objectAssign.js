var object = {
	a: "haalo",
	b: foo,
	c: 5
};

function foo( ) {}

var newObject = Object.assign({}, object);

if (newObject.a === object.a &&
	newObject.b === object.b &&
	newObject.c === object.c   ) {
	console.log("equal!");
}
