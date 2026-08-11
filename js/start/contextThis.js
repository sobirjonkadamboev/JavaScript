/* Context <<this>>

function logThis() {
	console.log(this)
}

logThis()

//#1. function dagi context this window objectga boradi, "use strict" modeda undefined bo'ladi
//#2. context this objectlarda objectlar methodi bilan teng bo'ladi
//#3. context this function constructor ichida yangi obyektni misollari
const person = {
	fName: 'Sobirjon',
	lName: 'Kadamboev',
	greeting: function () {
		const showThis = () => {
			//arrow functionlarda context this yuqorisidagi contextga teng bo'ladi
			console.log(this)
		}
		showThis()
		console.log(this)
	},
}

person.greeting() */

function Person(fName, lName, age) {
	;((this.fName = fName),
		(this.lName = lName),
		(this.age = age),
		(this.greeting = function () {
			console.log(this)
		}))
}

const fPerson = new Person('Sobirjon', 'Kadamboev', 20)
console.log(fPerson.greeting())

function salomlashuv() {
	console.log(this)
}

const person = {
	name: 'Sobirjon Kadamboev',
}

salomlashuv.call(person)
salomlashuv.apply(person)
