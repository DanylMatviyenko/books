function foo(name) {
	this.name = name;

}

foo.prototype.myName = function () {
	return this.name;
};

var a = new foo("Danyl");  //object 'a' has reference to object foo.prototype. So, 'a' has property 'name'(this), but hasn't myName, [get] find it in [prototype]


console.log(a.myName(), a.hasOwnProperty('myName'), a.hasOwnProperty('name'));   // false, true  