var myObj = {
	get a() {
		return this.myA;   //myA - default property
	},
	set a(val) {
		this.myA = val * 5;
	}
};

myObj.a = 30;
console.log(myObj.a); // 150

Object.defineProperty(
	myObj, 
	"b", {
	get: function () {return this.myA * 2;}, 	//explicitly define get
	enumerable: true
}
);

console.log(myObj.b); // 300

