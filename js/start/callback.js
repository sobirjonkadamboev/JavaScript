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
nextLog() */

function greetMe(callback) {
	console.log('Hello, user')
	callback()
}

greetMe(function () {
	console.log('Are you ready today')
})
