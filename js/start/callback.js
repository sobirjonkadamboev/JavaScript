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
	greet: function () {
		console.log('Hi, user')
		console.log(this.job)
	},
}

console.log(person)
person.greet()

const { birthDate, job, name } = person

console.log(name)

console.log(Object.keys(person).length)
//for in -> only for objects
//for of -> only for arrays
for (let key in person) {
	if (typeof person[key] === 'object') {
		for (let i in person[key]) {
			console.log(`Property: ${i}; Value: ${person[key][i]}`)
		}
	} else {
		console.log(`Property: ${key}; Value: ${person[key]}`)
	}
}
