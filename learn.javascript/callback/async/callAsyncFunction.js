
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
	let value;
	wait().then(function(result) {
		value = result;
	});
	return value;
}
console.log(f());