let string = "";
let size = 9;

for(let i = 0; i < size; i++) {
	for (let k=0; k < size; k++) {
		if((i+k) % 2 == 0) string += " ";
		else {string += "#";}
	}
	string+= "\n";
}
