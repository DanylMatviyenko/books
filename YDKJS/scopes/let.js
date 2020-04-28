var k = true;
if (k) {
	{	// <-- explicit block
		//console.log(b);	// here is going to be Ref. error. B is not going to hoist on top of the scope
		var a = 13;
		let b = 15;			//b bacomes part of the if scope
		console.log(b);
	}
}
console.log(a);
console.log(b);				//Reference error
