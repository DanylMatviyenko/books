function boo(num) {
	console.log("foo:" + num);
	this.counter++;
}

boo.counter = 0;				

for(var i = 0; i < 10; i++) {
	if (i > 2) {
		boo.call(boo, i);		//call boo(i) and explicitly define this like reference to foo 
	}
}

console.log(boo.counter);