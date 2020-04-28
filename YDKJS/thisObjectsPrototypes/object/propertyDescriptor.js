var exObject = {
	a: 2
};

console.log(Object.getOwnPropertyDescriptor(exObject, "a"));
/*{ value: 2,
 writable: true, - I can rewrite value.
 enumerable: true, - I can use property in for...in loop
 configurable: false(for instance) } - I can't use .defineProperty to describe property(except for writable, only true -> false). Also 'delete' doesn't work.
 if we try to use .defineProperty -> typeError */ 