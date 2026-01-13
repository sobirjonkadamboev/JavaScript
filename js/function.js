//Function decloration

/* function showHi(){
	console.log('Hi, world');
};

showHi();
*/

/* let age = 21; //global variable
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

function calculate(c, d){
	return c * d; // for more than one variables
};

const calc = calculate(3, 4);
console.log(calc);
*/

//Function expression
/* const hiWorld = function(text){
	console.log(text);
};

hiWorld('Hi, Sobirjon');
*/

//Arrow Function
const arrowFunction = (text) => {
	console.log(text);
};

arrowFunction('Sample Text.');

const calculateArrow = (a, b) => {
	console.log(a - b);
};

calculateArrow(4, 2);

const calcull = (c, d) => c * d;
console.log(calcull(2, 4));
