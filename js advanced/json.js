/* const person = {
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
*/

const sum = document.querySelector('#sum'),
	won = document.querySelector('#won')

sum.addEventListener('input', () => {
	const request = new XMLHttpRequest()

	request.open('GET', './current.json') //json ma'lumotni olish uchun
	request.setRequestHeader('Content-Type', 'application/json') //type'larni aniqlab ko'rsatishga
	request.send()

	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response) //object sifatida olish uchun
			won.value = (+sum.value / data.current.won).toFixed(3)
		} else {
			won.value = 'Something went wrong'
		}
	}) //hammasi successfull bo'lganda yoziladi
})
