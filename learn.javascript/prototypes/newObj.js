function F() {
	this.name = 'Vasya';
}
let obj = new F();
let obj2 = new obj.constructor();
