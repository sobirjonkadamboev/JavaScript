/* callback function is a function passed as an argument into another function.

const firstLog = () => {
	setTimeout(function () {
		console.log(1)
	}, 1000)
}

const nextLog = () => {
	console.log(2)
}

firstLog()
nextLog() 

function greetMe(callback) {
	console.log('Hello, user')
	callback()
}

function callback() {
	console.log('Are you ready today?')
}

greetMe(callback)

/* greetMe(function () {
	console.log('Are you ready today?')
}) */

//Object and destructuring

const person = {
	name: 'Sobirjon',
	birthDate: 2006,
	job: 'Student',
	hobbies: {
		sport: 'Running',
		games: 'UFC',
	},
}

for (let key in person) {
	console.log(`Property: ${key}; Value: ${person[key]}`)
}
