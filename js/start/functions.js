//Function Decloration

function showHello() {
	console.log('Hello, World')
}

let age = 20 //global variable
function userGreet(name) {
	age = 19 //local variable
	console.log(`Hello, ${name}! He is ${age} years old`)
}

showHello()
userGreet('Sobirjon')
console.log(age)

function calc(a, b) {
	console.log(a + b)
	// return a + b //after this, no code will run
}
const firstCalc = calc(2, 5)
console.log(firstCalc)

//Function Expression

const world = function () {
	console.log('Hello, Expression')
}
world()

//Arrow Functions

const callculate = (a, b) => {
	console.log(a + b)
}

callculate(1, 33)

//Rest Parameter

function sum(...args) {
	let sume = 0
	for (let arg of args) sum += arg
	return sum
}

let x = sum(4, 5, 6, 1)
