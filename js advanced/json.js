const person = {
	name: 'Sobirjon',
	age: 20,
	hobbies: {
		sport: 'Running',
		games: 'FIFA',
	},
}

const deepClone = JSON.stringify(person)

const objJson = JSON.stringify(person)
const jsonObj = JSON.parse(objJson)
//JSON, xml - serverga ma'lumot yuborishda ishlatiladi va ma'lumot JSON formatda bo'lishi shart
