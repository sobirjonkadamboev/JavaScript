const person = {
	name: 'Sobirjon',
	age: 20,
	hobbies: {
		sport: 'Running',
		games: 'FIFA',
	},
}

const deepClone = JSON.parse(JSON.stringify(person)) //deep clone
deepClone.hobbies.sport = 'Boxing'
console.log(deepClone)
console.log(person)

const objJson = JSON.stringify(person) //json formatga o'tkazish
const jsonObj = JSON.parse(objJson) //object formatga qaytarish
//JSON, xml - serverga ma'lumot yuborishda ishlatiladi va ma'lumot JSON formatda bo'lishi shart
