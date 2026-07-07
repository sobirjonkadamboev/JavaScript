//alert('Alert Message')

// const isAccess = confirm('Are you human?')

const name = prompt('Your Name?')
const age = +prompt('Your Age?', '') //put + for number datatype //NaN - not a number
console.log(typeof age)

//Interpolation in JS

const fName = 'Sobirjon'
const lName = 'Kadamboev'
const mAge = 19

//My full name is fName, lName, and I'm age years old

console.log(
	'My name is' +
		' ' +
		fName +
		' ' +
		lName +
		',' +
		'and I am' +
		' ' +
		mAge +
		' ' +
		'years old',
)
