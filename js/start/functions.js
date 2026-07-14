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
userGreet('Any Name Here')
console.log(age)

function calc(a, b) {
	console.log(a + b)
	// return a + b //after this, no code will run
}

const firstCalc = calc(2, 5)
console.log(firstCalc)
