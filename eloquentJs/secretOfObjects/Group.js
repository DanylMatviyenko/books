class Group {
	constructor() {
		this.group = [];
	}
	add(value) {
		if(!this.has(value)) {
			this.group.push(value);
		}
	}
	delete(value) {
		this.group.splice(this.group.indexOf(value), 1);
	}
	has(value) {
		return this.group.indexOf(value) > -1;
	}
	static from(obj) {
		let newGroup = new Group();

		for(let element of obj) {
			newGroup.add(element);
		}

		return newGroup;
	}
	[Symbol.iterator]() {
		return new GroupIterator(this);
	}

}

class GroupIterator {
	constructor (group) {
		this.group = group;
		this.current = 0;
	}
	next() {
		if(this.current < this.group.group.length) {
			let value = this.group.group[this.current]; 
			this.current++;
			return {value: value, done: false};
		}else {
			return {done: true};
		} 
	}
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

