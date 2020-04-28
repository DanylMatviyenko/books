var myObj = {};
Object.defineProperty(
myObj,
 "a", 
 {enumerable: true, value: 5});

Object.defineProperty(
	myObj,
	"b",
	{enumerable: false, value: 10});

for(var k in myObj) {
	console.log(k, myObj[k]);  // a, 5
}

myObj.propertyIsEnumerable("b"); // false

Object.keys(myObj); // ["a"], returns array of enumerable properties

Object.getOwnPropertyNames(myObj); // return all properties