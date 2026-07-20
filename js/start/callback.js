//callback function is a function passed as an argument into another function.

const firstLog = () => {
	setTimeout(function () {
		console.log(1)
	})
}

const nextLog = () => {
	console.log(2)
}

firstLog()
nextLog()
