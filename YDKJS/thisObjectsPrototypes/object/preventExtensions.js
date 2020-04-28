var myObject = {
	a: 2
};

Object.preventExtensions(myObject);
//Object.seal(anyObj);  same, + configuratable: false
//Object.freeze(anyObj); seal + writable: false 
myObject.b = 100;
myObject.a = 45;
console.log(myObject.b, myObject.a); //underfined or typeError in strict. I can't create new properties.

