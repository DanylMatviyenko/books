Function.prototype.defer = function(ms) {
	return function() {
		setTimeot(, ms);
	};
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);