function Foo(upper) {
	this.upper = upper;
}

Foo.prototype.myUp = function() {
	return this.upper.toUpperCase();
};

function  Bar (up, label) {
	this.label = label;
	Foo.call(this, up);	
}
Bar.prototype = Object.create(Foo.prototype); // now Bar.prototype is empty object with ref to Foo.prototype
// Bar.prototype = Foo.prototype /bad design // Bar.prototype becomes ref to Foo.prototype. If i try to change Bar.prototype, it will change common obj.
// Bar.prototype = new Foo(); /~~good try, bad design. If Foo change state, or add properties into 'THIS', it will have weird behavior.

// Object.setPropertyOf(Bar.prototype, Foo.prototype); //good ES6 design. It doesn't throw to trash properties of Bar.properties
 
Bar.prototype.myLable = function () {
	return this.label;
};


var a = new Bar("Danyl", "hahaha");

console.log(a.myLable(), a.myUp());