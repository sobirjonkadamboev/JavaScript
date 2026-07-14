//Function Decloration

function showHello() {
	console.log('Hello, World')
}

const age = 20 //global variable

function userGreet(name) {
	const age = 19 //local variable
	console.log(`Hello, ${name}! He is ${age} years old`)
}

showHello()
userGreet('Any Name Here')
