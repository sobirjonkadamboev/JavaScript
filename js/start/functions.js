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
