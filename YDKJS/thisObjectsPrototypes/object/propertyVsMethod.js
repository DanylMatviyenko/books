function bar() {
	console.log("fff");
}

var refr = bar;				//variable reference to bar 

var obj = {
	refer : refr
};

console.log(obj.refer);  // ref to bar
console.log(refr);		//ref to bar
console.log(bar);		//ref to bar

//function = method  
