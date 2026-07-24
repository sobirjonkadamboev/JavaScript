let a = 19,
	b = a

b += 10
console.log(a)
console.log(b)

//Object clone: deep and shallow
//Deep clone - fully copy everything
const obJect = {
	name: 'Sobirjon',
	age: 19,
	hobbies: {
		sport: 'Running',
		games: 'FIFA27',
	},
}

//1.Iteration

const copyObj = obj => {
	const clone = {}
	let key
	for (let key in obj) {
		clone[key] = obJect[key]
	}

	return clone
}

const secObj = copyObj(obJect)
