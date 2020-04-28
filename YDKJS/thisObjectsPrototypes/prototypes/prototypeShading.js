var anyObject = {
	a:25
};

var myObject = {};

myObject = Object.create(anyObject);

console.log(anyObject.hasOwnProperty("a")); //true

console.log(myObject.hasOwnProperty("a")); //false

myObject.a++;

console.log(myObject.a);  //26 -> Implicit define myObject.a = 26. AVOID!!!

console.log(myObject.hasOwnProperty("a"));