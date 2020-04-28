class Vec {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	plus(vector) {
		return new Vec(this.x + vector.x, this.y + vector.y);
	}
	minus(vector) {
		return new Vec(this.x - vector.x, this.y - vector.y);
	}

	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

let vector1 = new Vec(5,8);

let vector2 = new Vec(6,6);

console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

console.log(new Vec(3, 4).length);