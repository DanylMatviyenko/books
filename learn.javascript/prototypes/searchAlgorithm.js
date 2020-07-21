let head = {
  glasses: 1
};

let table = {
	_proto_: head,
  pen: 3
};

let bed = {
	_proto_: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000,
  _proto_: bed
};

