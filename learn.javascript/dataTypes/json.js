/**let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user);
let parsedUser = JSON.parse(jsonUser);
console.log(jsonUser);
console.log(parsedUser);**/
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;


console.log( JSON.stringify(meetup, function replacer(key, value) {
	if(key != "" && value == meetup) {
		return undefined;
	}else {
		return value;
	}
}));