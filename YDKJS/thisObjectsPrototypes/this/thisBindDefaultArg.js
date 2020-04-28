function foo(arg1, arg2) {
	this.val = arg1 + arg2;
}

var bar = foo.bind(null, "sugar");  //sugar - first foo arg1

console.log(Object.keys(bar));

var argu = new bar(" daddy");


console.log(argu.val);
