function bez() {
	// call-stack: bez, call-site: global scope
	console.log("bez");
	baz();
}
function baz() {
	// call-stack: bez -> baz, call-site: bez
	console.log("baz");
	biz();
}
function biz() {
	// call-stack: bez -> baz -> biz call-site: baz
	console.log("biz");
}
bez();