function loop(value,condition,reload, body) {
	for(let start = value; condition(start); value = reload(value)) {
		body(value);
	}
}