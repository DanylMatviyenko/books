// Your code here.
let journal = []; 
function addEntry(events, squirrel) {
journal.push({events, squirrel});
} 

addEntry(["работал", "трогал дерево", "ел пиццу", "бегал",
"смотрел телевизор"], false);

for(let i = 0; i < journal.length; i++) {
	console.log(journal[i]);
}