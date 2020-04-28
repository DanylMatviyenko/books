var Foo = {
	myUp: function (up) {
		this.up = up;
		return this.up.toUpperCase();
	}
};

var Bar = Object.create(Foo);

Bar.myLabel = function (label) {
	this.label = label;
	return this.label;
};

var a = Object.create(Bar);

console.log(a.myLabel("hahahah"), a.myUp("Danyl"));