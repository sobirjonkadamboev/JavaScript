//Function decloration

/* function showHi(){
	console.log('Hi, world');
};

showHi();
*/

let age = 21;
function showUser(name){
	console.log(age);
	age = 19; //local variable
	console.log(`Hello ${name}, and you are ${age} years old`);
};

showUser('User');
console.log(age);

function calculate(a, b){
	console.log(a + b);
};
calculate(1, 2);

