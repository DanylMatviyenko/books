function bar() {
	//"use strict";           //if i uncomment line, it would be typeErr
	console.log(this.a);  		//this has global binding
}

var a = 15;

bar();

(function IIFE(){
	"use strict";			//doesn't metter. 
	bar();
})();
