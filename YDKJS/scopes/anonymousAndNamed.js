(function () {				//Bad design ! -->(function IIFE()....) - Good design! Function can't call itself for recursion, prevents code debugging.
	console.log("Hi");		//IIFE(Immediately Invoked Finction Expression)
})();						//Function expression, function doesn't become part of the global scope. So, GS is not becoming dirty.