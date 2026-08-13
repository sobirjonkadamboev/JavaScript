const person = {
	name: 'Sobirjon',
	age: 20,
	hobbies: {
		sport: 'Running',
		games: 'FIFA',
	},
}

const deepClone = JSON.parse(JSON.stringify(person)) //deep clone
deepClone.hobbies.sport = 'Running'
console.log(deepClone)

const objJson = JSON.stringify(person)
const jsonObj = JSON.parse(objJson)
//JSON, xml - serverga ma'lumot yuborishda ishlatiladi va ma'lumot JSON formatda bo'lishi shart
