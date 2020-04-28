var myObject = {};

Object.defineProperty(myObject, "MY_CONST", {
	value: 55,
	writable: false, //constant
	configuratable: false,
	enumerable: true
});

console.log(myObject.MY_CONST);