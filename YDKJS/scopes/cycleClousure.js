/*for (var i = 1; i <= 5; i++) {  // = write 5 times code below and nothing else!
	setTimeout(function() {		//  reference to the one global variable, which equal 6
		console.log(i);			// 6, 6, 6,.....
	}, i * 1000);
}*/

/*for (var k = 1; k <= 5; k++) {  
	(function () {
	var j = k;						//i-copy for evry iteration
	setTimeout(function() {		 
		console.log(j);			// 1,2,3,4,5
	}, j * 1000);})();
}*/

for (let i = 1; i <= 5; i++) { //block-scope closure for every iteration
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}


